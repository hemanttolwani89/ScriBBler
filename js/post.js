function createModal(myModel, myBtn){
  var modal = document.getElementById(myModel);

  // Get the button that opens the modal
  var btn = document.getElementById(myBtn);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

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

function setEditableTrue(editbtn){
  var title = document.getElementById("blogTitleNew");
  var content = document.getElementById("blogBody");
  var savebtn = document.getElementById("savebtn");
  content.contentEditable = true;
  title.contentEditable = true;
  editbtn.style.display = 'none';
  savebtn.style.display = 'block';
}

function setEditableFalse(savebtn) {
  var title = document.getElementById("blogTitleNew");
  var content = document.getElementById("blogBody");
  var editbtn = document.getElementById("editbtn");
  title.contentEditable = false;
  content.contentEditable = false;
  savebtn.style.display = 'none';
  editbtn.style.display = 'block';
}

function like() {
  var like = document.getElementById("like");
  var liked = document.getElementById("liked");
  console.log(like);
  like.style.display = 'none';
  liked.style.display = 'block';
}

function comment() {
  var comment = document.getElementById("commentText").value;
  if(comment !== "") {
    var classComment = document.getElementById("comment");
    var text = document.createTextNode(comment);
    var div = document.createElement("div");
    div.setAttribute('class', 'comment');
    div.style.display = 'inline-block';
    div.appendChild(text);
    classComment.appendChild(div);
  }
}
