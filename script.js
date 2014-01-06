$(document).ready(function () {
    var txtBox = $('#txt');
    var frm = $('#frm');
    var output = $('#output');
    var subBtn = $('#submitBtn');
    var stopBtn = $('#stop');
    var loadBtn = $('#load');
    var loadBtn2 = $('#load2');
    var loadBtnA = $('#load1');
    var pre0 = $('#pre0');
    var pre1 = $('#pre1');
    var pre2 = $('#pre2');
    var txt = $('#display');
    var preset1 = ["1", "2", "3"];
    var preset2 = ["a", "b", "c"];
    var container = ["What we do in life echoes in all eternity.", "Find your purpose and give it life.", "When you work your hardest, the world opens up to you.", "Success isn't the result of spontaneous combustion. You must set yourself on fire.", "You might be more creative, talented, artistic, outgoing, or beautiful. But I will outwork the f*ck out of you. Period.", "Inspiration exists, but it has to find you working.", 
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?", 
"It's not what you do every once in awhile; it's what you dedicate yourself to on a regular basis that makes the difference.",
"It's ok to not work. Just know that somewhere, someone else is... and they'll be ready to take your place.",
"Only do shit you believe in. Period.",
"What would you attempt to do if you knew you could not fail?",
"Be so good they can't ignore you.",
"There's just one life to live and there's no time to waste.",
"Work more. Bitch less.",
"There are no secrets. There are no short cuts. Pick your passion, work harder than anyone you know, and be patient.",
"Dreams don't work unless you do.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"Genius is one percent inspiration and ninety-nine percent perspiration.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you."];
    var console = $('#controlpanel');
    var oldHandle;
    
    function loadPreset0() {
        container = [];
        console.empty();
        container = ["What we do in life echoes in all eternity.", "Find your purpose and give it life.", "When you work your hardest, the world opens up to you.", "Success isn't the result of spontaneous combustion. You must set yourself on fire.", "You might be more creative, talented, artistic, outgoing, or beautiful. But I will outwork the f*ck out of you. Period.", "Inspiration exists, but it has to find you working.", 
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?", 
"It's not what you do every once in awhile; it's what you dedicate yourself to on a regular basis that makes the difference.",
"It's ok to not work. Just know that somewhere, someone else is... and they'll be ready to take your place.",
"Only do shit you believe in. Period.",
"What would you attempt to do if you knew you could not fail?",
"Be so good they can't ignore you.",
"There's just one life to live and there's no time to waste.",
"Work more. Bitch less.",
"There are no secrets. There are no short cuts. Pick your passion, work harder than anyone you know, and be patient.",
"Dreams don't work unless you do.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"Genius is one percent inspiration and ninety-nine percent perspiration.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you."];
        updateConsole();
    };
    
    function loadPreset1() {
        container = [];
        console.empty();
        container = preset1;
        updateConsole();
    };
    
    function loadPreset2() {
        container = [];
        console.empty();
        container = preset2;
        updateConsole();
    };
    
    $(pre0).data('onselect', function() {
        loadPreset0();
    });    
    
    $(pre1).data('onselect', function() {
        loadPreset1();
    });
    
    $(pre2).data('onselect', function() {
        loadPreset2();
    });
        
    $(document).on('change', 'select', function(e) {
        var selected = $(this).find('option:selected'),
            handler = selected.data('onselect');
        if ( typeof handler == 'function' ) {
            handler.call(selected, e);
        }
    });           

    function updateConsole() {
        for (var z = 0; z < container.length; z++) {
            var resultC = container[z];
            var $initialEntry = $('<p>' + '- ' + resultC + '</p>');
            console.append($initialEntry);
         };
    };
    
    updateConsole();
    
    function display() {
        if (txtBox.val() != '') {
            var result = txtBox.val();
            container.push(result);                         //1.
            
            var resultB = container[container.length-1];
            var $entry = $('<p>' + '- ' + resultB + '</p>');
            console.append($entry);                         //2.
        }
        
        var options = {
            duration: 5000,
            rearrangeDuration: 1000,
            effect: 'random',
            centered: true
        };
        
        var tempContainer = [];
        for (var x = 0; x < container.length; x++){
            var index = Math.floor(Math.random() * container.length);
            tempContainer.push(container[index]);
        };

        stopTextualizer();
        txt.textualizer(tempContainer, options);
        txt.textualizer('start');
        txtBox.val('');
    }
    
    $("#controlbox").on('dblclick', 'p', function() {
        var $entry = $(this);
        container.splice($entry.index(), 1);
        $entry.remove();
        stopTextualizer();
        display();
    });
    
    function stopTextualizer(){
        txt.textualizer('stop');
        txt.textualizer('destroy');
    }
        
    $(stopBtn).click(function() {
        stopTextualizer();
    });

    display();

    frm.submit(function (event) {
        event.preventDefault();
        display();
    }); 
        
});
