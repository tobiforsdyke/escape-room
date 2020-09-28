function openProphet() {
    if (getCookie(dp) != true) {
        setCookie(dp, true);
        sendFind('The Daily Prophet')
    };
    window[open]('resources/aiouwer.png')
}

function openRune() {
    if (getCookie(rd) != true) {
        setCookie(rd, true);
        sendFind('Rune Dictionary')
    };
    window[open]('resources/ra235.jpg')
}

function openSpell() {
    if (getCookie(sbs) != true) {
        setCookie(sbs, true);
        sendFind('The Standard Book of Spells - Grade 1')
    };
    window[open]('resources/sfidf.pdf')
}

function spellcast() {
    if (document.getElementById('spell').value == 'Alohomora'){
        setCookie(dc, true);
        sendFind('Unlocked the Dormitory Door');
        document.getElementById('doorlock').innerHTML = '<b>You have unlocked the Door</b><p><button class="button" onclick="window.location.href = \'common.php\';">Proceed to the Common Room</button></p>'
    }
}

function trunkunlock() {
    if (document.getElementById('trunkpass').value == snitch){
        setCookie(t3, true);
        sendFind('Unlocked a trunk');
        document.getElementById('trunk3lock').innerHTML = '<b>You have unlocked the trunk</b><p>Inside you find a magic wand</p><img src="resources/31nPBTV4PQL.jpg" width="50%"><p><button class="button" onclick="wandcollect()">Pick up the wand</button></p>'
    } else {
        document.getElementById('trunkfeedback').innerHTML = '<b>That is the wrong code</b>'
    }
}

function wandcollect() {
    if (getCookie(mw) != true) {
        setCookie(mw, true);
        sendFind('Magic Wand');
        changeItem(mw)
    };
    document.getElementById('trunk3lock').innerHTML = '<b>You have collected a wand</b><p>This trunk is now empty</p>'
}

function maskcollect() {
    if (getCookie(pbm) != true) {
        setCookie(pbm, true);
        sendFind('A piece of Parchment with holes cut out');changeItem(pbm)
    };
    document.getElementById('cup1').innerHTML = '<b>You have collected the parchment</b><p>This cupboard is now empty</p>'
}

function trunk3update() {
    if (getCookie(t3) == true) {
        if (getCookie(mw) == true) {
            trunk3 = '<div id="trunk3lock">This trunk is Empty</div>'
        } else {
            trunk3 = '<div id="trunk3lock"><b>You have unlocked the trunk</b><p>Inside you find a magic wand</p><img src="resources/31nPBTV4PQL.jpg" width="50%"><p><button class="button" onclick="wandcollect()">Pick up the wand</button></p></div>'
        }
    } else {
        trunk3 = '<div id="trunk3lock"><b>This trunk is locked</b><p>There is a lock on this trunk that requires 6 letters to unlock<p><p>You notice that there appears to be some runes scratched onto the lid</p><img src="resources/34662.jpg" width="100%"><p><input type="text" id="trunkpass" placeholder="Enter Unlock Code"><div id="trunkfeedback" style="color:red;"></div> <p><button class="button" onclick="trunkunlock()">Unlock</button></p></div>'
    };
    PSV.getMarker(trunk3).content = trunk3;
    if (getCookie(dc) == true) {
        door = '<b>The door is unlocked</b><p><button class="button" onclick="window.location.href = \'common.php\';">Proceed to the Common Room</button></p>'
    } else {
        if (getCookie(currentitem) == mw) {
            door = '<div id="doorlock"><b>Door to the Common Room</b><p>This door is currently locked</p><p>To use a spell, type your spell below then click Cast Spell</p><p><input type="text" id="spell" placeholder="Enter spell"> <p><button class="button" onclick="spellcast()">Cast Spell</button></p></div>'
        } else {
            door = '<b>Door to the Common Room</b><p>This door is currently locked</p>'
        }
    };
    PSV.getMarker(door).content = door;
    if (getCookie(pbm) == true) {
        cupboard1 = '<p>This Cupboard is empty</p>'
    } else {
        cupboard1 = '<div id="cup1"><p>Rolled up inside the Cupboard you find a sheet of parchment with holes cut out of it</p><img src="resources/aiDGwr.png" width="50%"><button class="button" onclick="maskcollect()">Pick up the parchment</button></p></div>'
    };
    PSV.getMarker(cupboard1).content = cupboard1
}

var clue1 = '<b>The Daily Prophet</b><p>You have found a copy of the latest Daily Prophet. Click below to read it.</p><a href="#" onClick="openProphet();"><img src="resources/aiouwer.png" width="50%"></a>';
var trunk1 = '<p>Inside the trunk you find a rune dictionary. Click below to view it</p><a href="#" onClick="openRune();"><img src="resources/w457.png" width="50%"></a>';
var trunk2 = 'This Trunk is empty';
var trunk3 = '<div id="trunk3lock"><b>This trunk is locked</b><p>There is a lock on this trunk that requires 6 letters to unlock<p><p>You notice that there appears to be some runes scratched onto the lid</p><img src="resources/34662.jpg" width="100%"><p><input type="text" id="trunkpass" placeholder="Enter Unlock Code"><div id="trunkfeedback" style="color:red;"></div> <p><button class="button" onclick="trunkunlock()">Unlock</button></p> </div>';
var trunk4 = 'This Trunk is empty';
var trunk5 = 'This Trunk is empty';
var door = '<b>Door to the Common Room</b><p>This door is currently locked</p>';
var books = '<b>The Standard Book of Spells<br>By Miranda Goshawk</b><p>You have found a copy of the Standard Book of Spells Grade 1. Click below to read it.</p><a href="#" onClick="openSpell();"><img src="resources/22363194.jpg" width="50%"></a>';
var cupboard1 = '<div id="cup1"><p>Rolled up inside the Cupboard you find a sheet of parchment with holes cut out of it</p><img src="resources/aiDGwr.png" width="50%"><button class="button" onclick="maskcollect()">Pick up the parchment</button></p></div>';
var cupboard2 = 'This Cupboard is empty';

var PSV = new PhotoSphereViewer({
    container: 'photosphere',
    panorama: 'rooms/dorm.jpg',
    caption: 'Gryffindor Dormitory',
    time_anim: false,
    loading_img: 'assets/photosphere-logo.gif',
    navbar: [
        'zoom',
        {
            id: 'my-button',
            title: 'Help',
            className: 'button',
            content: 'Help',
            onClick: function() {
                $('#helpModal').modal('show')}
        },
        'caption',
        {
            id: 'my-button2',
            title: 'Menu',
            className: 'button',
            content: '<span id="chatbuttext">Menu</span>',
            onClick: function() {
                showItems()
            }
        }
    ],
    markers: [
        {
            id: 'clue1',
            polygon_px: [
                [2084,1093],
                [2140,1098],
                [2137,1113],
                [2079,1108]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: clue1
        },
        {
            id: 'trunk1',
            polygon_px: [
                [1507,1315],
                [1849,1318],
                [1922,1407],
                [1920,1456],
                [1432,1454],
                [1431,1403]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: trunk1
        },
        {
            id: 'trunk2',
            polygon_px: [
                [2434,1244],
                [2661,1206],
                [2731,1252],
                [2731,1313],
                [2460,1375],
                [2435,1306]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: trunk2
        },
        {
            id: 'trunk3',
            polygon_px: [
                [3041,1150],
                [3216,1145],
                [3258,1189],
                [3260,1247],
                [3041,1262]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: trunk3
        },
        {
            id: 'trunk4',
            polygon_px: [
                [164,1140],
                [331,1153],
                [338,1254],
                [131,1240],
                [125,1181]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: trunk4
        },
        {
            id: 'trunk5',
            polygon_px: [
                [637,1251],
                [707,1201],
                [929,1242],
                [932,1303],
                [908,1368],
                [641,1312]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: trunk5
        },
        {
            id: 'door',
            polygon_px: [
                [1216,1120],
                [1209,848],
                [1278,803],
                [1348,862],
                [1353,1130]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: door
        },
        {
            id: 'cupboard1',
            polygon_px: [
                [1088,1024],
                [1171,1027],
                [1170,1141],
                [1085,1130]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: cupboard1
        },
        {
            id: 'cupboard2',
            polygon_px: [
                [1379,1158],
                [1374,1033],
                [1478,1032],
                [1476,1147]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: cupboard2
        },
        {
            id: 'books',
            polygon_px: [
                [1106,962],
                [1136,964],
                [1136,989],
                [1161,991],
                [1163,1001],
                [1149,1010],
                [1105,1005]
            ],
            svgStyle: {
                fill: 'rgba(200, 0, 0, 0)',
                stroke: 'rgba(200, 0, 50, 0)',
                strokeWidth: '2px'
            },
            content: books
        }
    ]
});

PSV.on('select-marker', function(_0x85b4x14) {
    trunk3update()
});

function markersupdate(){}
groupGameLoader()