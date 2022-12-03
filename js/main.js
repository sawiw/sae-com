window.onload = function () {
    document.getElementById("scro").style.display = "none";
};
window.onscroll = function () {
  scrollStatus_btnGoTop();
};

function scrollStatus_btnGoTop() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("scro").style.display = "block";
  } else {
    document.getElementById("scro").style.display = "none";
  }
}
