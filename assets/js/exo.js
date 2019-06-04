function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgb(60, 60, 60)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "rgb(60, 60, 60)";
}
function about() {
	alert('IcyViewR \n (c) 2019 duckforce1 \n\n\n This product uses the TMDb API but is not endorsed or certified by TMDb. \n\n Official Download on GitHub only', 'About')
}

function License() {
	alert('Licensed under the MIT License \n\n\n MIT License \n \n Copyright (c) 2019 duckforce1 \n Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n \n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n \n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.', 'License')
}

		var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";


function patchnotes() {
	alert('New in v.2.4 \n - completely overhauled UI \n - minor optimizations \n\n\n New in v 2.3 \n - added IMDb ID search bar \n - added experimental secondary UI powered by cine.to (it don\'t work though :( )\n - Renamed Project to IcyViewR \n\n\n\nNew in v 2.2.1 \n - Reenabled Search \n - Search results now display in an iframe \n\n\n New in v2.2 \n - More menu options \n - Added built-in Patch Notes viewer \n - Switched search provider back to odb.to for CAPTCHA reasons \n - added secondary stream provider \n - burning series stream (german site. !! HAS CAPTCHAS AND ADS [you can make an account to hide the ads]!! \n - Streams open in a new window, you must close them individually \n - Direct Search and Search functions have been temporarily disabled \n' , 'Patch Notes')
}
function steve(){
	window.open("https://bs.to", '_blank', 'frame=0', 'close=yes')
}
function stevey(){
	window.open("https://scr.cr", '_blank', 'frame=0', 'close=yes')
}

jQuery(document).ready(function(){
    jQuery('.scrollbar-macosx').scrollbar();
});