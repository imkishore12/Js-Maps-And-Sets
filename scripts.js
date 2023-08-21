function removeDuplicates(){
    let str="abcadeecfb";
    let ans=new Set(str);
    ans=[...ans];
    ans=ans.join("");
    console.log(ans);
}
removeDuplicates();
function countAlphabets(){
    let str="abcadeecfb";
    let ans=new Map();
    for (let char of str){
        if(ans.has(char)){
            ans.set(char,ans.get(char)+1);
        }
        else{
            ans.set(char,1)
        }
    }
    for(let [key,value] of ans){
        console.log(`${key}=${value}`);
    }
}
countAlphabets();
// str,it,psp,ob
isclicked=true;
function code(){
    if(isclicked){
    document.getElementById("code").innerHTML="Hide";
    document.getElementById("show").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code").innerHTML="show code";
        document.getElementById("show").style.display="none";
        isclicked=true;
    }

}
function code1(){
    if(isclicked){
        document.getElementById("code1").innerHTML="Hide";
        document.getElementById("show1").style.display="block";
        isclicked=false;
    
        }
        else{
            document.getElementById("code1").innerHTML="show code";
            document.getElementById("show1").style.display="none";
            isclicked=true;
        }

}

