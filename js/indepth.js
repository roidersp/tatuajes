var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="animated-football-league";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

var numeroImages2=8;
 var slider_on2=false;
 var intervalID2;
var posicion_slider2=0;
var share;

$(document).on("touchstart click", ".indepth_share_logos_item" ,function(){
	
	var team=$(this).attr("red");
	share=team;
	var text='¡Yo le voy '+team+' FC! ¿Y tú a quién escoges? Conoce a todos los equipos de la Social Network Football League';
	var url='http://juanfutbol.com/indepth/animated-football-league?playeras_redes='+team+'&image='+urlIndepth+'images/'+team+'-Descarga.png';
	var img='<img src="'+urlIndepth+'images/'+team+'-Descarga.png">';
	var title='¡Yo le voy a '+nombres[team]+'  FC!';
		$("#indepth_share_card #indepth_share_image").html(img);
		$("#indepth_share_card #indepth_share_title").html(title);
		$("#indepth_share_card .indepth_share_text").html(frases[team]+'No dejes de compartir tu elección de la Animated Football League.');
		$(".indepth_share_big_content").css("display","table");
		$("html,body").css("overflow","hidden");
		$("html,body").css("position","relative");
		
	});
	
	
	$(document).on("click", "#indepth_share_twiiter", function(){
		var text = encodeURIComponent(frases[share]+" ¡Yo le voy a "+nombres[share]+" FC! Conoce las escuadras de la Animated Football League");
		if(share=="JACK"){
			var text = encodeURIComponent("¡Yo le voy a "+nombres[share]+" FC! Conoce las escuadras de la Animated Football League");
			
		}
		
		if(share=="MONSTER"){
			var text = encodeURIComponent("Wazowski está feliz con tu incorporación. ¡Monsters FC! Conoce todas las escuadras de la Animated Football League");
		}
		var url = encodeURIComponent("http://juanfutbol.com/indepth/animated-football-league");
		window.open("https://twitter.com/share?text="+text+"&url="+url,"","width=500, height=300");
		}
	);
	
	$(document).on("click", "#indepth_share_fb", function(){
		var text=frases[share]+" ¡Yo le voy a "+nombres[share]+" FC! ¿Quieres ser parte del equipo? Conoce todas las escuadras de la Animated Football League";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/animated-football-league?text="+text+"&image="+urlIndepth+"images/"+share+"-Descarga.png");
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");

	});
	
	$(document).on("click","#indepth_card_close",function(){
		$("html,body").css("overflow","auto");
		$(".indepth_share_big_content").hide();
	});
	
	$(document).on("click",".indepth_share_big_content",function(e){
		console.log(e.target.id);
		 if (e.target.id != '#test' && !$('#test').find(e.target).length) {
	        $(".indepth_share_big_content").hide();
	        $("html,body").css("overflow","auto");
	    }
	})

		
	
	

	



$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});
	
	
	
	
	$(document).on("click",".indepth_menu_item",function(){
		 var num_menu=$(this).attr("num");
		 var position = $("#indepth_page"+num_menu).position();
		 
		 if(detect_mobile()){
			 f_top=position.top+60;
		 }else{
			 f_top=position.top+60;
		 }
		$('html, body').animate({
			scrollTop: f_top
		}, 000);
		$(".indepth_menu_item").removeClass("active");
		 $("#indepth_menu_"+num_menu).addClass("active");	
	 });

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}



var indepth_menu=function(){
	$('.indepth_cover').waypoint(function(direction) {
		$(".indepth_share").fadeOut();
	});
	
	 $('#indepth_page1').waypoint(function(direction) {
		 if(direction=='down'){
			 $(".indepth_share").fadeIn("slow");
		 }else{
			  $("#indepth_menu").fadeOut();
		 }
		 
		  $(".indepth_share").show();
		 
		
	});
	
	 $('#indepth_footer').waypoint(function(direction) {
		 if(direction=='down'){
			 $(".indepth_share").fadeOut("slow");
		 }else{
			  $(".indepth_share").fadeIn("slow");
		 }
		 
		
	},{offset: 'bottom-in-view'});
	
	
	
	
	$(".indepth_page_content").waypoint(function(direction){
		 $(".indepth_share").show();
	},{offset: '70px'});
	
	$(".indepth_page_content").waypoint(function(direction){
		 $(".indepth_share").show();
		 
	},{offset: 'bottom-in-view'});
	
	$("#indepth_page_content").waypoint(function(direction){
	},{offset: 'bottom-in-view'});
	
	 
	 

}



var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	var ventana_alto = $(window).height();
	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    	$('.indepth_container_cover').css("height",(ventana_alto-100)+"px");
    	 if(ventana_alto>600){


	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.30);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		//$('#indepth_cover').css("height",(ventana_alto-60)+"px");
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	var ventana_alto = $(window).height();
	$('.indepth_container_cover').css("height",(ventana_alto)+"px");
    	//$('#indepth_cover').css("height",(ventana_alto-60)+"px");
    	 if(ventana_alto>600){
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.30);
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})