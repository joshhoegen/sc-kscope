/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var drawKaleidoscope = require('./modules/kaleidoscope');

var Kscope = React.createBackboneClass({

    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
        //console.log(React.render(<this.canvasString id="canvasCheck" />, document.getElementById('container'), this.prepPage()));
        //React.render(<this.canvasString />, document.getElementById('sckscope'));
        this.prepPage();
    },

    kScope: [], canvasActive: 8,
    preVideo: React.createClass({
        render: function () {
            return (
                <video width="0" height="0" autoplay></video>
            );
        }
    }),
    preImage: React.createClass({
        render: function () {
            return (
                <img class="vid-img" src="/image/kaleidoscope.jpg" height="500" width="500"/>
            )
        }
    }),
    preCanvas: React.createClass({
        render: function () {
            return (
                <canvas class="vid-canvas" height="500" width="500"></canvas>
            );
        }
    }),
    canvasString: React.createClass({
        render: function () {
            var specs = this.props;
            var size = specs.scopeSize;
            var src = specs.src;
            return (
                <canvas id="canvasCheck"
                        class="kaleidoscope"
                        height={size}
                        width={size}></canvas>
            );
        }
    }),
    imageString: React.createClass({
        render: function () {
            //style="position: absolute; left: -9999px; margin: 0px; padding: 0px"
            var specs = this.props;
            var size = specs.scopeSize;
            var src = specs.src;
            return (
                <img class="body-kscope img"
                     height={size}
                     width={size}
                     src={src}
                     alt="kaleidoscope" />
            )
        }
    }),
    prepPage: function (src) {
        src = src || '';
        var canvas,
            canvasString, image;
        //canvasAll = React.createElement("image", {}, canvasAll); //canvasAll.add(image);
        //canvasAll = <canvas>{{canvasString}}</canvas>;
        for (i = 0; i < this.canvasActive; i++) {
             //console.log('test');
             canvasString = document.getElementById('canvasCheck');
             //canvasAll.add(canvasString);
             //console.log(canvasString);
             this.kScope[i] = {
                 img: image,
                 height: 500,
                 width: 500,
                 canvas: canvasString,
                 ctx: canvasString.getContext('2d'),
                 imgLoaded: true
             }
        }

        React.render(<this.imageString scopeSize="500" src="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11363716_134653433554276_1743669472_n.jpg" />, document.getElementById('image-container'))

       /* if (container.children().length) {
        container.children().replaceWith(canvasAll);
        } else {
        container.html(canvasAll);
        }*/

        /*if (audioActive) {
         addNewImages(src, scopeSize, canvasActive);
         }
         if (staticImg) {
         images.attr('src', src);
         setTimeout(function () {
         move(189, 189);
         }, 3000);

         }
         canvases = $('#sckscope canvas');
         images = $('#sckscope img');*/
    },
    render: function () {

        return (
            <div id="sckscope">
                <div id="image-container" />
                <this.canvasString scopeSize="500" src="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11363716_134653433554276_1743669472_n.jpg" />
            </div>
        );
    }
});

module.exports = Kscope;

/*prepVideo: function () {
 window.URL = window.URL || window.webkitURL;
 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
 navigator.mozGetUserMedia || navigator.msGetUserMedia;
 limit = 420;
 var preImage = this.preImage(),
 preCanvas = this.preCanvas();
 ctx = preCanvas[0].getContext('2d')
 if (navigator.getUserMedia) {
 navigator.getUserMedia({
 video: true,
 audio: true
 }, function (mediaStream) {
 var video = preVideo(); //document.querySelector('video');

 video.src = window.URL.createObjectURL(mediaStream);
 audioActive = video.src;
 audioCache[audioActive] = {
 image: preImage.attr('src')
 }
 //container.show();
 if (isFirefox) {
 snapshotFf(video, preCanvas[0], ctx, mediaStream);
 } else {
 snapshot(video, preCanvas[0], ctx, mediaStream);
 //$('input[name=fullscreen]').show();
 }

 vac[audioActive] = new VisualAudioContext(context, audioActive, mediaStream);
 visualizeAudio(audioActive);
 // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
 // See crbug.com/110938.
 video.onloadedmetadata = function (e) {
 console.log('videLoaded');
 };
 }, function (error) {
 console.log('Failed' + error);
 });
 } else {
 console.log('failed getUserMedia(). :( ');
 //video.src = 'somevideo.webm'; // fallback.
 }

 },
 snapshot: function (video, preCanvas, ctx, stream) {
 var img = preCanvas.toDataURL('image/webp');
 ctx.drawImage(video, 0, 0, scopeSize, scopeSize);
 addNewImages(img, scopeSize, canvasActive);
 setTimeout(function () {
 snapshot(video, preCanvas, ctx, stream);
 }, 10);

 },
 move: function (x, y) {
 $.each(kScope, function (i) {
 drawKaleidoscope(this.ctx, images[0], x, y, scopeSize);
 });
 },*/