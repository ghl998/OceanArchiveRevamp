"use strict";
/*
 * Code from AcrossTheCloud github: https://github.com/AcrossTheCloud/TBA21-client/blob/master/src/components/search/Bubble.tsx
 * Modified to be used in this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
var React = require('react');
const $ = require("jquery");
require("../styles/bubble.css");
class Point {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    toString() { return `${this.x}, ${this.y}`; }
}
// class Color {
//   static random() {
//     // tslint:disable-next-line:no-bitwise
//     return '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16);
//   }
// }
class Easing {
    static easeOutCubic(t) {
        return 4 * t * t * t;
    }
    static easeInOutCubic(t) {
        if (t < .5) {
            return 4 * t * t * t;
        }
        else {
            return ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1;
        }
    }
}
class Bubble extends React.Component {
    constructor(props) {
        super(props);
        this.moveBubble = (eX, eY) => {
            const offset = $('#bubble').offset(), x = eX - offset.left, y = eY - offset.top;
            return this.moveOrigin(this.origin, new Point(x, y), new Date().getTime(), 300);
        };
        this.toggleLabelHighlight = (labelClass, toggle) => {
            const $label = $('#bubbleWrapper .' + labelClass);
            if (toggle) {
                $label.addClass('active');
            }
            else {
                $label.removeClass('active');
            }
        };
        this.getFocus = (eX, eY) => {
            const offset = $('#bubble').offset(), x = eX - offset.left, y = eY - offset.top;
            const [w1, w2, w3] = this.calc_barycentric_weights(x, y);
            let focusArts, focusAction, focusScitech;
            focusArts = (Math.round(w2 * 1e2) / 1e2) >= 0.3;
            focusAction = (Math.round(w3 * 1e2) / 1e2) >= 0.23;
            focusScitech = (Math.round(w1 * 1e2) / 1e2) >= 0.23;
            this.toggleLabelHighlight('art', focusArts);
            this.toggleLabelHighlight('action', focusAction);
            this.toggleLabelHighlight('scitech', focusScitech);
            return {
                focus_arts: focusArts,
                focus_action: focusAction,
                focus_scitech: focusScitech,
            };
        };
        this.sqr = num => num * num;
        this.init = () => {
            let asc, end, i, step;
            let x, y;
            const canvas = document.getElementById('bubble');
            if (!!canvas) {
                this.canvas = canvas;
                this.resize();
                this.pointRadius = Math.min(canvas.width, canvas.height) / 15;
                this.ctx = canvas.getContext('2d');
                this.bounds = new Point(canvas.width, canvas.height);
                this.origin = new Point(this.bounds.x / 2, this.bounds.y / 2);
                this.points = [];
                for (i = 0, y = i, end = canvas.height, step = this.pointRadius * 2, asc = step > 0; asc ? i <= end : i >= end; i += step, y = i) {
                    let asc1 = false, end1 = 0, j = 0, step1 = 0;
                    for (j = 0, x = j, end1 = canvas.width, step1 = this.pointRadius * 2, asc1 = step1 > 0; asc1 ? j <= end1 : j >= end1; j += step1, x = j) {
                        this.points.push(new Point(x + (((y / (this.pointRadius * 2)) % 2) * this.pointRadius), y, this.bubbleColour(x, y)));
                    }
                }
                // Set to the middle
                this.moveOrigin(this.origin, new Point(this.bounds.x / 2, this.bounds.y / 2), new Date().getTime(), 300);
            }
        };
        this.resize = () => {
            const wrapper = document.getElementById('bubbleWrapper');
            if (!!wrapper) {
                this.canvas.width = wrapper.getBoundingClientRect().width;
                this.canvas.height = wrapper.getBoundingClientRect().height;
            }
        };
        this._isMounted = false;
        this.points = [];
        this.ctx = null;
        const $body = $('body');
        this.state = {
            canMove: true
        };
        // On Move
        $body.on('mousemove touchmove', '#bubble', e => {
            if (e && this.state.canMove && this._isMounted) {
                const pageX = !!e.touches ? e.touches[0].pageX : (!!e.pageX ? e.pageX : 0);
                const pageY = !!e.touches ? e.touches[0].pageY : (!!e.pageY ? e.pageY : 0);
                this.touchX = pageX;
                this.touchY = pageY;
                this.moveBubble(pageX, pageY);
                this.getFocus(pageX, pageY);
            }
            else {
                return;
            }
        });
        // On Click
        $body.on('click', '#bubble', e => {
            if (e && this._isMounted) {
                const eX = !!e.pageX ? e.pageX : 0;
                const eY = !!e.pageY ? e.pageY : 0;
                if (typeof this.props.callback === 'function') {
                    if (this.state.canMove) {
                        this.props.callback(this.getFocus(eX, eY));
                    }
                    else {
                        this.getFocus(eX, eY);
                        this.props.callback({
                            focus_art: false,
                            focus_action: false,
                            focus_scitech: false
                        });
                    }
                }
                this.setState({ canMove: !this.state.canMove }, () => this.moveBubble(eX, eY));
            }
            else {
                return;
            }
        });
        // On Click or On touch
        $body.on('touchend', '#bubble', e => {
            if (this._isMounted) {
                this.getFocus(this.touchX, this.touchY);
            }
        });
    }
    componentDidMount() {
        this._isMounted = true;
        this.init();
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                $('#bubble').remove();
                $('#bubbleWrapper').append('<canvas id="bubble" />').ready(() => this.init());
            }, 500);
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', () => { return; });
    }
    int_color(c1, c2, c3, w1, w2, w3) {
        // tslint:disable-next-line:no-bitwise
        let r = ((c1 >> 16) & 0xFF) * w1 + ((c2 >> 16) & 0xFF) * w2 + ((c3 >> 16) & 0xFF) * w3;
        // tslint:disable-next-line:no-bitwise
        let g = ((c1 >> 8) & 0xFF) * w1 + ((c2 >> 8) & 0xFF) * w2 + ((c3 >> 8) & 0xFF) * w3;
        // tslint:disable-next-line:no-bitwise
        let b = (c1 & 0xFF) * w1 + (c2 & 0xFF) * w2 + (c3 & 0xFF) * w3;
        r = r > 255 ? 255 : r;
        g = g > 255 ? 255 : g;
        b = b > 255 ? 255 : b;
        // tslint:disable-next-line:no-bitwise
        const c = Math.floor((b + (g << 8) + (r << 16)));
        return '#' + ('000000' + (c.toString(16))).slice(-6).toUpperCase();
    }
    // https://codeplea.com/triangular-interpolation
    calc_barycentric_weights(x, y) {
        // triangle vertices
        const v1x = 0, v1y = this.canvas.height;
        const v2x = Math.floor(this.canvas.width / 2), v2y = 0;
        const v3x = this.canvas.width;
        const v3y = this.canvas.height;
        const wV1 = (x * (v3y - v2y) + v2x * (y - v3y) + v3x * (v2y - y)) / (v1x * (v3y - v2y) + v2x * (v1y - v3y) + v3x * (v2y - v1y));
        const wV2 = -(x * (v3y - v1y) + v1x * (y - v3y) + v3x * (v1y - y)) / (v1x * (v3y - v2y) + v2x * (v1y - v3y) + v3x * (v2y - v1y));
        const wV3 = 1.0 - wV1 - wV2;
        return [wV1, wV2, wV3];
    }
    bubbleColour(x, y) {
        let c2 = 0x9039FE; // purple
        let c1 = 0x0076FF; // blue
        let c3 = 0x50E2C1; // mint
        let [w1, w2, w3] = this.calc_barycentric_weights(x, y);
        w1 = w1 < 0 ? 0 : w1;
        w2 = w2 < 0 ? 0 : w2;
        w3 = w3 < 0 ? 0 : w3;
        w1 /= (w1 + w2 + w3);
        w2 /= (w1 + w2 + w3);
        w3 /= (w1 + w2 + w3);
        return this.int_color(c1, c2, c3, w1, w2, w3);
    }
    scaledRadius(x, y, radius) {
        const denom = Math.min(this.bounds.x, this.bounds.y);
        return radius * ((-1.5 * (this.sqr((1.5 * (x - this.origin.x)) / denom) + this.sqr((1.5 * (y - this.origin.y)) / denom))) + 0.7);
    }
    moveOrigin(startPoint, endPoint, startTime, duration) {
        let t = new Date().getTime() - startTime;
        if (t >= duration) {
            return;
        }
        t /= duration;
        t = Easing.easeInOutCubic(t);
        this.origin.x = startPoint.x + (t * (endPoint.x - startPoint.x));
        this.origin.y = startPoint.y + (t * (endPoint.y - startPoint.y));
        return requestAnimationFrame(() => {
            this.moveOrigin(startPoint, endPoint, startTime, duration);
            return this.draw();
        });
    }
    draw() {
        if (!this.ctx) {
            return;
        }
        this.ctx.clearRect(0, 0, this.bounds.x, this.bounds.y);
        const result = [];
        for (let point of Array.from(this.points)) {
            this.ctx.fillStyle = point.color ? point.color : '#fff';
            this.ctx.beginPath();
            this.ctx.moveTo(point.x, point.y);
            let r = this.scaledRadius(point.x, point.y, this.pointRadius);
            if (r < 0) {
                r = 0;
            }
            this.ctx.arc(point.x, point.y, r, 0, 2 * Math.PI);
            result.push(this.ctx.fill());
        }
        return result;
    }
    render() {
        return (React.createElement("div", { id: "bubbleWrapper", className: this.state.canMove ? 'active' : '' },
            React.createElement("div", { className: "art active" },
                React.createElement("div", { className: "focus" }, "Art")),
            React.createElement("div", { className: "action active" },
                React.createElement("div", { className: "focus" }, "Action")),
            React.createElement("div", { className: "scitech active" },
                React.createElement("div", { className: "focus" }, "Sci-Tech")),
            React.createElement("canvas", { id: "bubble" })));
    }
}
exports.Bubble = Bubble;
//# sourceMappingURL=bubble.js.map