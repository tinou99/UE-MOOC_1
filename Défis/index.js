// javascript

//DEFI 3
console.log("coucou");


//DEFI 8
function test1(){
    console.log("test1");
}


//DEFI 9
function test2() {
    var test = "Le titre a été modifié";
    document.getElementById("titre_principal").innerHTML =  test;
}



//DEFI 11
function test3(){
    var count = document.getElementById("score").innerHTML;
    Number(count);
    document.getElementById("score").innerHTML = ++count; 
}


//DEFI 12
function test4(){
    case0 = document.getElementById("case0-0").innerHTML
    console.log(case0)
}


//DEFI 13
function test5(){
    var name_case = "30";
    document.getElementById("case0-0").innerHTML = name_case;
}


//DEFI 14
function getValue(i,j){
    var t = document.getElementById("tableau");
    return t.rows[i].cells[j].innerHTML;
}

function test6(){
    console.log(getValue(0,0));
    console.log(getValue(1,1));
    console.log(getValue(2,2));
    console.log(getValue(3,3));
}


//DEFI 15
function setValue(i,j,val){
    var t = document.getElementById("tableau");
    t.rows[i].cells[j].innerHTML = val;
}


function test7(){
    setValue(0,0,"p"); 
    setValue(1,1,"q");
    setValue(2,2,"r");
    setValue(3,3,"s");
}


//DEFI 16
function showRow(i){
    var t = document.getElementById("tableau");
    for (var j = 0; j < 4; j++)  {
        console.log(getValue(i,j));
    }
}

function test8(){
    showRow(0);
    showRow(1);
    showRow(2);
    showRow(3);
}


//DEFI 17
function showCol(j){
    var t = document.getElementById("tableau");
    for (var i = 0; i < 4; i++)  {
        console.log(getValue(i,j));
    }
}

function test9(){
    showCol(0); 
    showCol(1);
    showCol(2);
    showCol(3);
}


function setRow(i,a,b,c,d){
    for (var j = 0; j < 4; j++)  {
        setValue(i,j,a);
        setValue(i,j,b);
        setValue(i,j,c);
        setValue(i,j,d);
    }
}


function test10(){
    setRow(0,1,2,3,4);
    setRow(1,5,6,7,8);
    setRow(2,9,10,11,12);
    setRow(3,13,14,15,16);
}




document.addEventListener('keydown', function(event) { //pour tout le document
    //DEFI 6, 7
    console.log(event.key);
    if (event.key == "t"){
        test1();
    }
    else if (event.key == "y") {
        test2(); // change title
    }
    else if (event.key == "e") {
        test3();
    }
    else if (event.key == "c"){
        test4();
    }
    else if (event.key == "a") {
        test5();
    }
    else if (event.key == "p"){
        test6();
    }
    else if (event.key == "b"){
        test7();
    }
    else if (event.key == "z"){
        test8();
    }
    else if (event.key == "i"){
        test9();
    }
    else if (event.key == "w"){
        test10();
    }
});
//addEventListener est un gestionnaire d'événement