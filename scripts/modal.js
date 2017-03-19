function openModal() {
  document.getElementById('contact').style.display = 'block';
}

function closeModal() {
  document.getElementById('contact').style.display = 'none';
}

function toggleLinks() {
  var l = document.getElementById('social-links');
  
  if(l.style.display === "none") {
    l.style.display = "block";
  } else {
    l.style.display = "none";
  }
}