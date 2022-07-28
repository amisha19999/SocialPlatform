// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


//MESSAGES
const messagesNotification = document.querySelector
('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');



//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item  => {
        item.classList.remove('active');
    })

}

menuItems.forEach(item => {
    item.addEventListener('Click',()=> {
        changeActiveItem = ();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })

})
const searchMessage =() => {
    const val = messageSearch.value.tolowerCase();
    console.log(val);
    message.forEach(chat =>{
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            chat.style.display ='flex';
        } else{
            chat.style.display ='none';
        }

    })
}


//======================MESSAGE=======
messageSearch.addEventListener('keyup',searchMessage);


//===================MESSAGES=================
messagesNotification.addEventListener('client',() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelectorAll('.notification-count').style.display= 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none' ;
    },2000);

})

// THEME/DISPLAY CUSTOMIZATION

//====font====
fontSizes.forEach(size => {
    let fontsize;

    if(size.classList.contains('font-size-1')){
        fontSizes = '10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-left','5.4rem');

    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-left','-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-left','-1rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px'; 
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-left','-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px'; 
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-left','-35rem');
    }  
      
    
    // change font size
    document.querySelector('html').style.fontSize= fontSize;
})

