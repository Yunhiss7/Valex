let opensIconMenu = false; 
const list = document.querySelector('#menu-1');
const list2 =document.querySelector('#menu-2');
const btn = document.querySelector('.fa-chevron-up')

function OpensIconMenu(event){
    if(opensIconMenu === false){
        opensIconMenu = true;
        list.className = 'list-inside';
    }
    else{
        opensIconMenu = false;
        list.className = 'none';
    }
}
function OpensIconMenu2(event){
    if(opensIconMenu === false){
        opensIconMenu = true;
        list2.className = 'list-inside';
    }
    else{
        opensIconMenu = false;
        list2.className = 'none';
    }
}