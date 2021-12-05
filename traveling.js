let tigger = {character: 'Tigger'}
let pooh = {character:'Winnie the Pooh'}
let piglet = {character:'Piglet'}
let bees = {character:'Bees'}
let christopherRobin  = {character:'Christopher Robin'}
let owl = {character:'Owl'}
let rabbit = {character: 'Rabbit'}
let gopher = {character: 'Gopher'}
let kanga ={character: 'Konga'}
let eeyore = {character:'Eeyore'}
let heffalumps ={character:'Heffalumps'}
Object = "none";

//tigger
tigger.north = pooh;

//pooh
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

//piglet
piglet.north = owl;
piglet.east = pooh;

//bees
bees.north = rabbit;
bees.west = pooh;

//gopher
gopher.west = rabbit;

//christopherRobin
christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

//owl
owl.east = christopherRobin;
owl.south = piglet;

//rabbit
rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;

//kanga

kanga.south = christopherRobin;
kanga.north = eeyore;

//eeyore
eeyore.south = kanga;
eeyore.east = heffalumps;


//huffalumps
heffalumps.west = eeyore;


var player = { location : tigger }

function move(direction){
    if(direction == "north" ){
        if(player.location.north == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house");
        }
    }
    if(direction == "south" ){
        if(player.location.south == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house ");
        }
    }
    if(direction == "east" ){
        if(player.location.east == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house ");
        }
    }
    if(direction == "west" ){
        if(player.location.west == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house ");
        }
    }
}
