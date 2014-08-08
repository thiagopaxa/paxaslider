(function( $ ){
  var pointerSliderPaxa = 0;
  $.fn.paxaSlider = function(options){
    pointerSliderPaxa++;
    var that = this;
    this.parentId = 'uniq_id_px'+pointerSliderPaxa;
    this.son = (options && options.son) ? $(options.son) : this.children('*');
    this.ElementsLength= this.son.length;
    this.bullet='<div class="bullet_slider_px"></div>';
    this.bulletHolder='<div class="container_bullets_px"></div>';
    this.seconds= (options && options.seconds)? (options.seconds*1000) : 5000;
    this.bulletEl = null;
    this.intervalBanner = null;
    this.position = (options && options.random) ? Math.random() * this.ElementsLength | 0 : 0;


    this.bulletInsert = function(){
      that.append(this.bulletHolder);
      for (var i = 0; i < this.ElementsLength; i++) {
        that.children('.container_bullets_px').append(this.bullet);
      }
    };
    
    this.classModifier = function(s){
      this.bulletEl= $('.'+that.parentId+' .bullet_slider_px');
      this.bulletEl.removeClass('active_bullet');
      this.bulletEl.eq(s).addClass('active_bullet');
      that.son.not(that.son.eq(s)).fadeOut('fast');
      that.son.eq(s).fadeIn('fast');
    };

    this.bannerCarousel = function(){
      if(that.position==(that.ElementsLength-1)){
        that.position=0;
        that.classModifier(that.position);
      }else{
        that.position++;
        that.classModifier(that.position);
      }
    };

    this.init = function(){
      that.bulletInsert();
      that.addClass('slider_wrapper_px').addClass(that.parentId);
      that.son.addClass('son_slider_px');
      that.classModifier(that.position);
      that.intervalBanner = setInterval(that.bannerCarousel, that.seconds);

      $(document).on('click', '.'+that.parentId+' .bullet_slider_px', function() {
        that.position = $(this).index('.'+that.parentId+' .bullet_slider_px');
        that.classModifier(that.position);
        clearInterval(that.intervalBanner);
        that.intervalBanner = setInterval(that.bannerCarousel, that.seconds);
      });
    
    };
    this.init()
    return this;
  };

})( jQuery );