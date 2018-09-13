var questionLinks = new Array();
var answerDiv = new Array();

document.addEventListener('DOMContentLoaded', function(){
    var faqQuestions = document.getElementsByClassName('faq-question');
    for(var i = 0; i<faqQuestions.length; i++){
        if(faqQuestions[i].nodeName === 'DIV'){
            var questionLink = getFirstChildWithTagName(faqQuestions[i], 'A');
            var id = getHash(questionLink.getAttribute('href'));
            questionLinks[id] = questionLink;
            //console.log('questionLinks[id]', questionLinks[id]);
            answerDiv[id] = document.getElementById(id);
            //console.log('answerDiv[id]', answerDiv[id]);
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

    //hide all content from start 
    var i = 0;
    for(var id in answerDiv){
        if(i !== 0) answerDiv[id].className = 'faq-question__answer hide';
            i++;
    }
});

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
        if(element.childNodes[i].nodeName == tagName) 
        return element.childNodes[i];
    }
}

function getHash(url){
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}