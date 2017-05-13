$(document).ready(function () {
  // $('#popup').hide ('1000')
  //           .delay(2000)
  //           .show(2000);

  if(typeof page != "undefined") {

    if(page == "index") {
      setTimeout(function () {
        $("#popup").css("display", "flex");
      }, 2000);
    }
  }
});


function hidePopup() {
  $('#popup').hide();
}
