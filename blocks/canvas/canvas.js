modules.define('canvas', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('canvas', {
        onSetMod: {
            js: {
                inited: function() {
                    var context = this.elem('image').get(0).getContext('2d');
                    var imageObj = new Image();
                    var _this = this;

                    imageObj.onload = function() {
                        context.drawImage(imageObj, 0, 0);
                        var image = context.getImageData(0, 0, this.width, this.height);
                        console.log('width: ', image.width, ', height: ', image.height, ', length: ', image.data.length);
                        var matrix = [];
                        var i = 0;
                        var pixels = 4;
                        for (var x = 0; x < image.width; x++) {
                            matrix.push([]);
                            for (var y = 0; y < image.height; y++) {
                                matrix[x].push([]);
                                for (var p = 0, c; p < pixels; p++) {
                                    matrix[x][y].push(image.data[i]);
                                    i++;
                                }
                            }
                        }
                        var pixel,
                            luma;

                        var black = [],
                            white = [];

                        var text = [];
                        for (var y = 0; y < image.height; y++) {
                            text.push([]);
                            for (var x = 0; x < image.width; x++) {
                                pixel = matrix[x][y];
                                text[y].push([]);
                                luma = pixel[0] * 0.2126 + pixel[1] * 0.7152 + pixel[2] * 0.0722;
                                console.log('x: ', x, ', y: ', y, ', luma: ', luma);
                                if (luma < 222) {
                                    black.push({
                                        x: x,
                                        y: y
                                    });
                                    text[y][x].push(1);
                                } else {
                                    white.push({
                                        x: x,
                                        y: y
                                    });
                                    text[y][x].push(0);
                                }
                            }
                        }
                        var str = text.map(function(y) {
                            return y.join('');
                        }).join('\n');
                        _this.elem('debug').text(str);
                    };
                    imageObj.src = '../../blocks/canvas/canvas.png';
                }
            }
        }
    });

    provide(BEMDOM);

});
