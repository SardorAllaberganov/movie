var menuBtn = document.getElementById('menu-toggle');
var sidebar = document.getElementById('sidebar');

// var content =  document.querySelector('.openMenu:after');

menuBtn.addEventListener('click', function(){
    console.log('clicked');
    sidebar.classList.toggle('openMenu');
});


// var close = document.getElementById('close-btn');
// console.log(close);