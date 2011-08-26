(function($){
    $.fn.extend({ 
        //plugin name - scrollMe
        jsfeed: function(options) {
 
            var defaults = {
				feedUrl: 'http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=liverpool&max-results=24&orderby=published&time=today', // the url to the feed you need to pul in
				axis: 'vertical', // the axis horizontal or vertical
                scrollWidth: 300, // the scroll width
                scrollHeight: 100, // the scroll height
                speed: "slow", // scroll speed
				items_per_page: 4, // number off items per page
				navClass: "MFSN",
				scrollId: "feedResult"
            };
             
            var options = $.extend(defaults, options);
			
			
			function getFeed(){
				 
					$.getJSON(options.feedUrl+'&callback=?', function(json) {
					    
					     console.log("items"+options.items_per_page);
						 console.log("json"+json.data.items.length);
						 
						 var max_length = json.data.items.length;
						 var max_elem   = max_length / options.items_per_page - 1;
						 console.log(max_elem);
						 var height = options.scrollHeight * options.items_per_page;
						 console.log(height);
					     var html = '';
						 $.each(json.data.items, function(i, feed) {
						 
						 //console.log(feed);
						 
						 // setup feed vars here
						 var thumbnail = feed.thumbnail.sqDefault;
						 
						 html += '<li style="height:'+options.scrollHeight+'px;"><img src="'+(thumbnail)+'" width="100" height="60"/></li>'; 
						 
						 });
						 
						 // add css to container
						 var cssObj = {
						  'height' : height+'px',
						  'overflow' : 'hidden',
						  'position' : 'relative',
						  'color' : 'rgb(0,40,244)'
						}

						$('#'+options.scrollId).html("<ul style='position:absolute;'>"+html+"</ul>").css(cssObj);
						
						$('#'+options.scrollId).after("<a href='#' id='up'>up</a><span>"+max_elem+"</span><a href='#' id='down'>down</a>");
						
						// up arrow sroll
						$('#up').click(function(){
						
						var position = $("ul").position();

						var scroll = position.top - height;
						
						var overallHeight = options.items_per_page * height;
						
						var test = parseFloat(position.top) + 400;
						
						console.log(test);
						
						console.log(position.top,overallHeight);
						
						if(position.top >= '-'+overallHeight){
						 if($("ul:animated").length==0){
						 $("ul").stop().animate({ 'top': scroll + 'px' }, options.speed );
						 }
						}
						
						return false;
						
						});
						
						// down arrow scroll
						$('#down').click(function(){
			            
						var position = $("ul").position();
						
						var scroll = position.top + height;
						
						console.log(position);
						
						if(position.top != 0){
						 if($("ul:animated").length==0){
						 $("ul").stop().animate({ 'top': scroll + 'px' }, options.speed );
						}
						}
						
						return false;
						
						});
						
					});
					
					
					
					return false;
					 
			}
			
			

			
			getFeed()
			
			
			
			
        }
    });
})(jQuery);