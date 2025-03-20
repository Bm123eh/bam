let VideoPlaying = false, VideoFrameDisplay = false;

var ThisTablet = window.matchMedia( "(min-width: 481px) and (max-width: 800px)" );
var ThisLaptop = window.matchMedia( "(min-width: 801px) and (max-width: 1200px)" );
var ThisDesktop = window.matchMedia( "(min-width: 1201px) and (max-width: 2000px)" );
var ThisTV = window.matchMedia( "(min-width: 2001px) and (max-width: 10000px)" );
var MobileAboveX = window.matchMedia( "(min-width: 801px) and (max-width: 10000px)" );


    
var UserStatus = document.querySelector(".AuthBTN button");
var UserStat = localStorage.getItem("UserStat"); 



$('.navs').not('.Nav4').click(function () {
$('.MemesNavHandler').hide();   
})
$('.navs').click(function () {
$('.FunnyMemesFormHandler, .FunnyPhotoFormHandler, .BGBelowNav, .BGAboveNav').slideUp();
$('.MoreOnMemes, .SelectMemes div').hide();
$('.MoreOnMemes').css({
    'transform': 'rotate(0)',
    'color': 'blue'
})
})

var myNavSwitch;
$('.Nav1').click(function(){
if(AttrNav.value != "1"){
/* FOUND ON DATABASE.JS */
MemesAway_Ajax();
ProfileAway_Ajax();
DisabledNav();
$('.BodyHandler').css('top', '-100vh');
$('.BodyHandler').eq(0).animate({
    top: '0px'
}, EnabledNav); 
setTimeout(function(){
AttrNav.value = "1";
}, 100);   
}
if(VideoPlaying){
$('#MiniVid').click();
}else{
$('.VideoFrame').hide();    
}
});
$('.Nav2').click(function(){
if(AttrNav.value != "2"){
MemesAway_Ajax();
ProfileAway_Ajax();
DisabledNav();
$('.BodyHandler').css('top', '-100vh');
$('.BodyHandler').eq(1).animate({
    top: '0px',
    zIndex: '1'
}, function () {
EnabledNav();
ClickGallery();   
}); 
setTimeout(function(){
AttrNav.value = "2";
}, 100);   
}
if(VideoPlaying){
$('#MiniVid').click();
}else{
$('.VideoFrame').hide();    
}
});
$('.Nav3').click(function(){
if(AttrNav.value != "3"){
MemesAway_Ajax();
ProfileAway_Ajax();
DisabledNav();
forBlogsData();
forDataAnalytic();
$('.BodyHandler').css('top', '-100vh');
$('.BodyHandler').eq(2).animate({
    top: '0px',
    zIndex: '1'
}, EnabledNav); 
setTimeout(function(){
AttrNav.value = "3";
}, 100);   
}
if($('.VideoFrame').css('position') == 'fixed'){
MaximizeTheater();
}
if(VideoFrameDisplay){
$('.VideoFrame').show(); 
}
});
$('.Nav4').click(function(){
$('.MoreOnMemes').flex();
if(AttrNav.value != "4"){
ProfileAway_Ajax();
DisabledNav();
$('.BodyHandler').css('top', '-100vh');
$('.BodyHandler').eq(3).animate({
    top: '0px',
    zIndex: '1'
}, function () {
EnabledNav();
ClickMemes(); 
//truncateContentC();  
}).css('overflow', 'scroll'); 
setTimeout(function(){
AttrNav.value = "4";
}, 100);   
}
if(VideoPlaying){
$('#MiniVid').click();
}else{
$('.VideoFrame').hide();    
}
});
$('.Nav5').click(function(){
if(AttrNav.value != "5"){
MemesAway_Ajax();
DisabledNav();
$('.BodyHandler').css('top', '-100vh');
$('.BodyHandler').eq(4).animate({
    top: '0px',
    zIndex: '1'
}, EnabledNav).css('overflow', 'hidden'); 
setTimeout(function(){
AttrNav.value = "5";
}, 100); 
}
if(VideoPlaying){
$('#MiniVid').click();
}else{
$('.VideoFrame').hide();    
}
});


/* NAVIGATION CONTROL STARS HERE */
$('.mainNav div').click(function () {
$('.mainNav div').removeClass();
$(this).addClass('ActiveNav');
})

$('.SearchBar ion-icon').click(function () {
let x = document.querySelector('.SearchBar input');
/* 300PX TO 600PX */
if(window.matchMedia( "(min-width: 300px) and (max-width: 600px)" ).matches){
if(x.style.width == "" || x.style.width == "0px"){
x.value = "";
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue'
}).animate({
    'width': '100%'
}, 'linear', function () {
$('.SearchBar input').focus();    
}).attr('readonly', false);    
}else{
if(x.value.length > 0){
alert('You Search ' + $('.SearchBar input').val())    
}
}
}
/* 801PX TO 1000PX */
if(window.matchMedia( "(min-width: 801px) and (max-width: 1000px)" ).matches){
if(x.style.width == "" || x.style.width == "0px"){
x.value = "";
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue'
}).animate({
    'width': '100%'
}, 'linear', function () {
$('.SearchBar input').focus();    
}).attr('readonly', false);    
}else{
if(x.value.length > 0){
alert('You Search ' + $('.SearchBar input').val())    
}
}    
}
/* 1001PX TO 1200PX */
if(window.matchMedia( "(min-width: 1001px) and (max-width: 1200px)" ).matches){
if(x.style.width != "100%"){

$('.SearchBar input').animate({
    'width': '100%'
}, 'linear', function () {
$('.SearchBar input').focus();    
}).attr('readonly', false);    
}else{
if(x.value.length > 0){
alert('You Search ' + $('.SearchBar input').val())    
}
}    
}
/* 1201PX TO 1400PX */
if(window.matchMedia( "(min-width: 1201px) and (max-width: 1400px)" ).matches){
if(x.style.width == "" || x.style.width == "0px"){
x.value = "";
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue'
}).animate({
    'width': '100%'
}, 'linear', function () {
$('.SearchBar input').focus();    
}).attr('readonly', false);    
}else{
if(x.value.length > 0){
alert('You Search ' + $('.SearchBar input').val())    
}
}    
}
})
$('.SearchBar input').focus(function () {
if(window.matchMedia( "(min-width: 1001px) and (max-width: 1200px)" ).matches){
$(this).css({
'width':'100%',
'transition': '0.4s linear'
});    
}
if(window.matchMedia( "(min-width: 1401px) and (max-width: 1900px)" ).matches){
$(this).css({
    'width': '100%',
    'transition': 'width 0.4s linear'
});
}
if($(this).val().length > 0){
$(this).select();
}
})

$('.SearchBar input').blur(function () {
/* 300PX TO 600PX */
/* 801PX TO 1000PX */
/* 1201PX TO 1400PX */
if(window.matchMedia( "(min-width: 300px) and (max-width: 600px)" ).matches || window.matchMedia( "(min-width: 801px) and (max-width: 1000px)" ).matches || window.matchMedia( "(min-width: 1201px) and (max-width: 1400px)" ).matches){
$(this).animate({
'width': '0'
}, '400', 'linear', function () {
$(this).css({
    'borderColor': 'transparent',
    'background': 'transparent',
    'color': 'transparent'
})
}).attr('readonly', true);  
}
/* 1001PX TO 1200PX */
if(window.matchMedia( "(min-width: 1001px) and (max-width: 1200px)" ).matches){
$(this).css({
    'width': 'clamp(6.25rem, -9.4692rem + 25.1256vw, 9.375rem)',
    'transition': 'width 0.4s linear'
});   
}
/* 1401PX TO 1900PX */
if(window.matchMedia("(min-width: 1401px) and (max-width: 1800px)").matches){
  $(this).css({
  'width': 'clamp(10rem, -10.0501rem + 26.7112vw, 20rem)',
  'transition': 'width 0.4s linear'
});
}
})

function NavResponsive() {
/* 200PX TO 600PX */
if(window.matchMedia( "(min-width: 200px) and (max-width: 600px)" ).matches){
$('.AuthBTN').appendTo('.upperNav');  
$('.SearchBar input').css({
    'borderColor': 'transparent',
    'background': 'transparent',
    'color': 'transparent',
    'width': '0px'
}).attr('readonly', true);     
}
/* 601PX TO 800PX */
if(window.matchMedia( "(min-width: 601px) and (max-width: 800px)" ).matches){
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue',
    'width': '100%'
}).attr('readonly', false); 
$('.AuthBTN').appendTo('.upperNav'); 
}
/* 801PX TO 1200PX */
if(window.matchMedia( "(min-width: 801px) and (max-width: 1200px)" ).matches){
$('.SearchBar input').css({
    'borderColor': 'transparent',
    'background': 'transparent',
    'color': 'transparent',
    'width': '0px'
}).attr('readonly', true);       
}
/* 1001PX TO 1200PX */
if(window.matchMedia( "(min-width: 1001px) and (max-width: 1200px)" ).matches){
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue',
    'width': 'clamp(6.25rem, -9.4692rem + 25.1256vw, 9.375rem)'
}).attr('readonly', false);    
}
/* 1201PX TO 1400PX */
if(window.matchMedia( "(min-width: 1201px) and (max-width: 1400px)" ).matches){
$('.SearchBar input').css({
    'borderColor': 'transparent',
    'background': 'transparent',
    'color': 'transparent',
    'width': '0px'
}).attr('readonly', true);    
}
/* 1401PX TO 1800PX */
if(window.matchMedia( "(min-width: 1401px) and (max-width: 1800px)" ).matches){
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue',
    'width': 'clamp(10rem, -10.0501rem + 26.7112vw, 20rem)'
}).attr('readonly', false);    
}
/* 1801PX TO 2500PX */
if(window.matchMedia("(min-width: 1801px) and (max-width: 2500px)").matches){
$('.SearchBar input').css({
    'borderColor': 'blue',
    'background': 'white',
    'color': 'blue',
    'width': '100%'
}).attr('readonly', false);    
}
/* 801PX TO BEYOND */
if(window.matchMedia( "(min-width: 801px)" ).matches){
$('.AuthBTN').prependTo('.lastNav');  
}
$('.BodyHandler').css('padding-top', $('.navHandler').outerHeight());
}

/* RESIZE FUNCTIONS */
let lastWidth = window.innerWidth;
$(window).resize(function () {
let currentWidth = window.innerWidth;

BrowserHeight = window.innerHeight;
$('.VideoFrame').css('padding-top', $('.Blogs').css('padding-top'));   
if (currentWidth !== lastWidth) {
NavResponsive(); 
BlogsResponsive();  
adjustHeight();  
adjustCollage();
adjustPadding();   
} 
})
$(window).ready(function () {
NavResponsive(); 
BrowserHeight = window.innerHeight;
frameHeight = $('.VideoFrame').outerHeight();  
BlogsResponsive();   
$('.VideoFrame').css('padding-top', $('.Blogs').css('padding-top'));    
})
$('.VideoFrame').css('padding-top', $('.Blogs').css('padding-top'));  
NavResponsive();
/* NAVIGATION CONTROL ENDS HERE */

function DisabledNav() {
$('.NavHandler').attr('disabled', true);   
}
function EnabledNav() {
$('.NavHandler').attr('disabled', false);   
}

/* KNOW WHAT ID TO FOCUS */
/* THIS IS TO AVOID P*RN */
$(document).on('focus', '#MemesOwner, #MemesMessage, #FPOwner, #FPCaption, #ContactMessage, #J10D, #J14H', function () {
$('#NameOfInput').val($(this).attr('id'));
})

/* DON'T ALLOW FORBIDDEN WORDS*/
$(document).on('keyup change input', NameOfInput.value, function () {
let y = NameOfInput.value;
if(y){
let z = document.getElementById(y);
let x = z.value.toLowerCase();

let a = "p", b = "o", c = "r", d = "n";
let aa = "h", bb = "a", cc = "c", dd = "k";
if(x.includes(a+b+c+d)){
$(z).val(replaceForbiddenA($(z).val()));
}
if(x.includes(aa+bb+cc+dd)){
$(z).val(replaceForbiddenB($(z).val()));
}    
}
})

function replaceForbiddenA(text) {
const forbiddenWord = 'p' + 'o' + 'r' + 'n';
  const replacement = "p*rn";
  const newText = text.replace(new RegExp(forbiddenWord, 'gi'), replacement);
return newText;
}
function replaceForbiddenB(text) {
const forbiddenWord = 'h' + 'a' + 'c' + 'k';
  const replacement = "h*ck";
  const newText = text.replace(new RegExp(forbiddenWord, 'gi'), replacement);
return newText;
}

function getDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  return `${formattedDate} ${formattedTime}`;
}

function getDateOnly() {
let a = new Date(); 
let b = a.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }); 
  return `${b}`;    
}

function getTimeOnly() {
let a = new Date();
let b = a.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${b}`;    
}

var LoadingLogo = `
<div class="LogoHandler">
<div class="LoadingLogo">
<div class="LogoBe">
<p>B</p><p>e</p>   
</div> 
<div class="LogoAl">
<p>A</p><p>lways</p>   
</div> 
<div class="LogoMi">
<p>M</p><p>ine</p>   
</div>    
</div>  
<h4></h4>
</div>
`;


/* IF TRY AGAIN IN NO INTERNET */
var WifiInterval;    
$(document).on('click', '#TryInt', function () {
CheckOnline();
$('.WoInternet').removeClass('WoInternet');
$('.NoWifiHandler #Loading').show();
$('.NoInt').addClass('hidden');
$('#TryInt').addClass('hidden');
setTimeout(function(){
$('.Innest').css('border-top-color', 'red');    
}, 500);
setTimeout(function(){
$('.Inner').css('border-top-color', '#ff6915');            
}, 1000);
setTimeout(function(){
$('.Outer').css('border-top-color', '#00ff03');            
}, 1500);
setTimeout(function(){
$('.Outest').css('border-top-color', 'blue');            
}, 2000); 
setTimeout(function(){
$('.Innest').css('border-top-color', 'transparent');    
$('.Inner').css('border-top-color', 'transparent');            
$('.Outer').css('border-top-color', 'transparent');            
$('.Outest').css('border-top-color', 'transparent');                
}, 2500);  
WifiInterval = setInterval(function () {
setTimeout(function(){
    $('.Innest').css('border-top-color', 'red');    
}, 500);
setTimeout(function(){
$('.Inner').css('border-top-color', '#ff6915');            
}, 1000);
setTimeout(function(){
$('.Outer').css('border-top-color', '#00ff03');            
}, 1500);
setTimeout(function(){
$('.Outest').css('border-top-color', 'blue');            
}, 2000);
setTimeout(function(){
$('.Innest').css('border-top-color', 'transparent');    
$('.Inner').css('border-top-color', 'transparent');            
$('.Outer').css('border-top-color', 'transparent');            
$('.Outest').css('border-top-color', 'transparent');                
}, 2500);
}, 2500)    
})




function CheckOnline() {
$.ajax({
    url: 'PostData.php',
    type: 'HEAD',
    timeout: '5000',
    success: function() { 
let funcname = Err203.value;
let eventname = Err204.value;
if (!!funcname) {
eval(funcname)();
setTimeout(function(){
    Err203.value = ""; 
}, 10); 
}else if(!!eventname){
let x = document.querySelector(eventname);
x.click();
setTimeout(function(){
Err204.value = "";  
}, 10);  
}
$('.NoWifiHandler').hide();
$('.Outest').addClass('WoInternet');
$('.Outer').addClass('WoInternet');
$('.Inner').addClass('WoInternet');
$('.Innest').addClass('WoInternet');
$('.NoWifiHandler h3').addClass('hidden');
$('.NoInt').removeClass('hidden');
$('#TryInt').removeClass('hidden');  
clearInterval(WifiInterval)  
    },
    error: function (a, b) {
    
$('.NoWifiHandler').hide();
$('.Outest').addClass('WoInternet');
$('.Outer').addClass('WoInternet');
$('.Inner').addClass('WoInternet');
$('.Innest').addClass('WoInternet');
$('.NoWifiHandler h3').addClass('hidden');
$('.NoWifiHandler #Loading').hide();
$('.NoInt').removeClass('hidden');
$('#TryInt').removeClass('hidden');  
clearInterval(WifiInterval)  
setTimeout(function(){ 
$('.NoWifiHandler').show();
}, 10);
if(b == "error"){
$('.NoInt p').text('No Internet Connection');
}else if(b == "timeout"){
$('.NoInt p').text('Request Timeout due of unstable Internet Connection');
}       
    }
});    
}

$('.NoWifiHandler h3:last-child').click(function () {
$('.NoWifiHandler').hide();
$('.Outest').addClass('WoInternet');
$('.Outer').addClass('WoInternet');
$('.Inner').addClass('WoInternet');
$('.Innest').addClass('WoInternet');
$('.NoWifiHandler #Loading').hide();
$('.NoInt').removeClass('hidden');
$('#TryInt').removeClass('hidden');  
clearInterval(WifiInterval)      
})

/* HIDE ALL BOXES */
function ClickClose(event) {
TransBG.removeAttribute('onclick');
$('#TransBG').hide();
document.querySelector(event).click();
}

/* AVOID SCROLL IF TRANSBG DISPLAY */
$('.BodyHandler').scroll(function () {
if($('#TransBG').is(':visible')){
$('.BodyHandler').css('overflow', 'hidden');  
}
})

/* ENABLE SCROLL IS TRANSBG HIDDEN */
$('.CloseBTN').click(function () {
$('.BodyHandler').css('overflow', 'scroll');       
})

/* DISPLAY MAINTENANCE */
var MaintenanceTrue = `
<div class="MaintenancePage">
<div>
<h3>This <span id="forSection">Section</span><span id="forPage" class="hidden">Page</span> is Under Maintenance</h3>    
</div>
<img src="svg/maintenance.svg">          
<div>
<h2>We will back soon!</h2>    
</div>
</div>
`;


/* JQUERY V1 */
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



/* ALERT BOX BTN CONTROLLER */
/* IF USER CLICK YES */
UserYes.addEventListener("click", function(){
if(AlertNumber.value == '001'){
UsersLogOut(check912.checked)   
}
});

UserNo.addEventListener("click", function(){
$('.AlertBox').slideUp();
});








