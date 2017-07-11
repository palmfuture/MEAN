module.exports = function(app) {
    var index = require('../controller/index.controller');
    app.get('/', index.render);
};