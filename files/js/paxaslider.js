(function( $ ){

  $.fn.paxaSlider = function(options){
    var self = this;
    this.son = (options && options.son) ? $(options.son) : this.children('*');
    this.ElementsLength= this.son.length;
    this.bullet='<div class="bullet_slider_px"></div>';
    this.bulletHolder='<div class="container_bullets_px"></div>';
    this.seconds= (options && options.seconds)? (options.seconds*1000) : 5000;
    this.bulletEl = null;
    this.intervalBanner = null;
    this.position = (options && options.random) ? Math.random() * this.ElementsLength | 0 : 0;

    this.bulletInsert = function(){
      self.append(this.bulletHolder);
      for (var i = 0; i < this.ElementsLength; i++) {
        self.children('.container_bullets_px').append(this.bullet);
      }
    };
    
    this.classModifier = function(s){
      this.bulletEl= $('.bullet_slider_px');
      this.bulletEl.removeClass('active_bullet');
      this.bulletEl.eq(s).addClass('active_bullet');
      this.addClass('slider_wrapper_px');
      self.son.addClass('son_slider_px');
      self.son.not(self.son.eq(s)).fadeOut('fast');
      self.son.eq(s).fadeIn('fast');
    };

    this.bannerCarousel = function(){
      if(self.position==(self.ElementsLength-1)){
        self.position=0;
        self.classModifier(self.position);
      }else{
        self.position++;
        self.classModifier(self.position);
      }
    };

    this.init = function(){
      this.bulletInsert();
      this.classModifier(self.position);
      this.intervalBanner = setInterval(this.bannerCarousel, this.seconds);

      $(document).on('click','.bullet_slider_px', function() {
        self.position = $(this).index('.bullet_slider_px');
        self.classModifier(self.position);
        clearInterval(self.intervalBanner);
        self.intervalBanner = setInterval(self.bannerCarousel, self.seconds);
      });
    
    };
    this.init()
    return this;
  };

})( jQuery );