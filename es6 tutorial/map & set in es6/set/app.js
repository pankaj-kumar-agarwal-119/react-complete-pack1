
const addElementToSet = (setRef, value) => {
    setRef.add(value);
}

const deleteSetElement = (setRef, value) => {
    console.log("Inside the delete set value");
    if (setRef.has(value)) {
        setRef.delete(value);
        displaySetList(setRef);
    }
    else {
        alert("set value does not exist");
    }
}

const displaySetList = (setRef) => {
    let tableRef = document.getElementById("tbody_id");
    tableRef.innerHTML = "";
    let size = setRef?.size;
    if (size > 0) {
        for (let value of setRef) {
            let trRef = document.createElement("tr");

            let tdTypeRef = document.createElement("td");
            tdTypeRef.innerHTML = `${typeof value}`;
            trRef.appendChild(tdTypeRef);

            let tdValueRef = document.createElement("td");
            tdValueRef.innerHTML = `${typeof value == "object"?JSON.stringify(value):value}`;
            trRef.appendChild(tdValueRef);

            let tdActionRef = document.createElement("td");
            let delBtn = document.createElement("btn");
            delBtn.innerHTML = `<button class="btn btn-sm btn-danger">X</button>`;
            delBtn.addEventListener("click", function (ev) {
                if (confirm(`Do you want to delete value : ${value} from set`)) {
                    deleteSetElement(setRef, value);
                }
            })
            tdActionRef.appendChild(delBtn);
            trRef.appendChild(tdActionRef);

            tableRef.appendChild(trRef);
        }
    }
    else {
        let trRef = document.createElement("tr");
        let tdTypeRef = document.createElement("td");
        tdTypeRef.colSpan = 2;
        tdTypeRef.innerHTML = `<h4>No record exist<h4>`;
        trRef.appendChild(tdTypeRef);
        tableRef.appendChild(trRef);
    }
}

const createSetRef = () => {
    if (window.setRef) {
        return setRef;
    }
    else {
        let setRef = new Set([1]);
        window.setRef = setRef;
        console.log("The first set ref : ", setRef);
        return setRef;
    }
}

const setOperations = (set) => {
    let citydetails = {name : 'bangalore',population : 20000000};
    let fun1 = ()=>{
        return 1;
    }
    let fun2 = ()=>{
        return 2;
    }
    console.log("The set ref : ", set)
    //Creating a set entity
    // let set = new Set();
    // let set = new Set([1,2,3,4,2,3]);
    //adding elements
    addElementToSet(set, 1);
    addElementToSet(set, 2);
    addElementToSet(set, 3);
    addElementToSet(set, 2);
    addElementToSet(set, 4);
    addElementToSet(set,"Bangalore");
    addElementToSet(set,true);
    addElementToSet(set,false);
    addElementToSet(set,true);
    addElementToSet(set,citydetails);
    addElementToSet(set,citydetails);
    addElementToSet(set,fun1);
    addElementToSet(set,fun2);
}

const clearSet = (set) => {
    set.clear();
    console.log("The set after clear : ", set, set.size);
    displaySetList();
}

document.getElementById('btn').addEventListener('click', function () {
    let set = createSetRef();
    setOperations(set);
    displaySetList(set);
});

document.getElementById('clear_btn').addEventListener('click', function () {
    let setRef = createSetRef();
    clearSet(setRef);
});