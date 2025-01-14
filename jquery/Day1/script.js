$(document).ready(function () {
   
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
});