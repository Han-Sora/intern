$(document).ready(function(){
   const path = window.location.pathname.replace("/","").replace(".html","");
    $(`.${path}`).addClass("active")
});