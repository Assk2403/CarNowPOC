$(document).ready(function(){
	$("#sidebarToggle").on('click',function(e) {
			e.preventDefault();
			
			$(".sidebar").toggleClass("open");
	});
});