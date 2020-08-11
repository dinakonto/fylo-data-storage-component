const barGrad = $("#bar")
const barSpot = $("#bar-dot")

$(function() {
  barGrad.animate({ width: '80%' }, 500);
  barSpot.animate({left: '78%'}, 500);
})
