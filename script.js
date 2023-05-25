
function placememe()
{
    // Pega as inputs do usuário
    var upperTextInsert = document.getElementById("upperTextInsert").value; // Coloca no texto de cima do meme
    var memeUrl = document.getElementById("imageLink").value;

    // pega as IDs dos atributos a modificar
    var upperText = document.getElementById("upperText");
    var meme = document.getElementById("meme");

    
    // Insere os valores nos atributos
    meme.src = memeUrl;
    upperText.innerHTML = upperTextInsert;

    
    
}
function changeimgsize()
{
    var meme = document.getElementById("meme");
    var size = document.getElementById("memeSize").value;

    meme.style.width = size+"%";
}
function changetextsize()
{
    var meme = document.getElementById("upperText");
    var size = document.getElementById("upperTextSize").value;

    meme.style.fontSize = size+"%";
}