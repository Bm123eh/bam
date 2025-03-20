$.fn.flex = function() {
return this.each(function() {
$(this).css("display", "flex");
});
};

$.fn.wd = function(a) {
return this.each(function() {
$(this).css('width', a);      
   });
};

$.fn.ht = function(a) {
return this.each(function() {
$(this).css('height', a);      
   });
};

$.fn.bg = function(a) {
return this.each(function() {
$(this).css('background', a);      
   });
};

$.fn.flexToggle = function(animate = false, duration = 400, callback = () => {}) {
 return this.each(function() {
  const $el = $(this);
  if ($el.css("display") === "none") {
   if (animate) {
    $el.css("display", "flex").hide().slideDown(duration, callback);
   } else {
    $el.css("display", "flex");
    callback();
   }
  } else {
   if (animate) {
    $el.slideUp(duration, function() {
     $el.css("display", "none");
     callback();
    });
   } else {
    $el.css("display", "none");
    callback();
   }
  }
 });
};

$.fn.flexDown = function(duration = 400) {
 return this.each(function() {
  const $el = $(this);
   $el.css("display", "flex").hide().slideDown(duration);
 });
};


$.fn.visible = function() {
return this.each(function() {
$(this).css('overflow', 'visible');      
   });
};

$.fn.scroll = function() {
return this.each(function() {
$(this).css('overflow', 'scroll');      
   });
};

$.fn.hidden = function() {
return this.each(function() {
$(this).css('overflow', 'hidden');      
   });
};

$.fn.time = function(a, b = 'linear') {
return this.each(function() {
$(this).css('transition', `${a} ${b}`);
});
};

$.fn.flexToggle = function() {
return this.each(function() {
let a = $(this).css('display');
$(this).css('display', a == 'flex' ? 'none' : 'flex');
    });
};

$.fn.flexCenter = function() {
return this.each(function() {
$(this).css({
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
});      
   });
};

$.fn.borderR = function(a) {
return this.each(function() {
$(this).css('border-radius', a);      
   });
};

$.fn.borderC = function(a) {
return this.each(function() {
$(this).css('border-color', a);      
   });
};

$.fn.border = function(a) {
return this.each(function() {
$(this).css('border', a);      
   });
};

$.fn.color = function(a) {
return this.each(function() {
$(this).css('color', a);      
   });
};

$.fn.translateX = function(a) {
 return this.each(function() {
let value = a;
if (typeof a === 'string' && a.includes('%')) {
let percentage = parseFloat(a) / 100;
let elementWidth = $(this).outerWidth();
value = elementWidth * percentage + 'px';
  }
$(this).css('transform', `translateX(${value})`);
 });
};

$.fn.translateY = function(a) {
 return this.each(function() {
  $(this).css('transform', `translateY(${a}px)`);      
 });
};

$.fn.time = function(a = 'all', b = 500, c = 'linear') {
if (a === false) {
return this.each(function() {
$(this).css('transition', 'none');
});
}
if (typeof b === 'number') b = b + 'ms';  
return this.each(function() {
$(this).css('transition', `${a} ${b} ${c}`);
  });
};


$.fn.param = function(a = 'alert') {
 return this.each(function() {
  const $el = $(this);
  const transform = $el.css('transform');
  let translateX = 0, translateY = 0;

  if (transform && transform !== 'none') {
   const values = transform.match(/matrix.*(.+)/)[1].split(', ');
   translateX = parseFloat(values[4]);
   translateY = parseFloat(values[5]);
  }

  // Check visibility (Yes/No)
  let visibility = $el.is(':visible') ? 'Yes' : 'No';

  // Get parent
  let parent = $el.parent();
  let parentIdentifier = parent.length ? (parent.attr('class') ? '.' + parent.attr('class').split(' ')[0] : parent.attr('id') ? '#' + parent.attr('id') : 'No Parent') : 'No Parent';

  // Get previous and next elements
  let prev = $el.prev();
  let next = $el.next();

  function getIdentifier(el) {
   return el.length ? (el.attr('class') ? '.' + el.attr('class').split(' ')[0] : el.attr('id') ? '#' + el.attr('id') : '<' + el.prop('tagName').toLowerCase() + '>') : 'None';
  }

  let divBefore = getIdentifier(prev);
  let divNext = getIdentifier(next);

  let x = 'Width: ' + $el.outerWidth() + 
          ' Height: ' + $el.outerHeight() + 
          '\nBackground: ' + $el.css('background-color') + 
          '\nColor: ' + $el.css('color') + 
          '\nBorderRadius: '  + $el.css('border-radius') + 
          '\nBorder: ' + $el.css('border') + 
          '\nMargin: ' + $el.css('top') + ' ' + $el.css('left') + ' ' + $el.css('bottom') + ' ' + $el.css('right') + 
          '\nDisplay is ' + $el.css('display') + ' with ' + $el.css('justify-content') + 
          '\nPosition: ' + $el.css('position') + 
          '\nX-Axis: ' + translateX + 
          '\nY-Axis: ' + translateY +
          '\nVisible?: ' + visibility + 
          '\nOverflow: ' + $el.css('overflow') + 
          '\nParent: ' + parentIdentifier +
          '\nSee Between: ' + divBefore + ' and ' + divNext;

  if(a == 'console'){
   console.log(x);
  } else if(a == 'alert'){
   alert(x);
  } else {
   console.warn('.param() uses two parameters: "alert" for alert() or "console" for console.log()');
  }
 });
};