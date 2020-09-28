
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>Hogwarts Escape - Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="stylesheet" href="viewer/dist/photo-sphere-viewer.css">      
        <link rel="stylesheet" href="viewer/bootstrap.min.css">
         <link rel="stylesheet" href="includes/general.css">
        
	</head>

	<body>
        
         <!-- Modal -->
          <div class="modal fade" id="helpModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Help</h4>
                </div>
                <div class="modal-body">
                    <p>Use your mouse (click and drag) or finger to look around the room.</p>
                    <p>Click or tap on objects, doors etc to interact with them.</p>
                    <p>Click Menu in the bottom right hand corner to see what items you have collected and to select items to use.</p>
                    <p>In Multiplayer games you can also access the chat function in the Menu</p>
                    <p>A number will appear next to the menu button to indicate new messages</p>
                    <div id='hints'><p><button class="button" onclick="showHints()">Show Hints</button></p></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
        
          <div class="modal fade" id="itemModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                  <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Time: <Span id="remainingtime">No Time Limit</span></h4>
                </div>
                <div class="modal-header">
                  <h4 class="modal-title">Items</h4>
                </div>
                <div class="modal-body" id="items">
                  
                </div>
                  <div id="showchat">
                <div class="modal-header">
                  <h4 class="modal-title">Chat</h4>
                </div>
                <div class="modal-body" id="chat">
                  <textarea id="chattextplay" rows="12" class="txtarea" onClick="ackChat('play')" readonly></textarea><br><input id="chatsendplay" type="text" onClick="ackChat('play')" class="txtarea" placeholder="Enter message to send"><p><button class="button" onclick="sendChat('play')">Send</button></p>
                </div>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>        
            <script src="viewer/crypto-js.min.js"></script>  
    <script src="viewer/node_modules/three/build/three.js"></script>
    <script src="viewer/node_modules/promise-polyfill/dist/polyfill.js"></script>
    <script src="viewer/node_modules/uevent/uevent.js"></script>
    <script src="viewer/node_modules/dot/doT.js"></script>
    <script src="viewer/node_modules/nosleep.js/dist/NoSleep.js"></script>
    <script src="viewer/node_modules/three/examples/js/controls/DeviceOrientationControls.js"></script>
    <script src="viewer/node_modules/three/examples/js/effects/StereoEffect.js"></script>
    <script src="viewer/dist/photo-sphere-viewer.js"></script>
    <script src="viewer/jquery.min.js"></script>
    <script src="viewer/bootstrap.min.js"></script>
    <script src="includes/commonfunc.js"></script>

    <script>

        (function() {
            if (!localStorage.getItem('cookieconsent')) {
                document.body.innerHTML += '\
                <div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%; height: 300px; z-index:99999;">\
                    This site uses cookies. By continuing to use this website, you agree to their use. \
                    <a href="#" style="color:#CCCCCC;">I Understand</a>\
                </div>\
                ';
                document.querySelector('.cookieconsent a').onclick = function(e) {
                    e.preventDefault();
                    document.querySelector('.cookieconsent').style.display = 'none';
                    localStorage.setItem('cookieconsent', true);
                };
            }
        })();
        
    </script>
            
		<div id="photosphere"></div>
        <script src="tutorial.js"></script>
        
	</body>

</html>