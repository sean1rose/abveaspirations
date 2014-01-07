$(document).ready(function () {
    var txtBox = $('#txt');
    var frm = $('#frm');
    var output = $('#output');
    var subBtn = $('#submitBtn');
    var stopBtn = $('#stop');
    var pauseBtn = $('#pause');
    var pre1 = $('#pre1');
    var pre2 = $('#pre2');
    var pre3 = $('#pre3');
    var pre4 = $('#pre4');
    var pre5 = $('#pre5'); //ALL Strings combined
    var pre6 = $('#pre6');
    var txt = $('#display');
    var glass = $('#frame');
    var preset1 = ["What we do in life echoes in all eternity.",
"Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?",
"There's just one life to live and there's no time to waste.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you.",
"Do you have the courage to go after your dreams?",
"Intent reveals desire. Action reveals commitment.",
"I want to put a dent in the universe.",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"Sometimes I feel like giving up, then I remember that I have a lot of motherfuckers to prove wrong.",
"My belief is stronger than your doubt.",
"Don't wait for it to happen... make it happen.",
"You can't stop what's coming.",
"The goal isn't to live forever, the goal is to create something that will.",
"If you wish to be out front, then act as if you were behind.",
"If not us, who? If not now, when?",
"When you want to succeed as bad as you want to breathe - then you'll be successful.",
"Go confidently in the direction of your dreams. Live the life you have imagined.",
"The coward dies a thousand deaths, the brave but one.",
"Do it or not. There is no try.",
"Make it yours.",
"You have a choice. Live or die. Every breath is a choice. Every minute is a choice. To be or not to be.",
"Once you make a decision... the Universe conspires to make it happen.",
"Life begins at the end of your comfort zone.",
"Walk in. Fuck shit up. Walk out.",
"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
"In any situation the best thing you can do is the right thing, the next best thing you can do is the wrong thing, the worst thing you can do is nothing.",
"Live once.",
"Fortes Fortuna Adiuvat.",
"Come on you sons of bitches, do you want to live forever?",
"Don't worry... Everything is going to be amazing.",
"Be ashamed to die until you have won some victory for humanity."];
    var preset2 = ["Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"You might be more creative, talented, artistic, outgoing, or beautiful. But I will outwork the fuck out of you. Period.", 
"Inspiration exists, but it has to find you working.",
"It's not what you do every once in awhile; it's what you dedicate yourself to on a regular basis that makes the difference.",
"It's ok to not work. Just know that somewhere, someone else is... and they'll be ready to take your place.",
"Be so good they can't ignore you.",
"Work more. Bitch less.",
"Dreams don't work unless you do.",
"Genius is one percent inspiration and ninety-nine percent perspiration.",
"There are no short cuts to doing it right.",
"Nobody who ever gave his best regretted it.",
"If you are persistent, you will get it. If you are consistent, you will keep it.",
"You've got one job, and that is to get better.",
"Never let anyone out-work you or out-hustle you. Ever.",
"You have to fight through some bad days to earn the best days of your life.",
"You are going to want to give up. Don't.",
"Energy and persistence conquer all things.",
"Knowing trees, I understand the meaning of patience. Knowing grass, I can appreciate persistence.",
"The extra mile is a vast, unpopulated wasteland.",
"Everything is energy and that's all there is to it. Match the frequency of the reality you want and you cannot help but get that reality. It can be no other way. This is not philosophy. This is physics.",
"How you do anything is how you do everything.",
"A mind always employed is always happy. This is the true secret, the grand recipe, for felicity.",
"The harder you work the harder it is to surrender."];
    var preset3 = ["Find your purpose and give it life.",
"Only do shit you believe in. Period.",
"What would you attempt to do if you knew you could not fail?",
"There are no secrets. There are no short cuts. Pick your passion, work harder than anyone you know, and be patient.",
"The more you lose yourself in something bigger than yourself, the more energy you will have.",
"A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
"Many men go fishing all their lives without knowing that it is not fish they are after.",
"If people aren't laughing at your dreams, your dreams aren't big enough.",
"Die doing the things that you love.",
"If it's both terrifying and amazing then you should definitely pursue it.",
"Fall in love with the process, and the results will come.",
"Dreams won't come looking for you. That's why you have to chase them. Pursue them until they become reality, then hold on tightly.",
"Listen to your own voice, your own soul. Too many people listen to the noise of the world, instead of themselves.",
"When you're passionate about something, there's no clocking in or clocking out. You live it 24 hours of the day.",
"Know who you are and be it. Know what you want and go out and get it.",
"It is the soul's duty to be loyal to its own desires. It must abandon itself to its master, passion.",
"Create with the heart; build with the mind.",
"Don't go for what you know you can get. Go for what you really want.",
"Study what you love, respect what you love, produce what you love, and most importantly believe in what you love.",
"Don't follow your dreams... Chase 'em!",
"I'd rather be a failure at something I love than a success at something I hate.",
"It doesn't interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart's longing.",
"If you always do what interests you, at least one person is pleased."];
    var preset4 = ["Life is a gift. Never take it for granted.",
"God only blesses me so I can bless others.",
"The things you take for granted someone else is praying for.",
"You can complain that roses have thorns, or you can be grateful that thorn bushes have roses.",
"If you admire somebody you should go ahead and tell 'em. People never get the flowers while they can still smell 'em.",
"Live in such a way that if someone spoke badly of you no one would believe it.",
"How do you plan to win when you aren't right within?",
"Don't blame people for disappointing you. Blame yourself for expecting too much.",
"The world is changed by your example, not your opinion.",
"Give out what you most want to come back.",
"Humility is not thinking less of yourself, it's thinking of yourself less.",
"What you do speaks so loudly that I cannot hear what you say.",
"To err is human; to forgive, divine.",
"People will forget what you say to them, people will forget what you did, but people will never forget how you make them feel.",
"Every man is the creature of the age in which he lives; very few are able to raise themselves above the ideas of the times.",
"Successful people never worry about what others are doing.",
"When you throw dirt you lose ground.",
"Success requires a great capacity to accept hatred.",
"Pay more attention to your Creator than your critics.",
"Confidence is silent. Insecurities are loud.",
"It is you who needs to convince yourself. An unbreakable resolve and an iron-will are worth more than 10,000 well-wishers. Support is irrelvant if you don't believe in yourself.",
"They want to see you do good, but never better than them.",
"Don't worry about those who talk behind your back. They're behind you for a reason.",
"Life becomes easier when you delete the negative people from it.",
"Those who mind don't matter, and those who matter don't mind.",
"No one can make you feel inferior without your consent.",
"We are all in the gutter, but some of us are looking at the stars.",
"Learn to say 'Fuck You' to the world once in a while.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"Work on building the life of your dreams, and the person of your dreams will follow.",
"He who says he can and he who says he can't are both usually right.",
"Circle got smaller. Vision got larger.",
"Don't compare your Chapter 1 to someone else's Chapter 20.",
"Don't be afraid to change. You may lose something good, but you may gain something better.",
"Don't try to fit in... they're all miserable over there.",
"An essential aspect of creativity is not being afraid to fail.",
"If you want to fly, you have to give up the things that weigh you down.",
"Just keep moving forward and don't give a shit about what anybody thinks. Do what you have to do, for you.",
"Don't look to the approval of others for your mental stability.",
"Smile, breathe, and go slowly.",
"Being realisitic is the most commonly traveled road to mediocrity."];
    var preset5 = ["What we do in life echoes in all eternity.",
"Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?",
"There's just one life to live and there's no time to waste.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you.",
"Do you have the courage to go after your dreams?",
"Intent reveals desire. Action reveals commitment.",
"I want to put a dent in the universe.",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"Sometimes I feel like giving up, then I remember that I have a lot of motherfuckers to prove wrong.",
"My belief is stronger than your doubt.",
"Don't wait for it to happen... make it happen.",
"You can't stop what's coming.",
"The goal isn't to live forever, the goal is to create something that will.",
"If you wish to be out front, then act as if you were behind.",
"If not us, who? If not now, when?",
"When you want to succeed as bad as you want to breathe - then you'll be successful.",
"Go confidently in the direction of your dreams. Live the life you have imagined.",
"The coward dies a thousand deaths, the brave but one.",
"Do it or not. There is no try.",
"Make it yours.",
"You have a choice. Live or die. Every breath is a choice. Every minute is a choice. To be or not to be.",
"Once you make a decision... the Universe conspires to make it happen.",
"Life begins at the end of your comfort zone.",
"Walk in. Fuck sh!t up. Walk out.",
"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
"In any situation the best thing you can do is the right thing, the next best thing you can do is the wrong thing, the worst thing you can do is nothing.",
"Live once.",
"Fortes Fortuna Adiuvat.",
"Come on you sons of bitches, do you want to live forever?",
"Don't worry... Everything is going to be amazing.",
"Be ashamed to die until you have won some victory for humanity.",
"Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"You might be more creative, talented, artistic, outgoing, or beautiful. But I will outwork the fuck out of you. Period.", 
"Inspiration exists, but it has to find you working.",
"It's not what you do every once in awhile; it's what you dedicate yourself to on a regular basis that makes the difference.",
"It's ok to not work. Just know that somewhere, someone else is... and they'll be ready to take your place.",
"Be so good they can't ignore you.",
"Work more. Bitch less.",
"Dreams don't work unless you do.",
"Genius is one percent inspiration and ninety-nine percent perspiration.",
"There are no short cuts to doing it right.",
"Nobody who ever gave his best regretted it.",
"If you are persistent, you will get it. If you are consistent, you will keep it.",
"You've got one job, and that is to get better.",
"Never let anyone out-work you or out-hustle you. Ever.",
"You have to fight through some bad days to earn the best days of your life.",
"You are going to want to give up. Don't.",
"Energy and persistence conquer all things.",
"Knowing trees, I understand the meaning of patience. Knowing grass, I can appreciate persistence.",
"The extra mile is a vast, unpopulated wasteland.",
"How you do anything is how you do everything.",
"A mind always employed is always happy. This is the true secret, the grand recipe, for felicity.",
"The harder you work the harder it is to surrender.",
"Find your purpose and give it life.",
"Only do shit you believe in. Period.",
"What would you attempt to do if you knew you could not fail?",
"There are no secrets. There are no short cuts. Pick your passion, work harder than anyone you know, and be patient.",
"The more you lose yourself in something bigger than yourself, the more energy you will have.",
"A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
"Many men go fishing all their lives without knowing that it is not fish they are after.",
"If people aren't laughing at your dreams, your dreams aren't big enough.",
"Die doing the things that you love.",
"If it's both terrifying and amazing then you should definitely pursue it.",
"Fall in love with the process, and the results will come.",
"Dreams won't come looking for you. That's why you have to chase them. Pursue them until they become reality, then hold on tightly.",
"Listen to your own voice, your own soul. Too many people listen to the noise of the world, instead of themselves.",
"When you're passionate about something, there's no clocking in or clocking out. You live it 24 hours of the day.",
"Know who you are and be it. Know what you want and go out and get it.",
"It is the soul's duty to be loyal to its own desires. It must abandon itself to its master, passion.",
"Create with the heart; build with the mind.",
"Don't go for what you know you can get. Go for what you really want.",
"Study what you love, respect what you love, produce what you love, and most importantly believe in what you love.",
"Don't follow your dreams... Chase 'em!",
"I'd rather be a failure at something I love than a success at something I hate.",
"It doesn't interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart's longing.",
"If you always do what interests you, at least one person is pleased.",
"Life is a gift. Never take it for granted.",
"God only blesses me so I can bless others.",
"The things you take for granted someone else is praying for.",
"You can complain that roses have thorns, or you can be grateful that thorn bushes have roses.",
"If you admire somebody you should go ahead and tell 'em. People never get the flowers while they can still smell 'em.",
"Live in such a way that if someone spoke badly of you no one would believe it.",
"How do you plan to win when you aren't right within?",
"Don't blame people for disappointing you. Blame yourself for expecting too much.",
"The world is changed by your example, not your opinion.",
"Give out what you most want to come back.",
"Humility is not thinking less of yourself, it's thinking of yourself less.",
"What you do speaks so loudly that I cannot hear what you say.",
"To err is human; to forgive, divine.",
"People will forget what you say to them, people will forget what you did, but people will never forget how you make them feel.",
"Every man is the creature of the age in which he lives; very few are able to raise themselves above the ideas of the times.",
"Successful people never worry about what others are doing.",
"When you throw dirt you lose ground.",
"Success requires a great capacity to accept hatred.",
"Pay more attention to your Creator than your critics.",
"Confidence is silent. Insecurities are loud.",
"It is you who needs to convince yourself. An unbreakable resolve and an iron-will are worth more than 10,000 well-wishers. Support is irrelvant if you don't believe in yourself.",
"They want to see you do good, but never better than them.",
"Don't worry about those who talk behind your back. They're behind you for a reason.",
"Life becomes easier when you delete the negative people from it.",
"Those who mind don't matter, and those who matter don't mind.",
"No one can make you feel inferior without your consent.",
"We are all in the gutter, but some of us are looking at the stars.",
"Learn to say 'Fuck You' to the world once in a while.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"Work on building the life of your dreams, and the person of your dreams will follow.",
"He who says he can and he who says he can't are both usually right.",
"Circle got smaller. Vision got larger.",
"Don't compare your Chapter 1 to someone else's Chapter 20.",
"Don't be afraid to change. You may lose something good, but you may gain something better.",
"Don't try to fit in... they're all miserable over there.",
"An essential aspect of creativity is not being afraid to fail.",
"If you want to fly, you have to give up the things that weigh you down.",
"Just keep moving forward and don't give a shit about what anybody thinks. Do what you have to do, for you.",
"Don't look to the approval of others for your mental stability.",
"Smile, breathe, and go slowly.",
"Being realisitic is the most commonly traveled road to mediocrity."
];
    var preset6 = ["Your ASPIRATIONS here"];
    var container = ["What we do in life echoes in all eternity.",
"Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?",
"There's just one life to live and there's no time to waste.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you.",
"Do you have the courage to go after your dreams?",
"Intent reveals desire. Action reveals commitment.",
"I want to put a dent in the universe.",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"Sometimes I feel like giving up, then I remember that I have a lot of motherfuckers to prove wrong.",
"My belief is stronger than your doubt.",
"Don't wait for it to happen... make it happen.",
"You can't stop what's coming.",
"The goal isn't to live forever, the goal is to create something that will.",
"If you wish to be out front, then act as if you were behind.",
"If not us, who? If not now, when?",
"When you want to succeed as bad as you want to breathe - then you'll be successful.",
"Go confidently in the direction of your dreams. Live the life you have imagined.",
"The coward dies a thousand deaths, the brave but one.",
"Do it or not. There is no try.",
"Make it yours.",
"You have a choice. Live or die. Every breath is a choice. Every minute is a choice. To be or not to be.",
"Once you make a decision... the Universe conspires to make it happen.",
"Life begins at the end of your comfort zone.",
"Walk in. Fuck shit up. Walk out.",
"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
"In any situation the best thing you can do is the right thing, the next best thing you can do is the wrong thing, the worst thing you can do is nothing.",
"Live once.",
"Fortes Fortuna Adiuvat.",
"Come on you sons of bitches, do you want to live forever?",
"Don't worry... Everything is going to be amazing.",
"Be ashamed to die until you have won some victory for humanity."];
    var console = $('#controlpanel');
    var oldHandle;
    
    function loadPreset1() {
        container = [];
        console.empty();
        container = ["What we do in life echoes in all eternity.",
"Success isn't the result of spontaneous combustion. You must set yourself on fire.",
"Who said it could not be done? And what great victories has he to his credit which qualify him to judge others accurately?",
"There's just one life to live and there's no time to waste.",
"Pause for a moment and put things in perspective. You have life, and it can be so very good.",
"You don't need planning permission to build castles in the sky.",
"Nothing is stopping you.",
"Do you have the courage to go after your dreams?",
"Intent reveals desire. Action reveals commitment.",
"I want to put a dent in the universe.",
"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
"Sometimes I feel like giving up, then I remember that I have a lot of motherfuckers to prove wrong.",
"My belief is stronger than your doubt.",
"Don't wait for it to happen... make it happen.",
"You can't stop what's coming.",
"The goal isn't to live forever, the goal is to create something that will.",
"If you wish to be out front, then act as if you were behind.",
"If not us, who? If not now, when?",
"When you want to succeed as bad as you want to breathe - then you'll be successful.",
"Go confidently in the direction of your dreams. Live the life you have imagined.",
"The coward dies a thousand deaths, the brave but one.",
"Do it or not. There is no try.",
"Make it yours.",
"You have a choice. Live or die. Every breath is a choice. Every minute is a choice. To be or not to be.",
"Once you make a decision... the Universe conspires to make it happen.",
"Life begins at the end of your comfort zone.",
"Walk in. Fuck shit up. Walk out.",
"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
"In any situation the best thing you can do is the right thing, the next best thing you can do is the wrong thing, the worst thing you can do is nothing.",
"Live once.",
"Fortes Fortuna Adiuvat.",
"Come on you sons of bitches, do you want to live forever?",
"Don't worry... Everything is going to be amazing.",
"Be ashamed to die until you have won some victory for humanity."];
        updateConsole();
    };
    
    function loadPreset2() {
        container = [];
        console.empty();
        container = preset2;
        updateConsole();
    };

    function loadPreset3() {
        container = [];
        console.empty();
        container = preset3;
        updateConsole();
    };

    function loadPreset4() {
        container = [];
        console.empty();
        container = preset4;
        updateConsole();
    };

    function loadPreset5() {
        container = [];
        console.empty();
        container = preset5;
        updateConsole();
    };

    function loadPreset6() {
        container = [];
        console.empty();
        container = preset6;
        updateConsole();
    };
        
    $(pre1).data('onselect', function() {
        loadPreset1();
    });
    
    $(pre2).data('onselect', function() {
        loadPreset2();
    });

    $(pre3).data('onselect', function() {
        loadPreset3();
    });

    $(pre4).data('onselect', function() {
        loadPreset4();
    });

    $(pre5).data('onselect', function() {
        loadPreset5();
    });

    $(pre6).data('onselect', function() {
        loadPreset6();
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
    
    function stopTextualizer(){
        glass.textualizer('stop');
        glass.textualizer('destroy');
    };

    function display() {
        if (txtBox.val() != '') {
            var result = txtBox.val();
            container.push(result);                         //1.
            
            var resultB = container[container.length-1];
            var $entry = $('<p>' + '- ' + resultB + '</p>');
            console.append($entry);                         //2.
        };
        
        var options = {
            duration: 9000,
            rearrangeDuration: 1000,
            effect: 'random',
            centered: true
        };
        
        function randomizeArray(array) {
            for (var j = array.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var temp = array[j];
                array[j] = array[k];
                array[k] = temp;
            }
            return array;
        };

        randomizeArray(container);

        stopTextualizer();
        glass.textualizer(container, options);
        glass.textualizer('start');
        txtBox.val('');
    };

    $("#controlbox").on('dblclick', 'p', function() {
        var $entry = $(this);
        container.splice(($entry.index() + 1), 1);
        $entry.remove();
        stopTextualizer();
        display();
    });
        
    $(stopBtn).click(function() {
        stopTextualizer();
    });

    function pauseTextualizer(){
        glass.textualizer('pause');
    };

    $(pauseBtn).click(function() {
        pauseTextualizer();
    });

    display();

    frm.submit(function (event) {
        event.preventDefault();
        display();
    }); 
        
});
