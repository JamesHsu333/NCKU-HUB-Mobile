(function($){
$('#topic').upvote();
$('#topic1').upvote();
$('#topic2').upvote();
})(jQuery);

var callback = function(data) {
  $.ajax({
      url: '/vote',
      type: 'post',
      data: { id: data.id, up: data.upvoted, down: data.downvoted}
  });
};


var slider1 = document.getElementById('slider1');
noUiSlider.create(slider1,{
  start: 5,
  connect: [true, false],
  step: 1,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
  'min': 0,
  'max': 10
  },
  format: wNumb({
    decimals: 0
  })
});
var slider2 = document.getElementById('slider2');
noUiSlider.create(slider2,{
  start: 5,
  connect: [true, false],
  step: 1,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
  'min': 0,
  'max': 10
  },
  format: wNumb({
    decimals: 0
  })
});
var slider3 = document.getElementById('slider3');
noUiSlider.create(slider3,{
  start: 5,
  connect: [true, false],
  step: 1,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
  'min': 0,
  'max': 10
  },
  format: wNumb({
    decimals: 0
  })
});
var grading1 = document.getElementById('grading1');

slider1.noUiSlider.on('update', function( values, handle ) {
  grading1.innerHTML = values[handle];
});
var grading2 = document.getElementById('grading2');

slider2.noUiSlider.on('update', function( values, handle ) {
  grading2.innerHTML = values[handle];
});
var grading3 = document.getElementById('grading3');

slider3.noUiSlider.on('update', function( values, handle ) {
  grading3.innerHTML = values[handle];
});
$(".start_grading").click(function() {
      $(".start_grading").fadeOut(250).css("display","none");
      $(".grading").fadeIn(500).css("display","block");
  });
$(".finish_grading").click(function() {
      $(".grading").fadeOut(250).css("display","none");
      $(".after_grading").fadeIn(500).css("display","block");
  });
$(".close_grading").click(function() {
        $(".after_grading").fadeOut(250).css("display","none");
        $(".start_grading").css("display","inline-block");
});
