define(function (require) {
  var _ = require('lodash');

  function ConfigTemplate(templates) {
    var template = this;
    template.current = null;
    template.toggle = _.partial(update, null);
    template.open = _.partial(update, true);
    template.close = _.partial(update, false);

    function update(newState, name) {
      var toUpdate = templates[name];
      var curState = template.current === toUpdate;
      if (newState == null) newState = !curState;

      if (newState) {
        template.current = toUpdate;
      } else {
        template.current = null;
      }

      return newState;
    }

    template.toString = function () {
      return template.current;
    };
  }

  return ConfigTemplate;

});