
const getRandomQuestion = () => {
    $.ajax({
        url: "getRandomQuestion",
        method: "POST",
        success: function(data){
            console.log(data);
            $('.word-b').html( data.word[0].toUpperCase() + data.word.slice(1));
            $('.word-d').html(data.definition);
        }
    });
}
$(".showIt").on('click', function(){
    $('.word-d').fadeIn();
    $(this).hide();
});
getRandomQuestion();