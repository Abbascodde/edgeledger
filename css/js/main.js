// Initial and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // centered map on location
 const map = new google.maps.map(document.querySelector('.map')
 , {
   zoom: 14,
   center: loc
 });
//  the maker, position at location
const maker = new google.Maps.Marker({ position: loc, map:
map });
}
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrolly > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').Style.opacity = 1;

  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event)) {
  if (this.hash !== '') {
    events.preventDefault(),

    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
};
