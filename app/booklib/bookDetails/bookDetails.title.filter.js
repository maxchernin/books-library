/**
 * Created by maxim.chernin on 16/3/17.
 */
module.exports = function (app) {
	function title() {
		return function (title) {
			if(title){
				var parsedTitle = title.replace(/[^a-zA-Z ]/g, "")
					.split(' ')
					.map(function(i) {
						return i[0].toUpperCase() + i.substr(1).toLowerCase();
					})
					.join(' ');
				return parsedTitle;
			} else {
				return title;
			}

		}
	}

	app.filter('title', title);
};