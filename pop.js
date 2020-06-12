var btn=document.querySelector('.modal-btn');
var cont=document.querySelector('.container');
var cls=document.querySelector('.closes');

btn.addEventListener('click',function(){
    cont.classList.add('bg-activ')
});
cls.addEventListener('click', function(){
    cont.classList.remove('bg-activ')
});
