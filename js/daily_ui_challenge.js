var accessToken = "dca8764f12b9cc0960154365dfc83941c0df16b687a8a5ffaa071548e581b5a7"
// Call Dribble v2 API
$.ajax({
		url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
		dataType: 'json',
		type: 'GET',
		success: function(data) {
			if (data.length > 0 ) {
				$.each(data.reverse(), function(i, val) {
					if (val.title.includes('Daily') && val.images.hidpi) {
					$('#dribbbleShots').prepend(
						'<h4 class="title modal-h4">' + val.title + '</h4><img style="width: 800px;" class="img-responsive" src="'+ val.images.hidpi +'"/><p class="modal-text">'+ val.description +'</p><hr>'
						)
					}
				})
			}
			else {
				$('#dribbbleShots').append('<p>Sorry, No shots yet</p>');
			}
		}
});
