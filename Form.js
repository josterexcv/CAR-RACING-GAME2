class Form {
constructor() {

}

display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(170,150);

    var input = createInput("Name");
    var button = createButton('play');

    input.position(250,250);
    button.position(250,280);

button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value();

playerCount+=1;
player.update(name)
player.updateCount(playerCount);
var greeting = createElement('h3');
greeting.html("Hello " + name)
greeting.position(130,160)
});
}     
}