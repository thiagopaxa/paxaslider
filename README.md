# PaxaSlider

## Yet another Jquery slider, but really easy to adapt

PaxaSlider was made to be an 'easy to configure' Jquery plugin. The features are still coming, but you can use it already.

PaxaSlider is written in Jquery for a better crossbrowser experience (The version in use here is Jquery#1.11).

## Usage in only 3 steps

First you have to download the files 'paxaslider.css' and 'paxaslider.min.js' located in the build folder.

Then you'll have to link it to your HTML page (obviously).

The last step is defining the wrapper element of your slider and calling the method `paxaSlider()` in your main javascript file.

Simple Example:

```
  $('.banner').paxaSlider();
```

Complex Example:

```
  $('.banner').paxaSlider({
    son : '.childElement',
    seconds : 4,
    random: true
  });
```

The slider will create automatic bullets and will be ready to use.

Remembering that the style of your wrapper element is yours to define.