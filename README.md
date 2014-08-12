# PaxaSlider

## Yet another Jquery slider, but really easy to adapt

PaxaSlider was made to be an 'easy to configure' Jquery plugin. The features are still coming, but you can use it already.

PaxaSlider is written in Jquery for a better crossbrowser experience (The version in use here is Jquery#1.11).

## Usage in only 3 steps

First you have to download the files 'paxaslider.css' and 'paxaslider.min.js' located in the build folder.

Then you'll have to link it to your HTML page (obviously).

The last step is defining the wrapper element of your slider and calling the method `paxaSlider()` in your main javascript file.

#### Simple Example:

```javascript
  $('.banner').paxaSlider();
```

```html
  <div class="banner">
    <img src="banner-random.jpg" alt="Banner">
    <img src="banner-random1.jpg" alt="Banner">
    <img src="banner-random2.jpg" alt="Banner">
    <img src="banner-random3.jpg" alt="Banner">
  </div>
```


The slider will create automatic bullets and will be ready to use.

#### The Defaults:
The default changing time is 5 seconds,
the default son will be any element in the first degree of hierarchy, like a more sophisticated `$( ".banner > *)`,
the default marker is the ball shaped bullets,
and by default the randomly loaded banner is false.


#### A more Complex Example:

```javascript
  $('.banner').paxaSlider({
    son : '.childElement',
    seconds : 4,
    random: true,
    bullets: 'tabs'
  });
```

As you can see, you can add labels just like the click-ables bullets. but there's a tiny change in the html.

below is the code of what your HTML markup would look like:

```html
  <div class="banner">
    <!-- 
      You can see the data-tabTitle here, the value of this attribute 
      will be passed down to the "tab-bullets"
    -->
    <img class="childElement" data-tabTitle="Label Title" src="banner-random.jpg" alt="Banner">
    <img class="childElement" data-tabTitle="Lorem Ipsum" src="banner-random1.jpg" alt="Banner">
    <img class="childElement" data-tabTitle="Dolor Sit" src="banner-random2.jpg" alt="Banner">
    <img class="childElement" data-tabTitle="Dolor Sit" src="banner-random3.jpg" alt="Banner">
  </div>
```


Remembering that the style of your wrapper element is yours to define.

And the other styles can be redefined for a better match with you interface.