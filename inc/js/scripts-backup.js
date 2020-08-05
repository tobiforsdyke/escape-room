var viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: 'img/test-image.jpg',
    navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
        {
          id: 'my-button',
          content: 'Custom',
          title: 'Hello world',
          className: 'custom-button',
          onClick: () => {
            alert('Hello from custom button');
          }
        },
        {
            id: 'my-button-2',
            content: 'MENU',
            title: 'OPENS THE MENU',
            className: 'custom-button',
            onClick: () => {
              alert('This will open the menu');
            }
          },
        'caption'
    ],
    defaultZoomLvl: '50',
    plugins: [
        PhotoSphereViewer.SettingsPlugin,
        [PhotoSphereViewer.MarkersPlugin, {
            markers: [ 
              {
                id: 'new-marker',
                longitude: '45deg',
                latitude: '0deg',
                image: '../assets/pin-red.png',
                // html: '<h1>MARKER</h1>',
                tooltip: 'THIS IS A MARKER',
              },
            ],
          }],
    ],
    caption: 'Hello, this is a test caption',
    defaultLat: '0',
    defaultLong: '0',
    // autorotateDelay: '5000',
    loadingTxt: 'The room is loading...'
});

/* viewer.on('click', (e, data) => {
    console.log(`${data.rightclick ? 'right clicked' : 'clicked'} at longitude: ${data.longitude} latitude: ${data.latitude}`);
}); */


/* const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on('select-marker', (e, marker) => {
  markersPlugin.updateMarker({
    id: marker.id,
    image: '../assets/pin-blue.png'
  });
}); */


markersPlugin.addMarker({
    id: 'new-marker-2',
    longitude: '45deg',
    latitude: '0deg',
    html: '<h1>HELP!</h1>',
});