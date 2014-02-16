module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watch);

	app.get('/site.home', handlers.siteHome);

}