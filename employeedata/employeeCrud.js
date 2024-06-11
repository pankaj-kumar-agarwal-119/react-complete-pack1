
if(localStorage.getItem("employees")){

}
else{
    localStorage.setItem("employees",JSON.stringify([]));
}

export const getEmployeeList = ()=>{
    let employees = JSON.parse(localStorage.getItem("employees"));
    return employees;
}

const saveNewEmployee = (employees)=>{
    localStorage.setItem("employees",JSON.stringify(employees));
}

const clearFields = ()=>{
    document.getElementById("employee_id").value = "";
    document.getElementById("employee_name").value = "";
}

export const addEmployee = ()=>{
    let employee_id = document.getElementById("employee_id").value;
    let employee_name = document.getElementById("employee_name").value;
    let obj = {
        employee_id : employee_id,
        employee_name : employee_name
    }
    let employees = [...getEmployeeList(),obj];
    saveNewEmployee(employees);
    clearFields();
}