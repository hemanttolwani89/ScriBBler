function createModal(myModel, myBtn, close){
  var modal = document.getElementById(myModel);

  // Get the button that opens the modal
  var btn = document.getElementById(myBtn);

  // Get the <span> element that closes the modal
    var span = document.getElementById(close);

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function closeModal() {
  var signinmodal = document.getElementById("signinModal");
  var myModal = document.getElementById("myModal1");
  signinmodal.style.display = 'none';
  myModal.style.display = 'block';
  var span = document.getElementById("closeMyModal1");
  window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }
  console.log(span);
  if(span !== null ) {
    span.onclick = function() {
      myModal.style.display = "none";
    }
  }
}
