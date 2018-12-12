/*window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});*/

window.addEventListener('DOMContentLoaded', function(){
    var arrInfo = document.querySelector('.info-header');
    var infoTab = document.querySelectorAll('.info-header-tab');
    var infoCont = document.querySelectorAll('.info-tabcontent');

    function hideAll (element){
        for(var i = element; i < infoCont.length; i++){
            infoCont[i].classList.add('hide');
            infoCont[i].classList.remove('show');
        }
    };

    hideAll(1);

    function showThis (element){
        if(infoCont[element].classList.contains('hide')){
            infoCont[element].classList.remove('hide');
            infoCont[element].classList.add('show');
        };
    }

    arrInfo.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for(let i = 0; i < infoTab.length; i++) {
                if (event.target == infoTab[i]) {
                    hideAll(0);
                    showThis(i);
                    break;
                }
            }
        }

    });
});