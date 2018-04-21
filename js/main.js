// Add the copyright date into the footer with jquery
var thisYear = (new Date).getFullYear();
$("#this-year").text(thisYear);


// Prepares print stylesheet by hiding and unhiding elements
$("#print-this-page").on("click", function(){

   // open all panels for printing
   $(".panel-collapse").addClass("in");

   // print the guide header and page header
   $("#print-headings").removeClass("hidden");

   // hide the breadcrumbs
   $("#breadcrumb-nav").addClass("hidden");

   // style the panels

   window.print();

});
