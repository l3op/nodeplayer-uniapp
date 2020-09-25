var nmRTC = (function () {
    'use strict';

    class Emitter {
        on(name, fn, ctx) {
            const e = this.e || (this.e = {});
            (e[name] || (e[name] = [])).push({ fn, ctx });
            return this;
        }

        once(name, fn, ctx) {
            const self = this;
            function listener(...args) {
                self.off(name, listener);
                fn.apply(ctx, args);
            }
            listener._ = fn;
            return this.on(name, listener, ctx);
        }

        emit(name, ...data) {
            const evtArr = ((this.e || (this.e = {}))[name] || []).slice();
            for (let i = 0; i < evtArr.length; i += 1) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
            }
            return this;
        }

        off(name, callback) {
            const e = this.e || (this.e = {});
            const evts = e[name];
            const liveEvents = [];
            if (evts && callback) {
                for (let i = 0, len = evts.length; i < len; i += 1) {
                    if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                }
            }
            if (liveEvents.length) {
                e[name] = liveEvents;
            } else {
                delete e[name];
            }
            return this;
        }
    }

    class Player extends Emitter {

    }

    class Publisher extends Emitter {
        constructor(args) {
            super();
            this.id = args.id;
            this.stun = args.stun;
            this.stunMaxTime = args.stunMaxTime || 2000;
            this.video = args.video;
            this.audio = args.audio;
            this.videoElement = document.getElementById(this.id);
            this.pc = null;
            this.ws = null;
            navigator.mediaDevices
                .getUserMedia(args)
                .then(this.gotStream.bind(this))
                .catch(this.handleError.bind(this));
        }

        gotStream(stream) {
            this.videoElement.srcObject = stream;
            this.stream = stream;
        }

        handleError(error) {
            this.emit("error", error);
        }


        createPC() {
            return new Promise((resolve, reject) => {
                if (this.pc != null) {
                    reject(false);
                } else {
                    let pc = new RTCPeerConnection({
                        iceServers: this.stun
                    });
                    let timer = setTimeout(() => {
                        resolve(true);
                    }, this.stunMaxTime);
                    this.stream.getTracks()
                        .forEach((track) => {
                            pc.addTrack(track, this.stream)
                        });
                    pc.createOffer()
                        .then((description) => {
                            console.log(description.sdp);
                            pc.setLocalDescription(description);
                        })
                        .catch(this.handleError.bind(this));
                    pc.oniceconnectionstatechange = (event) => {
                        console.log("oniceconnectionstatechange:", this.pc.iceConnectionState);
                    };
                    pc.onicecandidate = (event) => {
                        console.log(event.candidate);
                        if (event.candidate === null) {
                            clearTimeout(timer);
                            resolve(true);
                        }
                    };
                    this.pc = pc;
                }
            });
        }

        createWS(url) {
            return new Promise((resolve, reject) => {
                if (this.ws != null) {
                    reject(false);
                } else {
                    let ws = new WebSocket(url);
                    ws.onopen = () => {
                        console.log("on ws open");
                        ws.send(btoa(JSON.stringify({ method: "publish", audio: this.audio, video: this.video, description: this.pc.localDescription })));
                    };
                    ws.onmessage = (e) => {
                        let command = JSON.parse(atob(e.data))
                        console.log("onmessage e=", command);
                        if (command.method === "onpublish") {
                            this.pc.setRemoteDescription(new RTCSessionDescription(command.description));
                            resolve(true);
                        } else if (command.method === "onerror") {
                            console.error(command.error);
                            this.stop();
                        }
                    };
                    ws.onclose = () => {
                        console.log("on ws close");
                    };
                    this.ws = ws;
                }
            });
        }


        async start(url) {
            let ok = await this.createPC();
            ok = await this.createWS(url);
            if (ok) {
                this.emit("start");
            }
        }

        stop() {
            if (this.ws) {
                this.ws.close();
                this.ws = null;
            }
            if (this.pc) {
                this.pc.close();
                this.pc = null;
            }
            this.emit("stop");
        }
    }


    return { Player, Publisher };

}());

export default nmRTC;