 
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ transform: "scale(" + scale + ")" });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 500,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeOutQuint"
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity
        });
      },
      duration: 500,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeOutQuint"
    }
  );
});

$(".submit").click(function () {
  return false;
});

$(document).ready(function () {
  $("select").material_select();
});
 

$(".promo-example").hover(
  function () {
    $(this).addClass("hovered");
  },
  function () {
    $(this).removeClass("hovered");
  }
);

$(".promo-example").click(function () {
  $(".promo-example").removeClass("selected");
  $(this).addClass("selected");
});

$(".promo-example2").hover(
  function () {
    $(this).addClass("hovered");
  },
  function () {
    $(this).removeClass("hovered");
  }
);

$(".promo-example2").click(function () {
  $(".promo-example").removeClass("selected");
  $(this).addClass("selected");
});

$(".keywords").delegate(".remove", "click", function () {
  $(this).closest(".rowKey").remove();
});
 

$("fieldset").delegate(".removeOrder", "click", function () {
  $(this).closest(".card").remove();
});


window.addEventListener("load", (event) => {
   var btnx = document.getElementById('screenF'); 
   btnx.disabled  = true;
   var btns = document.getElementById('screenS'); 
   btns.disabled  = true;
   var btnt = document.getElementById('screenT'); 
   btnt.disabled  = true;
   var btnfo = document.getElementById('screenFo'); 
   btnfo.disabled  = true;
   var btnfi = document.getElementById('screenFi'); 
   btnfi.disabled  = true;
   var btnsi = document.getElementById('screenSi'); 
   btnsi.disabled  = true;
   var btnse = document.getElementById('screenSe'); 
   btnse.disabled  = true;
   var btnei = document.getElementById('screenEi'); 
   btnei.disabled  = true;
   var btnni = document.getElementById('screenNi'); 
   btnni.disabled  = true;

   $('input[type=radio][name=gender]').change(function() {
      btnx.disabled  = false;
    });
     
   $('input[type=radio][name=old]').change(function() {btns.disabled  = false;});
   $('input[type=text][value=weight]').change(function() {btnt.disabled  = false;});
   $('input[type=radio][name=backpain]').change(function() {btnfo.disabled  = false;});
   $('input[type=radio][name=time]').change(function() {btnfi.disabled  = false;});
   $('input[type=radio][name=experience-pain]').change(function() {btnsi.disabled  = false;});
   $('input[type=text][name=suffering-pain]').change(function() {btnse.disabled  = false;});
   $('input[type=radio][name=outcome]').change(function() {btnei.disabled  = false;});
   $('input[type=text][name=name]').change(function() {btnni.disabled  = false;});
    
}); 