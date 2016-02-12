var args = arguments[0] || {};

$.article_image.image = args.icon;
$.article_title.text = args.title;
$.article_pub_time.text = args.pub_time;

$.showArticle.addEventListener('click', function(e) {
	var selectedArticle = e.source;
	var args1 = {
		image : args.icon,
		title : args.title,
		body : args.body,
		pub_time : args.pub_time,
		pub_date : args.pub_date,
	};
	var articleview = Alloy.createController("view_article", args1).getView();
	articleview.open();
});
