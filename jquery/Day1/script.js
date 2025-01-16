var flag=false;
$(document).ready(function () {
   
    $('button').each(function () {
        $(this).attr('title', $(this).attr('id'));
    });
    $('#toggleManage').click(function () {
        $('#manage').fadeToggle();
    });
    const borderStyles = ['solid', 'dashed', 'dotted', 'double'];
    let index = 0;


    $('#changeBorder').click(function () {
        $('#divOne').css('border-style', borderStyles[index]);
        index = (index + 1) % borderStyles.length;
    });

    $('#highlightBoxes').click(function () {
        $('.box').fadeIn(3000, function () {
            $(this).addClass('glow');
        });
    });
    $('#doubleWidth').click(function (){
        const width= $('#divOne').width()
        $('#divOne').width(width*2);
        console.log(`current width of div one is ${width*2}`)
    });
    $('#countParagraphs').click(function () {
        const Count = $('#divOne p').length;
        alert(`Number of paragraphs: ${ Count}`);
    });

    $('#moveManage').click(function () {
        $('#manage').appendTo('#divOne');
    });
  
     $('#replaceParagraphs').click(function () {
          const new_para='<p>New Paragraph Content</p>'
        $('#divOne').html( new_para);
    });

    $('#reverseFade').click(function () {
        $('#div3').fadeIn(500, function () {
            $('#div2').fadeIn(500, function () {
                $('#div1').fadeIn(500);
            });
        });
    });
    $('#toggleText').click(function () {
        $('button').each(function () {
            const currentText = $(this).text();
            $(this).text(currentText === 'Clicked' ? $(this).attr('id') : 'Clicked');
        });
    });
    $('#cloneDiv').click(function(){
        $('#divOne').clone().appendTo('body');
    })
    $('#disableButtons').click(function(){
        if (flag===false){
       flag=true;
        $('button').each(function () {
        
           
            $(this).text( 'disabled');
           $(this).prop('disabled', true);
            
        });
        $(this).prop('disabled', false);
        $(this).text('Enable buttons')
    }
    else {
        $('button').each(function () {
            $(this).text($(this).attr('id'));
           
           $(this).prop('disabled', false);
          
            
        });
       
        $(this).text('disable buttons')
    }
    
    });

    $('#divOne').hover(
        function () {
            $(this).css('background-color', '#e0e0e0');
        },
        function () {
            $(this).css('background-color', '');
        }
        
    );
    $('#countdownTimer').click(function () {
        let timer = 10;
        const countdown = $('<div>').text(timer).attr('id', 'timerDisplay');
        $('#divOne').html(countdown);

        const interval = setInterval(() => {
            timer--;
            if (timer > 0) {
                $('#timerDisplay').text(timer);
            } else {
                clearInterval(interval);
                $('#timerDisplay').remove();
            }
        }, 1000);
    });
    
    $('#toggleRotation').click(function () {
        $('#imgOne').toggleClass('rotate');
    });
    $('#createList').click(function () {
        const items = [];
        let item;
        while ((item = prompt('Enter list item (or leave blank to finish):'))) {
            if (item.trim() === '') break;
            items.push(item.trim());
        }

        const ul = $('<ul>');
        items.forEach(i => ul.append($('<li>').text(i)));
        $('#divOne').html(ul);
    });
});