$(document).ready(function() {



            var apukey = "47206932c7a5e718453916349a089a65";
            var shintel = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=1";
            var pg2 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=2";
            var pg3 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=3";
            var pg4 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=4";
            var pg5 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=5";
            var pg6 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=6";
            var pg7 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=7";
            var pg8 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=8";
            var pg9 = "https://api.themoviedb.org/3/tv/popular?api_key="+apukey+"&language=en-US&page=9";

            $.getJSON(shintel, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg2, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg3, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg4, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg5, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg6, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg7, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg8, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});

            $.getJSON(pg9, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

			});

				$('#wrapper').append(boopboop).html()

		});



});


function getposters() {

	$("img").remove(); 
	$("br").remove(); 

	var query = document.getElementById('postersearch').value;

	var apukey = "47206932c7a5e718453916349a089a65";

	var ayymd = "https://api.themoviedb.org/3/search/tv?api_key="+apukey+"&language=en-US&query="+query+"&page=1";


		$.getJSON(ayymd, function(boop) {

			var boopboop;

			$.each(boop.results, function(i, bob) {

					boopboop += ("<img onclick=\"seasoninfo("+bob.id+")\" src=\"https://image.tmdb.org/t/p/w185/"+ bob.poster_path +"\">");

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

				season_img += ("<img class=\"removeme2\" onclick=\"episodeinfo("+data.season_number+")\" src=\"https://image.tmdb.org/t/p/w185/"+ data.poster_path +"\">");

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

			$(".removeme2").remove();
			$('#mvStreamLink').append(episode).html;

	});

}

function getlink(episode) {


      var reetv;
/* 
  The lengths i go just to not pay a single cent for hosting 
    spongebob me boy, I’ve snorted an entire suitcase of ketamine and I’m going to fucking die
      arghaghaghaghagharghaghaghaghagharghaghaghaghagharghaghaghaghagharghaghaghaghagharghaghaghaghagharghaghaghaghagharghaghaghaghagh
          Spongebob, me boy, I have injected black tar heroin into my left testicle and now I’m going to die
            Argh argh argh
              Argggggggh

  */
$.getJSON("https://api.ipify.org/?format=json", function (response) {
var clientIP = response.ip;
   // alert("Your IP is: "+clientIP);
var proxy = 'https://cors-anywhere.herokuapp.com/';
$.get("https://videospider.in/getticket.php?key=JhhbVDPq3GIdkhuE&secret_key=a10ro5sbabnvycg0dfn1dn1h7h26bn&video_id="+window.idtv+"&tmbd=1&s="+window.season+"&ip="+clientIP+"", function( data ) {

   reetv=data;


	var key = "47206932c7a5e718453916349a089a65";
	var url = "https://api.themoviedb.org/3/tv/"+window.idtv+"/season/"+window.season+"/episode/"+episode+"?api_key="+key+"&language=en-US";

	$.getJSON(url, function(data) {

 $('#mvName').html("<p class=\"removemepls\">"+data.name+"</p>");
  $('#mvDesc').html("<p class=\"removemepls\">"+data.overview+"</p>");
   $('#mvStreamLink').html("<iframe src=\"https://videospider.stream/getvideo?key=JhhbVDPq3GIdkhuE&video_id="+window.idtv+"&tv=1&s="+window.season+"&e="+episode+"&tmdb=1&ticket="+reetv+"\"width=\"640\" height=\"360\" allowfullscreen=\"true\" scrolling=\"no\" frameborder=\"0\"></iframe>");
   	$('#mvTriviaNShit').html("Vote Average: "+data.vote_average+"\nAir Date: "+data.air_date);

	});
}); //getJSON close
});
};
