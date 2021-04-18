window.onload = function (){
    document.getElementById("btn").onclick=function() {
        document.getElementById("outer").classList.add("outer-active");
        document.getElementById("inner").classList.add("inner-active");
    };
}
