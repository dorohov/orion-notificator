
chrome.alarms.onAlarm.addListener(function(alarm) {
	
	$.getJSON('http://localhost:17001/json/orion/test', function(resp){

		chrome.notifications.create(Azbn7Ext.uid + '@' + resp.url, {
			type : 'basic',
			iconUrl : 'img/128x128.png',
			title : resp.title,
			message : resp.message,
			isClickable : true,
			priority : 2,
			requireInteraction : true,
		}, function(n_id){
			
			

		});

	});

	

});
 
chrome.alarms.create('orion_check', {
	delayInMinutes: 0.1,
	periodInMinutes: 0.1,
});

chrome.notifications.onClicked.addListener(function(n_id){
	
	n_id_arr = n_id.split('@');
	
	if(n_id_arr[0] == Azbn7Ext.uid) {
		
		chrome.notifications.clear(n_id, function(cleared){
			chrome.tabs.create({
				active : true,
				url : n_id_arr[1],
			});
		});

	}
	
});