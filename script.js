var head1 = ['Test1'];
var type = ['vid'];
var img1 = ['maps/noaa.gif'];
var head2 = ['March 16-17 Weather Forcast 2021'];
var write = ['blah blah blah'];
var date1 = ['3/18/2021'];
var cit1 = ['doms vid'];

function showart() {
  for (var i = 0;i < head1.length;i++) {
    if (type[i] == "vid") {
      document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+head1[i]+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'><i class='opacityimg fa fa-play-circle-o centered'></i></img></div>"+head2[i]+"</div>";
    }
    else {
      document.getElementById('art123').innerHTML += "<div class='card' onclick='artshow("+head1[i]+")'><h1 class='frontlink'>"+head1[i]+"</h1><div class='container'><img src='"+img1[i]+"' class='mainpic opacityimg'></img></div>"+head2[i]+"</div>";
    }
  }
}
function artshow(art) {
  var theart = head1.indexOf(art);
  document.getElementById('art1').style.display = 'block';
  document.getElementById('head1').innerHTML = head1[theart];
  document.getElementById('head2').innerHTML = head2[theart];
  document.getElementById('img1').src = img1[theart];
  document.getElementById('date1').innerHTML = date1[theart];
  document.getElementById('art2').innerHTML = write[theart];
  
}