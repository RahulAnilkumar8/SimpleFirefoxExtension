function checkInactivity() {
     function motivation() {
        window.open( 'http://i.imgur.com/1a6i2Zh.gifv' );
    }
    
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(motivation, 30000);
    }
    
    var time;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onscroll = resetTimer;
    window.onkeypress = resetTimer;
    
   
}

checkInactivity();
