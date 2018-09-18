document.addEventListener('DOMContentLoaded', function(){
    var questions = document.querySelectorAll('.faq-question__title');
    questions.forEach(question =>  {
        question.addEventListener('click', showQuestion)
    });
});

function showQuestion(){
    document.querySelectorAll('.faq-question__answer').forEach(answer => {
        answer.classList.add('hide');
    });
    var sibling = this.nextElementSibling;
    sibling.classList.remove('hide');
}