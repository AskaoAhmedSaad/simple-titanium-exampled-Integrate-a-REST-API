var args = arguments[0] || {};

$.article_title.text = args.title || 'Default Title';
$.article_pub_time_date.text = args.pub_date + " - " + args.pub_time || 'Default pub_time_date';
$.article_body.html = "<div style='direction: rtl;'>"+args.body+"</div>" || 'Default body';
$.article_image.image = args.image || '/images/logo.png';
