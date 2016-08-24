'use strict';
const chars = 'Coming soon...'.split('');

function type() {
  if (chars.length != 0) {
    setTimeout(function() {
      let oldhtml = $('div').html();
      let newhtml = oldhtml + chars.shift();
      $('div').html(newhtml);
      type();
    }, (Math.random() * 300) + 50);
  } else {
    let oldhtml = $('div').html();
    let newhtml = oldhtml + '_';
    $('div').html(newhtml);
    blink(false);
  }
}

function blink(underscore) {
  setTimeout(function() {
    let oldhtml = $('div').html();
    let newhtml;
    if (underscore) {
      // this feels so dirty
      newhtml = oldhtml.substring(0, oldhtml.length-6) + '_';
    } else {
      newhtml = oldhtml.substring(0, oldhtml.length-1) + '&nbsp;';
    }

    $('div').html(newhtml);

    blink(!underscore);
  }, 1000);
}

type();
