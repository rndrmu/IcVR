function getposters() {

	$("img").remove(); 
	$("br").remove(); 

	var query = document.getElementById('postersearch').value;

	var apukey = "47206932c7a5e718453916349a089a65";

	var ayymd = "https://api.themoviedb.org/3/search/tv?api_key="+apukey+"&language=en-US&query="+query+"&page=1";


		$.getJSON(ayymd, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"http://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});


};

function seasoninfo(tvid) {


	var impo = tvid;

	window.idtv = tvid;

	var key = "47206932c7a5e718453916349a089a65";

	var url = "https://api.themoviedb.org/3/tv/"+impo+"?api_key="+key+"&language=en-US";

	var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

	$.getJSON(url, function(deeta) {

			//var window.tvname = deeta.name;
			var season;
			var season_img;

			$.each(deeta.seasons, function(i, data) {

				season_img += ("<img onclick=\"episodeinfo("+data.season_number+")\" src=\"http://image.tmdb.org/t/p/w185/"+ data.poster_path +"\">");

			});
			 window.tvname = deeta.name;
				$(".streambtn").remove();
				$(".removemepls").remove();
				$("iframe").remove();
				$('#mvStreamLink').append(season_img).html;
				 modal.style.display = "block";
	});

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


}

function episodeinfo(seasonno) {

	// alert(window.idtv);
	// console.log(seasonno);
	window.season = seasonno;
	var key = "47206932c7a5e718453916349a089a65";
	var url = "https://api.themoviedb.org/3/tv/"+window.idtv+"/season/"+seasonno+"?api_key="+key+"&language=en-US";

	$.getJSON(url, function(dat) {

		var episode;

			$.each(dat.episodes, function(i, data) {


				episode += ("<button class=\"streambtn\" onclick=\"getlink("+data.episode_number+")\">"+ data.name +"</button>");

			});

			$("img").remove();
			$('#mvStreamLink').append(episode).html;

	});

}

function getlink(episode) {


  var ticket = "http://icyviewr.unaux.com/ticket.php?tvid="+window.idtv+"&season="+window.season;

    $.getJSON(ticket, function(data) {
      var reetv;
      reetv = (data.ticket_tv);

	var key = "47206932c7a5e718453916349a089a65";
	var url = "https://api.themoviedb.org/3/tv/"+window.idtv+"/season/"+window.season+"/episode/"+episode+"?api_key="+key+"&language=en-US";

	$.getJSON(url, function(data) {

 $('#mvName').html("<p class=\"removemepls\">"+data.name+"</p>");
  $('#mvDesc').html("<p class=\"removemepls\">"+data.overview+"</p>");
   $('#mvStreamLink').html("<iframe src=\"https://videospider.stream/getvideo?key=JhhbVDPq3GIdkhuE&video_id="+window.idtv+"&tv=1&s="+window.season+"&e="+episode+"&tmdb=1&ticket="+reetv+"\"width=\"640\" height=\"360\" allowfullscreen=\"true\" scrolling=\"no\" frameborder=\"0\"></iframe>");
   	$('#mvTriviaNShit').html("Vote Average: "+data.vote_average+"\nAir Date: "+data.air_date);

	});
});
}
