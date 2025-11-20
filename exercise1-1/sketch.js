let textF;
let i;
let parts =[];

function preload()
{
    textF = loadStrings('assets/imdb_labelled.txt')

}
function setup()
{
    createCanvas(600,600);
}

function draw()
{
    background(0);
    textAlign(CENTER,CENTER)
    if (parseInt(parts[1]) === 1)
    {
        fill(255)
    }
    if (parseInt(parts[1]) === 0)
    {
        fill(255,0,0)
    }   
    text(parts[0],width/2,height/2)
}

function keyPressed()
{

    textAlign(CENTER,CENTER)
    if (keyCode === ENTER)
    {
        i = random(textF)
        parts = split(i, ".");
        console.log(parts[1])  
    }
}
