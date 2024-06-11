

document.getElementById("id1").addEventListener("click",function(ev){
    invoke();
})
const invoke = async ()=>{
    const module = await import("./math.js");
    console.log("The sum is : "+module.add(4,9))
}