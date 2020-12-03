var content = document.getElementsByTagName('body')[0];
var change_color = document.getElementById('change_color');
change_color.addEventListener('click', function(){
    change_color.classList.toggle('active');
    content.classList.toggle('night');
})