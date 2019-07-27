

	var key = "47206932c7a5e718453916349a089a65";
	var tv_url = "https://api.themoviedb.org/3/tv/";
	var mv_url = "https://api.themoviedb.org/3/movie/";


	function getPopular(){var e="47206932c7a5e718453916349a089a65",a="https://api.themoviedb.org/3/movie/";$(".nigga").remove(),$("text").remove(),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=1",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=2",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=3",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=4",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=5",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=6",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=7",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=8",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=9",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=10",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="nigga" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()})}

		function getCurrentlyPlaying() {

var key = "47206932c7a5e718453916349a089a65";
	var mv_url = "https://api.themoviedb.org/3/movie/";

$(".nigga").remove();  // cleanup of previous searches :)
$("text").remove();

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

		}

	function getTopRated() {

var key = "47206932c7a5e718453916349a089a65";
	var mv_url = "https://api.themoviedb.org/3/movie/";

$(".nigga").remove();  // cleanup of previous searches :)
$("text").remove();

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

		}

function getinfo(tmdbid) {
$('.removemepls').remove();
var apikey = "47206932c7a5e718453916349a089a65";
var imdburl = "https://api.themoviedb.org/3/movie/"+tmdbid+"?api_key="+apikey;
var ree;

// Get the modal
var modal = document.getElementById("mv");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$.getJSON("http://jsonip.com?callback=?", function (response) {
var clientIP = response.ip;
  // alert("Your IP is: "+clientIP);
var proxy = 'https://cors-anywhere.herokuapp.com/';
$.get("https://videospider.in/getticket.php?key=JhhbVDPq3GIdkhuE&secret_key=a10ro5sbabnvycg0dfn1dn1h7h26bn&video_id="+tmdbid+"&tmbd=1&ip="+clientIP+"", function( data ) {

   ree = data;
$.getJSON(imdburl, function(imdb) {

 // alert(imdb.imdb_id + "\n\n" + imdb.original_title + "\n\n" + imdb.overview);

 $('#mvName').html(imdb.title);
  $('#mvDesc').html(imdb.overview);
   $('#mvStreamLink').html("<iframe src=\"https://videospider.stream/getvideo?key=JhhbVDPq3GIdkhuE&video_id="+tmdbid+"&tmdb=1&ticket="+ree+"\" width=\"640\" height=\"360\" allowfullscreen=\"true\" scrolling=\"no\" frameborder=\"0\"></iframe>");
    $('#mvTriviaNShit').html("Vote Average: "+imdb.vote_average+"\nLanguage: "+imdb.original_language);
    	modal.style.display = "block";

    });
});
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

function getTopRatedTV() {
$(".nigga").remove();
			var tv_url = "https://api.themoviedb.org/3/tv/";
			var apikey = "47206932c7a5e718453916349a089a65";

			$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


};

function seasoninfo(tvid) {
$(".removeme2").remove();
$('.removemepls').remove();

	var impo = tvid;

	window.idtv = tvid;

	var key = "47206932c7a5e718453916349a089a65";

	var url = "https://api.themoviedb.org/3/tv/"+impo+"?api_key="+key+"&language=en-US";

	var modal = document.getElementById("mv");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

	$.getJSON(url, function(deeta) {

			//var window.tvname = deeta.name;
			var season = " ";
			var season_img = " ";

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

		var episode = " ";

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

function getPopularTV() {
$(".nigga").remove();
			var tv_url = "https://api.themoviedb.org/3/tv/";
			var apikey = "47206932c7a5e718453916349a089a65";

			$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"nigga\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


};

function getposters() {
		
		$('.nigga').remove();
		$('.removemepls').remove();

		var query = document.getElementById('postersearch').value;
		var searchurl = "https://api.themoviedb.org/3/search/";
		var apikey = "47206932c7a5e718453916349a089a65";

			var img_mv = " ";
			var img_tv = " ";

				$.getJSON(searchurl+"movie?api_key="+apikey+"&language=en-US&query="+query+"&page=1", function(data) {
					$.each(data.results, function (i, item) {
						img_mv += ("<img onclick=\"getinfo("+item.id+")\" class=\"nigga\" src=\"http://image.tmdb.org/t/p/w185/"+ item.poster_path +"\">");
					
					});
						$(".imges").append(img_mv).html();
				});
				$.getJSON(searchurl+"tv?api_key="+apikey+"&language=en-US&query="+query+"&page=1", function(data) {
					$.each(data.results, function (i, item) {
						img_tv += ("<img onclick=\"seasoninfo("+item.id+")\" class=\"nigga\" src=\"http://image.tmdb.org/t/p/w185/"+ item.poster_path +"\">");
					
					});
						$(".imges").append(img_tv).html();
				});
};

function getLiveTV() {
$('.nigga').remove();
		$('.removemepls').remove();
	var proxy = 'https://cors-anywhere.herokuapp.com/';
  var jsonfile = "https://raw.githubusercontent.com/Patricks-Corner/ideal-meme/master/listGER.json"
  var spongeboymebob;
  var srcvideo;

  $.getJSON(jsonfile, function(data) {

      $.each(data, function(i, sub) {

          spongeboymebob += ("<option value="+sub.url+">"+sub.channel+"</option>");

      });

        $("#mebuttons").append(spongeboymebob).html();
  });

function chanChange() {
  var x = document.getElementById("mebuttons").value;
  getstream(x);
}

function getstream(srcvideo) {
  var video = document.getElementById('video');
  if(Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(srcvideo);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }
 
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
    video.addEventListener('loadedmetadata',function() {
      video.play();
    });
  }
}

};