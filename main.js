const burgerButton = document.querySelector('#burgerButton');

burgerButton.addEventListener('click', function(){
    if( document.querySelector('#navbar-list').style.marginLeft == '-1000px'){
        document.querySelector('#navbar-list').style.marginLeft = '0px';
    }
    else{
        document.querySelector('#navbar-list').style.marginLeft = '-1000px';
    }
})