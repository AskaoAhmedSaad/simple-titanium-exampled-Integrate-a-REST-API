function openDetail(e) {
	alert('row index = ' + JSON.stringify(e.index));
	//Ti.API.info('row rowData = ' + JSON.stringify(e.rowData));
	//Ti.API.info('row index = ' + JSON.stringify(e..index));
}



function showData(first_id) {
	var data = [];
	var sendit = Ti.Network.createHTTPClient({
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('There was an error during the connection');
		},
		timeout : 2000,
	});

	// Here you have to change it for your local ip
	sendit.open('GET', 'http://127.0.0.1:8000/press/mobile_app/'+first_id);
	sendit.send();

	// Function to be called upon a successful response
	sendit.onload = function() {
		var json = JSON.parse(this.responseText);
		//alert(json[0]);
		// if the database is empty show an alert
		if (json.length == 0) {
			$.table.headerTitle = "The database row is empty";
		}

		// Insert the JSON data to the table view
		for (var i = 0,
		    iLen = json.length; i < iLen; i++) {
		    var thumb = "";
			if 	(json[i].title=="None"){		
					thumb = "http://127.0.0.1/static/images/logo.jpg";
			}else{
					thumb = "http://127.0.0.1:8000/media/"+json[i].thumb;
			}
			data.push(Alloy.createController('row', {	
				icon:thumb,
				title : json[i].title,
				pub_time : json[i].pub_time,
				pub_date : json[i].pub_date,
				body : json[i].body,
			}).getView());
			Ti.API.info("http://127.0.0.1/static/images/logo.jpg");
			Ti.API.info(json[i].title);
			Ti.API.info(json[i].pub_time);
			Ti.API.info(json[i].pub_date);
		}
		$.table.setData(data);
	};
}

var frist_id = 1;
function ShowNextArticles(){
	frist_id+=7;
	showData(frist_id);
}

function ShowPrevArticles(){
	if (frist_id>=1){
		frist_id-=7;
		showData(frist_id);
	}
}

showData(1);

$.index.open();
