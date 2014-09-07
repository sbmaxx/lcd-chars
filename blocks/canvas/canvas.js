modules.define('canvas', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('canvas', {
        onSetMod: {
            js: {
                inited: function() {
                    var context = this.domElem.get(0).getContext('2d');
                    var imageObj = new Image();

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
                                for (var p = 0; p < pixels; p++) {
                                    matrix[x][y].push(image.data[i]);
                                    i++;
                                }
                            }
                        }
                        console.log(matrix);
                    };
                    imageObj.src = '../../blocks/canvas/canvas.png';
                }
            }
        }
    });

    provide(BEMDOM);

});
