const flag = false;

if(flag){
    import('./moduleA.js').then(module=>{
        module.featureA();
    })
}
else {
    import("./moduleB.js").then(x=>{
      x.featureB();
    })
}