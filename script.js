var head1 = ["Games at school"];
var type = ['pic'];
var img1 = ['pics/blocked2.png'];
var head2 = ['Have you Every wondered how games are blocked at school(MCPS)?'];
var write = ['In MCPS schools there are four different blocking systems in place. The first and most annoying called <i>iboss Cloud</i> this is a blocking system that uses modern AI technolgies to automatically block all sites that have a server intergrated in them, unless whitlisted by tech specialists. The Second most annyoing blocking system is <i>ublock</i> another system put in place by the county. <i>ublock</i> is a small extetion that can be turned off and on depending on the site. Of course you can turn it off but the truth is its consistently running. Now we get to the third gogaurdian, now we all know about gogaurdian. It is a blocking system connected through google that can block and control students computers. GoGaurdian has been implemented for many years now and is probobly the oldest. Fourth and the last is the internet, all schools in MCPS are connected to some form of the countys internet which restricts the sites you can access on thier network. Anyways that about sums up the blocking systems used by MCPS county in school. Thanks! :)'];
var date1 = ['December 16, 2021'];
var cit1 = ['Quotes from dom'];
var vids = [''];
var des = [''];
var vidsCounter = 0;
var vidsL = vids.length;




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
  document.getElementById('des1').innerHTML = des[vidsCounter - 1];
  document.getElementById("video1").onended = function() {
    videos();
  }
}