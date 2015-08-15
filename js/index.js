(function() {
    
    //Cache Dom Elements
    var navTrigger = $('.nav__trigger');
    var nav = $('.nav');
    
    //Function
    
    function triggerMenu(event) {
        
        event.preventDefault();
        nav.toggleClass('nav--open');
    }
    
    //Bind Function
    
    navTrigger.on('click', triggerMenu);
    
   
})();