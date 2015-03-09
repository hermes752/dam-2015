(function (){

     console.log('Geolocalizacion');
     navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    // now do something with the position data
});
            
}());