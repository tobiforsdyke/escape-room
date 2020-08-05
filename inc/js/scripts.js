const VIEWER = new PhotoSphereViewer.Viewer({
  container : document.querySelector('#viewer'),
  panorama  : 'img/test-image-1.jpg',
  // panorama  : 'img/sphere.jpg',
  caption   : 'Time to <b>Escape</b>',
  loadingTxt: 'The room is loading...',
  // minFov: '30',
  // maxFov: '90',
  defaultZoomLvl: '20',
  // autorotateDelay: '5000',
  navbar    : [
    'autorotate', 'zoom', 'markers', 'markersList',
    {
      // content  : '💬',
      content  : '<i class="fa fa-commenting" aria-hidden="true"></i>',
      title    : 'Show all tooltips',
      className: 'custom-button',
      onClick  : function () {
        markers.toggleAllTooltips();
      }
    },
    {
      id: 'my-button-2',
      content: '<i class="fa fa-briefcase" aria-hidden="true">&nbsp;MENU</i>',
      title: 'OPENS THE MENU',
      className: 'custom-button',
      onClick: () => {
        alert('This will open the menu');
      }
    },
    'caption', 'gyroscope', 'stereo', 'fullscreen',
  ],
  plugins   : [
    PhotoSphereViewer.GyroscopePlugin,
    PhotoSphereViewer.StereoPlugin,
    [PhotoSphereViewer.MarkersPlugin, {
      markers: (function () {
        var a = [];

        // for (var i = 0; i < Math.PI * 2; i += Math.PI / 4) {
        //   for (var j = -Math.PI / 2 + Math.PI / 4; j < Math.PI / 2; j += Math.PI / 4) {
        //     a.push({
        //       id       : '#' + a.length,
        //       tooltip  : '#' + a.length,
        //       latitude : j,
        //       longitude: i,
        //       image    : 'http://localhost/escape-room/inc/assets/pin-red.png',
        //       width    : 32,
        //       height   : 32,
        //       anchor   : 'bottom center',
        //       data     : {
        //         deletable: true,
        //       },
        //     });
        //   }
        // }

        a.push({
          id       : 'lorem',
          tooltip  : {
            content : 'Lorem ipsum dolor ist amet et consecturo.',
            position: 'bottom right',
          },
          content  : document.getElementById('pin-content').innerHTML,
          latitude : 0.32,
          longitude: 0.11,
          image    : 'http://localhost/escape-room/inc/assets/pin-blue.png',
          width    : 32,
          height   : 32,
          anchor   : 'bottom center',
        });

        // a.push({
        //   id        : 'polygon-test',
        //   svgStyle  : {
        //     fill: 'rgba(0, 0, 0, 0.5)',
        //   },
        //   polygonRad: [
        //     [6.0848, 0.1806],
        //     [0.1022, 0.3166],
        //     [0.6333, 0.3836],
        //     [1.2396, 0.5112],
        //     [1.7922, 0.5544],
        //     [2.7635, 0.7853],
        //     [3.3688, 0.4723],
        //     [3.6902, 0.6161],
        //     [4.2981, 0.6942],
        //     [4.6605, 0.6618],
        //     [5.4694, 0.1880],
        //     [5.7125, 0.1302],
        //   ],
        // });

        a.push({
          id        : 'polygon',
          content   : 'This mountain is so great it has dots on it!',
          polylinePx: [
            [2941, 1413],
            [3042, 1402],
            [3222, 1419],
            [3433, 1463],
            [3480, 1505],
            [3438, 1538],
            [3241, 1543],
            [3041, 1555],
            [2854, 1559],
            [2739, 1516],
            [2775, 1469],
            [2941, 1413],
          ],
          svgStyle  : {
            fill       : 'rgba(255,0,0,0.3)',
            stroke     : 'rgba(255, 0, 50, 0.8)',
            strokeWidth: '2px',
          },
          tooltip   : {
            content : 'This is a mountain',
            position: 'right bottom',
          },
        });

        a.push({
          id        : 'polygon-chair',
          content   : document.getElementById('chair-content').innerHTML,
          polylinePx: [
            [677, 719],
            [676, 653],
            [728, 628],
            [731, 526],
            [807, 529],
            [819, 716],
            [807, 728],
            [789, 719],
            [790, 687],
            [764, 699],
            [769, 756],
            [751, 756],
            [735, 753],
            [729, 704],
            [704, 684],
            [703, 719],
            [689, 726],
            [677, 719],
          ],
          svgStyle  : {
            fill       : 'rgba(255,0,0,0.3)',
            stroke     : 'rgba(255, 0, 50, 0.8)',
            strokeWidth: '2px',
          },
        });

        a.push({
          id       : 'html-img-demo',
          html     : 'HTML & Image',
          scale    : [0.5, 1.5],
          className: 'demo-label',
          longitude: 0.5,
          latitude : -0.48,
          hideList : true,
        });

        a.push({
          id       : 'text',
          html     : 'This is <strong>text</strong <img src="http://localhost/escape-room/inc/assets/pin-red.png" style="height: 24px; vertical-align: top;"/>',
          anchor   : 'bottom right',
          style    : {
            color     : 'white',
            fontSize  : '20px',
            fontFamily: 'Helvetica, sans-serif',
            textAlign : 'center',
          },
          longitude: 0.45,
          latitude : -0.4,
        });

        a.push({
          id       : 'rect',
          tooltip  : 'A square a side 60',
          content   : '<h1>A RECTANGLE!</h1><p>Lorem</p>',
          rect     : [60, 60],
          svgStyle : {
            fill       : 'rgba(255,255,0,0.3)',
            stroke     : 'yellow',
            strokeWidth: '2px',
          },
          longitude: -0.5,
          latitude : -0.38,
          anchor   : 'center right',
        });

        return a;
      }())
    }]
  ]
});

VIEWER.on('click', (e, data) => {
  console.log(`${data.rightclick ? 'right clicked' : 'clicked'} at longitude: ${data.longitude} latitude: ${data.latitude}`);
});

// var markers = VIEWER.getPlugin(PhotoSphereViewer.MarkersPlugin);

// VIEWER.on('click', function (e, data) {
//   if (!data.rightclick) {
//     markers.addMarker({
//       id       : '#' + Math.random(),
//       tooltip  : 'Generated marker',
//       longitude: data.longitude,
//       latitude : data.latitude,
//       image    : 'http://localhost/escape-room/inc/assets/pin-red.png',
//       width    : 32,
//       height   : 32,
//       anchor   : 'bottom center',
//       data     : {
//         deletable: true,
//       },
//     });
//   }
// });

// markers.on('select-marker', function (e, marker, data) {
//   console.log('select', marker.id);

//   if (marker.data && marker.data.deletable) {
//     if (data.dblclick) {
//       markers.removeMarker(marker);
//     }
//     else if (data.rightclick) {
//       markers.updateMarker({
//         id   : marker.id,
//         image: 'http://localhost/escape-room/inc/assets/pin-red.png',
//       });
//     }
//   }
// });

// markers.on('unselect-marker', function (e, marker) {
//   console.log('unselect', marker.id);
// });

// markers.on('over-marker', function (e, marker) {
//   console.log('over', marker.id);
// });

// markers.on('leave-marker', function (e, marker) {
//   console.log('leave', marker.id);
// });

// markers.on('select-marker-list', function (e, marker) {
//   console.log('select-list', marker.id);
// });

// markers.on('goto-marker-done', function (e, marker) {
//   console.log('goto-done', marker.id);
// });