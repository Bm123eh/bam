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

$.fn.popUp = function(a, b) {
return this.each(function() {
let duration = 400, display = 'block';
if (typeof a === 'number') {
duration = a;
if (typeof b === 'string') display = b;
} else if (typeof a === 'string') {
display = a;
}
$(this).css({
'transform': 'scale(0)',
'display': display,
'transition': `transform ${duration}ms`
});
setTimeout(() => {
$(this).css('transform', 'scale(1)');
}, 50);
});
};

$.fn.addFilter = function(value = '5px') {
  return this.each(function() {
    const $target = $(this);
    const filterValue = (typeof value === 'string' && value.includes('px')) ? value : `${value}px`;
    $('body *').not($target.add($target.find('*'))).css('filter', `blur(${filterValue})`);
  });
};

$.fn.popDown = function(duration = 400) {
return this.each(function() {
$(this).css({
'transform': 'scale(1)',
'transition': `transform ${duration}ms`
});
setTimeout(() => {
$(this).css('transform', 'scale(0)');
}, 10);
setTimeout(() => {
$(this).css('display', 'none');
}, duration + 10);
});
};

$.fn.togglePop = function(a, b) {
return this.each(function() {
const $el = $(this);
let duration = 400, display = 'block';

if (typeof a === 'number') {
duration = a;
if (typeof b === 'string') display = b;
} else if (typeof a === 'string') {
display = a;
}

if (!$el.is(':visible')) {
$el.popUp(duration, display);
} else {
$el.popDown(duration);
}
});
};

$.fn.zI = function(a = 'auto') {
return this.each(function() {
$(this).css('z-index', a);      
   });
};

$.fn.transxPx = function(a = 0) {
  if (a === undefined) {
let b = window.getComputedStyle(this[0]).transform;
if (b === 'none') return 0;
let c = b.split(',');
let d = parseFloat(c[4].trim());
    return d;
}
return this.each(function() {
let b = window.getComputedStyle(this).transform;
let c;
if (b === 'none') {
  c = ['1', '0', '0', '1', '0', '0'];
} else {
  b = b.replace('matrix(', '').replace(')', '');
  c = b.split(',');
}
  let aa = parseFloat(c[0].trim());
  let bb = parseFloat(c[1].trim());
  let cc = parseFloat(c[2].trim());
  let dd = parseFloat(c[3].trim());
  let ee = parseFloat(c[5].trim());
  $(this).css('transform', `matrix(${aa},${bb},${cc},${dd},${a},${ee})`);
});
};

$.fn.transxPt = function(a = 0) {
  if (a === undefined) {
let b = window.getComputedStyle(this[0]).transform;
if (b === 'none') return 0;
let c = b.split(',');
let d = parseFloat(c[4].trim());
let e = this.outerWidth();
let f = (d / e) * 100;
return f;
    
  }
return this.each(function() {
let e = $(this).outerWidth();
let h = (a / 100) * e;
let b = window.getComputedStyle(this).transform;
let c;
if (b === 'none') {
  c = ['1', '0', '0', '1', '0', '0'];
} else {
  b = b.replace('matrix(', '').replace(')', '');
  c = b.split(',');
}
  let aa = parseFloat(c[0].trim());
  let bb = parseFloat(c[1].trim());
  let cc = parseFloat(c[2].trim());
  let dd = parseFloat(c[3].trim());
  let ee = parseFloat(c[5].trim());
  $(this).css('transform', `matrix(${aa},${bb},${cc},${dd},${h},${ee})`);
});
};

$.fn.transyPx = function(a = 0) {
  if (a === undefined) {
let b = window.getComputedStyle(this[0]).transform;  
if (b === 'none') return 0;
let c = b.split(',');
let d = parseFloat(c[5].trim());
    return d;
    
}
return this.each(function() {
let b = window.getComputedStyle(this).transform;
let c;
if (b === 'none') {
  c = ['1', '0', '0', '1', '0', '0'];
} else {
  b = b.replace('matrix(', '').replace(')', '');
  c = b.split(',');
}
  let aa = parseFloat(c[0].trim());
  let bb = parseFloat(c[1].trim());
  let cc = parseFloat(c[2].trim());
  let dd = parseFloat(c[3].trim());
  let ee = parseFloat(c[4].trim());
  $(this).css('transform', `matrix(${aa},${bb},${cc},${dd},${ee},${a})`);
});
}

$.fn.transyPt = function(a = 0) {
  if (a === undefined) {
let b = window.getComputedStyle(this[0]).transform;
if (b === 'none') return 0;
let c = b.split(',');
let d = parseFloat(c[5].trim());
let e = this.outerHeight();
let f = (d / e) * 100;
return f;
    
  }
return this.each(function() {
let e = $(this).outerHeight();
let h = (a / 100) * e;
let b = window.getComputedStyle(this).transform;
let c;
if (b === 'none') {
  c = ['1', '0', '0', '1', '0', '0'];
} else {
  b = b.replace('matrix(', '').replace(')', '');
  c = b.split(',');
}
  let aa = parseFloat(c[0].trim());
  let bb = parseFloat(c[1].trim());
  let cc = parseFloat(c[2].trim());
  let dd = parseFloat(c[3].trim());
  let ee = parseFloat(c[4].trim());
  $(this).css('transform', `matrix(${aa},${bb},${cc},${dd},${ee},${h})`);
});
};

$.fn.transPx = function(a = 0, b = 0) {
return this.each(function() {
$(this).transxPx(a).transyPx(b)    
   });
};

$.fn.transPt = function(a = 0, b = 0) {
return this.each(function() {
$(this).transxPt(a).transyPt(b)    
   });
};

$.fn.centered = function(a = 'rel') {
return this.each(function() {
if(a == 'flex'){
$(this).parent().flex().css({
    'justify-content': 'center',
    'align-items': 'center'
})
}else if(a == 'abs'){
$(this).css({
    'top': '50%',
    'left': '50%'
}).transPt(-50,-50).pos('abs').parent().pos('rel');
}else{
let x = $(window).outerWidth(); 
let y = $(window).outerHeight();   
let m = $(this).outerWidth();
let n = $(this).outerHeight();
let e = (x - m) / 2;
let f = (y - n) / 2;
$(this).css({
    'top': f,
    'left': e
}).pos('rel');
}
   });
};

$.fn.time = function(a = 'all', b = 500, c = 'linear') {
if (a == undefined || a == null) {
return this.each(function() {
$(this).css('transition', 'none');
});
}
if (typeof b === 'number') b = b + 'ms';  
return this.each(function() {
$(this).css('transition', `${a} ${b} ${c}`);
  });
};

$.fn.pos = function(a = 'sta') {
return this.each(function() {
if(a == 'rel'){
$(this).css('position', 'relative');  
}else if(a == 'abs'){
$(this).css('position', 'absolute');
}else if(a == 'fix'){
$(this).css('position', 'fixed');
}else if(a == 'sti'){
$(this).css('position', 'sticky');
}else{
$(this).css('position', 'static');
}
   });
};

$.fn.param = function(a = 'alert') {
 return this.each(function() {
  const $el = $(this);
let transX1 = $el.transxPx();
let transX2 = $el.transxPt();
let transY1 = $el.transyPx();
let transY2 = $el.transyPt();  
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
          '\nX-Axis: ' + transX1 + 'px || ' + transX2 + '%' +
          '\nY-Axis: ' + transY1 + 'px || ' + transY2 + '%' +
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
