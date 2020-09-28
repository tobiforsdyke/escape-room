

<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>Hogwarts Escape</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="stylesheet" href="viewer/dist/photo-sphere-viewer.css">      
        <link rel="stylesheet" href="viewer/bootstrap.min.css">
        <link rel="stylesheet" href="includes/indexcontrol.css"> 

    
	</head>

	<body>
        
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
            
        <p>&nbsp;</p>
        <p style="text-align: center">
            <img src="logo.png" width="10%">
        </p>
        <p style="text-align: center; padding: 15px;">
            <b>Welcome to 16th Wyre Forest (St Michaels) &amp; 6th Colwyn Bay Scout Troops<br>Virtual Escape Room Experience</b>
        </p>
         <h1 style="text-align: center">The Great Hogwarts Escape</h1>
         <div id="startGame" style="text-align: center">
             <div class="rcorners1">
                 <p>Welcome to our Escape Room Experience. I created this escape room experience for my scouts to play during the Covid-19 lockdown in the UK as part of our virtual meetings. It proved a great hit with both the scouts and their families so I have decided to release it to the wider scouting community to play.</p>
                 <p>You can either play a solo game or you can play a team game where a group of people can play together in separate locations. During a team game each person can explore the rooms independently but items found are synchronised between all players. I must stress though that this feature is a bit experimental having been developed at speed it has not undergone much testing yet so may be a bit buggy but you are welcome to try it out.</p>
                 <p>To play a team game you will need a host who will set up and control the game. The host should ideally have played the game in advance so can offer hints if needed. To get access to host a team game please complete the following form:</p>
                 <p><a href="https://forms.gle/6txsXAqqTQbDbtuD9" target="_blank">https://forms.gle/6txsXAqqTQbDbtuD9</a></p>
                 <p><b>Number of Escapes Completed: <span id='escapecount'></span></b></p>
                 <p>This escape room is free to play, however if you enjoyed playing and you would like to make a donation to our scout troop you can do so via PayPal</p>
                 <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="Q4Z83YJCZ3SNS" />
<input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
</form>
                 <p>&nbsp;</p>
                 <p>I hope you enjoy playing</p>
                 <p>Yours in Scouting</p>
                 <p>Mark Atkinson<br>16th Wyre Forest (St Michaels) Scout Troop</p>
            </div>
             <p>&nbsp;</p>
            <div class="rcorners1">
                <p>Select an option below to continue</p>
                <p><button class="button" onclick="starttutorial()">View the Tutorial</button></p>
                <p><button class="button" onclick="startGameSolo()">Play Solo Game</button></p>
                <p><button class="button" onclick="joinGameShow()">Join Team Game</button></p>
            </div>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div class="modal fade" id="joinModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Join Game</h4>
                </div>
                <div class="modal-body">
                    <p>Enter Game Code:</p>
                    <p><input type="text" id="game_code" value =""></p>
                    <p>Enter Game Password:</p>
                    <p><input type="text" id="game_pass" value =""></p>
                    <p>Enter Name:</p>
                    <p><input type="text" id="name"></p>
                    <p><button class="button" onclick="joinGame()">Join Game</button></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
        
		<script>
			 joinGameWait();
            getescapecount();
                    </script>
        
	</body>

</html>