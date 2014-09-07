modules.define('lcd-char', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                }
            }
        }
    });

    provide(BEMDOM);

});
