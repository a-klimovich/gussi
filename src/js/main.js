(function() {
  //  GET Window height on load
  const firstScreen = document.querySelector("body > div > .first-screen");
  let windowHeight = window.innerHeight;
  
  document.documentElement.clientHeight;
  document.body.clientHeight;

  firstScreen.style.height = windowHeight + 'px';

  //Header scroll
  const $header = $(".header");
  const scroll = 0;
  const active = "active";
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
      $header.addClass(active);
    } else {
      $header.removeClass(active);
    }
  });

  // localization menu on/off
  $('#hamburger').on('click', () => {
    $('.menu-hamburger').toggleClass('active')
    $('#hamburgerAndLang').toggleClass('active')
  });

  // Submit from
  const $form = $('#userFeedback');

  $form.on('submit', function(e) {
    e.preventDefault()

    const data = $(this).serializeArray().reduce((acc, item) => {
      acc[item.name] = item.value

      return acc
    }, {})

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data,
      success: function() {
        $form.trigger('reset');
      }
    })
  });
})()
