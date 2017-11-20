// from https://css-tricks.com/snippets/jquery/highlight-all-links-to-current-page/

$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});