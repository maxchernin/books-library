/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (app) {
	require('./bookDetails.title.filter')(app);
	require('./bookDetails.component')(app);
};