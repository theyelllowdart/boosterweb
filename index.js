mapboxgl.accessToken = 'pk.eyJ1IjoibHNzeXN0ZW1zIiwiYSI6ImNqcnRiZWs0ZTF6a3k0NGw5anAzZWl0Zm0ifQ._fWTjCv2ddGZco6lyPS2UA'; // replace this with your access token
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lssystems/cjrtblatj03l82snx46421kii', // replace this with your style URL
    center: [-87.661557, 41.893748],
    zoom: 10.7
});

map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['boosters-2019-4-4'] // replace this with the name of the layer
    });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setHTML('<h3>' + feature.properties.Company + '</h3><p>' + feature.properties.Address + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
});

