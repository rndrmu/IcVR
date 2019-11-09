$(document).ready(function() { 
	var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
			var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
 });

	var key = "47206932c7a5e718453916349a089a65";
	var tv_url = "https://api.themoviedb.org/3/tv/";
	var mv_url = "https://api.themoviedb.org/3/movie/";


	function getPopular(){
			var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
			var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
		var e="47206932c7a5e718453916349a089a65",a="https://api.themoviedb.org/3/movie/";$(".rmrfnopreserveroot").remove(),$("text").remove(),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=1",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=2",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=3",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=4",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=5",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=6",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=7",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=8",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=9",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()}),$.getJSON(a+"popular?api_key="+e+"&language=en-US&page=10",function(e){var a=" ";$.each(e.results,function(e,t){a+='<img onclick="getinfo('+t.id+')" class="rmrfnopreserveroot" src="https://image.tmdb.org/t/p/w185/'+t.poster_path+'">'}),$(".imges").append(a).html()})}

		function getCurrentlyPlaying() {
				var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
			var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
var key = "47206932c7a5e718453916349a089a65";
	var mv_url = "https://api.themoviedb.org/3/movie/";
$(".statbtn").remove();
$(".rmrfnopreserveroot").remove();  // cleanup of previous searches :)
$("text").remove();

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"now_playing?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

		}

	function getTopRated() {
			var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
			var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
var key = "47206932c7a5e718453916349a089a65";
	var mv_url = "https://api.themoviedb.org/3/movie/";
$(".statbtn").remove();
$(".rmrfnopreserveroot").remove();  // cleanup of previous searches :)
$("text").remove();

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

				$.getJSON(mv_url+"top_rated?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getinfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});

		}

function getinfo(tmdbid) {
	$('.episode').remove();
	$('.OverView').hide();
	$('#seasonchange').hide();
$('.removemepls').remove();
$(".statbtn").remove();
var apikey = "47206932c7a5e718453916349a089a65";
var imdburl = "https://api.themoviedb.org/3/movie/"+tmdbid+"?api_key="+apikey;
var ree;

// Get the modal
var modal = document.getElementById("mv");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


$.getJSON("https://api6.ipify.org/?format=json", function (response) {
var clientIP = response.ip;
  // alert("Your IP is: "+clientIP);
var proxy = 'https://cors-anywhere.herokuapp.com/';
$.get(proxy+"https://videospider.in/getticket.php?key=JhhbVDPq3GIdkhuE&secret_key=a10ro5sbabnvycg0dfn1dn1h7h26bn&video_id="+tmdbid+"&tmbd=1&ip="+clientIP+"", function( data ) {

   ree = data;
$.getJSON(imdburl, function(imdb) {

 // alert(imdb.imdb_id + "\n\n" + imdb.original_title + "\n\n" + imdb.overview);

 $('#mvName').html(imdb.title);
  $('#mvDesc').html(imdb.overview);
   $('.Stream').html("<iframe src=\"https://videospider.stream/getvideo?key=JhhbVDPq3GIdkhuE&video_id="+tmdbid+"&tmdb=1&ticket="+ree+"\" width=\"640\" height=\"360\" allowfullscreen=\"true\" scrolling=\"no\" frameborder=\"0\"></iframe>");
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
		var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
				var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
$(".rmrfnopreserveroot").remove();
$(".statbtn").remove();
			var tv_url = "https://api.themoviedb.org/3/tv/";
			var apikey = "47206932c7a5e718453916349a089a65";

			$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"top_rated?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


};

function seasoninfo(tvid) {
$(".removeme2").remove();
$('.removemepls').remove();
	$('.OverView').show();
	$('.OverView').empty();
	$('#seasonchange').show();
	$('.episode').remove();
	$('.season').remove();
	$('.squigga').empty();
	$('.nigward').empty();
	$('#mvTriviaNShit').empty();
	// S$('.Stream').empty();
	var impo = tvid;

	window.idtv = tvid;


	var key = "47206932c7a5e718453916349a089a65";



	var modal = document.getElementById("mv");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$(".statbtn").remove();
	var stats = " ";
	var info = " ";
	var url = "https://api.themoviedb.org/3/tv/"+impo+"?api_key="+key+"&language=en-US";

		$.getJSON(url, function(data){
info = (data.overview);
				$.each(data.seasons, function(i, d) {

						// var statid = JSON.stringify(d.stationuuid);

						stats += ("<option class=\"season\" value=\""+d.season_number+"\">"+d.name+"</option>");


				});
				$('#seasonchange').append(stats).html();
				$('.OverView').append(info).html();
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

function deleteOldSearchAndGetEpisodes() {
 	$('.episode').remove();
 	 var season = document.getElementById('seasonchange').value
 	 window.seasonNumber = season;
 	 var episode = " ";
 	 var url = "https://api.themoviedb.org/3/tv/"+window.idtv+"/season/"+season+"?api_key=47206932c7a5e718453916349a089a65&language=en-US";


 	 	$.getJSON(url, function(data) {

 	 			$.each(data.episodes, function(i, d) {

 	 					episode += ("<button class=\"episode\" onclick=\"getTVStream("+d.episode_number+")\">"+d.name+"</button>");


 	 			});
 	 			$('.episodes').append(episode).html();
 	 	});

 }

function getTVStream(episode) {
	$('.hi').remove();
	var stream = " ";
	$.getJSON("https://api6.ipify.org/?format=json", function (response) {
var clientIP = response.ip;
  // alert("Your IP is: "+clientIP);
var proxy = 'https://cors-anywhere.herokuapp.com/';
console.log("HERE! :(");
$.getJSON("https://duckyserver.000webhostapp.com/getticket.php?tvid="+window.idtv+"&season="+window.seasonNumber+"&upee="+clientIP, function(data) {
   console.log("HERE! :/");
   ree = data.ticket_tv;
   console.log("HERE! :D");
   $('.Stream').html("<iframe src=\"https://videospider.stream/getvideo?key=JhhbVDPq3GIdkhuE&video_id="+window.idtv+"&tv=1&s="+window.seasonNumber+"&e="+episode+"&tmdb=1&ticket="+ree+"\"width=\"640\" height=\"360\" allowfullscreen=\"true\" scrolling=\"no\" frameborder=\"0\"></iframe>");
   $('#mvDesc').html("<p class=\"removemepls\">"+data.overview+"</p>");
    });
});

}

function getPopularTV() {
		var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
				var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
$(".rmrfnopreserveroot").remove();
$(".statbtn").remove();
			var tv_url = "https://api.themoviedb.org/3/tv/";
			var apikey = "47206932c7a5e718453916349a089a65";

			$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=1", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=2", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=3", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=4", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=5", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=6", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=7", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=8", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=9", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});
						$.getJSON(tv_url+"popular?api_key="+key+"&language=en-US&page=10", function(data) {

							var images = " ";
							
								    $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"seasoninfo("+d.id+")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
				});


};

function getposters() {
			var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
				var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
		$(".statbtn").remove();
		$('.rmrfnopreserveroot').remove();
		$('.removemepls').remove();

		var query = document.getElementById('postersearch').value;
		var searchurl = "https://api.themoviedb.org/3/search/";
		var apikey = "47206932c7a5e718453916349a089a65";

			var img_mv = " ";
			var img_tv = " ";

				$.getJSON(searchurl+"movie?api_key="+apikey+"&language=en-US&query="+query+"&page=1", function(data) {
					$.each(data.results, function (i, item) {
						img_mv += ("<img onclick=\"getinfo("+item.id+")\" class=\"rmrfnopreserveroot\" src=\"http://image.tmdb.org/t/p/w185/"+ item.poster_path +"\">");
					
					});
						$(".imges").append(img_mv).html();
				});
				$.getJSON(searchurl+"tv?api_key="+apikey+"&language=en-US&query="+query+"&page=1", function(data) {
					$.each(data.results, function (i, item) {
						img_tv += ("<img onclick=\"seasoninfo("+item.id+")\" class=\"rmrfnopreserveroot\" src=\"http://image.tmdb.org/t/p/w185/"+ item.poster_path +"\">");
					
					});
						$(".imges").append(img_tv).html();
				});
};

function getLiveTV() {
		var radsch = document.getElementById("searchbx");
radsch.style.display = "none";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "none";
			var radsch = document.getElementById("video");
radsch.style.display = "block";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "block";
$('.rmrfnopreserveroot').remove();
		$('.removemepls').remove();
		$(".statbtn").remove();
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

function getRadioStations() {
				var tradsch = document.getElementById("video");
tradsch.style.display = "none";
			var ttradsch = document.getElementById("mebuttons");
ttradsch.style.display = "none";
		var radsch = document.getElementById("searchbx");
radsch.style.display = "block";
	var radbt = document.getElementById("searchbtn");
radbt.style.display = "block";
$(".rmrfnopreserveroot").remove();  // cleanup of previous searches :)
$("text").remove();
	navigator.__defineGetter__('userAgent', function () {
    return "IcVR-RadioPlugin/Beta"
});
$(".statbtn").remove();
	var stats = " ";
	var url = "https://www.radio-browser.info/webservice/json/stations/topvote/50";

		$.getJSON(url, function(data){

				$.each(data, function(i, d) {

						// var statid = JSON.stringify(d.stationuuid);

						stats += ("<button class=\"statbtn\" onclick=\"playStation('"+d.stationuuid+"')\">"+"<img width=\"25px\" height=\"25px\" src=\""+d.favicon+"\""+"<p>"+d.name+"</p>"+"</button>");

				});
				$('.TopList').append(stats).html();
		});

}
function playStation(stationid) {
	var url = "https://www.radio-browser.info/webservice/v2/json/url/"+stationid;
	$.getJSON(url, function(data) {
		$(".player").html("<p>"+data.name+"</p><br><audio src= "+data.url+" controls autoplay></audio>");   
	});
}
 
function statSearch() {
	$(".statbtn").remove();
	var term = document.getElementById('searchbx').value;
	var url = "https://www.radio-browser.info/webservice/json/stations/byname/"+term;
	var searchreturn = " ";
	$.getJSON(url, function(data) {
		$.each(data, function(i, d) {
			searchreturn += ("<button class=\"statbtn\" onclick=\"playStation('"+d.stationuuid+"')\">"+"<img width=\"25px\" height=\"25px\" src=\""+d.favicon+"\""+"<p>"+d.name+"</p>"+"</button>");
		});
		$('.TopList').append(searchreturn).html();
	});
}