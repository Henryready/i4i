function randomPosition(myclass){
    var randomW = Math.floor(80*Math.random());
    var randomH = Math.floor(80*Math.random());
    $(myclass).css({'top' : randomH + '%'});
    $(myclass).css({'left' : randomW + '%'});
  };
  
  randomPosition('.stooge');
  
  setInterval(function () {
      randomPosition('.stooge');
  }, 5000);

  function randomPosition(myclass){
    var randomW = Math.floor(80*Math.random());
    var randomH = Math.floor(80*Math.random());
    $(myclass).css({'top' : randomH + '%'});
    $(myclass).css({'left' : randomW + '%'});
  };
  
  randomPosition('.block');
  
  setInterval(function () {
      randomPosition('.block');
  }, 5000);