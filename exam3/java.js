var add= document.getElementById("add");
add.addEventListener('click', showinput);

function showinput(){
    document.querySelector('.addition').classList.add('showinputbox');
}

var text= document.getElementsByClassName("textarea").value;
var container_text = document.getElementsByClassName('text');
