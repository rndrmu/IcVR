$(document).ready(function() {
    console.log(`dtv v3.0-alpha ready! | `);
});
const baseurl = "https://api.themoviedb.org/3";
const tmdb_apikey = "47206932c7a5e718453916349a089a65";
const dtv = {
    version: "3.0-alpha",
        get: {
            movie: {
                posters: (endpoint) => {
                        for(var i = 1; i < 20; i++) {

                            $.getJSON(`${baseurl}/movie/${endpoint}?api_key=${tmdb_apikey}&language=en-US&page=${i}`, function(data) {

                                var images = " ";
                                $.each(data.results, function(i, d) {
                                        images += ("<img onclick=\"dtv.get.movie.stream(" +  d.id  +  ")\" class=\"rmrfnopreserveroot\" src=\"https://image.tmdb.org/t/p/w185/"+ d.poster_path +"\">");
                                       });
                                        $(".imges").append(images).html();
                                    
                                
                               console.log(`DTV > API Loaded! > ${endpoint}`);

                            } );

                        }
                            
                },

                stream: (id) => {
                    // legacy shit i cba to change
                    var modal = document.getElementById("streamStuff"); var span = document.getElementsByClassName("close")[0]; document.getElementById('allSeasons').style.display = "none"; document.getElementById('strmBtn').style.display = "block";span.onclick = function() { modal.style.display = "none"; }; window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }
                    var genres = " ";
                    $.getJSON(`${baseurl}/movie/${id}?api_key=${tmdb_apikey}`, function(data) {
                        $('#title').html(`${data.title} (<i>${data.original_title}</i>)`);
                        window.location.hash = `movie=${id}`;
                    
                        $('#overview').html(data.overview);
                        $('#ratings').html(data.vote_average);
                        $('#tagline').html(data.tagline);
    
                        $.each(data.genres, function(i, r) {
                            genres += ("<span class=\"label label-default\"> " + r.name + " </span> ")
                });
                        $('#genres').html(genres);

                    })
                    modal.style.display = "block";

                    $.getJSON("https://duckyserver.000webhostapp.com/getticket.php?tvid=69420&season=69&movid=" + id, function(data) {
                        window.open(data.ticket_movie, "_blank", 'duccTV - THE BEST STREAMING ON THE PLANET','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=400,height=350');
                    });
                   

                }
            },

            tv: {
                posters: (endpoint) => {
                    for(var i = 1; i < 20; i++) {

                        $.getJSON(`${baseurl}/movie/${endpoint}?api_key=${tmdb_apikey}&language=en-US&page=${i}`, function(data) {

                        })

                    }
                }
            }
        }
}