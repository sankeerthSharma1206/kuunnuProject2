//TO DO D: Configure the paths of the five images
var slideimages =[ ];
//TO DO D: Configure URL to the five target links
var slidelinks = [ ];
function gotoshow() {
if (!window.winslide || winslide.closed)
winslide=window.open(slidelinks[index]);
else
winslide.location=slidelinks[index];
winslide.focus();
}
//TO DO E: configure the speed of the slideshow, in milliseconds
var slideshowspeed=;
var index=0;
function slideit() {
//TO DO F: update index so that the image keep rotating for ever
//TO DO G: set the next image in the img tag
setTimeout("slideit()",slideshowspeed);
}