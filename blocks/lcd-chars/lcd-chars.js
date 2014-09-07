modules.define('lcd-chars', ['i-bem__dom', 'functions__throttle'], function(provide, BEMDOM, throttle) {

    BEMDOM.decl('lcd-chars', {
        onSetMod: {
            js: {
                inited: function() {
                    this._throttledOnMouseMove = throttle(this._onMouseMove, 25, this);
                }
            }
        },
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
                e.preventDefault();
            });
            this.liveBindTo('mouseup', function(e) {
                this._onMouseUp(e);
                e.preventDefault();
            });
            this.liveBindTo('mousemove', function(e) {
                this._throttledOnMouseMove(e);
                e.preventDefault();
            });
        }
    });

    provide(BEMDOM);

});
