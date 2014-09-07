bh.match('lcd-char', function(ctx, json) {

    ctx.js(true);

    var rows = 8,
        cols = 5;

    var content = []
    var cells = [];

    for (var i = 0; i < cols; i++) {
        cells.push({
            elem: 'cell'
        });
    }

    for (var i = 0; i < rows; i++) {
        content.push({
            elem: 'row',
            content: cells
        });
    }

    ctx.tag('table');
    ctx.content(content, true);

});

bh.match('lcd-char__cell', function(ctx) {
    ctx.tag('td');
});

bh.match('lcd-char__row', function(ctx) {
    ctx.tag('tr');
});
