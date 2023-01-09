new JustValidate ('.section-contact__form', {

  rules: {
    name: {
      required: true,
      minLength: 4,
      maxLength: 20
    },

    email: {
      required: true,
      email: true
    },
  },

  messages: {
    name: {
      minLength: '<span class="js-validate-error-label__txt">Недопустимый формат</span>',
      required: '<span class="js-validate-error-label__txt">Поле не заполнено</span>'
    },

    email: {
      required: '<span class="js-validate-error-label__txt">Укажите ваш email</span>'
    },
  },
})

new JustValidate2 ('.section-about__content_form', {

  rules: {
    email: {
      required: true,
      email: true
    },
  },

  messages: {
    email: {
      required: '<span class="js-validate-error-label__txt">Недопустимый формат</span>'
    },
  },
})
