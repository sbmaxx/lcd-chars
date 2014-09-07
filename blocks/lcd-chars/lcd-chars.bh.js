bh.match('lcd-chars', function(ctx, json) {

    ctx.js(true);

    var rows = json.rows,
        cols = json.cols;

    var content = [],
        chars = [];

    for (var i = 0; i < cols; i++) {
        chars.push({
            block: 'lcd-char'
        });
    }

    for (var i = 0; i < rows; i++) {
        content.push({
            elem: 'row',
            content: chars
        });
    }

    ctx.content(content, true);

});
