let varx1 = document.getElementById("varx1");
let varx2 = document.getElementById("varx2");
let vary1 = document.getElementById("vary1");
let vary2 = document.getElementById("vary2");
let distance = 0;

calculateDistance();

function calculateDistance(){
    let resta1 = varx2 - varx1 * 1;
    let resta2 = vary2 - vary1 * 1;
    let elevarx = Math.pow(resta1,2);
    let elevary = Math.pow(resta2,2);

    //distance = Math.sqrt((Math.pow(varx2 - varx1))+(Math.pow(vary2 - vary1)));
    console.log(elevarx);
    console.log(elevary);
    console.log(resta1);
    console.log(resta2);
}
