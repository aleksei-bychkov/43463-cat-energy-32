document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  const mq = window.matchMedia('(min-width: 1440px)');
  ymaps.ready(() => {
    const myMap = new ymaps.Map('ymap', {
        center: [59.938679, 30.3230044],
        zoom: 16,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/map-pin@2x.png',
        iconImageSize: [90, 80],
        iconImageOffset: [-45, -75]
      });


    if (mq.matches) {
      myMap.setCenter([59.938703, 30.318006]);
    } else {
      myMap.setCenter([59.938631, 30.323037]);
    }


    myMap.geoObjects.add(myPlacemark);
  });

});
