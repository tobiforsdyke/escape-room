function openphoto() {
    if (getCookie(tutP) != true) {
        setCookie(tutP,true)
    };
    window[open](tutorial/tutorial1.png)
}

function keycollect() {
    if (getCookie(tutK) != true) {
        setCookie(tutK,true)
    };
    document[getElementById](cup1)[innerHTML] = '<p>You have collected the key</p><p>This cupboard is now empty</p><p>Next click on the door</p>';
}

function returntomain() {
    deleteAllCookies();
    window[location][href] = index.php
}

function trunk3update() {
    if (getCookie(tutK) == true) {
        desk = '<p>This Cupboard is empty</p>';
        door = '<b>Door</b><span id="doorlock"><p>The door is currently locked</p><p>To unlock the door you must select the Key as your current item. Close this panel then open the menu and click on the Key to select it. Then click on the door again</span>';
    } else {
        desk = '<b>Desk Cupboard</b><div id="cup1"><p>Inside the cupboard you find a Key</p><img src="tutorial/tutorial2.jpg" width="50%"><p><button class="button" onclick="keycollect()">Pick up the key</button></p></div>';
    };
    PSV[getMarker](desk)[content] = desk;
    PSV[getMarker](door)[content] = door;
    if (getCookie(currentitem) == tutK) {
        door = '<b>Door</b><p>Well done you have unlocked the door.</p><p>It\'s now time to try the proper escape room. Good Luck!</p><p>Click below to return the main menu to begin</p><p><button class="button" onclick="returntomain()">Return to Main Menu</button></p>';
    };
    PSV[getMarker](door)[content] = door
}

var photo = '<b>Photo Frame</b><p>You have found a photo frame. Click below for a closer look.</p><a href="#" onClick="openphoto();"><img src="tutorial/tutorial1.png" width="50%"></a>';
var desk = '<b>Desk Cupboard</b><div id="cup1"><p>Inside the cupboard you find a Key</p><img src="tutorial/tutorial2.jpg" width="50%"><p><button class="button" onclick="keycollect()">Pick up the key</button></p></div>';
var door = '<b>Door</b><span id="doorlock"><p>The door is currently locked</p></span>';
var PSV = new PhotoSphereViewer({
    container: photosphere,
    panorama: rooms/tutorial.jpg,
    caption: Tutorial,
    time_anim: false,
    loading_img: assets/photosphere-logo.gif,
    navbar: [zoom,
        {
            id: my-button,
            title: Help,
            className: button,
            content: Help,
            onClick: function() {
                $('#helpModal')[modal](show)
            }
        },
        caption,
        {
            id: my-button2,
            title: Menu,
            className: button,
            content: '<span id="chatbuttext">Menu</span>',
            onClick: function() {
                showItems()
            }
        }
    ],
    markers: [
        {
            id: photo,
            polygon_px: [
                [1549,1005],
                [1606,1012],
                [1594,1089],
                [1534,1080]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: photo
        },
        {
            id: desk,
            polygon_px: [
                [2750,1102],
                [2796,1113],
                [2796,1189],
                [2750,1175]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: desk
        },
        {
            id: door,
            polygon_px: [
                [2906,823],
                [3087,821],
                [3086,1161],
                [2907,1149]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: door
        }
    ]
});

PSV[on] (select-marker,
    function(_0x596fx9) {
        trunk3update()
    });

groupGameLoader()