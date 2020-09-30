function media() {
    var num1 = document.getElementById('n1').innerHTML.valueOf;
    var num2 = document.getElementById('n2').innerHTML.valueOf;
    var num3 = document.getElementById('n3').innerHTML.valueOf;
    var num4 = document.getElementById('n4').innerHTML.valueOf;

    var mediaNum = (num1 + num2 + num3 + num4) /4;

    if (mediaNum != null) {
        return mediaNum;
    } 
    else
    {
        return 'Algum valor está inválido!';
    }

    document.getElementById('resulMedia').innerHTML=mediaNum;
}