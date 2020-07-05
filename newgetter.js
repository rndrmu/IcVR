$(document).ready(function() {
	var user = localStorage.getItem('settings.user');
	$('#name').html(user);


	if (location.hash.includes('movie')) {
							var fragment = new URLSearchParams(window.location.hash.slice(1));
							var movie_id = fragment.get("movie");
							getInfo(movie_id);
	console.log(movie_id);
} else if (location.hash.includes('show')) {
		var fragment = new URLSearchParams(window.location.hash.slice(1));
		var tv_id = fragment.get("show");
		getInfoTV(tv_id);
} else {
	console.log('Nothing to report!');
}

	console.log('DTV (V1.3) | made by ducc1#1999');
	$body = $("body");
	var modal = document.getElementById("dashboard");
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

$("#stats").click(function() {
	document.getElementById("dashboard").style.display = "block";
		$('#close-dash').click(function() {
				document.getElementById("dashboard").style.display = "none";
		});
});
$('.bookmarkit').click(function() {
		if ( $(this).attr('src') === 'https://duckytv.gq/img/bookmark_outline.png' ) {
			var xhttp = new XMLHttpRequest();
			console.log('Added '+ document.getElementById('title').innerText);
			let name = document.getElementById('title').innerText;
			let domain = location.href;
			let initiator = document.getElementById('name').innerText;
			let desc = document.getElementById('overview').innerText;
			let date = new Date().toISOString();
			let thumb = $('#streamStuff').css('background-image').replace('url(',' ').replace(')',' ');
		
			$(this).attr('src', 'https://duckytv.gq/img/bookmark.png');
			let rnd = Math.random()
			localStorage.setItem(document.getElementById('title').innerHTML, 'add');
		} else {
			console.log('Removed '+ document.getElementById('title').innerHTML);
			$(this).attr('src', 'https://duckytv.gq/img/bookmark_outline.png');
		}




});

	var input = document.getElementById("searchbox");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	 event.preventDefault();
	 document.getElementById("searchbtn").click();
	}


				if (localStorage.getItem("settings.user") === null) {
						localStorage.setItem('settings.user', ' ');
				}
});

$(document).on({

  ajaxStart: function() { $body.addClass("loading"); },
   ajaxStop: function() { $body.removeClass("loading"); }
});
});
const apikey = "47206932c7a5e718453916349a089a65";
const apiurl = "https://api.themoviedb.org/3";
const suchen = "https://api.themoviedb.org/3/search/";
const imdbul = "https://api.themoviedb.org/3/movie/";
const season = "https://api.themoviedb.org/3/tv/";
function getCurrentlyPlaying() {
	$(".imges").empty();
var i;
for (i = 1; i < 20; i++) {


	$.getJSON(apiurl+"/movie/now_playing?api_key="+apikey+"&language=en-US&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getInfo(" +  d.id  +  ")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
			console.log("DTV > API Loaded! > now_playing");
	});
}
}

function getPopular() {
	$(".imges").empty();
var i;
for (i = 1; i < 20; i++) {
	$.getJSON(apiurl+"/movie/popular?api_key="+apikey+"&language=en-US&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getInfo("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
			console.log("DTV > API Loaded! > popular");
	});}}

function getTopRated() {
	$(".imges").empty();
var i;
for (i = 1; i < 20; i++) {

	$.getJSON(apiurl+"/movie/top_rated?api_key="+apikey+"&language=en-US&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getInfo("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
			console.log("DTV > API Loaded! > top_rated");
	});
}
}

function getTopRatedTV() {
	$(".imges").empty();
var i;
for (i = 1; i < 20; i++) {

	$.getJSON(apiurl+"/tv/top_rated?api_key="+apikey+"&language=en-US&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
          							images += ("<img onclick=\"getInfoTV("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
			console.log("DTV > API Loaded! > top_rated > TV");
	});
}
}

function getPopularTV() {
	$(".imges").empty();
var i;
for (i = 1; i < 20; i++) {

	$.getJSON(apiurl+"/tv/popular?api_key="+apikey+"&language=en-US&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
          							images += ("<img draggable=\"false\" onclick=\"getInfoTV("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
        			});
								    $(".imges").append(images).html();
			console.log("DTV > API Loaded! > popular > TV");
	});
}
}




function getInfo(tmdbid) {
	// Get the modal
var modal = document.getElementById("streamStuff");
var span = document.getElementsByClassName("close")[0];
document.getElementById('allSeasons').style.display = "none";
document.getElementById('strmBtn').style.display = "block";
span.onclick = function() {
	modal.style.display = "none";
}
	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var genres = " ";
$.getJSON(imdbul+tmdbid+"?api_key="+apikey, function(imdb) {

		$('#title').html(imdb.title + ' (<i>' + imdb.original_title + '</i>)' );
		window.location.hash = `name=${encodeURIComponent(imdb.title)}&movie=${imdb.id}`;
		$('.modalx').css({'background-image': 'url(https://image.tmdb.org/t/p/w185/'+ imdb.backdrop_path + ' )',
														'background-repeat': 'no-repeat',
														'background-position' : 'center',
  													'background-size': 'cover',
														'height' : '100%',
														'filter' : 'blur(8px)',
   												  '-webkit-filter' :'blur(0px)',})
		$('#overview').html(imdb.overview);
		$('#ratings').html(imdb.vote_average);
		$('#tagline').html(imdb.tagline);

		$.each(imdb.genres, function(i, r) {
					genres += ("<span class=\"label label-default\"> " + r.name + " </span> ")
		});
				$('#genres').html(genres);
});
modal.style.display = "block";

$("#strmBtn").click(function() {
	getStream(tmdbid);
});

}

function getInfoTV(tmdbid) {
	document.getElementById('allSeasons').style.display = "block";
	document.getElementById('strmBtn').style.display = "none";
	$('#allEpisodes').empty();
	$('#allSeasons').empty();
	$('#allSeasons').html("<option value=\"null\" selected>Select</option>");
	// Get the modal
var modal = document.getElementById("streamStuff");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}
	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var genres = " ";
var craters = " ";
var seasoning = " ";
window.currID = tmdbid;

$.getJSON(season+tmdbid+"?api_key="+apikey, function(imdb) {
window.location.hash = `name=${encodeURIComponent(imdb.name)}&show=${imdb.id}`;
	$('#title').html(imdb.name);
	$('.modalx').css({'background-image': 'url(https://image.tmdb.org/t/p/w185/'+ imdb.backdrop_path + ' )',
													'background-repeat': 'no-repeat',
													'background-position' : 'center',
													'background-size': 'cover',
													'height' : '100%',
													'filter' : 'blur(8px)',
													'-webkit-filter' :'blur(0px)',})
		$('#overview').html(imdb.overview);
		$('#ratings').html(imdb.vote_average);
		$('#latestEpisode').html('Latest Episode: '+'S: ' + imdb.last_episode_to_air.season_number+' E: ' + imdb.last_episode_to_air.episode_number + '\n' + imdb.last_episode_to_air.name);

		$('#info').html("<span class=\"label label-info\"> " + imdb.status + " </span>");


		$.each(imdb.genres, function(i, r) {
					genres += ("<span class=\"label label-default\"> " + r.name + " </span> ")
		});
				$('#genres').html(genres);

				$.each(imdb.created_by, function(i, r) {
							craters += ("<span class=\"label label-default\"> " + r.name + " </span> ")
				});
						$('#tagline').html(craters);
//Seasons selector
						$.each(imdb.seasons, function(i, r) {
									seasoning += ("<option class=\"season\" value=\""+r.season_number+"\">"+r.name+"</option>")
						});
								$('#allSeasons').append(seasoning);
});
modal.style.display = "block";
}

function getEpisodes() {
	$('#allEpisodes').empty();
	 window.currSeason = document.getElementById('allSeasons').value

	 var episode = " ";
 	 var url = "https://api.themoviedb.org/3/tv/"+window.currID+"/season/"+window.currSeason+"?api_key=47206932c7a5e718453916349a089a65&language=en-US";


 	 	$.getJSON(url, function(data) {

 	 			$.each(data.episodes, function(i, d) {

 	 					episode += ("<button class=\"episode\" onclick=\"getTVStream("+d.episode_number+")\">"+d.name+"</button>"); });
 	 			$('#allEpisodes').html(episode);
 	 	});

 }

 function getTVStream(episode) {
 	var stream = " ";
	console.log(episode);
	 $.getJSON("https://duckyserver.000webhostapp.com/getticket.php?tvid="+window.currID+"&season="+window.currSeason+"&movid=420", function(data) {
		 var strWindowFeatures = "location=no,height=570,width=520,scrollbars=yes,status=yes";
		 window.open(data.ticket_tv+"&e="+episode, "_blank", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=400,height=350');
	 });
 }

function getStream(currID) {
	var stream = " ";

	 $.getJSON("https://duckyserver.000webhostapp.com/getticket.php?tvid=69420&season=69&movid="+currID, function(data) {
		 window.open(data.ticket_movie, "_blank", 'duccTV - THE BEST STREAMING ON THE PLANET','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=400,height=350');
	 });
}

function Search() {
	$(".imges").empty();
	var query = document.getElementById('searchbox').value;
	var i;
	for (i = 1; i < 5; i++) {

	$.getJSON(suchen+"movie?api_key="+apikey+"&language=en-US&query="+query+"&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
												images += ("<img draggable=\"false\" onclick=\"getInfo("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
							});
										$(".imges").append(images).html();
			console.log("DTV > API Loaded! > search > movie");
	});
	}

	var i;
	for (i = 1; i < 5; i++) {

	$.getJSON(suchen+"tv?api_key="+apikey+"&language=en-US&query="+query+"&page="+i, function(data) {
			var images = " ";
			 $.each(data.results, function(i, d) {
												images += ("<img draggable=\"false\" onclick=\"getInfoTV("+d.id +")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
							});
										$(".imges").append(images).html();
			console.log("DTV > API Loaded! > search > tv");
	});
	}
}

function radioPlay() {
	window.open('./radio.html', "_blank", 'duccTV - THE BEST STREAMING ON THE PLANET','width=400,height=350');
}
function setUName() {
	var temp = document.getElementById("username_field").value;
	localStorage.setItem('settings.user', temp);
		$('#name').html(temp);
};
