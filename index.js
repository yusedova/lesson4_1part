/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
const tabs=document.getElementById('tabs');

//console.log(tabs);
const content=document.querySelectorAll('.content');
//console.log(content);

const insideTab=document.querySelectorAll('.inside');
//console.log(insideTab[1].dataset.btn);
const insideCont=document.querySelectorAll('.insideCont');
console.log(insideCont[1].dataset.content);
tabs.addEventListener('click', e => {
    //console.log(e.target);
    const currTab=e.target.dataset.btn;
    //console.log(currTab);
    changeClass(e.target);

    for (let i=0; i<content.length; i++){
        content[i].classList.remove('active');        
   
    if (content[i].dataset.content===e.target.dataset.btn){
        content[i].classList.add('active');

    }
}


    for (let i=0; i<insideCont.length; i++){
        insideCont[i].classList.remove('active');        
   
            if (insideCont[i].dataset.content===e.target.dataset.btn) {
                insideCont[i].classList.add('active');
                console.log(insideCont[i].className);
            }
    }

 

})

const changeClass= el => {
    //console.log(el);
   // console.log(tabs.children);

    for (let i=0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');        
    }
    for (let i=0; i<insideTab.length; i++){
        insideTab[i].classList.remove('active');        
    }

    el.classList.add('active');

}