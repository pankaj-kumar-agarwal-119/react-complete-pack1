import {addEmployee,getEmployeeList} from "./opearations.js";
import getCompanyDetails from "./companyCrud.js";

document.getElementById("btn_add_employee").addEventListener("click",function(ev){
  addEmployee();
  loadAllEmployeeListOnUI();
})

const clearUIList = (ulRef)=>{
  ulRef.innerHTML="";
}

const populateCompanyDetail = ()=>{
  document.getElementById("company_name").innerHTML = getCompanyDetails();
}

//load all employee list
const loadAllEmployeeListOnUI = ()=>{
 let employees = getEmployeeList();
 let ulRef = document.getElementById("employee_list");
 clearUIList(ulRef);
 console.log("The employee list : ",employees);
 employees.forEach((el)=>{
   let liRef = document.createElement("li");
   liRef.innerHTML = `Id : ${el.employee_id} | Name : ${el.employee_name} | 
   <button >Edit</button> | <button>Delete</button>
   `;
   ulRef.appendChild(liRef);
 })
}

document.addEventListener("DOMContentLoaded",loadAllEmployeeListOnUI);
document.addEventListener("DOMContentLoaded",populateCompanyDetail);