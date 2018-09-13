//TABS LINKS
var tabLinks = new Array();
//CONTENT DIVS
var contentDivs = new Array();

//sets up the tabs
document.addEventListener('DOMContentLoaded', function(){

    // Grab the tab links and content divs from the page
    //#tabs-list = ul
    var tabsListItems = document.getElementById('tabs-list').childNodes;
    for(var i = 0; i < tabsListItems.length; i++){
        if(tabsListItems[i].nodeName == "LI") {
            var tabLink = getFirstChildWithTagName( tabsListItems[i], 'A' );
            var id = getHash(tabLink.getAttribute('href'));
            tabLinks[id] = tabLink;
            contentDivs[id] = document.getElementById(id);
        }
    }
    
    //assign onlick events to the tab links, and highlight the first tab
    var i = 0;
    for(var id in tabLinks){
        console.log('tablinks: ', tabLinks);
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() {
            this.blur()
        };
        if(i === 0) tabLinks[id].className = 'tabs__link tabs__link--selected';
        i++;
    }

    //hide all content divs except the first
    var i = 0;
    for(var id in contentDivs){
        if(i != 0) {
            contentDivs[id].className = 'tabs-content__item hide';
            i++;
        }
    }
});

function showTab() {
    var selectedId = getHash(this.getAttribute('href'));
    console.log('selectedid: ', selectedId);
    //Highlighting the selected tab, and dim all others
    //Also show the selected content div, and hide all the others
    for(var id in contentDivs){
        if(id === selectedId) {
            tabLinks[id].className = 'tabs__link tabs__link--selected';
            contentDivs[id].className = 'tabs-content__item';
        } else {
            tabLinks[id].className = 'tabs__link';
            contentDivs[id].className = 'tabs-content__item hide';
        }
    }

    //stop the browser following the link
    return false;
}

function getFirstChildWithTagName(element, tagName){
    for(var i=0; i<element.childNodes.length; i++){
        if(element.childNodes[i].nodeName == tagName) return element.childNodes[i];
    }
}

function getHash(url){
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}