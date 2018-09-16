var tabLinks = new Array();
var contentDivs = new Array();

//sets up the tabs
document.addEventListener('DOMContentLoaded', function(){
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
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() {
            this.blur()
        };
        if(i === 0) {
            tabLinks[id].className = 'tabs__link tabs__link--selected';
            i++;
        }
    }

    //hide all content divs except the first
    var i = 0;
    for(var id in contentDivs){
        if(i === 0) {
            contentDivs[id].className = 'tabs-content__item';
        }
        else{
            contentDivs[id].className = 'tabs-content__item hide';
        }
        i++;
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

var questionLinks = new Array();
var answerDiv = new Array();

document.addEventListener('DOMContentLoaded', function(){
    var faqQuestions = document.getElementsByClassName('faq-question');
    for(var i = 0; i<faqQuestions.length; i++){
        if(faqQuestions[i].nodeName === 'DIV'){
            var questionLink = getFirstChildWithTagName(faqQuestions[i], 'A');
            var id = getHash(questionLink.getAttribute('href'));
            questionLinks[id] = questionLink;
            answerDiv[id] = document.getElementById(id);
        }
    }

    //assign onclick events to the question links, and highlight the first one
    var i = 0;
    for(var id in questionLinks){
        questionLinks[id].onclick = showQuestion;
        questionLinks[id].onfocus = function(){
            this.blur()
        };
        if(i === 0) questionLinks[id].className = "faq-question__title faq-question__title--selected";
        i++;
    }
    hideAllAnswers();
});

function hideAllAnswers(){
    //hide all answers from start 
    var i = 0;
    for(var id in answerDiv){
        if(i !== 0) answerDiv[id].className = 'faq-question__answer hide';
            i++;
    }
}

function showQuestion(){
    var selectedId = getHash(this.getAttribute('href'));
    for(var id in answerDiv){
        if(id === selectedId){
            questionLinks[id].className = 'faq-question__title faq-question__title--selected';
            answerDiv[id].className = 'faq-question__answer';
        }
        else {
            questionLinks[id].className = 'faq-question__title';
            answerDiv[id].className = 'faq-question__answer hide';
        }
    }
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