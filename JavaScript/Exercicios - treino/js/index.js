function media() {
   var n1 = parseFloat(prompt('Insira a primeira nota: '));
   var n2 = parseFloat(prompt('Insira a segunda nota: '));
   var n3 = parseFloat(prompt('Insira a terceira nota: '));
   var n4 = parseFloat(prompt('Insira a quarta nota: '));
   var media;

   if (n1,n2,n3,n4 != null) {
      media = ((n1 + n2 + n3 + n4) / 4).toFixed(1);
   } 

   document.getElementById('resulMedia').innerHTML=media;

}