var head1 = ["Game's at school"];
var type = ['pic'];
var img1 = ['pics/blocked2.png'];
var head2 = ['Have you Every wondered how games are blocked at school(MCPS)?'];
var write = ['In MCPS schools there are four different blocking systems in place. The first and most annoying called <i>Iboss Cloud</i> this is a blocking system that uses moder AI technolgies to automatically block all sites that have a server connected, unless whitlisted. The Second most annyoing blocking system is <i>ublock</i> a system put inplace by the county. <i>Ublock</i> is a small extetion that can be turned off and on depending on the site. Of course you can turn it off but the truth is its consistently running. Now we get to the third gogaurdian, now we all know about gogaurdian. It is a blocking system connected through google that can block and control students computers. Fourth and the last is the internet, all schools in MCPS are connected to some form of the schools internet which restricts the sites you can access on thier network. Anyways that about sums up the blocking systems used by MCPS county in school. Thanks! :)'];
var date1 = ['December 16, 2021'];
var cit1 = ['Quotes from dom'];
var vids = ['videos/weather/Forcast 3 16 2021.mp4'];
var vidsCounter = 0;
var vidsL = vids.length;




function artshow(art) {
  document.getElementById('art1').style.display = 'block';
  document.getElementById('head1').innerHTML = head1[art];
  document.getElementById('head2').innerHTML = head2[art];
  document.getElementById('img1').src = img1[art];
  document.getElementById('date1').innerHTML = date1[art];
  document.getElementById('art2').innerHTML = write[art];
  //document.write(art);
}

for (var i = 0;i < head1.length;i++) {
  if (type[i] == "vid") {
    document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+i+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'><i class='opacityimg fa fa-play-circle-o centered'></i></img></div>"+head2[i]+"</div>";
  }
  else {
    document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+i+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'></img></div>"+head2[i]+"</div>";
  }
}

function videos() {
  if (vidsCounter == vidsL) {
    vidsCounter = 0;
  }
  vidsCounter += 1;
  document.getElementById("video1").src = vids[vidsCounter - 1];
  document.getElementById("video1").onended = videos();
}