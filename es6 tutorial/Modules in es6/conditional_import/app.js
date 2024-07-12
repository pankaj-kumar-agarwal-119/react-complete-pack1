
document.getElementById("bt1").addEventListener("click", function () {
    callFeature1();
})

const callFeature1 = async () => {
    const featureAModule = await import('./moduleA.js');
    featureAModule.featureA();
}

document.getElementById("bt2").addEventListener("click", function () {
    callFeature2();
})

const callFeature2 = async () => {
    const featureBModule = await import('./moduleB.js');
    featureBModule.featureB();
}