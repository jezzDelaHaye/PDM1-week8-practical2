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
    background(255);
    drawNames();

}

function getWords(text)
{
    let parts = [];
    for(let i = 0; i<text.length; i++)
    {
        let cWords = text[i].replace(/[^a-zA-Z]+/g, " ");
        let words = cWords.split(" ")
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
    fill(0);
    for (let i = 0; i < names.length; i++)
    {
        let nameC = 
        {
            name:names[i],
            count:countOccurrences(getWords(textH),names[i])
        } 
        textSize(nameC.count)
        text(nameC.name,0,height/2 + (i*50));
    }
}