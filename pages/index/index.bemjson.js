module.exports = {
    block: 'page',
    title: 'lcd chars',
    head: [
        { elem: 'css', url: '_index.css' },
        {
            elem: 'js',
            url: '//yastatic.net/jquery/2.1.1/jquery.min.js'
        },
        {
            elem: 'js',
            url: '_index.js'
        }
    ],
    content: [
        [
            {
                block: 'char'
            },
            {
                block: 'char'
            }
        ],
        {
            block: 'debug'
        }
    ]
}
