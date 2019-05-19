/*
function getID() {

var apikey = "47206932c7a5e718453916349a089a65"
var query = document.getElementById('mv_searchbar').value

// var mv_list
self.frames['imdb_wdw'].location.href = "https://api.themoviedb.org/3/search/movie?api_key="+apikey+"&language=en-US&query="+query+"&page=1&include_adult=false"

// var hrd = JSON.parse(mv_list)

// document.getElementById('id_ls').innerHTML = hrd.name + hrd.id
}
*/


//https://api.themoviedb.org/3/movie/"+dec_id+"?api_key="+apikey

 window.$ = window.jQuery = require('jquery');
  window.$ = window.jQuery = require('jquery.js');

function getimdb() {

 window.$ = window.jQuery = require('jquery');
  window.$ = window.jQuery = require('jquery.js');

  var apikey = "47206932c7a5e718453916349a089a65";
  var tmdbid = document.getElementById('tmdb_id').value;

  var imdbidurl = "https://api.themoviedb.org/3/movie/"+tmdbid+"?api_key="+apikey;

  $.getJSON(imdbidurl, function(data) {

    $('#imdb_id_return').html(data.imdb_id);
    $('#imdb_title_return').html(data.original_title);

  });


}


/*function test() {
  var apikey = "47206932c7a5e718453916349a089a65"
  var query = document.getElementById('mv_searchbar').value
  var obj, obj2, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "name", limit: 20 };
obj2 = { table: "id", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    txt += "</table>"
    document.getElementById("id_ls").innerHTML = txt;
  }
};
xmlhttp.open("POST", "https://api.themoviedb.org/3/search/movie?api_key="+apikey+"&language=en-US&query="+query+"&page=1&include_adult=false", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
}
*/