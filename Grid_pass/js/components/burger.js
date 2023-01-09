document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__burger_btn').addEventListener('click', function () {
    document.querySelector('.header-content__nav_list').classList.add('header-content__nav_list-active')
    let hone = document.querySelector('.header-content__nav_list').clientHeight
    let htwo = document.querySelector('.section-photoset__item:nth-child(1)').clientHeight
    let h = hone + htwo + 37
    document.querySelector('.header-content__nav_list-active').style.height = h + 'px'
    document.querySelectorAll('.header-content__nav_item').forEach(item => {
      item.classList.add('header-content__nav_item-active')
    })
  })
  document.querySelector('.header-content__nav_item-x').addEventListener('click', function () {
    document.querySelector('.header-content__nav_list').removeAttribute('style')
    document.querySelector('.header-content__nav_list').classList.remove('header-content__nav_list-active')
    document.querySelectorAll('.header-content__nav_item').forEach(item => {
      item.classList.remove('header-content__nav_item-active')
    })
  })
  document.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header-content__burger_btn') && !target.closest('.header-content__nav_item-active')) {
      document.querySelector('.header-content__nav_list').removeAttribute('style')
      document.querySelector('.header-content__nav_list').classList.remove('header-content__nav_list-active')
      document.querySelectorAll('.header-content__nav_item').forEach(item => {
        item.classList.remove('header-content__nav_item-active')
      })
    }
  })
})
