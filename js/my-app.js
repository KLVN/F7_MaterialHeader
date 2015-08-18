// https://github.com/KLVN

var myApp = new Framework7({
  material: true,
  materialRipple: false,
});
var $$ = Dom7;

// current scrollposition
function currentScroll() {
  return $$('.page-content').scrollTop()
};

// onScroll do function
$$('.page-content').on('scroll', function(){
  slideTitle();
})

function slideTitle() {
  // calculate height of navbar
  navheight = 200 - currentScroll();
  $$('.navbar').css('height', navheight + 'px');
  
  // calculate font-size
  titlesize = 0.14 * navheight + 12.22;
  $$('.slidingTitle').css('font-size', titlesize + 'px');
  
  // calculate padding
  titlepadding1 = 0.87*navheight-28.61;
  titlepadding2 = -0.17*navheight+34.72;
  $$('.slidingTitle').css('padding', titlepadding1 + 'px 0px 0px '+titlepadding2+'px');
  
  // different cases
  if (navheight >= 200) {
    $$('#title').addClass('bigTitle').removeClass('smallTitle slidingTitle');
  } else if (navheight > 56) {
    $$('#title').addClass('slidingTitle').removeClass('smallTitle bigTitle');
  } else if (navheight < 56) {
    $$('.navbar').css('height', '56px');
    $$('#title').addClass('smallTitle').removeClass('slidingTitle bigTitle');
  };
};