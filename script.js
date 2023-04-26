window.addEventListener("scroll", function() {   
 var footer = document.querySelector("footer");   
 var height = document.documentElement.scrollHeight - window.innerHeight;   
 var scroll = window.scrollY;   
 if (scroll >= height) { 
  footer.style.display = "block"; 
} 
else { footer.style.display = "none"; } }); 


$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

var i = setInterval(function () {
    
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.display = "inline";

}, 4000);