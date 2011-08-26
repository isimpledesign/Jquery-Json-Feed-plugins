(function($){
    $.fn.extend({ 
        //plugin name - scrollMe
        jsfeed: function(options) {
 
            var defaults = {
				feedUrl: 'http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=liverpool&max-results=24&orderby=published&time=today', // the url to the feed you need to pul in
				axis: 'vertical', // the axis horizontal or vertical
                scrollWidth: 300, // the scroll width
                scrollHeight: 60, // the scroll height
                speed: "slow", // scroll speed
				items_per_page: 4, // number off items per page
				navClass: "MFSN",
				scrollId: "feedResult"
            };
             
            var options = $.extend(defaults, options);
			
			
			function getFeed(page_index){
				 
					$.getJSON(options.feedUrl+'&callback=?', function(json) {
					    
					     console.log("items"+options.items_per_page);
						 console.log("json"+json.data.items.length);
						 var max_elem = json.data.items.length / options.items_per_page;
						 
						 console.log(max_elem);
						 
						 for (i=0;i<=options.items_per_page;i++){
						 
						 console.log(json);
						 
						 
						 }
										
						
					});

					return false;
					 
			}

			
			
			
			/**
				 * Calculate the maximum number of pages
				 */
				function numPages() {
					return Math.ceil(maxentries/options.items_per_page);
				} 
             
             getFeed();

            return this.each(function() {
			
			     
				 console.log($(this)); 
                 
				 
				 
				
				 
				 
				 
                  
                  
            });
			
			
			
			
        }
    });
})(jQuery);