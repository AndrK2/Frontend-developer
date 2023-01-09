document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__search_button').addEventListener('click', function () {
      document.querySelector('.header-content__search_form-wrap').classList.add('search-form__open')
  })
  document.addEventListener('click', e => {
      const target = e.target
        if (!target.closest('.header-content__search_button') && !target.closest('.header-content__search_form-input')) {
          document.querySelector('.header-content__search_form-wrap').classList.remove('search-form__open')
      }
      console.log(target)
  })
})
