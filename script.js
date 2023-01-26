//your code here
let inpi=document.getElementById('input');

let expresso="";
function solve(e){
    if(e == 'ans'){
        // Eval below is the inbuilt function for solving the expressions. 
        let result=eval(expresso);
        console.log(result);
         inpi.value=result;
    }
    else if(e == 'clear'){
        expresso ="";
        console.log(expresso);
        inpi.value=expresso;
    }

    else{
        expresso += e;
    console.log(expresso);
     inpi.value=expresso;
    }
}