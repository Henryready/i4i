function randomPosition(myclass){
    var randomW = Math.floor(80*Math.random());
    var randomH = Math.floor(80*Math.random());
    $(myclass).css({'top' : randomH + '%'});
    $(myclass).css({'left' : randomW + '%'});
  };
  
  randomPosition('.yeaohk');
  
  setInterval(function () {
      randomPosition('.yeaohk');
  }, 5000);