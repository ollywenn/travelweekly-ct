(function($) {
  const popupSize = {
    width: 780,
    height: 550
  };

  $('.social-button').on('click', function(e) {
    let verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
      horisontalPos = Math.floor(($(window).height() - popupSize.height) / 2);

    let popup = window.open(
      $(this).prop('href'),
      'social',
      'width=' +
        popupSize.width +
        ',height=' +
        popupSize.height +
        ',left=' +
        verticalPos +
        ',top=' +
        horisontalPos +
        ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1'
    );

    if (popup) {
      popup.focus();
      e.preventDefault();
    }
  });
})(jQuery);
