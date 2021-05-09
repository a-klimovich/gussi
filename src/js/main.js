(function() {
  /**
   * lang mobile menu
   */
  $('#hamburger').on('click', () => {
    $('.menu-hamburger').toggleClass('active')
    $('#hamburgerAndLang').toggleClass('active')
  })

  /**
   * feedback form submit
   */
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
  })

  /**
   * localization
   */
})()
