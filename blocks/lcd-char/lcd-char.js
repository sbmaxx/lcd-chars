modules.define('lcd-char', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('lcd-char', {
        _onClick: function(e) {
            this.select(e.target);
        },
        select: function(domElem) {
            domElem = $(domElem);
            this.toggleMod(domElem, 'selected', 'yes', '', !this.hasMod(domElem, 'selected', 'yes'));
        }
    }, {
        live: function() {
            this.liveBindTo('cell', 'click', function(e) {
                this._onClick(e);
            });
        }
    });

    provide(BEMDOM);

});
