//Business logic
function PlayPigDice(player, score) {
  this.player = player;
  this.score = score;
}

PlayPigDice.prototype.increase = function() {
  return this.score += amt;
}
var throwDice = function(){
  return Math.floor(6*Math.random())+1;
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();

    var nameInput = $('input#name').val();

    var Player1 = new PlayPigDice(nameInput)
    alert("made it here!")

    $('button#dice').click(function(event){
      alert(throwDice());
      Player1.score = throwDice();
      console.log(Player1.score);
    })

  });
});
