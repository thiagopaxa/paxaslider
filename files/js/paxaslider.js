(function( $ ){
  
  // pointerSliderPaxa creates an unique pointer for each slider, so you can use it more

  var pointerSliderPaxa = 0;
  $.fn.paxaSlider = function(options){
    //'that' is the instance of 'this' inside the other closures
    var that = this;
    pointerSliderPaxa++; //pointer keeps raising, to give the parent an unique class below
    this.parentId = 'uniq_id_px'+pointerSliderPaxa;
    this.addClass('slider_wrapper_px').addClass(that.parentId);

    //If no son is defined, the program will search for all the children of the wrapper element
    this.son = (options && options.son) ? $(options.son) : $('.'+that.parentId+'> *');
    this.ElementsLength= this.son.length;
    
    // Bullet and bullets Wrapper Elements
    this.bullet = {
      balls : {
        class : 'bullet_slider_px',
        element : '<div class="bullet_slider_px"></div>',
        wrapperClass : 'container_bullets_px',
        wrapperElement : '<div class="container_bullets_px"></div>'
      },
      tabs: {
        class :  'labels_bullet_slider_px',
        element :  '<div class="labels_bullet_slider_px"></div>',
        wrapperClass :  'container_labels_px',
        wrapperElement :  '<div class="container_labels_px"></div>'
      },
      idElement : null,
      selector : null
    };

    // the Default time for change is 5 seconds
    this.seconds= (options && options.seconds)? (options.seconds*1000) : 5000;
    // The position can be random or not, if not the first element will always appear on load
    this.position = (options && options.random) ? Math.random() * this.ElementsLength | 0 : 0;
    
    //The method that gives the element the bullets
    this.bulletInsert = function(shape){
      that.append(this.bullet[shape].wrapperElement);
      for (var i = 0; i < this.ElementsLength; i++) {
        $('.'+that.parentId+' .'+that.bullet[shape].wrapperClass).append(this.bullet[shape].element);
      }
      if (shape == 'tabs'){// Here is where the tabs will be inputed
        that.son.each(function(index,el) {
          $('.'+that.parentId+' .labels_bullet_slider_px').eq(index).html($(this).attr('data-tabTitle'))
        });
      };
      this.bullet.idElement = '.'+this.parentId+' .'+this.bullet[shape].class;
      this.bullet.selector = $(this.bullet.idElement);
    };
    //The method that modify the classes
    this.classModifier = function(s){
      this.bullet.selector.removeClass('active_bullet');
      this.bullet.selector.eq(s).addClass('active_bullet');
      this.son.not(this.son.eq(s)).fadeOut('fast');
      this.son.eq(s).fadeIn('fast');
    };

    //The method that changes the positions of the banners and bullets
    this.positionChanger = function(){
      
      if (options && options.contrary) {   
        that.position = (that.position == 0) ? that.ElementsLength-1 : that.position - 1 ;
      }else{
        that.position = (that.position == that.ElementsLength-1) ? 0 : that.position + 1 ;
      }
      
      that.classModifier(that.position);
    
    };

    //The method that provides the bullets you've chosen
    this.bulletChooser = function(){
      if ((options && options.bullet == 'balls') || (!options) || (options && typeof options.bullet == 'undefined')){
        that.bulletInsert('balls');
      }else if((options && options.bullet == 'tabs')){
        that.bulletInsert('tabs');
      }
    };
    this.navigationControl = function(){
      if (options && options.navigation){
        var nav = options.navigation;
        $(document).on('click', nav.left , function(event) {
          that.navigationChanger('backward');
        });
        $(document).on('click', nav.right , function(event) {
          that.navigationChanger('forward');
        });
        // that.classModifier(that.position);
      };
    };
    this.navigationChanger = function(step){
      if (step == 'backward') {
        that.position = (that.position == 0) ? that.ElementsLength-1 : that.position - 1 ;
      }else if(step == 'forward'){
        that.position = (that.position == that.ElementsLength-1) ? 0 : that.position + 1 ;
      }
      that.classModifier(that.position);
      clearInterval(that.intervalBanner);
      that.intervalBanner = setInterval(that.positionChanger, that.seconds);
    
    };
    //the method that initializes everything
    this.init = function(){
      that.bulletChooser();
      that.son.addClass('son_slider_px');
      that.classModifier(that.position);
      that.intervalBanner = setInterval(that.positionChanger, that.seconds);
      that.navigationControl();

      $(document).on('click', that.bullet.idElement, function() {
        that.position = $(this).index(that.bullet.idElement);
        that.navigationChanger();
      });
    
    };

    this.init()
    return this;
  };

})( jQuery );