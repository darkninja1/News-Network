var head1 = ["Blocking Systems in MCPS","Drone Cape Henlopen","Unblocked Games and Stuff",'Want to join the News Network?'];
var type = ['pic','vid','pic','pic'];
var img1 = ['pics/blocked2.png','pics/drone1.png','pics/roll1.png','pics/north.jpg'];
var head2 = ['Have you Every wondered how games are blocked at school(MCPS)?','Sweet view from a $30 drone','Want to play games that are still unblocked?','Join us at lunch to work on articals at MBHS'];
var write = ['In MCPS schools there are four different blocking systems in place. The first and most annoying called <i>iboss Cloud</i> this is a blocking system that uses modern AI technolgies to automatically block all sites that have a server intergrated in them, unless whitlisted by tech specialists. The Second most annyoing blocking system is <i>ublock</i> another system put in place by the county. <i>ublock</i> is a small extetion that can be turned off and on depending on the site. Of course you can turn it off but the truth is its consistently running. Now we get to the third gogaurdian, now we all know about gogaurdian. It is a blocking system connected through google that can block and control students computers. GoGaurdian has been implemented for many years now and is probobly the oldest. Fourth and the last is the internet, all schools in MCPS are connected to some form of the countys internet which restricts the sites you can access on thier network. Anyways that about sums up the blocking systems used by MCPS county in school. Thanks! :)','','Here is a list of games that we know are currently unblocked: <br><br><a href="https://rawcdn.githack.com/scheng123321/tmm-html5-cdn1/master/slope/index.html">Slope</a>(has been recently blocked but will be rebuilt soon)<br><br><a href="https://darkninja1.github.io/rolling-forests/">Rolling Forests</a><br><br><a href="https://darkninja1.github.io/flappy.github.io/">Flappy Pigeon</a><br><br><a href="https://insulationrats.github.io/">Nintendo Gameboy Retro</a><br><br><a href="https://darkninja1.github.io/vid.github.io/">Youtube Player</a><br><br><a href="https://darkninja1.github.io/holidays.github.io/">Doms Holiday Music</a><br><br><a href="https://darkninja1.github.io/music.github.io/">Doms Music</a><br><br>All of these websites do not run directly on a server so they still work through a proxy hosting site; <i>github</i>. Some of these sites were created directly by us so have some fun!  :)','My Email: 465551@mcpsmd.net or leproductions8@gmail.com'];
var date1 = ['December 16, 2021','June 23, 2021','December 17, 2021','December 17, 2021'];
var cit1 = ['Quotes from dom'];
var vids = ['videos/drone1.mp4'];
var des = ['Novice drone flyer with less than two flights total and a $30 drone :)Cape Henlopen 720px quality...'];
var vidsCounter = 0;
var vidsL = vids.length;
//https://darkninja1.github.io/holidays.github.io/
//https://darkninja1.github.io/music.github.io/



function artshow(art) {
  if (type[art] == 'vid') {
    vidsCounter = art;
    window.location.replace("https://News-Network.dominikhonzak.repl.co/videos.html");
  }
  else {
    document.getElementById('art1').style.display = 'block';
    document.getElementById('head1').innerHTML = head1[art];
    document.getElementById('head2').innerHTML = head2[art];
    document.getElementById('img1').src = img1[art];
    document.getElementById('date1').innerHTML = date1[art];
    document.getElementById('art2').innerHTML = write[art];
    //document.write(art);
  }
}

for (var i = 0;i < head1.length;i++) {
  if (type[i] == "vid") {
    document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+i+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'><i class='opacityimg fa fa-play-circle-o centered'></i></img></div><span class='head21'>"+head2[i]+"</span></div>";
  }
  else {
    document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+i+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'></img></div><span class='head21'>"+head2[i]+"</span></div>";
  }
}

function videos() {
  if (vidsCounter == vidsL) {
    vidsCounter = 0;
  }
  vidsCounter += 1;
  
  document.getElementById("video1").src = vids[vidsCounter - 1];
  document.getElementById('des1').innerHTML = des[vidsCounter - 1];
  document.getElementById("video1").load();
  document.getElementById("video1").play();
  document.getElementById("video1").onended = function() {
    videos();
  }
}