let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let desc = document.getElementById("description")
function Add(){
    if(inputs.value == ""){
        alert("Please enter task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}   ${desc.value} <i class="fa-solid fa-trash"></i>`  ;
        
        text.appendChild(newEle);
        inputs.value="";
        desc.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}