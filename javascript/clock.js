var clock = {
    rats : 0,
    incrementRats : function() {
        clock.rats++;
        clock.updateDisplay();
    },
    updateDisplay() {
        document.getElementById("#rats").innerHTML = clock.rats;
    },
    updateLoop : function() {
        console.log("update");
        setTimeout(clock.updateLoop, 1000);
    }
}

console.log('this');