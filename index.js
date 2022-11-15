var block = document.getElementsByClassName("block");

for (var i = 0; i < block.length; i++) {
    block[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }

  function show(){
    document.getElementById("myDropdown").classList.toggle("show-dropdown")
  }

  function showdrop(){
    document.getElementById("down").classList.toggle("show")
    console.log("hello");
  }
 
 