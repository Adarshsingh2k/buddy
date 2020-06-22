window.addEventListener('load',()=>{
    const preloader=document.querySelector('.preload');
    preloader.classList.add("preload-finish");

});


const tabs =document.querySelectorAll('[data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      
    this.classList.toggle("acctive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}