$(document).ready(function() {
    
    $('#button_winter_zomer').click(function(){
        
        // dit is de button
        if ($(this).hasClass('zomer')) {
            $(this).removeClass('zomer').addClass('winter');
        }
        
        else {
            $(this).removeClass('winter').addClass('zomer');
        }
        
        // dit is de lucht
        if ($('#sky').hasClass('sky_winter')) {
            $('#sky').removeClass('sky_winter').addClass('sky_zomer');
        }
        else {
            $('#sky').removeClass('winter').addClass('sky_winter');
        }
        
        // zon aan/uit
        if ($('.sun_center').hasClass('visible')) {
            $('.sun_center').removeClass('visible');
            
        } else {
            $('.sun_center').addClass('visible');
        }
        
        // sneeuwvlokken aan/uit
        if ($('.img_flake1, .img_flake2, .img_flake3').hasClass('visible')) {
            $('.img_flake1, .img_flake2, .img_flake3').removeClass('visible');
        } else {
            $('.img_flake1, .img_flake2, .img_flake3').addClass('visible');
        }
        
    });
    
    // bewegende zon en vallende sneeuw
    setInterval(function(){loop()}, 750);
    function loop() {
        $('.sun_center').animate({height:"150px"},1500).animate({height:"200px"});
        $(".img_flake1, .img_flake2, .img_flake3").animate({marginTop:"675px"},5000).animate({opacity:"0.0"}).animate({marginTop:"-110px"}).animate({opacity:"1.0"});
    }
        
});