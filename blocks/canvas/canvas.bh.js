bh.match('canvas', function(ctx) {
    ctx.js(true);
    ctx.content([
        {
            elem: 'image',
            tag: 'canvas'
        },
        {
            elem: 'debug',
            tag: 'textarea'
        }
    ])
});
