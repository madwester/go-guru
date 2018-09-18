//sets up the tabs
document.addEventListener('DOMContentLoaded', function(){
    var tabs = document.querySelectorAll('.tabs__link');
    tabs.forEach( (tab) => {
        tab.addEventListener('click', addTabClickEvent);
    });
});

function addTabClickEvent() {
    document.querySelectorAll('.tabs__link').forEach((tab) => {
        tab.classList.remove('seleted-link');
    });
    //this = tab
    this.classList.add('seleted-link');
    var selectedId = getHash(this.getAttribute('href'));
    document.querySelectorAll('.tabs-content__item').forEach((content) => {
        content.classList.add('hide');
    });
    document.getElementById(selectedId).classList.remove('hide');
}



function getHash(url){
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}