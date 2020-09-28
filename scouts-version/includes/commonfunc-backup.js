var crypt = {
    secret: 'CIPHERKEY',
    encrypt: function(_0xf965x2) {
        var _0xf965x3 = CryptoJS.AES.encrypt(_0xf965x2, crypt.secret);
        _0xf965x3 = _0xf965x3.toString();
        return _0xf965x3
    },
    decrypt: function(_0xf965x3) {
        var _0xf965x4 = CryptoJS.AES.decrypt(_0xf965x3, crypt.secret);
        _0xf965x4 = _0xf965x4.toString(CryptoJS.enc.Utf8);
        return _0xf965x4
    }
};

setCookie(cookietest, true);
if (getCookie(cookietest) == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
    alert(sound)
};

function sound(_0xf965x6) {this.audio = document.src(createElement);
    this.audio.preload = _0xf965x6;
    this.audio._0x8dc4[16](auto, setAttribute);
    this.audio._0x8dc4[16](controls, none);
    this.audio.style.display = none;
    document.body.appendChild(this.audio);
    this.play = function() {
        this.audio.play()
    };
    this.stop = function() {
        this.audio.pause()
    }
}

msgRecieved = new sound('resources/when.mp3');
if (!String.prototype.codePointAt) {
    String.prototype.codePointAt = function(_0xf965x7) {
        _0xf965x7 = isNaN(_0xf965x7) ? 0 : _0xf965x7;
        var _0xf965x8 = String(this),
        _0xf965x9 = _0xf965x8.charCodeAt(_0xf965x7),
        _0xf965xa = _0xf965x8.charCodeAt(_0xf965x7 + 1);
        if (0xD800 <= _0xf965x9 && _0xf965x9 <= 0xDBFF && 0xDC00 <= _0xf965xa && _0xf965xa <= 0xDFFF) {
            return ((_0xf965x9- 0xD800) * 0x400) + (_0xf965xa- 0xDC00) + 0x10000
        };
        return _0xf965x9
    }
};

function html_encode(_0xf965xc) {
    var _0xf965xd = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
    for (var _0xf965xe = 0; _0xf965xe < _0xf965xc.length; _0xf965xe++) {
        if (_0xf965xc.codePointAt(_0xf965xe) > 127) {
            _0xf965xd += '&#' + _0xf965xc.codePointAt(_0xf965xe) + ';'
        } else {
            _0xf965xd += _0xf965xc.charAt(_0xf965xe)
        }
    };
    return _0xf965xd
}

function getCookie(_0xf965x10) {
    if (localStorage.getItem(_0xf965x10)) {
        var _0xf965x11 = localStorage.getItem(_0xf965x10);
        var _0xf965x2 = crypt.decrypt(_0xf965x11);
        return _0xf965x2.substring(1)
    } else {
        var _0xf965x12 = _0xf965x10 + '=';
        var _0xf965x13 = decodeURIComponent(document.cookie);
        var _0xf965x14 = _0xf965x13.split(';');
        for (var _0xf965xe = 0; _0xf965xe < _0xf965x14.length; _0xf965xe++) {
            var _0xf965x15 = _0xf965x14._0xf965xe;
            while (_0xf965x15.charAt(0) == ' ') {
                _0xf965x15 = _0xf965x15.substring(1)
            };
            if (_0xf965x15.indexOf(_0xf965x12) == 0) {
                var _0xf965x11 = _0xf965x15.substring(_0xf965x12.length, _0xf965x15.length);
                var _0xf965x2 = crypt.decrypt(_0xf965x11);
                return _0xf965x2.substring(1)
            }
        };
        return 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    }
}

function setCookie(_0xf965x10, _0xf965x11) {
    var _0xf965x17 = new Date();
    _0xf965x17.setTime(_0xf965x17.getTime() + (30 * 24 * 60 * 60 * 1000));
    var _0xf965x18 = 'expires=' + _0xf965x17.toUTCString();
    var _0xf965x19 = crypt.encrypt(1 + _0xf965x11);
    document.cookie = _0xf965x10 + '=' + _0xf965x19 + ';' + _0xf965x18 + '; secure; path=/;';
    localStorage.setItem(_0xf965x10, _0xf965x19)
}

function deleteAllCookies() {
    var _0xf965x1b = localStorage.getItem(cookieconsent);
    var _0xf965x1c = document.cookie.split(';');
    for (var _0xf965xe = 0; _0xf965xe < _0xf965x1c.length; _0xf965xe++) {
        var _0xf965x1d = _0xf965x1c._0xf965xe;
        var _0xf965x1e = _0xf965x1d.indexOf('=');
        var _0xf965x12 = _0xf965x1e > -1 ? _0xf965x1d.substr(0, _0xf965x1e) : _0xf965x1d;
        document.cookie = _0xf965x12 + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    };
    localStorage.clear();
    localStorage.setItem(cookieconsent, _0xf965x1b)
}

function showHints() {
    var _0xf965x20 = confirm('Are you sure you want to show the Hints? This reveals hints for the whole game not just the room you are in');
    if(_0xf965x20 == true) {
        document.getElementById('hints').innerHTML = '<p>&nbsp;</p><p><b>Hints</b></p><p>To complete the escape you need to access the room of requirment</p><p>To do this you need a 7 digit number. You get two digits from the Common Room, two digits from the great hall and two digits from the Headmasters Office</p><p>To solve the common room clue you need to find the Guide to wizarding currency in the headmasters office</p><p>To solve the clue in the headmasters office you are looking for a 3 digit whole number so round your answer to the nearest 3 digit whole number</p><p>To solve the clue in the great hall you need to use the piece of parchment with holes cut out in it along with the school work. This will give you a starting point on the educational decrees. Then use the remaining letters as directions to move around the decrees</p><p>Once you have the three numbers from the three clues, the maurauders map will help you find the order to put them in</p>'
    }
}

function openfb() {
    if (getCookie(fbwf) != true) {
        setCookie(fbwf, true);
        sendFind('Fantastic Beasts and Where to Find Them')
    };
    if (getCookie(currentitem) == pbm) {
        window.open('resources/aiuysgfoua.png')
    } else {
        window.open('resources/bcf691530602adbc0e312763486fb473.jpg')
    }
}

function end() {
    if (getCookie(fin) == true) {
        if (getCookie(teamGameCode) != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            document.getElementById('end').innerHTML = '<p style="text-align: center">Your spell cuts open the training aid. Inside you find all of Harry Potters Defence against the Dark Arts research along with a portkey that transports you to a safe place away from the castle. Using Harry\'s research you and your fellow DA members are able to defeat the dark wizards threatening to destroy the stability of the wizarding world. For this you are awarded the Order of Merlin, First Class. </p><p>&nbsp;</p> <p style="text-align: center">Congratulations on completing the Great Hogwarts Escape</p> <p style="text-align: center">We hope you enjoyed it</p><p>&nbsp;</p><p><button class="button" onclick="window.location.href = \'index.php\';">Return to Lobby</button></p>';
        } else {
            document.getElementById('end').innerHTML = '<p style="text-align: center">Your spell cuts open the training aid. Inside you find all of Harry Potters Defence against the Dark Arts research along with a portkey that transports you to a safe place away from the castle. Using Harry\'s research you and your fellow DA members are able to defeat the dark wizards threatening to destroy the stability of the wizarding world. For this you are awarded the Order of Merlin, First Class. </p><p>&nbsp;</p> <p style="text-align: center">Congratulations on completing the Great Hogwarts Escape</p> <p style="text-align: center">We hope you enjoyed it</p><p>&nbsp;</p> <p style="text-align: center">Please pass the following code to your leaders to let them know you have completed the escape</p><h1 style="text-align: center">GHE16WFSMCB20</h1><p><button class="button" onclick="window.location.href = \'index.php\';">Return to Start</button></p>';
            deleteAllCookies()
        };
        if (getCookie(recorded) != true) {
            var _0xf965x23 = new Object();
            _0xf965x23.mode = rec;
            $['ajax']({type:GET,url:'resources/process.php',contentType:'application/json',dataType:'json',data:_0xf965x23,success:function(_0xf965x24){},error:function(_0xf965x24){}});setCookie(recorded,true)
        }
    } else {
        if (getCookie(teamGameCode) != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            document.getElementById('end').innerHTML = '<p style="text-align: center">Unfortunatley you did not manage to escape.</p><p style="text-align: center">Better luck next time</p><p><button class="button" onclick="window.location.href = \'index.php\';">Return to Lobby</button></p>'
        } else {
            document.getElementById('end').innerHTML = '<p style="text-align: center">Unfortunatley you did not manage to escape.</p><p style="text-align: center">Better luck next time</p><p><button class="button" onclick="window.location.href = \'index.php\';">Return to Start</button></p>';
            deleteAllCookies()
        }
    }
}

function showItems() {
    var _0xf965x26 = '<p><b>Items you can view - Click to view</b></p>';

    if (getCookie(dp) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/aiouwer.png" target="_blank">The Daily Prophet</a></p>'
    };
    if (getCookie(rd) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/ra235.jpg" target="_blank">Rune Dictionary</a></p>'
    };
    if (getCookie(sbs) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/sfidf.pdf" target="_blank">The Standard Book of Spells - Grade 1</a></p>'
    };
    if (getCookie(da) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/iuoh32r982rho.html" target="_blank">Dumbledore\'s Army Notice</a></p>'
    };
    if (getCookie(cf) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/rty45yfdu.jpg" target="_blank">Chocolate Frog Cards</a></p>'
    };
    if (getCookie(trd) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/asfigasfou.jpg" target="_blank">Notebook</a></p>'
    };
    if (getCookie(hom) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/7r6fi.pdf" target="_blank">A History of Magic</a></p>'
    };
    if (getCookie(mm) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/asdiug.jpg" target="_blank">Marauders Map</a></p>'
    };
    if (getCookie(fbwf) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="openfb()" >Fantastic Beasts and Where to Find Them</a></p>'
    };
    if (getCookie(ed) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/iuawd789q.jpg" target="_blank">Educational Decree\'s</a></p>'
    };
    if (getCookie(hg) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/iuqwr89qhioa.jpg" target="_blank">House Points Hour Glasses</a></p>'
    };
    if (getCookie(cg) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/kxbsdfo.png" target="_blank">Wizard Currency Guide</a></p>'
    };
    if (getCookie(sh) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/srthdfgfrer.png" target="_blank">Sorting Hat</a></p>'
    };
    if (getCookie(mn) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="resources/ausfoafgpsapf.png" target="_blank">Note from Mirror</a></p>'
    };
    if (getCookie(tutP) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="tutorial/tutorial1.png" target="_blank">Photo Frame</a></p>'
    };

    _0xf965x26 = _0xf965x26 + '<p>&nbsp;</p><p><b>Items you can use - Click to pick up</b></p><p>Current Item: <span id="currentitem"></span></p>';

    if (getCookie(mw) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'mw\')">Magic Wand</a></p>'
    };
    if (getCookie(pbm) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'pbm\')">Parchment with holes cut out</a></p>'
    };
    if (getCookie(ss) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'ss\')">Spectrespecs</a></p>'
    };
    if (getCookie(fp) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'fp\')">Floo Powder</a></p>'
    };
    if (getCookie(dl) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'dl\')">Deluminator</a></p>'
    };
    if (getCookie(tutK) == true) {
        _0xf965x26 = _0xf965x26 + '<p><a href="#" onClick="changeItem(\'tutK\')">A Key</a></p>'
    };
    
    document.getElementById('items').innerHTML = _0xf965x26;
    updateCurrent();
    $('#itemModal').modal(show);
    
    var _0xf965x27 = document.getElementById('chattextplay')
}

function changeItem(_0xf965x29) {
    setCookie(currentitem, _0xf965x29);
    updateCurrent();
    markersupdate();
    if (_0xf965x29 == dl) {
        lights(on)
    }
}

function updateCurrent() {
    if (getCookie(currentitem) == mw) {
        document.getElementById(currentitem).innerHTML = 'Magic Wand'
    };
    if (getCookie(currentitem) == ss) {
        document.getElementById(currentitem).innerHTML = 'Spectrespecs'
    };
    if (getCookie(currentitem) == fp) {
        document.getElementById(currentitem).innerHTML = 'Floo Powder'
    };
    if (getCookie(currentitem) == dl) {
        document.getElementById(currentitem).innerHTML = 'Deluminator'
    };
    if (getCookie(currentitem) == pbm) {
        document.getElementById(currentitem).innerHTML = 'Parchment with holes cut out'
    };
    if (getCookie(currentitem) == tutK) {
        document.getElementById(currentitem).innerHTML = 'A Key'
    }
}

function gotohall() {
    if (getCookie(currentitem) == fp) {
        window.location.href = 'hall.php'
    }
}

function starttutorial() {
    deleteAllCookies();
    window.location.href = 'tutorial.php'
}

function gotooffice() {
    if (getCookie(currentitem) == fp) {
        window.location.href = 'office.php'
    }
}

function gotorequirement() {
    if (getCookie(currentitem) == fp) {
        if (getCookie(ror) == true) {
            window.location.href = 'ror.php'
        } else {
            var _0xf965x2f = prompt('Dumbledores Army has sealed the Room of Requirement and requires a numeric password of 7 numbers to enter. Enter the password below');
            if (_0xf965x2f == '2950124') {
                setCookie(ror, true);
                sendFind('Unlocked the Room of Requirement');
                window.location.href = 'ror.php'
            } else {
                alert('That is the wrong password!')
            }
        }
    }
}

function gotocommon() {
    if (getCookie(currentitem) == fp) {
        window.location.href = 'common.php'
    }
}

function createGame() {
    var _0xf965x32 = prompt('Set a password that your players will need to enter to join the game. Please only use letters and numbers');
    if (_0xf965x32 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        alert('You must set a password')
    } else {
        if (_0xf965x32 != null) {
            var _0xf965x23 = new Object();
            _0xf965x23.mode = ng;
            _0xf965x23.pass = _0xf965x32;
            $['ajax']({type:GET,url:'resources/process.php',contentType:'application/json',dataType:'json',data:_0xf965x23,success:function(_0xf965x24){var _0xf965x33=getCookie(gamecount);if(_0xf965x33== 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'){_0xf965x33= 1}else {_0xf965x33= parseInt(_0xf965x33)+ 1};setCookie(gamecount,_0xf965x33);setCookie(gamecode+ _0xf965x33,_0xf965x24[game_code]);setCookie(gamepass+ _0xf965x33,_0xf965x32);loadGame(_0xf965x33)},error:function(_0xf965x24){}
            })
        }
    }
}

function loadGame(_0xf965x35) {
    var _0xf965x36 = getCookie(gamecode + _0xf965x35);
    var _0xf965x37 = getCookie(gamepass + _0xf965x35);
    if (_0xf965x36 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        var _0xf965x38 = document.getElementById('games').innerHTML;
        _0xf965x38 = _0xf965x38 + '<p>&nbsp;</p><div id="game'+ _0xf965x35+ '"><div class="rcorners1"><h1>Game Code: '+ _0xf965x36+ '</h1><p>Please pass on the below link to your scouts to allow them to join this game. <br><a href="https://www.saintmichaelsscouts.org.uk/escape/index.php?i='+ _0xf965x36+ '&p=' + _0xf965x37+ '">https://www.saintmichaelsscouts.org.uk/escape/index.php?i=' + _0xf965x36+ '&p=' + _0xf965x37 + '</a></p><p>&nbsp;</p><p>If they have not done so already we would sugget they view the tutorial room first<br><a href="https://www.saintmichaelsscouts.org.uk/escape/tutorial.php">https://www.saintmichaelsscouts.org.uk/escape/tutorial.php</a></p><div class="items"><div id="items'+ _0xf965x35+ '"></div></div><div class="chat"><table><tr><th>Connected Players</th></tr><tr><td><div id="players'+ _0xf965x35+ '"></div></td></tr></table><p>&nbsp;</p><table><tr><th>Chat</th></tr><tr><td><textarea id="chattext'+ _0xf965x35+ '" rows="12" class="txtarea" onClick="ackChat('+ _0xf965x35+ ')" readonly></textarea><input id="chatsend'+ _0xf965x35+ '" type="text" onClick="ackChat('+ _0xf965x35+ ')" class="txtarea" placeholder="Enter message to send"><p><button class="button" onclick="sendChat('+ _0xf965x35+ ')">Send</button></p></td></tr></table><p>&nbsp;</p><table><tr><th>Game Control</th></tr><tr><td><div id="gamecontrol'+ _0xf965x35+ '">Set Game Time: <input type="number" min="0" step="1" value="60" id="gametime'+ _0xf965x35+ '"> minutes  (Set 0 for no time limit)<p><button class="button" onclick="beginGame('+ _0xf965x35+ ')">Start Game</button></p></div><p>&nbsp;<br><button class="button" onclick="removeGame('+ _0xf965x35+ ', 1)">Remove Game</button></p><p>&nbsp;<br><button class="button" id="viewerbut'+ _0xf965x35+ '" onclick="showviewers('+ _0xf965x35+ ')">Show Viewers</button></p></td></tr></table></div><div class="footer" id="viewer'+ _0xf965x35+ '"></div><p>&nbsp;<br>&nbsp;</p></div></div>';
        document.getElementById('games').innerHTML = _0xf965x38;
        updateControl(_0xf965x35);
        var _0xf965x39 = setInterval(function() {
            updateControl(_0xf965x35)
        },3000);
        setCookie(gameinterval + _0xf965x35, _0xf965x39);
        if (getCookie(gamerunning + _0xf965x35) == 1) {
            updateGameTime(_0xf965x35)
        };
        if (getCookie(gamerunning + _0xf965x35) == '2') {
            remainingSec(_0xf965x35)
        }
    }
}

function loadMstGame(_0xf965x35, _0xf965x3b) {
    var _0xf965x36 = _0xf965x35;
    if (_0xf965x36 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        var _0xf965x38 = document.getElementById('games').innerHTML;
        _0xf965x38 = _0xf965x38 + '<p>&nbsp;</p><div id="game' + _0xf965x35 + '"><div class="rcorners1"><h1>Game Code: ' + _0xf965x36 + '</h1><p>' + _0xf965x3b + '</p><div class="items"><div id="items' + _0xf965x35 + '"></div></div><div class="chat"><table><tr><th>Connected Players</th></tr><tr><td><div id="players' + _0xf965x35 + '"></div></td></tr></table><p>&nbsp;</p><table><tr><th>Chat</th></tr><tr><td><div id="chat' + _0xf965x36+ '"><button class="button" onclick="MstChatConnect(\'' + _0xf965x35 + '\')">Connect To Chat</button></div></td></tr></table><p>&nbsp;</p><table><tr><th>Game Control</th></tr><tr><td><div id="gamecontrol' + _0xf965x35 + '"></div><p>&nbsp;<br><button class="button" onclick="removeGame(\'' + _0xf965x35 + '\',1)">Remove Game</button></p><p>&nbsp;<br><button class="button" id="viewerbut' + _0xf965x35+ '" onclick="showviewers(' + _0xf965x35+ '\')">Show Viewers</button></p></td></tr></table></div><div class="footer" id="viewer'+ _0xf965x35+ '"></div><p>&nbsp;<br>&nbsp;</p></div></div>';
        document.getElementById('games').innerHTML = _0xf965x38;
        updateMstControl(_0xf965x35);
        var _0xf965x39 = setInterval(function() {
            updateMstControl(_0xf965x35)
        },3000);
        setCookie(gameinterval + _0xf965x35, _0xf965x39)
    }
}

function MstChatConnect(_0xf965x35) {
    document.getElementById('chat' + _0xf965x35).innerHTML = '<textarea id="chattext' + _0xf965x35 + '" rows="12" class="txtarea" onClick="ackChat(\'' + _0xf965x35 + '\')" readonly></textarea><input id="chatsend' + _0xf965x35 + '" type="text" onClick="ackChat(\'' + _0xf965x35 + '\')" class="txtarea" placeholder="Enter message to send"><p><button class="button" onclick="sendChat(\'' + _0xf965x35 + '\')">Send</button></p>'
}

function showviewers(_0xf965x35) {
    if (document.getElementById('viewer' + _0xf965x35).innerHTML == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        document.getElementById('viewer' + _0xf965x35).innerHTML = '<p>&nbsp;</p><div class="rcorners2"><div id="viewers'+ _0xf965x35+ '"></div></div>';
        document.getElementById('viewerbut' + _0xf965x35).innerHTML = 'Hide Viewers'
    } else {
        document.getElementById('viewer' + _0xf965x35).innerHTML = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
        document.getElementById('viewerbut' + _0xf965x35).innerHTML = 'Show Viewers'
    }
}

function updateViewers(_0xf965x35, _0xf965x24) {
    if (document.getElementById('viewer' + _0xf965x35).innerHTML != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        if (parseInt(getCookie(pcount + _0xf965x35)) != parseInt(_0xf965x24.ptotal)) {
            document.getElementById('viewers' + _0xf965x35).innerHTML = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
        };
        if (document.getElementById('viewers' + _0xf965x35).innerHTML == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            setCookie(pcount + _0xf965x35, String(_0xf965x24.ptotal));
            var _0xf965x3f = '<table><tr>';
            var _0xf965x40 = 0;
            for (var _0xf965xe = 0; _0xf965xe < _0xf965x24.ptotal; _0xf965xe++) {
                _0xf965x3f = _0xf965x3f + '<td style="text-align: center;"><div id="viewer' + _0xf965x35 + 'p'+ _0xf965xe + '" class="photosphere"></div></td>';
                if (_0xf965x40 == 2) {
                    _0xf965x3f = _0xf965x3f + '</tr><tr>';
                    _0xf965x40 = 0
                } else {
                    _0xf965x40++
                }
            };
            _0xf965x3f = _0xf965x3f + '</tr></table>';
            document.getElementById('viewers' + _0xf965x35).innerHTML = _0xf965x3f;
            for (var _0xf965xe = 0; _0xf965xe < _0xf965x24.ptotal; _0xf965xe++) {
                initialiseViewer(_0xf965x35, _0xf965xe, _0xf965x24['pn'+ _0xf965xe], _0xf965x24['pr' + _0xf965xe])
            }
            } else {
                for (var _0xf965xe = 0; _0xf965xe < _0xf965x24.ptotal; _0xf965xe++) {
                    if (getCookie(room_g + _0xf965x35 + 'p' + _0xf965xe) != _0xf965x24['pr'+ _0xf965xe]) {
                        viewerArray['g' + _0xf965x35 + 'p' + _0xf965xe].setPanorama('rooms/' + _0xf965x24['pr' + _0xf965xe] + '.jpg');
                        setCookie(room_g + _0xf965x35 + 'p' + _0xf965xe,_0xf965x24['pr' + _0xf965xe])
                    };
                    var _0xf965x41 = {};
                    _0xf965x41.longitude = _0xf965x24.plong + _0xf965xe;
                    _0xf965x41.latitude = _0xf965x24.plat + _0xf965xe;
                    viewerArray['g'+ _0xf965x35 + 'p' + _0xf965xe].rotate(_0xf965x41)
                }
            }
        }
    }
    
var viewerArray={};
                            
function initialiseViewer(_0xf965x35, _0xf965x44, _0xf965x45, _0xf965x46) { 
    viewerArray['g'+ _0xf965x35+ 'p'+ _0xf965x44] =  new PhotoSphereViewer( 
        {
            container: 'viewer' + _0xf965x35 + 'p' + _0xf965x44,
            panorama: 'rooms/' + _0xf965x46 + '.jpg',
            caption: _0xf965x45,
            time_anim: false,
            mousemove: false,
            loading_img: 'assets/photosphere-logo.gif',
            navbar: [caption]
        }
    )
}
    
function loadGamesMaster() {
    document.getElementById('games').innerHTML = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
    var _0xf965x23 = new Object();
    _0xf965x23.mode = mstlst;
    $['ajax']({
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            for (i = 0; i < _0xf965x24.game_count; i++) {
                loadMstGame(_0xf965x24['g'+ i], _0xf965x24['c'+ i])
            }
        },
        error: function(_0xf965x24){}
    })
}

function loadAllGames() {
    document.getElementById('games').innerHTML = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
    var _0xf965x33 = getCookie(gamecount);
    if (_0xf965x33 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        for (i= 1; i <= _0xf965x33; i++) {
            loadGame(i)
        }
    }
}

function beginGame(_0xf965x35) {
    var _0xf965x4a = parseInt(document.getElementById('gametime' + _0xf965x35.value) * 60);
    if (_0xf965x4a == 0) {
        var _0xf965x17 = new Date();
        var _0xf965x4b =_0xf965x17.getTime();
        setCookie(gamefinish + _0xf965x35, _0xf965x4b);
        setCookie(gamelength + _0xf965x35, _0xf965x4a)
    } else {
        var _0xf965x17 = new Date();
        var _0xf965x4b = _0xf965x17.getTime();
        var _0xf965x4c = _0xf965x4b + (_0xf965x4a* 1000);
        setCookie(gamefinish + _0xf965x35, _0xf965x4c);
        setCookie(gamelength + _0xf965x35, _0xf965x4a)
    };
    var _0xf965x23 = new Object();
    _0xf965x23.mode = 'bg';
    _0xf965x23.code = getCookie(gamecode + _0xf965x35);
    _0xf965x23.time = _0xf965x4a;
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            if (_0xf965x24.started == 1) {
                setCookie(gamerunning + _0xf965x35, 1);
                if (_0xf965x4a == 0) {
                    document.getElementById('gamecontrol' + _0xf965x35).innerHTML = '<b>Elapsed Game Time:</b> 0 Minutes <br><button class="button" onclick="endGameM(' + _0xf965x35 + ',1)">End Game</button>'
                } else {
                    document.getElementById('gamecontrol' + _0xf965x35).innerHTML = '<b>Remaining Game Time:</b> ' + document.getElementById('gametime' + _0xf965x35).value + ' Minutes <br><button class="button" onclick="endGameM(' + _0xf965x35 + ',1)">End Game</button>'
                }
            } else {
                alert('there was an error! Please try again')
            }
        },
        error: function(_0xf965x24) {}
    }
    )
}

function endGameM(_0xf965x35, _0xf965x4e) {
    var _0xf965x4f = 0;
    if (_0xf965x4e == 1) {
        var _0xf965x20 = confirm('Are you sure you want to end this game?');
        if (_0xf965x20 == true) {
            _0xf965x4f = 1
        }
    } else {
        _0xf965x4f = 1
    };
    if (_0xf965x4f == 1) {
        var _0xf965x23 = new Object();
        _0xf965x23.mode = eg;
        _0xf965x23.code = getCookie(gamecode + _0xf965x35);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                if (_0xf965x24.ended == 1) {
                    setCookie(gamerunning + _0xf965x35, '2');
                    remainingSec(_0xf965x35)
                } else {
                    alert('there was an error! Please try again')
                }
            },
            error: function(_0xf965x24) {}
        }
        );
        alert('The Game ' + getCookie(gamecode + _0xf965x35) + ' has ended')
    }
}
    
function updateGameTime(_0xf965x35) {
    if (getCookie(gamelength + _0xf965x35) != '0') {
        var _0xf965x51 = remainingSec(_0xf965x35);
        if(_0xf965x51 < 0) {
            endGameM(_0xf965x35, 0)
        } else {
            var _0xf965x52 = Math.floor(_0xf965x51 / 60);
            var _0xf965x53 = _0xf965x51 - (_0xf965x52 * 60);
            document.getElementById('gamecontrol' + _0xf965x35).innerHTML = '<b>Remaining Game Time:</b> ' + _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds<br><button class="button" onclick="endGameM(' + _0xf965x35 + ', 1)">End Game</button>'
        }
    } else {
        var _0xf965x51 = remainingSec(_0xf965x35);
        var _0xf965x52 = Math.floor(_0xf965x51 / 60);
        var _0xf965x53 = _0xf965x51 - (_0xf965x52 * 60);
        document.getElementById('gamecontrol' + _0xf965x35).innerHTML = '<b>Elapsed Game Time:</b> ' + _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds<br><button class="button" onclick="endGameM(' + _0xf965x35 + ', 1)">End Game</button>'
    }
}
    
function updateMstTime(_0xf965x24) {
    if (_0xf965x24.start_sec != '0') {
        var _0xf965x51 = _0xf965x24.sec_left;
        if (_0xf965x51 < 0) {

        } else {
            var _0xf965x52 = Math.floor(_0xf965x51 / 60);
            var _0xf965x53 =_0xf965x51 - (_0xf965x52 * 60);
            document.getElementById('gamecontrol' + _0xf965x24.number).innerHTML = '<b>Remaining Game Time:</b> ' + _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds'
        }
    } else {
        var _0xf965x51 = _0xf965x24.sec_left;
        var _0xf965x52 = Math.floor(_0xf965x51 / 60);
        var _0xf965x53 =_0xf965x51 - (_0xf965x52 * 60);
        document.getElementById('gamecontrol' + _0xf965x24.number).innerHTML = '<b>Elapsed Game Time:</b> ' + _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds'
    }
}
    
function remainingSec(_0xf965x35) {
    if (getCookie(gamerunning + _0xf965x35) == 1) {
        if (getCookie(gamelength + _0xf965x35) != '0') {
            var _0xf965x56 = getCookie(gamefinish + _0xf965x35);
            if (_0xf965x56 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
                var _0xf965x4c = parseInt(_0xf965x56);
                var _0xf965x17 = new Date();
                var _0xf965x4b = _0xf965x17.getTime();
                var _0xf965x20 = _0xf965x4c - _0xf965x4b;
                var _0xf965x51 = Math.floor(_0xf965x20 / 1000);
                return _0xf965x51
            } else {
                return x
            }
        } else {
            var _0xf965x56 = getCookie(gamefinish + _0xf965x35);
            var _0xf965x4c = parseInt(_0xf965x56);
            var _0xf965x17 = new Date();
            var _0xf965x4b = _0xf965x17.getTime();
            var _0xf965x20 = _0xf965x4b - _0xf965x4c;
            var _0xf965x51 = Math.floor(_0xf965x20 / 1000);
            return _0xf965x51
        }
    } else {
        var _0xf965x23 = new Object();
        _0xf965x23.mode = rt;
        _0xf965x23.code = getCookie(gamecode + _0xf965x35);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                if (getCookie(gamelength + _0xf965x35) != '0') {
                    if (_0xf965x24.remsec < 0) {
                        var _0xf965x57 = 0
                    } else {
                        var _0xf965x57 = _0xf965x24.remsec
                    };
                    var _0xf965x58 = parseInt(getCookie(gamelength + _0xf965x35)) - _0xf965x57;
                    var _0xf965x59 = Math.floor(_0xf965x58 / 60);
                    var _0xf965x5a = _0xf965x58 - (_0xf965x59 * 60)
                } else {
                    var _0xf965x58 = _0xf965x24.remsec;
                    var _0xf965x59 = Math.floor(_0xf965x58 / 60);
                    var _0xf965x5a = _0xf965x58 - (_0xf965x59 * 60)
                };
                document.getElementById('gamecontrol' + _0xf965x35).innerHTML = '<b>Game Over</b> Time: ' + _0xf965x59 + ' Minutes ' + _0xf965x5a + ' Seconds'
            },
            error: function(_0xf965x24){}
        }
        )
    }
}
    
function removeGame(_0xf965x35, _0xf965x4e) {
    if(_0xf965x4e == 1) {
        var _0xf965x20 = confirm('Are you sure? This can\'t be undone and anyone in this game will be kicked out')
    } else {
        var _0xf965x20 = true;
        alert('The Server has deleted your game')
    };
    if (_0xf965x20 == true) {
        var _0xf965x23 = new Object();
        _0xf965x23.mode = rg;
        if (getCookie(gamecode + _0xf965x35) == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            _0xf965x23.code = _0xf965x35
        } else {
            _0xf965x23.code = getCookie(gamecode + _0xf965x35)
        };
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24){},
            error: function(_0xf965x24){}
        });
        document.getElementById('game' + _0xf965x35).innerHTML = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
        document.cookie = gamecode + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = gamepass + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        clearInterval(getCookie(gameinterval + _0xf965x35));
        document.cookie = gameinterval + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = gamefinish + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = gamelength + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = gamerunning + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = chatcountup + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = chatcountack + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = chatcount + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = pcount + _0xf965x35 + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        localStorage.removeItem(gamecode + _0xf965x35);
        localStorage.removeItem(gamepass + _0xf965x35);
        localStorage.removeItem(gameinterval + _0xf965x35);
        localStorage.removeItem(gamefinish + _0xf965x35);
        localStorage.removeItem(gamelength + _0xf965x35);
        localStorage.removeItem(gamerunning + _0xf965x35);
        localStorage.removeItem(chatcountup + _0xf965x35);
        localStorage.removeItem(chatcountack + _0xf965x35);
        localStorage.removeItem(chatcount + _0xf965x35);
        localStorage.removeItem(pcount + _0xf965x35)
    }
}
    
function updateControl(_0xf965xe) {
    var _0xf965x5d = 0;
    if (getCookie(gamerunning + _0xf965xe) == 1) {
        _0xf965x5d = remainingSec(_0xf965xe)
    };
    var _0xf965x23 = new Object();
    _0xf965x23.mode = gd;
    _0xf965x23.code = getCookie(gamecode + _0xf965xe);
    _0xf965x23.number = _0xf965xe;
    _0xf965x23.time = _0xf965x5d;
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            if (_0xf965x24.delete == 1) {
                var _0xf965x20 = confirm('Connot get Game Date for game ' + getCookie(gamecode + _0xf965x24.number) + ' from the Server! Press OK to try again Press Cancel to delete the game');
                if (_0xf965x20 == true) {

                } else {
                    removeGame(_0xf965x24.number,0)
                }
            } else {
                updateItemsTable(_0xf965x24.number, _0xf965x24, 0);
                updateNamesList(_0xf965x24.number, _0xf965x24);
                updateViewers(_0xf965x24.number, _0xf965x24);
                chatUpdate(_0xf965x24.number, 1);
                if (getCookie(gamerunning + _0xf965x24.number) == 1) {
                    updateGameTime(_0xf965x24.number)
                }
            }
        },
        error: function(_0xf965x24) {}
    })
}
    
function updateMstControl(_0xf965xe) {
    var _0xf965x23 = new Object();
    _0xf965x23.mode = mstgd;
    _0xf965x23.code = _0xf965xe;
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            updateItemsTable(_0xf965x24.number, _0xf965x24, 1);
            updateNamesList(_0xf965x24.number, _0xf965x24);
            updateViewers(_0xf965x24.number, _0xf965x24);
            if (document.getElementById('chat' + _0xf965x24.number).innerHTML != '<button class="button" onclick="MstChatConnect(\'' + _0xf965x24.number + '\')">Connect To Chat</button>') {
                chatUpdate(_0xf965x24.number, 1)
            };
            if (_0xf965x24.running == 1) {
                updateMstTime(_0xf965x24)
            } else {
                document.getElementById('gamecontrol' + _0xf965x24.number).innerHTML = '<b>Game Stopped</b>'
            }
        },
        error: function(_0xf965x24) {}
    })
}
    
function updateItemsTable(_0xf965x35, _0xf965x24, _0xf965x60) {
    if (_0xf965x24.dp == 1) {
        var _0xf965x61 = 'Yes'
    } else {
        var _0xf965x61 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.rd == 1) {
        var _0xf965x62 = 'Yes'
    } else {
        var _0xf965x62 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.sbs == 1) {
        var _0xf965x63 = 'Yes'
    } else {
        var _0xf965x63 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.da == 1) {
        var _0xf965x64 = 'Yes'
    } else {
        var _0xf965x64 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.cf == 1) {
        var _0xf965x65 = 'Yes'
    } else {
        var _0xf965x65='Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.trd == 1) {
        var _0xf965x66 = 'Yes'
    } else {
        var _0xf965x66 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.hom == 1) {
        var _0xf965x67 = 'Yes'
    } else {
        var _0xf965x67 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.mm == 1) {
        var _0xf965x68 = 'Yes'
    } else {
        var _0xf965x68 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.fbwf == 1) {
        var _0xf965x69 = 'Yes'
    } else {
        var _0xf965x69 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.ed == 1) {
        var _0xf965x6a = 'Yes'
    } else {
        var _0xf965x6a = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if(_0xf965x24.hg == 1) {
        var _0xf965x6b = 'Yes'
    } else {
        var _0xf965x6b = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.cg == 1) {
        var _0xf965x6c = 'Yes'
    } else {
        var _0xf965x6c = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.sh == 1) {
        var _0xf965x6d = 'Yes'
    } else {
        var _0xf965x6d = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'
    };
    if (_0xf965x24.mn == 1) {
        var _0xf965x6e = 'Yes'
    } else {
        var _0xf965x6e = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.mw == 1) {
        var _0xf965x6f = 'Yes'
    } else {
        var _0xf965x6f = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.pbm == 1) {
        var _0xf965x70 = 'Yes'
    } else {
        var _0xf965x70 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.ss == 1) {
        var _0xf965x71 = 'Yes'
    } else {
        var _0xf965x71 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.fp == 1) {
        var _0xf965x72 = 'Yes'
    } else {
        var _0xf965x72 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.dl == 1) {
        var _0xf965x73 = 'Yes'
    } else {
        var _0xf965x73 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.dc == 1) {
        var _0xf965x74 = 'Yes'
    } else {
        var _0xf965x74 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.ror == 1) {
        var _0xf965x75 = 'Yes'
    } else {
        var _0xf965x75 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    if (_0xf965x24.fin == 1) {
        var _0xf965x76 = 'Yes';
        if (getCookie(gamerunning + _0xf965x35) == 1) {
            endGameM(_0xf965x35,0)
        }
    } else {
        var _0xf965x76 = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work'};
    var _0xf965x77 = '<table><tr><th>Item</th><th>Location</th><th>Found</th></tr><tr><td><a href="resources/aiouwer.png" target="_blank">The Daily Prophet</a></td><td>Dorm Room</td><td>' + _0xf965x61 + '</td></tr><tr><td><a href="resources/ra235.jpg" target="_blank">Rune Dictionary</a></td><td>Dorm Room</td><td>' + _0xf965x62 + '</td></tr><tr><td><a href="resources/sfidf.pdf" target="_blank">The Standard Book of Spells</a></td><td>Dorm Room</td><td>' + _0xf965x63 + '</td></tr><tr><td>Wand</td><td>Dorm Room</td><td>' + _0xf965x6f + '</td></tr><tr><td>Parchment with holes cut out</td><td>Dorm Room</td><td>' + _0xf965x70 + '</td></tr><tr><td>Door Unlocked</td><td>Dorm Room</td><td>' + _0xf965x74 + '</td></tr><tr><td><a href="resources/iuoh32r982rho.html" target="_blank">Dumbledores Army Notice</a></td><td>Common Room</td><td>' + _0xf965x64 + '</td></tr><tr><td><a href="resources/rty45yfdu.jpg" target="_blank">Chocolate Frog Cards</a></td><td>Common Room</td><td>' + _0xf965x65 + '</td></tr><tr><td><a href="resources/asfigasfou.jpg" target="_blank">Notebook</a></td><td>Common Room</td><td>' + _0xf965x66 + '</td></tr><tr><td><a href="resources/7r6fi.pdf" target="_blank">A History of Magic</a></td><td>Common Room</td><td>' + _0xf965x67 + '</td></tr><tr><td><a href="resources/asdiug.jpg" target="_blank">Marauders Map</a></td><td>Common Room</td><td>' + _0xf965x68 + '</td></tr><tr><td>Spectrespecs</td><td>Common Room</td><td>' + _0xf965x71 + '</td></tr><tr><td>Floo Powder</td><td>Common Room</td><td>' + _0xf965x72 + '</td></tr><tr><td><a href="#" onClick="openfb()" >Fantastic Beasts and Where to Find Them</a></td><td>The Great Hall</td><td>' + _0xf965x69 + '</td></tr><tr><td><a href="resources/iuawd789q.jpg" target="_blank">Educational Decrees</a></td><td>The Great Hall</td><td>' + _0xf965x6a + '</td></tr><tr><td><a href="resources/iuqwr89qhioa.jpg" target="_blank">House Points Hour Glasses</a></td><td>The Great Hall</td><td>' + _0xf965x6b + '</td></tr><tr><td><a href="resources/kxbsdfo.png" target="_blank">Wizard Currency Guide</a></td><td>Headmasters Office</td><td>' + _0xf965x6c + '</td></tr><tr><td><a href="resources/srthdfgfrer.png" target="_blank">Sorting Hat</a></td><td>Headmasters Office</td><td>' + _0xf965x6d + '</td></tr><tr><td>Deluminator</td><td>Headmasters Office</td><td>' + _0xf965x73 + '</td></tr><tr><td>Unlocked Room of Requirement</td><td>Room of Requirement</td><td>' + _0xf965x75 + '</td></tr><tr></tr><tr><td><a href="resources/ausfoafgpsapf.png" target="_blank">Note from Mirror</a></td><td>Room of Requirement</td><td>' + _0xf965x6e + '</td></tr><tr><td><b>Escaped</b></td><td></td><td>' + _0xf965x76 + '</td></tr></table>';
    if (document.getElementById('items' + _0xf965x35).innerHTML != _0xf965x77) {
        document.getElementById('items' + _0xf965x35).innerHTML = _0xf965x77
    }
}

function updateNamesList(_0xf965x35, _0xf965x24) {
    if (document.getElementById('players' + _0xf965x35).innerHTML != _0xf965x24.name_list) {
        document.getElementById('players' + _0xf965x35).innerHTML = _0xf965x24.name_list
    }
}

function startGameSolo() {
    deleteAllCookies();
    window.location.href = 'dorm.php'
}

function joinGameShow() {
    $('#joinModal').modal(show)
}
    
function joinGame() {
    var _0xf965x36 = document.getElementById(game_code).value;
    var _0xf965x37 = document.getElementById('game_pass').value;
    var _0xf965x12 = document.getElementById('name').value;
    if (_0xf965x36 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        alert('You must enter a game code')
    } else {
        if (_0xf965x37 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            alert('You must enter a game password')
        } else {
            if (_0xf965x12 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work' || _0xf965x12 == 'Host' || _0xf965x12 == 'host') {
                alert ('You must enter your Name')
            } else {
                var _0xf965x23 = new Object();
                _0xf965x23.mode = jg;
                _0xf965x23.code = _0xf965x36;
                _0xf965x23.pass = _0xf965x37;
                _0xf965x23.name = _0xf965x12;
                $['ajax']( {
                    type: GET,
                    url: 'resources/process.php',
                    contentType: 'application/json',
                    dataType: 'json',
                    data: _0xf965x23,
                    success: function(_0xf965x24) {
                        if (_0xf965x24.error != '0') {
                            if (_0xf965x24.error == 1) {
                                alert('Could not connect to game. Please check your game code and password')
                            };
                            if (_0xf965x24.error == '2') {
                                alert('Someone else has logged on with that name. Please choose a different name and try again')
                            }
                        } else {
                            if (_0xf965x24.connected == '0') {
                                alert('Could not connect to game. Please try again')
                            };
                            if (_0xf965x24.connected == 1) {
                                deleteAllCookies();
                                setCookie(teamGameCode, _0xf965x36);
                                setCookie(teamGamePass, _0xf965x37);
                                setCookie(teamGameName, _0xf965x12);
                                $('#joinModal').modal(hide);
                                sendJoin();
                                joinGameWait()
                            }
                        }
                    },
                    error: function(_0xf965x24) {}
                })
            }
        }
    }
}
    
function joinGameWait() {
    if (getCookie(teamGameCode) != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        if (getCookie(fin) == true) {
            document.getElementById(startGame).innerHTML = '<div class="rcorners1"><h1><span id="finalmsg">Congratulations on Escaping</span></h1><table><tr><th>Connected Players</th></tr><tr><td><div id="players"></div></td></tr></table><p>&nbsp;</p><table><tr><th>Chat</th></tr><tr><td><textarea id="chattextplay" rows="15" class="txtarea" onClick="ackChat(\'play\')" readonly></textarea><input id="chatsendplay" type="text" onClick="ackChat(\'play\')" class="txtarea" placeholder="Enter message to send"><p><button class="button" onclick="sendChat(\'play\')">Send</button></p></td></tr></table><p>&nbsp;</p><div class="footer"><p><button class="button" onclick="leaveGame()">Leave Game</button></p></div></div>'
        } else {
            document.getElementById(startGame).innerHTML = '<div class="rcorners1"><h1><span id="finalmsg">Waiting for Game to Start</span></h1><table><tr><th>Connected Players</th></tr><tr><td><div id="players"></div></td></tr></table><p>&nbsp;</p><table><tr><th>Chat</th></tr><tr><td><textarea id="chattextplay" rows="15" class="txtarea" onClick="ackChat(\'play\')" readonly></textarea><input id="chatsendplay" type="text" onClick="ackChat(\'play\')" class="txtarea" placeholder="Enter message to send"><p><button class="button" onclick="sendChat(\'play\')">Send</button></p></td></tr></table><p>&nbsp;</p><div class="footer"><p><button class="button" onclick="leaveGame()">Leave Game</button></p></div></div>'
        };
        gameWaitUpdate();
        var _0xf965x39 = setInterval(function() {
            gameWaitUpdate()
        }, 3000);
        setCookie(gameintervalplay, _0xf965x39)
    }
}
    
function gameWaitUpdate() {
    var _0xf965x23 = new Object();
    _0xf965x23.mode = pu;
    _0xf965x23.code = getCookie(teamGameCode);
    _0xf965x23.name = getCookie(teamGameName);
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            if (_0xf965x24.connected == '0') {
                alert('The Host has ended the game');
                deleteAllCookies();
                window.location.href = 'index.php'
            };
            if (document.getElementById('players').innerHTML != _0xf965x24['name_list']) {
                document.getElementById('players').innerHTML = _0xf965x24['name_list']
            };
            chatUpdate(play, 1);
            if (_0xf965x24.running == 1) {
                clearInterval(getCookie(gameintervalplay));
                var _0xf965x7e = Math.floor(_0xf965x24.start_sec / 60);
                if (_0xf965x7e == 0) {
                    document.getElementById('startGame').innerHTML = '<div class="rcorners1"><h1>The Game is Starting</h1><p>You have an unlimited time to Escape</p><p>Good Luck!!</p><h1><span id="countdown">5</span></h1></div>'
                } else {
                    document.getElementById('startGame').innerHTML = '<div class="rcorners1"><h1>The Game is Starting</h1><p>You have '+ _0xf965x7e+ ' Minutes to Escape</p><p>Good Luck!!</p><h1><span id="countdown">5</span></h1>'
                };
                setInterval(function() {
                    countdownstart()
                }, 1000)
            };
            if (_0xf965x24.running == '2') {
                if (_0xf965x24.fin == 1) {
                    setCookie(fin, true)
                };
                if(getCookie(fin) != true) {
                    document.getElementById('finalmsg').innerHTML = 'You did not Escape'
                }
            }
        },
        error: function(_0xf965x24) {}
    })
}
        
function countdownstart() {
    var _0xf965x80 = parseInt(document.getElementById('countdown').innerHTML);
    _0xf965x80 = _0xf965x80 - 1;
    if (_0xf965x80 < 0) {
        window.location.href = 'dorm.php'
    } else {
        document.getElementById('countdown').innerHTML = _0xf965x80
    }
}
        
function leaveGame() {
    var _0xf965x20 = confirm('Are you sure?');
    if (_0xf965x20 == true) {
        var _0xf965x23 = new Object();
        _0xf965x23.mode = pl;
        _0xf965x23.code = getCookie(teamGameCode);
        _0xf965x23.name = getCookie(teamGameName);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                clearInterval(getCookie(gameintervalplay));
                sendLeave();
                deleteAllCookies();
                window.location.href = 'index.php'
            },
            error: function(_0xf965x24) {}
        })
    }
}
        
function sendChat(_0xf965x83) {
    var _0xf965x84 = document.getElementById('chatsend' + _0xf965x83).value;
    var _0xf965x12 = getCookie(teamGameName);
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x12 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        _0xf965x12 = 'Host'
    };
    if (_0xf965x83 != play) {
        _0xf965x9 = getCookie(gamecode + _0xf965x83);
        if (_0xf965x9 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            _0xf965x9 = _0xf965x83;
            _0xf965x12 = Server
        }
    };
    _0xf965x84 = _0xf965x12 + ' said:&#13;&#10;' + _0xf965x84;
    var _0xf965x23 = new Object();
    _0xf965x23.mode = cs;
    _0xf965x23.code = _0xf965x9;
    _0xf965x23.chat = html_encode(_0xf965x84);
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType:'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            document.getElementById('chatsend' + _0xf965x83).value = 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work';
            chatUpdate(_0xf965x83, 0);
            ackChat(_0xf965x83)
        },
        error: function(_0xf965x24) {}
    })
}
        
function sendFind(_0xf965x86) {
    var _0xf965x84 =_0xf965x86;
    var _0xf965x12 = getCookie(teamGameName);
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x9 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        _0xf965x84 = _0xf965x12 + ' has found:&#13;&#10;' + _0xf965x84;
        var _0xf965x23 = new Object();
        _0xf965x23.mode = cs;
        _0xf965x23.code = _0xf965x9;
        _0xf965x23.chat = html_encode(_0xf965x84);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                chatUpdate(play, 0);
                ackChat(play)
            },
            error: function(_0xf965x24) {}
        })
    }
}
        
function sendJoin() {
    var _0xf965x12 = getCookie(teamGameName);
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x9 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        var _0xf965x84 = _0xf965x12 + ' has joined the game&#13;&#10;';
        var _0xf965x23 = new Object();
        _0xf965x23.mode = cs;
        _0xf965x23.code = _0xf965x9;
        _0xf965x23.chat = html_encode(_0xf965x84);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                chatUpdate(play, 0);
                ackChat(play)
            },
            error: function(_0xf965x24) {}
        })
    }
}
        
function sendLeave() {
    var _0xf965x12 = getCookie(teamGameName);
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x9 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        var _0xf965x84 = _0xf965x12 + ' has left the game&#13;&#10;';
        var _0xf965x23 = new Object();
        _0xf965x23.mode = cs;
        _0xf965x23.code = _0xf965x9;
        _0xf965x23.chat = html_encode(_0xf965x84);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                chatUpdate(play, 0);
                ackChat(play)
            },
            error: function(_0xf965x24) {}
        })
    }
}
        
function sendEnd() {
    var _0xf965x12 = getCookie(teamGameName);
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x9 != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
        var _0xf965x84 = _0xf965x12 + ' Completed the Escape&#13;&#10;';
        var _0xf965x23 = new Object();
        _0xf965x23.mode = cs;
        _0xf965x23.code = _0xf965x9;
        _0xf965x23.chat = html_encode(_0xf965x84);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success: function(_0xf965x24) {
                chatUpdate(play, 0);
                ackChat(play)
            },
            error: function(_0xf965x24) {}
        })
    }
}
        
function chatUpdate(_0xf965x83, _0xf965x8b) {
    var _0xf965x9 = getCookie(teamGameCode);
    if (_0xf965x83 != play) {
        _0xf965x9 = getCookie(gamecode + _0xf965x83);
        if (_0xf965x9 == 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            _0xf965x9 = _0xf965x83
        }
    };
    var _0xf965x23 = new Object();
    _0xf965x23.mode = cu;
    _0xf965x23.code = _0xf965x9;
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            var _0xf965x27 = document.getElementById('chattext' + _0xf965x83);
            _0xf965x27.innerHTML = _0xf965x24.chat;
            var _0xf965x8c = parseInt(getCookie(chatcountack + _0xf965x83));
            var _0xf965x8d = parseInt(_0xf965x24.chat_count) - _0xf965x8c;
            if (getCookie(chatcountup + _0xf965x83) != _0xf965x24.chat_count) {
                if (_0xf965x8b == 1) {
                    msgRecieved.play();
                    _0xf965x27.style = 'background: #FEE;';
                    if (_0xf965x8d > 0) {
                        if (_0xf965x83 == play) {
                            document.getElementById('chatbuttext').innerHTML = '(' + _0xf965x8d + ') Menu'
                        }
                    }
                };
                setCookie(chatcountup + _0xf965x83, _0xf965x24.chat_count)
            }
        },
        error: function(_0xf965x24) {}
    })
}
            
function getescapecount() {
    var _0xf965x23 = new Object();
    _0xf965x23.mode = gec;
    $['ajax']( {
        type: GET,
        url: 'resources/process.php',
        contentType: 'application/json',
        dataType: 'json',
        data: _0xf965x23,
        success: function(_0xf965x24) {
            document.getElementById('escapecount').innerHTML = _0xf965x24.escapecount},
            error: function(_0xf965x24) {}
        })
    }
    function ackChat(_0xf965x83) {
        document.getElementById('chattext' + _0xf965x83).style = 'background: #EEF;';
        setCookie(chatcountack + _0xf965x83, getCookie(chatcountup + _0xf965x83));
        if (_0xf965x83 == play) {
            document.getElementById('chatbuttext').innerHTML = 'Menu'
        }
    }
    function groupGameLoader() {
        if (getCookie(teamGameCode) != 'Your browser will not accept our cookies, therefore unfortunately this game won\'t work') {
            PlayerUpdate();
            var _0xf965x39 = setInterval(function() {
                PlayerUpdate()
            }, 3000);
            setCookie(gameintervalplay, _0xf965x39);
            document.getElementById('hints').innerHTML = '<p>If you need any hints please ask your game host</p>'
        } else {
            document.getElementById('showchat').style = 'display: none;'
        }
    }
    function PlayerUpdate() {
        var _0xf965x23 = new Object();
        _0xf965x23.mode = pu;
        _0xf965x23.code = getCookie(teamGameCode);
        _0xf965x23.name= getCookie(teamGameName);
        _0xf965x23.dp = getCookie(dp);
        _0xf965x23.rd = getCookie(rd);
        _0xf965x23.sbs = getCookie(sbs);
        _0xf965x23.da = getCookie(da);
        _0xf965x23.cf = getCookie(cf);
        _0xf965x23.trd = getCookie(trd);
        _0xf965x23.hom = getCookie(hom);
        _0xf965x23.mm = getCookie(mm);
        _0xf965x23.fbwf = getCookie(fbwf);
        _0xf965x23.ed = getCookie(ed);
        _0xf965x23.hg = getCookie(hg);
        _0xf965x23.cg = getCookie(cg);
        _0xf965x23.sh = getCookie(sh);
        _0xf965x23.mn = getCookie(mn);
        _0xf965x23.mw = getCookie(mw);
        _0xf965x23.pbm = getCookie(pbm);
        _0xf965x23.ss = getCookie(ss);
        _0xf965x23.fp = getCookie(fp);
        _0xf965x23.dl = getCookie(dl);
        _0xf965x23.dc = getCookie(dc);
        _0xf965x23.t3 = getCookie(t3);
        _0xf965x23.crb = getCookie(crb);
        _0xf965x23.ror = getCookie(ror);
        _0xf965x23.fin = getCookie(fin);
        var _0xf965x92 = PSV.getPosition();
        _0xf965x23.long = _0xf965x92.longitude;
        _0xf965x23.lat = _0xf965x92.latitude;
        var _0xf965x93 = String(location.href.split('/').slice(-1));
        var _0xf965x94 = _0xf965x93.split('.');
        _0xf965x23.page = _0xf965x94[0];
        console.log('long: ' + _0xf965x92.longitude + ' / Lat: ' + _0xf965x92.latitude);
        $['ajax']( {
            type: GET,
            url: 'resources/process.php',
            contentType: 'application/json',
            dataType: 'json',
            data: _0xf965x23,
            success:function(_0xf965x24) {
                if (_0xf965x24.connected == '0') {
                    alert('The Host has ended the game');
                    deleteAllCookies();
                    window.location.href = 'index.php'
                };
                chatUpdate(play, 1);
                if (_0xf965x24.running == '0') {
                    window.location.href = 'index.php'
                };
                if (_0xf965x24.running == 1) {
                    if (_0xf965x24.start_sec == '0') {
                        document.getElementById('remainingtime').innerHTML = 'No time limit';
                        var _0xf965x52 = Math.floor(parseInt(_0xf965x24.sec_left) / 60);
                        var _0xf965x53 = parseInt(_0xf965x24.sec_left) - (_0xf965x52 * 60);
                        document.getElementById('remainingtime').innerHTML = _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds Elapsed'
                    } else {
                        var _0xf965x52 = Math.floor(parseInt(_0xf965x24.sec_left) / 60);
                        var _0xf965x53 = parseInt(_0xf965x24.sec_left) - (_0xf965x52 * 60);
                        document.getElementById('remainingtime').innerHTML = _0xf965x52 + ' Minutes ' + _0xf965x53 + ' Seconds Remaining'
                    };
                    if (_0xf965x24.dp == 1) {setCookie(dp,true)};
                    if(_0xf965x24.rd == 1) {setCookie(rd,true)};
                    if(_0xf965x24.sbs == 1) {setCookie(sbs,true)};
                    if(_0xf965x24.da == 1) {setCookie(da,true)};
                    if(_0xf965x24.cf == 1) {setCookie(cf,true)};
                    if(_0xf965x24.trd == 1) {setCookie(trd,true)};
                    if(_0xf965x24.hom == 1) {setCookie(hom,true)};
                    if(_0xf965x24.mm == 1) {setCookie(mm,true)};
                    if(_0xf965x24.fbwf == 1) {setCookie(fbwf,true)};
                    if(_0xf965x24.ed == 1) {setCookie(ed,true)};
                    if(_0xf965x24.hg == 1) {setCookie(hg,true)};
                    if(_0xf965x24.cg == 1) {setCookie(cg,true)};
                    if(_0xf965x24.sh == 1) {setCookie(sh,true)};
                    if(_0xf965x24.mn == 1) {setCookie(mn,true)};
                    if(_0xf965x24.mw == 1) {setCookie(mw,true)};
                    if(_0xf965x24.pbm == 1) {setCookie(pbm,true)};
                    if(_0xf965x24.ss == 1) {setCookie(ss,true)};
                    if(_0xf965x24.fp == 1) {setCookie(fp,true)};
                    if(_0xf965x24.dl == 1) {setCookie(dl,true)};
                    if(_0xf965x24.dc == 1) {setCookie(dc,true)};
                    if(_0xf965x24.t3 == 1) {setCookie(t3,true)};
                    if(_0xf965x24.crb == 1) {setCookie(crb,true)};
                    if(_0xf965x24.ror == 1) {setCookie(ror,true)};
                    if(_0xf965x24.fin == 1) {setCookie(fin,true);
                    window.location.href = 'end.php'
                }
            };
            if (_0xf965x24.running == '2') {
                if (_0xf965x24.fin == 1) {
                    setCookie(fin, true)
                };
                window.location.href = 'end.php'
            }
        },
        error: function(_0xf965x24){}
    })
}