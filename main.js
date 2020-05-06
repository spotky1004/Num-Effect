$(function (){
  setTimeout(function(){
    for (var i = 0; i < 11; i++) {
      for (var j = 1; j < 30; j++) {
        $('<span>').addClass('text').addClass('pulse').appendTo('#l' + i);
      }
    }
    numbers = [];
    for (var i = 0; i < 290; i++) {
      numbers.push(Math.floor(Math.random()*10));
    }
    $('.text').html(function (index,html) {
      return numbers[index];
    });
    function pulseTrigger(i, lS) {
      setTimeout(function(){
        numbers[i*29+lS] = Math.floor(Math.random()*10);
        $('#l' + i + '> .text:nth-child(' + (lS+1) + ')').removeClass('pulse');
        setTimeout(function(){
          $('#l' + i + '> .text:nth-child(' + (lS+1) + ')').html(function (index,html) {
            return numbers[i*29+lS];
          });
          $('#l' + i + '> .text:nth-child(' + (lS+1) + ')').addClass('pulse');
        }, 10);
      }, 50*i);
    }
    setInterval( function (){
      lineStart = Math.floor(Math.random()*29);
      for (var i = 1; i < 11; i++) {
        pulseTrigger(i, lineStart);
      }
    }, 100);
  }, 750);
});
