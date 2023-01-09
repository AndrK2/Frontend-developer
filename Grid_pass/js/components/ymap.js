ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [55.758887, 37.605954],
      zoom: 13
  }, {
      searchControlProvider: 'yandex#search'
  }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([55.768350, 37.638701], {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/svg/place-showroom.svg',
          // Размеры метки.
          iconImageSize: [12, 12],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      })

  myMap.geoObjects
      .add(myPlacemark);
});
