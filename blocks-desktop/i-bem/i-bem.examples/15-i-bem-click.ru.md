`BEM-js` позволяет инициализировать компонент только тогда, когда пользователь начал с ним работать.

В примерре клик на квадрат включает/выключает модификатор `color_green` у блока `b-square`.

Для того, чтобы работал `BEM-js`, у блока должен быть модификатор `is-bem:"yes"` и проставлен атрибут `onclick`. Это выполняется автоматически при помощи шаблона по-моде `js: true`.

Java-script инициализация блока происходит при помощи `live`-события, подробнее о работе которого можно прочесть в документации на блок [i-bem](/blocks/i-bem/i-bem.md).
