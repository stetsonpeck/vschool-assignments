var $j = jQuery.noConflict(); 
$j(document).ready(function() {
	$j("a[href='http://wolverinefp.com/category/current-projects/']").attr('href', 'http://wolverinefp.com/experience/current-project/');
	$j("a[href='http://wolverinefp.com/category/blog/']").attr('href', 'http://wolverinefp.com/blogs/');
	$j( "#market-seg a" ).removeClass( "avia_image" )
 
	 jQuery(function($j){
		$j(".sidebar_right h3.widgettitle").each(function() {
			var html = $j(this).html();
			html = html.replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2");
			$j(this).html(html);
		});
	});
	 jQuery(function($j){
		$j(".main-title a").each(function() {
			var html = $j(this).html();
			html = html.replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2");
			$j(this).html(html);
		});
	});
	var images = $j("#market-seg  img.avia_image")
	, imageCount = images.length
	, counter = 0;
	images.one("load",function(){
 		counter++;
		if (counter == imageCount) {
			grayscale($j('#market-seg  img.avia_image'));
			$j("#market-seg  img.avia_image").hover(
				function () {
					grayscale.reset($j(this));
				}, 
				function () {
					grayscale($j(this));
				}
			);
		}
	}).each(function () {
		if (this.complete) {
			$j(this).trigger("load");
		}
	});
});