exports.index = function(req, res) {
	res.send("Welcome to Deepak's website!");
}

exports.watch = function(req, res) {

	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html){
		res.send(html);
	})
}

exports.siteHome = function(req, res) {
	res.render('site.home.html', function(err, html){
		res.send(html);
	})
}