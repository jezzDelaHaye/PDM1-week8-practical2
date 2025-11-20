let textH;
let names = ['Hamlet','Ophelia','Horatio','Denmark'];

function preload()
{
    textH = loadStrings('assets/hamlet.txt')
}

function setup()
{
    createCanvas(600,600);
    
}

function draw()
{
    background(0);
    drawNames();
}

function getWords(text)
{
    let parts = [];
    for(let i = 0; i<text.length; i++)
    {
        let words = split(text[i], " ");
        parts = parts.concat(words);
    }
    return(parts)
}

function countOccurrences(parts,word)
{
    let occurrences = 0;
    for (let i = 0; i<parts.length; i++)
    {
        if (parts[i] === word)
        {
            occurrences++;
        }
    }
    return(occurrences)
}

function drawNames()
{
    fill(255)
    textAlign(CENTER)
    for (let i = 0; i < names.length; i++)
    {
        
        textSize(countOccurrences(getWords(textH),names[i])*5);
        text(names[i],width/2,height/(i*2))
    }
}