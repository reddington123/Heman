
/*
$.fn.selectRange = function(start, end) {
 
    if(typeof end === 'undefined') {
        end = start;
    }
    return this.each(function() {
        if('selectionStart' in this) {
            this.selectionStart = start;
            this.selectionEnd = end;
        } else if(this.setSelectionRange) {
            this.setSelectionRange(start, end);
        } else if(this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};
 
(function(){
    $("textarea").keydown(function(e) {
        if(e.keyCode === 9) { 
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var $this = $(this);
            var value = $this.val();
            $this.val(value.substring(0, start)
            + "\t"
            + value.substring(end));
            this.selectionStart = this.selectionEnd = start + 1;
            return false;
        } 

    });
})();


(function(){
    d = new Date();
    var prev = d.getTime();  
    var curr;
    var socket = io();
    var ob = document.getElementById("messages");

    ob.addEventListener('keyup',function(){
        var str = ob.value;
        socket.emit('chat message',str);
        e = new Date();
        curr = e.getTime();
        
        if((curr - prev) >= 3000) {  
            setTimeout(function(){
                var cursorPosition = $('#messages').prop("selectionStart");
                socket.emit('cursor position',cursorPosition);
            },10); 
            prev = curr;
        }  
        return false;
    });

    socket.on('chat message', function(msg){
        ob.value = msg;
    });

    window.addEventListener('load',function(){
        var str = "";
        socket.emit('page load',str);
        return false;
    });    


    socket.on('cursor position',function(msg) {
        $('#messages').selectRange(msg);
    });
})();
*/

