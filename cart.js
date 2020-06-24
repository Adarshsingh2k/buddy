window.addEventListener('load',()=>{
    const preloader=document.querySelector('.preload');
    preloader.classList.add("preload-finish");

});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
      