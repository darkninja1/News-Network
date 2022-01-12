//header
var head1 = ["Blocking Systems in MCPS","Drone Cape Henlopen","Unblocked Games and Stuff",'Want to join the News Network?','Covid-19 Updates','Multiplayer TicTacToe','Health Tips'];
//type of link
var type = ['pic','vid','pic','pic','link','link','link'];
//type of writing 
var type2 = ['Annalysis','Video','Extra','Signup','Statistics','Games','Health'];
//topic
var topic1 = ['tech','extra','mcps','blair','health','extra','health'];
//img
var img1 = ['pics/blocked2.png','pics/drone1.png','pics/roll1.png','pics/north.jpg','pics/covid-19.jpg','pics/ttt1.png','pics/health1.png'];
//sub header
var head2 = ['Have you Every wondered how games are blocked at school(MCPS)?','Sweet view from a $30 drone','Want to play games that are still unblocked?','Join us at lunch to work on articals at MBHS','See the latest covid-19 statistics','Multiplayer TicTacToe created by me the writer','An 8th Graders Health Tips'];
//document
var write = ['In MCPS schools there are three different blocking systems in place. The first and most annoying called <i>iboss Cloud</i> this is a blocking system that uses modern AI technolgies to automatically block all sites that have a server intergrated, unless whitlisted by tech specialists.  The second most annoying blocking system <i>gogaurdian</i>, now we all know about <i>gogaurdian</i>. It is a blocking system connected through google that can block and control students computers. <i>Gogaurdian</i> has been implemented for many years now and is probobly the oldest. Third and the last is the internet, all schools in MCPS are connected to some form of the countys internet which restricts the sites you can access on thier network. Anyways that about sums up the blocking systems used by MCPS county in school. Thanks! :)','','Here is a list of games that we know are currently unblocked: <br><br><a href="https://rawcdn.githack.com/scheng123321/tmm-html5-cdn1/master/slope/index.html">Slope</a>(has been recently blocked but will be rebuilt soon)<br><br><a href="https://darkninja1.github.io/rolling-forests/">Rolling Forests</a><br><br><a href="https://darkninja1.github.io/flappy.github.io/">Flappy Pigeon</a><br><br><a href="https://insulationrats.github.io/">Nintendo Gameboy Retro</a><br><br><a href="https://darkninja1.github.io/vid.github.io/">Youtube Player</a><br><br><a href="https://darkninja1.github.io/holidays.github.io/">Doms Holiday Music</a><br><br><a href="https://darkninja1.github.io/music.github.io/">Doms Music</a><br><br>All of these websites do not run directly on a server so they still work through a proxy hosting site; <i>github</i>. Some of these sites were created directly by us so have some fun!  :)','My Email: 465551@mcpsmd.net or leproductions8@gmail.com','','',''];
//post date
var date1 = ['December 16, 2021','June 23, 2021','December 17, 2021','December 17, 2021','January 11, 2022','January 11, 2022','January 11, 2022'];
//link if it is a type: link
var links = ["","","","","https://covid-19.webteamone.repl.co","https://tictactoe.dominikhonzak.repl.co/","https://health-class.dominikhonzak.repl.co/"];
//will be added later
var cit1 = [''];
//videos (musit be less than 25 mb)
var vids = ['videos/drone1.mp4'];
//description of video
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
  else if (type[art] == 'link')  {
    window.location.replace(links[art]);
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