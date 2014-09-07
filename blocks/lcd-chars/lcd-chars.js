modules.define('lcd-chars', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('lcd-chars', {
        _onMouseDown: function() {
            this._draw = true;
        },
        _onMouseUp: function() {
            this._draw = false;
        },
        _onMouseMove: function(e) {
            var elem,
                block;
            if (this._draw) {
                elem = $(e.target);
                block = elem.parents('.lcd-char');
                if (block.length) {
                    e.shiftKey ? block.bem('lcd-char').unselect(elem) : block.bem('lcd-char').select(elem);
                }
            }
        }
    }, {
        live: function() {
            this.liveBindTo('mousedown', function(e) {
                this._onMouseDown(e);
            });
            this.liveBindTo('mouseup', function(e) {
                this._onMouseUp(e);
            });
            this.liveBindTo('mousemove', function(e) {
                this._onMouseMove(e);
            });
        }
    });

    provide(BEMDOM);

});
