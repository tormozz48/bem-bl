/*
 * Блок для определения способа взаимодействия пользователя со страницей.
 * Различает взамодействие с помощью клавиатуры или мышки-пальца.
 */
BEM.DOM.decl('i-ua', {}, {

    live: function() {

        this
            .liveBindTo('mousedown', this._onPointer)
            .liveBindTo('keydown', this._onKeyboard);

    },

    /**
     * @private
     */
    _onPointer: function() {
        /* this – instance */
        this.setMod('interaction', 'pointer');

        this.__self
                   .liveUnbindFrom('mousedown', this.__self._onPointer)
                   .liveBindTo('keydown', this.__self._onKeyboard);
    },

    /**
     * @private
     */
    _onKeyboard: function() {
        /* this – instance */
        this.setMod('interaction', 'keyboard');

        this.__self
                   .liveUnbindFrom('keydown', this.__self._onKeyboard)
                   .liveBindTo('mousedown', this.__self._onPointer);
    }

});
