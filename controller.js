$(document).ready(function() {

			$(".collapse-item-title", this).click(function() {
				$(this).siblings(".collapse-item-content").slideToggle("slow");
				$(this).find(".icon-down, .icon-up").toggle();
			});


			$(".toggle-button").click(function() {

				$(".navbar-container").slideToggle("fast");
				$(".toggle-button").find(".toggle-open,.toggle-close").toggle();
			});
			
			$(".modal-button").click(function(){
				
				$(".modal-background").show();
				
			});
			
			$(".close").click(function(){
				
				$(".modal-background").hide();
				
			});
			
			$(window).resize(function(){location.reload();});
		});