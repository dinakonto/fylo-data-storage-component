const barGrad = $("#bar");
const barSpot = $("#bar-dot");

const gbTotal = 1000;
let gbUsed = 815;
let gbLeft = gbTotal - gbUsed;
let pcUsed = (gbUsed / gbTotal) * 100;

$(function() {
  barGrad.animate({ width: pcUsed + '%' }, 500);
  barSpot.animate({ right: '2px'}, 500);
})
