/**
 * Created by maxim.chernin on 14/3/17.
 */
module.exports = function (core) {
 'use strict';
	dataService.$inject = ['$q', '$http'];

	function dataService($q, $http) {
		var self = this;
		angular.extend(self, {
			getBooks: getBooks
		});
		activate();

		function activate() {
			self.HTTP_METHODS = {
				GET: 'GET',
				POST: 'POST',
				PUT: 'PUT',
				DELETE: 'DELETE',
			};
			console.log('welcome');
		}

		function getBooks() {
			console.log('s');
			var dfd = $q.defer();
			var request = {
				url: 'app/lib/books.json',
				mtehod: 'GET'
			};
			setTimeout(function () {
				var result = [
					{
						"published": "Friday, May 1, 2015",
						"about": "Id sunt elit aute et ad nostrud esse. Dolor minim minim deserunt ea esse qui proident proident nulla cupidatat irure. Sit eu fugiat aliquip aute aliqua in sit sint amet. Elit sit non voluptate veniam. Anim eu culpa Lorem reprehenderit mollit eu sit minim excepteur aute enim excepteur.",
						"title": "commodo",
						"author": {
							"last": "Abbott",
							"first": "Fry"
						},
						"picture": "http://loremflickr.com/320/240?random=0",
						"index": 0,
						"id": "58c97a0bcbf9eab8bf1d9f6a"
					},
					{
						"published": "Monday, July 6, 2015",
						"about": "Sunt veniam commodo deserunt eiusmod laboris. Id do est do esse exercitation. Non cupidatat pariatur ut est consectetur voluptate magna eu Lorem ea dolor anim culpa sint. Nostrud id ipsum aute proident est id occaecat duis sunt enim et.",
						"title": "Lorem",
						"author": {
							"last": "Oliver",
							"first": "Joy"
						},
						"picture": "http://loremflickr.com/320/240?random=1",
						"index": 1,
						"id": "58c97a0b4b16a1a1b410bd1b"
					},
					{
						"published": "Wednesday, May 13, 2015",
						"about": "Et exercitation ex sunt cupidatat fugiat aute sint ut. Eiusmod amet labore cillum sint exercitation enim enim. Id deserunt in reprehenderit duis magna eiusmod qui minim non Lorem laborum ullamco. In labore ad magna ex nulla ad dolore et quis cillum. Ullamco consectetur magna in commodo in elit eu. Et aliquip ex qui culpa exercitation ipsum sit non labore anim sit amet id.",
						"title": "deserunt",
						"author": {
							"last": "Cline",
							"first": "Pearlie"
						},
						"picture": "http://loremflickr.com/320/240?random=2",
						"index": 2,
						"id": "58c97a0b13e4af5b372ae9bf"
					},
					{
						"published": "Thursday, June 18, 2015",
						"about": "Eiusmod exercitation aute voluptate voluptate voluptate id irure laboris in. Duis voluptate incididunt irure quis dolor nostrud in adipisicing. Eu laboris ullamco Lorem dolore ex. Ad enim ullamco excepteur aliquip laborum. Ipsum in minim reprehenderit esse sunt magna et mollit quis ipsum. Et est ut occaecat nulla dolor id laborum excepteur cillum nostrud laborum duis Lorem.",
						"title": "veniam",
						"author": {
							"last": "Finch",
							"first": "Erna"
						},
						"picture": "http://loremflickr.com/320/240?random=3",
						"index": 3,
						"id": "58c97a0b9a26a2a7b37fe78f"
					},
					{
						"published": "Saturday, February 4, 2017",
						"about": "Sit mollit officia dolore pariatur amet culpa nisi pariatur culpa. Duis cillum ipsum sint do nisi sint fugiat sint mollit est officia. Amet ad aliqua cillum culpa magna consectetur tempor quis in. Quis commodo deserunt qui enim eu cupidatat quis velit ad magna.",
						"title": "aliqua",
						"author": {
							"last": "Lawrence",
							"first": "Espinoza"
						},
						"picture": "http://loremflickr.com/320/240?random=4",
						"index": 4,
						"id": "58c97a0b7ad234d827b266a5"
					},
					{
						"published": "Wednesday, October 12, 2016",
						"about": "Commodo tempor deserunt do aliquip. Sint esse ex cillum tempor sint eiusmod sint pariatur voluptate nostrud velit consequat. Aliqua sint cupidatat ex anim incididunt adipisicing nulla in culpa exercitation duis ut consequat id.",
						"title": "aliquip",
						"author": {
							"last": "Mckee",
							"first": "Lidia"
						},
						"picture": "http://loremflickr.com/320/240?random=5",
						"index": 5,
						"id": "58c97a0b05e84301337e213d"
					},
					{
						"published": "Sunday, March 20, 2016",
						"about": "Cillum enim labore aliqua do eiusmod proident. Commodo elit enim duis sint. Aute elit laborum duis id laborum velit.",
						"title": "sint",
						"author": {
							"last": "Wilson",
							"first": "Barbra"
						},
						"picture": "http://loremflickr.com/320/240?random=6",
						"index": 6,
						"id": "58c97a0b8ffde9e4c92fed68"
					},
					{
						"published": "Thursday, May 22, 2014",
						"about": "Sunt fugiat nostrud commodo deserunt nulla laborum irure tempor tempor consequat cillum enim fugiat quis. Lorem veniam ea minim incididunt amet. Laboris ut exercitation ullamco culpa dolor.",
						"title": "eiusmod",
						"author": {
							"last": "Matthews",
							"first": "Florence"
						},
						"picture": "http://loremflickr.com/320/240?random=7",
						"index": 7,
						"id": "58c97a0bf7d3bf60efa19ec2"
					},

				];
				var secondRes = [
					{
						"published": "Wednesday, May 28, 2014",
						"about": "Dolore ipsum id aute incididunt quis mollit reprehenderit. Mollit enim velit voluptate exercitation nulla ea quis officia sint fugiat dolore laborum quis enim. Veniam non voluptate aute Lorem commodo exercitation. Ut do ipsum irure commodo in mollit Lorem in pariatur est.",
						"title": "cillum",
						"author": {
							"last": "Carey",
							"first": "Ladonna"
						},
						"picture": "http://placehold.it/350x150",
						"index": 0,
						"id": "58c97b781e7645885d347f14"
					},
					{
						"published": "Monday, March 23, 2015",
						"about": "Aliqua sunt irure dolor commodo enim. Tempor sint excepteur ex esse mollit laborum enim tempor irure reprehenderit ex reprehenderit. Nisi commodo amet veniam reprehenderit amet reprehenderit laborum occaecat.",
						"title": "et",
						"author": {
							"last": "Lindsey",
							"first": "Diann"
						},
						"picture": "http://placehold.it/350x150",
						"index": 1,
						"id": "58c97b78733ad5b82840615d"
					},
					{
						"published": "Monday, November 28, 2016",
						"about": "Non voluptate mollit quis voluptate est sunt ut consequat sint laborum irure dolore ex est. Ullamco esse quis labore ullamco culpa sunt pariatur pariatur reprehenderit Lorem laborum adipisicing ex. Amet quis pariatur exercitation culpa consequat et reprehenderit pariatur laborum. In id sint do ullamco eiusmod esse.",
						"title": "fugiat",
						"author": {
							"last": "Thomas",
							"first": "Bass"
						},
						"picture": "http://placehold.it/350x150",
						"index": 2,
						"id": "58c97b789525deb76f7e8bba"
					},
					{
						"published": "Saturday, February 15, 2014",
						"about": "Ex enim reprehenderit adipisicing labore elit culpa velit. Qui quis sint sint id ullamco exercitation aliquip. Adipisicing amet aliquip elit sit ut in officia eiusmod. Enim consectetur dolor cupidatat culpa incididunt consectetur eu sint aliquip. Aute voluptate ex fugiat consectetur aute nulla labore cupidatat qui ex mollit reprehenderit.",
						"title": "consectetur",
						"author": {
							"last": "Robbins",
							"first": "Heath"
						},
						"picture": "http://placehold.it/350x150",
						"index": 3,
						"id": "58c97b78dbc291170b35f19d"
					},
					{
						"published": "Sunday, November 6, 2016",
						"about": "Eiusmod in mollit Lorem laboris ex adipisicing est ullamco consectetur. Irure est est dolore aute enim magna reprehenderit minim. Eu cupidatat do enim reprehenderit amet deserunt irure nisi commodo. Lorem cupidatat magna ea cillum Lorem. Commodo culpa et amet nostrud deserunt reprehenderit dolore. Anim enim amet excepteur culpa adipisicing labore amet fugiat.",
						"title": "quis",
						"author": {
							"last": "Sosa",
							"first": "Pacheco"
						},
						"picture": "http://placehold.it/350x150",
						"index": 4,
						"id": "58c97b783a5b7b3881004d2c"
					},
					{
						"published": "Monday, November 21, 2016",
						"about": "Anim exercitation eu commodo aliquip ipsum. Sint occaecat aute adipisicing eiusmod eiusmod exercitation sint non dolore. Amet laborum nulla elit duis ut aute est in do aute nisi. Magna adipisicing est eiusmod elit proident ex deserunt aute aute. Officia duis cillum enim do amet officia ipsum do.",
						"title": "dolore",
						"author": {
							"last": "Macias",
							"first": "Gwendolyn"
						},
						"picture": "http://placehold.it/350x150",
						"index": 5,
						"id": "58c97b786d8d8e3f9f5c9da6"
					},
					{
						"published": "Monday, September 26, 2016",
						"about": "Sunt deserunt enim proident occaecat occaecat. In amet mollit nostrud aliquip fugiat sit amet ex dolor anim sint. Esse eu laboris dolor consectetur quis voluptate nostrud velit mollit. Tempor cillum est dolor Lorem eu proident esse enim ipsum proident eu. Est nisi est qui labore enim reprehenderit dolore eiusmod dolor veniam deserunt. Cillum pariatur officia aute laborum dolor incididunt id sint. Lorem dolor sint labore duis deserunt elit fugiat eu et culpa minim nulla adipisicing magna.",
						"title": "non",
						"author": {
							"last": "Golden",
							"first": "Sharp"
						},
						"picture": "http://placehold.it/350x150",
						"index": 6,
						"id": "58c97b78f74e9698fc30bdba"
					},
					{
						"published": "Tuesday, November 10, 2015",
						"about": "Tempor est cupidatat sit aliqua non. Exercitation et occaecat voluptate incididunt labore nulla nulla. Qui laboris eiusmod ex sit fugiat reprehenderit ullamco ea. Sint aute cillum ipsum quis et ea veniam duis ullamco cillum tempor.",
						"title": "laboris",
						"author": {
							"last": "Gibson",
							"first": "Pam"
						},
						"picture": "http://placehold.it/350x150",
						"index": 7,
						"id": "58c97b78dabba5e5969b0371"
					},
					{
						"published": "Monday, December 21, 2015",
						"about": "Anim dolore commodo officia reprehenderit incididunt amet nisi. Ullamco minim ut ullamco id sunt qui eu nulla. Fugiat et fugiat nostrud enim sint excepteur adipisicing excepteur et quis ipsum culpa. Ullamco anim magna proident irure ipsum sint adipisicing ad adipisicing. Cillum quis sint reprehenderit commodo cillum ad amet commodo reprehenderit sit eu.",
						"title": "duis",
						"author": {
							"last": "Donovan",
							"first": "Dianne"
						},
						"picture": "http://placehold.it/350x150",
						"index": 8,
						"id": "58c97b789b9afb153802de82"
					},
					{
						"published": "Wednesday, March 2, 2016",
						"about": "Tempor velit culpa minim do nulla Lorem occaecat quis non. Consectetur aute amet quis quis officia labore deserunt. Consectetur consectetur duis qui nostrud pariatur culpa nulla deserunt dolore. Id laborum irure eu deserunt sunt ex nisi commodo id ad quis voluptate sunt.",
						"title": "irure",
						"author": {
							"last": "Gould",
							"first": "Booth"
						},
						"picture": "http://placehold.it/350x150",
						"index": 9,
						"id": "58c97b7803ac055ce680150e"
					},
					{
						"published": "Wednesday, September 7, 2016",
						"about": "Ad sint excepteur excepteur ullamco eiusmod amet id. Esse duis nisi consectetur culpa cillum veniam cupidatat esse nostrud occaecat aute eiusmod. Laboris commodo culpa incididunt quis labore mollit dolor minim eu culpa nisi exercitation cupidatat exercitation. Deserunt esse laboris duis sit reprehenderit proident tempor deserunt sit dolor.",
						"title": "ipsum",
						"author": {
							"last": "Clay",
							"first": "Wilma"
						},
						"picture": "http://placehold.it/350x150",
						"index": 10,
						"id": "58c97b781b72cded254034c3"
					},
					{
						"published": "Tuesday, July 22, 2014",
						"about": "Velit dolor quis aute cillum aliquip dolor. Exercitation velit occaecat do sint deserunt nulla nulla. Deserunt deserunt excepteur consequat velit nostrud labore anim.",
						"title": "laborum",
						"author": {
							"last": "Tucker",
							"first": "Jacqueline"
						},
						"picture": "http://placehold.it/350x150",
						"index": 11,
						"id": "58c97b78283e7dd70b56340f"
					},
					{
						"published": "Sunday, February 15, 2015",
						"about": "In occaecat ullamco ex exercitation. Occaecat sint incididunt eu minim ullamco labore dolor est aliquip in. Dolore qui ipsum cupidatat nisi eu laboris occaecat fugiat laboris sint ullamco. Cupidatat cupidatat magna aliquip labore fugiat Lorem cupidatat qui amet ut. Do fugiat irure duis et esse nulla elit pariatur pariatur aliqua amet Lorem. Reprehenderit laborum commodo qui nisi et in. Nulla aute proident reprehenderit officia deserunt sit quis velit culpa voluptate dolor.",
						"title": "sit",
						"author": {
							"last": "Ferrell",
							"first": "Woodard"
						},
						"picture": "http://placehold.it/350x150",
						"index": 12,
						"id": "58c97b78ed9be97fd0d32b26"
					},
					{
						"published": "Saturday, February 11, 2017",
						"about": "Ipsum et id amet enim ipsum nostrud consequat ut non in sunt commodo elit. Ex amet id Lorem cupidatat eiusmod consectetur et mollit tempor. Et sunt ad ut commodo id. Dolor laboris consequat non ullamco sint tempor elit adipisicing esse eu id aliquip id. Pariatur cillum cillum id magna ea nisi sunt enim reprehenderit incididunt laborum dolor.",
						"title": "occaecat",
						"author": {
							"last": "Kemp",
							"first": "Melisa"
						},
						"picture": "http://placehold.it/350x150",
						"index": 13,
						"id": "58c97b78d3039a9b3d5936ab"
					},
					{
						"published": "Monday, November 3, 2014",
						"about": "Fugiat irure reprehenderit sunt irure sit ex consectetur. Non dolore proident sint quis et exercitation aliquip magna. Nulla veniam dolore eu elit mollit nostrud sit labore ut eu fugiat culpa esse Lorem. Quis do aliquip occaecat dolore ipsum adipisicing sint minim nulla consequat eiusmod enim reprehenderit est. Proident anim et magna ea tempor tempor veniam proident ad.",
						"title": "dolor",
						"author": {
							"last": "Orr",
							"first": "Summers"
						},
						"picture": "http://placehold.it/350x150",
						"index": 14,
						"id": "58c97b781a97b3966f589ad9"
					},
					{
						"published": "Tuesday, September 8, 2015",
						"about": "Magna voluptate aliquip elit do incididunt labore ea sint id cillum laboris pariatur nulla. Ad excepteur do sunt consequat non laborum sint pariatur excepteur sit incididunt ullamco voluptate. Est do tempor culpa minim nostrud sint labore eiusmod veniam aliquip et consequat ex. Exercitation pariatur dolore sunt cillum ad est ullamco ad. Nostrud occaecat voluptate veniam Lorem enim veniam ex irure excepteur excepteur ut dolor. Minim elit occaecat et id irure minim dolor nisi.",
						"title": "nostrud",
						"author": {
							"last": "Ashley",
							"first": "Tyson"
						},
						"picture": "http://placehold.it/350x150",
						"index": 15,
						"id": "58c97b78837a097400293f10"
					},
					{
						"published": "Sunday, February 8, 2015",
						"about": "Cillum veniam quis laboris et. Ut consequat ad aliqua quis ut ea consequat proident cupidatat aliquip sunt. Lorem pariatur id enim nulla quis pariatur. Voluptate et consequat irure id nisi adipisicing et. Id Lorem nostrud dolor amet deserunt ipsum.",
						"title": "cillum",
						"author": {
							"last": "Bird",
							"first": "Jewel"
						},
						"picture": "http://placehold.it/350x150",
						"index": 16,
						"id": "58c97b78a6809a817b85cf3b"
					},
					{
						"published": "Saturday, December 3, 2016",
						"about": "Commodo Lorem velit qui id eiusmod. Anim ullamco proident consequat enim excepteur aliquip aliquip nisi veniam mollit non labore fugiat. Consequat veniam laborum dolore pariatur eiusmod pariatur. Lorem esse ipsum ut tempor magna exercitation aliquip anim quis ut in irure.",
						"title": "duis",
						"author": {
							"last": "Aguilar",
							"first": "Sellers"
						},
						"picture": "http://placehold.it/350x150",
						"index": 17,
						"id": "58c97b79788d96058f68305b"
					},
					{
						"published": "Wednesday, March 26, 2014",
						"about": "Et ut ullamco adipisicing culpa irure mollit nostrud exercitation nisi proident Lorem laborum officia. Quis ipsum laboris irure fugiat veniam dolore aliqua eu elit cillum quis. Commodo tempor consequat commodo adipisicing dolore et ut tempor. Do laborum reprehenderit consequat deserunt irure enim id. Et culpa qui occaecat cillum cillum ullamco.",
						"title": "aliquip",
						"author": {
							"last": "Finley",
							"first": "Vang"
						},
						"picture": "http://placehold.it/350x150",
						"index": 18,
						"id": "58c97b792513d6793e853971"
					},
					{
						"published": "Tuesday, September 8, 2015",
						"about": "Fugiat ullamco et culpa Lorem est eu et adipisicing dolor. Ex non eu aliquip dolor reprehenderit ex voluptate incididunt eiusmod voluptate pariatur velit. Anim proident laboris labore ad labore aliquip sint aliqua tempor proident est ex esse.",
						"title": "aliquip",
						"author": {
							"last": "Salazar",
							"first": "Hudson"
						},
						"picture": "http://placehold.it/350x150",
						"index": 19,
						"id": "58c97b79fbfb73e6671fb4c7"
					},
					{
						"published": "Monday, October 31, 2016",
						"about": "Quis laboris ea eu duis eiusmod ad. Culpa mollit anim eiusmod fugiat tempor mollit sunt. Sunt labore sit culpa aliqua exercitation quis. Culpa ullamco tempor irure tempor sunt aute sint. Tempor et minim ut labore deserunt esse tempor cupidatat eiusmod. Exercitation elit mollit aliqua adipisicing ullamco ea enim aute sint in velit sit aliqua deserunt. Ea nostrud proident id duis duis elit ea officia adipisicing reprehenderit.",
						"title": "laborum",
						"author": {
							"last": "Diaz",
							"first": "Jayne"
						},
						"picture": "http://placehold.it/350x150",
						"index": 20,
						"id": "58c97b7950c8602798529875"
					},
					{
						"published": "Saturday, October 29, 2016",
						"about": "Labore nulla aliquip adipisicing ea aute ullamco pariatur aliqua tempor magna officia excepteur do enim. Sunt eu dolor do ipsum et velit laborum officia laborum mollit commodo culpa sint reprehenderit. Labore officia aute anim nisi eu anim aliqua minim consequat nulla in consequat aute fugiat.",
						"title": "qui",
						"author": {
							"last": "Humphrey",
							"first": "Kristin"
						},
						"picture": "http://placehold.it/350x150",
						"index": 21,
						"id": "58c97b790f7d7453c1758f9e"
					},
					{
						"published": "Sunday, May 10, 2015",
						"about": "Ea nulla magna cillum voluptate amet ipsum cillum quis do irure minim Lorem sunt proident. Laborum consequat culpa deserunt irure. Amet anim sint fugiat adipisicing veniam et enim id non tempor ex tempor. Est quis cupidatat anim dolore proident. Deserunt fugiat occaecat incididunt excepteur pariatur consectetur ullamco. Est excepteur cillum ex commodo laborum quis non est cupidatat.",
						"title": "nisi",
						"author": {
							"last": "Holman",
							"first": "Sears"
						},
						"picture": "http://placehold.it/350x150",
						"index": 22,
						"id": "58c97b793c9272b30b8f304e"
					},
					{
						"published": "Thursday, February 27, 2014",
						"about": "Cupidatat tempor Lorem exercitation dolore sunt ex cillum cupidatat ex elit. Ipsum et adipisicing do dolore Lorem ea eu ipsum ea tempor. Commodo ex adipisicing nisi ad pariatur Lorem dolore officia cupidatat adipisicing. Occaecat magna eu elit adipisicing Lorem sit elit minim irure est nostrud eiusmod ea. Enim consequat sit deserunt qui magna.",
						"title": "irure",
						"author": {
							"last": "Roman",
							"first": "Vaughan"
						},
						"picture": "http://placehold.it/350x150",
						"index": 23,
						"id": "58c97b799aac0df7f4f55d6d"
					},
					{
						"published": "Wednesday, July 23, 2014",
						"about": "Sit aliqua laborum eu excepteur fugiat anim ex cillum incididunt. Aliqua ullamco sit sit sit voluptate velit ullamco et ad adipisicing ut tempor nostrud laborum. Sunt minim consequat laborum adipisicing officia.",
						"title": "ea",
						"author": {
							"last": "Ross",
							"first": "Hall"
						},
						"picture": "http://placehold.it/350x150",
						"index": 24,
						"id": "58c97b799c00267c49f17b24"
					},
					{
						"published": "Thursday, May 28, 2015",
						"about": "Fugiat ut aliqua ut adipisicing enim eu. Nisi incididunt dolor proident tempor qui ipsum exercitation consectetur qui nulla et. Dolore mollit esse pariatur cillum occaecat excepteur cupidatat. Laboris dolore aute sint sunt non est ex consectetur veniam labore incididunt veniam ullamco Lorem. Sint consectetur laboris ut eu consequat sint laboris consequat dolor esse laboris mollit cillum. Tempor nostrud proident velit consequat exercitation nostrud id dolor.",
						"title": "ad",
						"author": {
							"last": "Silva",
							"first": "Tabitha"
						},
						"picture": "http://placehold.it/350x150",
						"index": 25,
						"id": "58c97b7949ad464b494c4d75"
					},
					{
						"published": "Thursday, January 7, 2016",
						"about": "Dolor consequat sint amet id elit ipsum. Cillum nostrud veniam ipsum excepteur duis dolor exercitation non anim incididunt. Ad magna Lorem id laboris. Ea quis id voluptate nisi adipisicing. Quis dolor aute consequat ipsum ea duis consectetur aute enim.",
						"title": "eu",
						"author": {
							"last": "Fisher",
							"first": "Rebekah"
						},
						"picture": "http://placehold.it/350x150",
						"index": 26,
						"id": "58c97b79693c465367a9b01f"
					},
					{
						"published": "Wednesday, May 25, 2016",
						"about": "Sunt adipisicing sunt aliqua dolor irure adipisicing excepteur officia ut ut esse laborum. Tempor dolore occaecat deserunt magna excepteur aute tempor labore do cillum cillum aute minim. Consequat reprehenderit aute nisi enim adipisicing do cillum aute culpa ipsum eu elit elit anim. Velit sit ad voluptate enim.",
						"title": "est",
						"author": {
							"last": "Leonard",
							"first": "Harper"
						},
						"picture": "http://placehold.it/350x150",
						"index": 27,
						"id": "58c97b797cf664f89f699a74"
					},
					{
						"published": "Wednesday, July 30, 2014",
						"about": "Minim dolore consectetur laborum do excepteur deserunt sunt quis laboris laboris qui occaecat deserunt. Eiusmod enim laboris in velit sunt reprehenderit reprehenderit aliqua Lorem irure est irure. Irure minim qui ipsum Lorem cillum labore consectetur fugiat consectetur. Irure dolore nisi laborum est sunt mollit reprehenderit amet aute proident sit.",
						"title": "laboris",
						"author": {
							"last": "Mcintosh",
							"first": "Molina"
						},
						"picture": "http://placehold.it/350x150",
						"index": 28,
						"id": "58c97b7933a5242573286a0e"
					},
					{
						"published": "Wednesday, January 22, 2014",
						"about": "Tempor minim sint culpa occaecat eu exercitation ullamco tempor ea laboris deserunt aute Lorem. Amet sit labore anim commodo irure sit id aliquip ipsum eiusmod. Commodo commodo dolor do sit deserunt esse. Fugiat officia minim duis anim eu.",
						"title": "non",
						"author": {
							"last": "Perkins",
							"first": "Shawn"
						},
						"picture": "http://placehold.it/350x150",
						"index": 29,
						"id": "58c97b795e5fd6d926dc1323"
					},
					{
						"published": "Tuesday, September 6, 2016",
						"about": "Occaecat do enim cillum elit proident proident nisi excepteur laborum irure elit incididunt sunt. Magna dolore elit commodo dolore mollit voluptate tempor ullamco dolor dolore incididunt. Non duis consequat culpa commodo enim id ad id ipsum magna. Dolor mollit magna incididunt commodo nisi consequat do tempor incididunt. Ea quis qui officia elit non tempor laborum ipsum deserunt deserunt non.",
						"title": "sunt",
						"author": {
							"last": "Witt",
							"first": "Smith"
						},
						"picture": "http://placehold.it/350x150",
						"index": 30,
						"id": "58c97b7935cdf2917716db8b"
					},
					{
						"published": "Monday, March 16, 2015",
						"about": "Incididunt sit laboris exercitation labore elit reprehenderit incididunt non excepteur eu quis culpa ex ipsum. Et ex non anim enim eu laborum commodo do eiusmod in. Nostrud qui cupidatat fugiat labore anim ex culpa cupidatat sit duis.",
						"title": "magna",
						"author": {
							"last": "Watkins",
							"first": "Sharron"
						},
						"picture": "http://placehold.it/350x150",
						"index": 31,
						"id": "58c97b79396e265befe226b7"
					},
					{
						"published": "Saturday, March 22, 2014",
						"about": "Culpa adipisicing irure et est eu. Incididunt Lorem anim id ullamco cillum laboris cupidatat mollit esse incididunt proident anim commodo. Ex enim sunt reprehenderit dolor. Sint duis elit ad nostrud. Mollit voluptate anim ea incididunt et culpa pariatur aute.",
						"title": "occaecat",
						"author": {
							"last": "Cooper",
							"first": "Violet"
						},
						"picture": "http://placehold.it/350x150",
						"index": 32,
						"id": "58c97b796a6785932aaa24d6"
					},
					{
						"published": "Tuesday, November 15, 2016",
						"about": "Consequat reprehenderit voluptate veniam minim duis eiusmod labore. Ad nulla pariatur aute consectetur excepteur qui tempor amet nisi culpa quis dolore. Laboris Lorem deserunt ut eiusmod. Duis dolore dolor dolor ad consequat laboris dolore labore. Culpa occaecat nostrud aliquip Lorem veniam.",
						"title": "consequat",
						"author": {
							"last": "Sweeney",
							"first": "Gracie"
						},
						"picture": "http://placehold.it/350x150",
						"index": 33,
						"id": "58c97b79833a79ebbe983804"
					},
					{
						"published": "Sunday, November 8, 2015",
						"about": "Qui nostrud culpa cillum elit incididunt reprehenderit adipisicing sit ipsum occaecat Lorem cillum cupidatat deserunt. Commodo fugiat est quis amet. Culpa pariatur tempor excepteur proident eu elit dolore qui eu nostrud commodo minim. Id aliquip magna elit enim fugiat qui fugiat culpa nostrud ut in.",
						"title": "deserunt",
						"author": {
							"last": "Maynard",
							"first": "Pitts"
						},
						"picture": "http://placehold.it/350x150",
						"index": 34,
						"id": "58c97b792aeef1cfb1f72124"
					},
					{
						"published": "Friday, December 2, 2016",
						"about": "Aliquip culpa exercitation ea velit occaecat aliqua aute nostrud sit nisi et aliqua. Ad quis reprehenderit eiusmod aliqua mollit ad ut magna. Veniam et in tempor cupidatat minim. Nisi sunt irure proident magna elit proident exercitation cupidatat sunt dolor cillum pariatur laborum esse. Mollit ipsum consectetur eu proident ut laborum duis quis nulla veniam laborum.",
						"title": "est",
						"author": {
							"last": "Newman",
							"first": "Lauren"
						},
						"picture": "http://placehold.it/350x150",
						"index": 35,
						"id": "58c97b7971bfc5ad11a8d0bd"
					},
					{
						"published": "Tuesday, February 2, 2016",
						"about": "Mollit deserunt velit voluptate ut ullamco amet ex cillum dolore labore. Ea cillum nostrud eu non sit irure mollit reprehenderit aute laborum dolore amet. Cillum cillum qui nisi amet velit eiusmod. Esse cupidatat incididunt irure consequat occaecat ut. Officia eu proident fugiat ipsum id consectetur culpa sunt cupidatat consequat esse duis aute eu. Labore nostrud do magna non sit irure est.",
						"title": "ullamco",
						"author": {
							"last": "Wood",
							"first": "Tamara"
						},
						"picture": "http://placehold.it/350x150",
						"index": 36,
						"id": "58c97b799e84c74370ed9713"
					},
					{
						"published": "Tuesday, January 12, 2016",
						"about": "Qui voluptate mollit veniam duis irure sit ullamco et reprehenderit. Sint magna sint mollit quis sint non in excepteur. Id mollit minim veniam occaecat. Pariatur amet non occaecat consequat veniam aute ad. Non fugiat tempor aliquip nostrud. Tempor dolor exercitation incididunt proident.",
						"title": "aute",
						"author": {
							"last": "Mcdaniel",
							"first": "Lina"
						},
						"picture": "http://placehold.it/350x150",
						"index": 37,
						"id": "58c97b79cbeb84f83bd7099d"
					},
					{
						"published": "Thursday, June 2, 2016",
						"about": "Commodo nulla fugiat voluptate id irure eiusmod fugiat. Dolore voluptate est duis excepteur Lorem nulla irure fugiat eiusmod id. Minim voluptate reprehenderit pariatur minim irure proident commodo adipisicing ex. Mollit eiusmod laboris exercitation consequat eu cupidatat non. Pariatur ipsum proident sunt in ullamco do velit.",
						"title": "enim",
						"author": {
							"last": "Smith",
							"first": "Luna"
						},
						"picture": "http://placehold.it/350x150",
						"index": 38,
						"id": "58c97b798209167b2babaa4c"
					},
					{
						"published": "Monday, June 8, 2015",
						"about": "Eu cupidatat qui sit et ad. Pariatur nulla fugiat pariatur elit eu anim consequat tempor ex reprehenderit irure adipisicing. Ipsum magna commodo aliqua excepteur.",
						"title": "elit",
						"author": {
							"last": "Hurst",
							"first": "Macdonald"
						},
						"picture": "http://placehold.it/350x150",
						"index": 39,
						"id": "58c97b796a195ee5759bd380"
					},
					{
						"published": "Sunday, November 23, 2014",
						"about": "Dolore eiusmod proident elit proident ad velit et anim. In dolore incididunt veniam dolor. Esse nostrud qui ea fugiat non Lorem aliquip ipsum aliquip consequat irure incididunt. Minim qui enim irure culpa qui ea elit ea esse consectetur esse adipisicing eiusmod. Sunt dolore sit enim velit minim deserunt ad mollit laborum Lorem. Exercitation in cupidatat veniam pariatur consectetur aliquip adipisicing labore culpa ea voluptate. Enim magna dolore anim do id eu id.",
						"title": "sint",
						"author": {
							"last": "Young",
							"first": "Burks"
						},
						"picture": "http://placehold.it/350x150",
						"index": 40,
						"id": "58c97b7996619dd602f24679"
					},
					{
						"published": "Monday, June 30, 2014",
						"about": "Laboris nisi dolore ea et minim id et dolore est aute ut. Consectetur ut consectetur dolore elit pariatur. Est aute ipsum dolore exercitation laborum non Lorem. Esse Lorem laboris cupidatat duis sunt magna cupidatat proident velit excepteur ut consectetur laborum. Do ad occaecat exercitation ad exercitation do cupidatat nulla sunt aliqua.",
						"title": "aliquip",
						"author": {
							"last": "Knight",
							"first": "Laverne"
						},
						"picture": "http://placehold.it/350x150",
						"index": 41,
						"id": "58c97b79396b9af765827241"
					},
					{
						"published": "Tuesday, January 5, 2016",
						"about": "Aliquip laboris esse anim qui ipsum quis officia aliquip ullamco id et exercitation. Cupidatat veniam sint dolor dolor ullamco. Tempor officia deserunt consectetur irure irure elit tempor veniam incididunt. Qui ipsum sunt ut Lorem. Cillum nulla incididunt exercitation minim consequat magna commodo cupidatat reprehenderit.",
						"title": "minim",
						"author": {
							"last": "Dillard",
							"first": "Potter"
						},
						"picture": "http://placehold.it/350x150",
						"index": 42,
						"id": "58c97b79568a6ebdb2b34cbe"
					},
					{
						"published": "Saturday, November 15, 2014",
						"about": "Dolore excepteur aliqua voluptate consectetur velit non minim ullamco fugiat cupidatat magna aliquip. Dolore nostrud in nulla laboris occaecat consequat. Cillum proident anim Lorem cillum. Dolore deserunt irure Lorem ad aliquip reprehenderit aute. Ea nostrud consectetur enim dolor. Do sit veniam labore Lorem.",
						"title": "cillum",
						"author": {
							"last": "Horne",
							"first": "Ware"
						},
						"picture": "http://placehold.it/350x150",
						"index": 43,
						"id": "58c97b7970aa49f3a40b6905"
					},
					{
						"published": "Thursday, July 3, 2014",
						"about": "Minim esse aliquip fugiat incididunt nostrud ad cillum non fugiat. Ea labore ex quis velit in dolore occaecat nostrud fugiat dolore excepteur tempor ipsum. Occaecat fugiat consequat Lorem labore ad exercitation consectetur qui enim eu est.",
						"title": "ex",
						"author": {
							"last": "Andrews",
							"first": "Erma"
						},
						"picture": "http://placehold.it/350x150",
						"index": 44,
						"id": "58c97b7918956ea55eb658d1"
					},
					{
						"published": "Saturday, January 7, 2017",
						"about": "Nostrud est cupidatat mollit ullamco enim excepteur. Nisi esse ut qui anim nostrud. Duis eiusmod amet minim id commodo duis. Pariatur duis laboris anim proident. Minim nisi laborum ut consectetur mollit esse elit sint.",
						"title": "Lorem",
						"author": {
							"last": "Norman",
							"first": "Moreno"
						},
						"picture": "http://placehold.it/350x150",
						"index": 45,
						"id": "58c97b792c60007edce853e7"
					},
					{
						"published": "Monday, September 19, 2016",
						"about": "Tempor officia consequat non voluptate adipisicing dolor amet sunt magna. Magna nostrud irure consequat commodo aute proident fugiat sit ut quis laboris cillum sit occaecat. Irure et proident labore duis minim esse nulla nisi sit ad id nisi. Consequat do eiusmod sunt officia ullamco velit ea commodo nisi anim commodo. Excepteur velit non sint minim sunt eu laboris adipisicing magna Lorem.",
						"title": "id",
						"author": {
							"last": "Conrad",
							"first": "Lila"
						},
						"picture": "http://placehold.it/350x150",
						"index": 46,
						"id": "58c97b79b73976cd975050b2"
					},
					{
						"published": "Thursday, July 28, 2016",
						"about": "Consequat sunt exercitation irure consectetur elit. Esse amet aliquip aliqua qui. Amet Lorem magna aute cillum aute eu eiusmod esse deserunt qui.",
						"title": "sint",
						"author": {
							"last": "Hebert",
							"first": "Woodward"
						},
						"picture": "http://placehold.it/350x150",
						"index": 47,
						"id": "58c97b79988fdc2247e72a26"
					},
					{
						"published": "Wednesday, April 20, 2016",
						"about": "Dolore excepteur nostrud dolor laboris aute sunt labore cillum amet ut commodo velit. Occaecat laborum amet occaecat veniam aliqua veniam veniam est voluptate minim. Laborum in eiusmod culpa amet quis occaecat nostrud enim aliquip ipsum ut adipisicing do. Labore ea aliqua ut est sint laborum nulla eiusmod voluptate esse consectetur dolor aute. Magna voluptate eiusmod quis in dolor anim excepteur cillum elit.",
						"title": "dolore",
						"author": {
							"last": "Pugh",
							"first": "Pennington"
						},
						"picture": "http://placehold.it/350x150",
						"index": 48,
						"id": "58c97b79a5e6421875f6f266"
					},
					{
						"published": "Wednesday, August 19, 2015",
						"about": "Et occaecat veniam ipsum incididunt. Voluptate aliqua sit dolor duis fugiat. Cillum deserunt ex esse sit.",
						"title": "esse",
						"author": {
							"last": "Crane",
							"first": "Glover"
						},
						"picture": "http://placehold.it/350x150",
						"index": 49,
						"id": "58c97b79a3c1ee052bc263dc"
					},
					{
						"published": "Tuesday, June 30, 2015",
						"about": "Ullamco ad voluptate velit aute anim culpa est fugiat aliquip cupidatat commodo. Labore minim ad sint sunt laboris amet non ea veniam duis fugiat. In laborum deserunt non dolore.",
						"title": "excepteur",
						"author": {
							"last": "Newton",
							"first": "Vivian"
						},
						"picture": "http://placehold.it/350x150",
						"index": 50,
						"id": "58c97b79ec5e1bf024a82b32"
					},
					{
						"published": "Tuesday, November 3, 2015",
						"about": "Nisi elit in labore nulla minim magna consectetur. Adipisicing quis adipisicing nisi aliqua nostrud. Elit ullamco veniam ad ad aliqua.",
						"title": "excepteur",
						"author": {
							"last": "Quinn",
							"first": "Hardin"
						},
						"picture": "http://placehold.it/350x150",
						"index": 51,
						"id": "58c97b79afa1b14fff577802"
					},
					{
						"published": "Tuesday, September 16, 2014",
						"about": "Dolore adipisicing exercitation minim esse occaecat pariatur dolor. Quis officia ullamco qui sint minim magna do fugiat culpa sint veniam fugiat. Pariatur sit deserunt excepteur eu amet tempor cillum ad aute aliquip.",
						"title": "qui",
						"author": {
							"last": "Gay",
							"first": "Genevieve"
						},
						"picture": "http://placehold.it/350x150",
						"index": 52,
						"id": "58c97b79028f9a210f77e73e"
					},
					{
						"published": "Wednesday, December 9, 2015",
						"about": "Mollit aliqua nulla laborum veniam et. Tempor amet id duis Lorem commodo laboris non laboris quis enim magna proident reprehenderit commodo. Cillum aute duis proident deserunt exercitation irure occaecat reprehenderit.",
						"title": "proident",
						"author": {
							"last": "Cleveland",
							"first": "Marisa"
						},
						"picture": "http://placehold.it/350x150",
						"index": 53,
						"id": "58c97b79cb887e085af4b273"
					},
					{
						"published": "Thursday, January 12, 2017",
						"about": "Dolore consequat deserunt dolor ea consequat id eu sunt. Ut est ut elit sint culpa quis mollit velit fugiat id exercitation irure. Lorem cupidatat ea anim commodo laboris ea ut amet quis voluptate. Eiusmod ut ipsum ad duis reprehenderit eu sint minim. Eiusmod tempor consectetur laboris proident adipisicing laborum ad officia qui veniam magna qui.",
						"title": "minim",
						"author": {
							"last": "Fowler",
							"first": "Magdalena"
						},
						"picture": "http://placehold.it/350x150",
						"index": 54,
						"id": "58c97b79169ec0c4bff3ddb5"
					},
					{
						"published": "Tuesday, July 14, 2015",
						"about": "Dolore magna sit occaecat fugiat sunt ullamco laborum in labore dolore do consequat esse ea. Aute excepteur irure minim reprehenderit ipsum ad in. Occaecat amet irure sunt pariatur qui quis incididunt excepteur ut Lorem cillum. Ea do commodo sint Lorem dolore id labore incididunt eiusmod laboris amet enim dolore. Excepteur aute pariatur et ad ipsum sit reprehenderit est minim nulla. Nisi minim mollit consectetur mollit aliqua laboris ad voluptate duis laborum laboris. Aliqua culpa consectetur mollit ut cupidatat in.",
						"title": "esse",
						"author": {
							"last": "Chapman",
							"first": "Rodgers"
						},
						"picture": "http://placehold.it/350x150",
						"index": 55,
						"id": "58c97b796ac75a1d4ac85e76"
					},
					{
						"published": "Tuesday, June 14, 2016",
						"about": "Ea consequat aliqua ullamco eu cupidatat tempor deserunt laboris elit ex cillum ipsum irure sint. Reprehenderit aliqua non qui sit velit aliquip ut ipsum nostrud ipsum minim Lorem labore. Aute labore veniam magna proident labore aliqua mollit irure velit dolor. Sunt voluptate nisi qui eu in est sint occaecat tempor enim elit. Laboris nostrud consectetur excepteur in deserunt velit irure veniam non esse.",
						"title": "veniam",
						"author": {
							"last": "Myers",
							"first": "Marcy"
						},
						"picture": "http://placehold.it/350x150",
						"index": 56,
						"id": "58c97b79fc1007a617b83295"
					},
					{
						"published": "Tuesday, April 26, 2016",
						"about": "Voluptate ex enim ex reprehenderit nisi exercitation. Eu sunt sunt fugiat labore reprehenderit ut. Mollit laborum quis aute aliqua non aute est minim cillum. Consequat aliquip in irure anim sit exercitation laborum tempor cupidatat nisi ut dolor.",
						"title": "laboris",
						"author": {
							"last": "Lynn",
							"first": "Callie"
						},
						"picture": "http://placehold.it/350x150",
						"index": 57,
						"id": "58c97b79f5c2a346932045a6"
					},
					{
						"published": "Saturday, November 15, 2014",
						"about": "Eiusmod ex dolore laborum non sunt sint. Magna laboris deserunt exercitation qui adipisicing eu cupidatat incididunt dolore mollit do ad cillum sit. Id officia ut non officia. Cillum adipisicing excepteur in Lorem ex deserunt.",
						"title": "laboris",
						"author": {
							"last": "Carter",
							"first": "Mclean"
						},
						"picture": "http://placehold.it/350x150",
						"index": 58,
						"id": "58c97b797571a46c146f8463"
					},
					{
						"published": "Wednesday, June 18, 2014",
						"about": "Ea reprehenderit labore mollit nostrud minim nisi. Non reprehenderit irure ipsum labore mollit ullamco. Cupidatat sint nostrud excepteur esse pariatur consequat minim dolor anim labore nisi fugiat mollit.",
						"title": "sit",
						"author": {
							"last": "Rivera",
							"first": "Fleming"
						},
						"picture": "http://placehold.it/350x150",
						"index": 59,
						"id": "58c97b7932d84062fcfd5a30"
					},
					{
						"published": "Saturday, April 25, 2015",
						"about": "Fugiat ipsum deserunt adipisicing nulla proident. Ad excepteur voluptate et aliquip duis labore elit do cillum culpa ea excepteur dolor. Dolore non dolore laborum enim eu ipsum aliqua elit sint eiusmod. Adipisicing eu mollit velit sit in ad. Aliqua culpa ea sunt proident anim sunt mollit mollit.",
						"title": "incididunt",
						"author": {
							"last": "Steele",
							"first": "Chelsea"
						},
						"picture": "http://placehold.it/350x150",
						"index": 60,
						"id": "58c97b7952018d0734c32974"
					},
					{
						"published": "Thursday, March 31, 2016",
						"about": "Excepteur sit eiusmod excepteur incididunt laboris ea labore adipisicing do voluptate laborum culpa culpa sit. Consectetur mollit aliqua proident voluptate nisi elit esse id esse Lorem quis ipsum voluptate ipsum. Esse proident labore aute ea. Magna aliqua et laboris mollit ullamco aliquip. Dolor duis sint quis mollit non do eu minim quis ipsum veniam ex excepteur quis.",
						"title": "labore",
						"author": {
							"last": "Good",
							"first": "Britt"
						},
						"picture": "http://placehold.it/350x150",
						"index": 61,
						"id": "58c97b7989b824d1f257933a"
					},
					{
						"published": "Wednesday, October 5, 2016",
						"about": "Commodo deserunt reprehenderit ex excepteur amet nisi cupidatat aliqua mollit adipisicing veniam commodo veniam. Velit elit aliquip duis occaecat ad sunt nostrud. Do ea id enim enim Lorem sunt qui fugiat. Incididunt mollit sunt ut qui sunt aute nisi aute consequat velit excepteur amet do. Do aute esse velit sint enim veniam nostrud. Tempor cillum ut laboris sunt nulla sit et consequat.",
						"title": "qui",
						"author": {
							"last": "Atkins",
							"first": "Leonard"
						},
						"picture": "http://placehold.it/350x150",
						"index": 62,
						"id": "58c97b79657d2e6132e87ca1"
					}
				];
				result = result.concat(secondRes);
				dfd.resolve(result);
			}, 100);
			 return dfd.promise;
		}

	}

	core.service('dataService', dataService)
};