// This project is completly made by me all logics are mine
console.log("This is index.js file");
let pictures = ['cust-0', 'cust-1', 'cust-2', 'cust-3', 'cust-4', 'cust-5'];

showCourse();
function validation(name,course,author){
    let isError = false;
    let feedback = document.querySelector(".feedback");
    feedback.innerHTML = '';
    if(name=="" || course=="" || author==""){
        isError = true;
        feedback.innerHTML = "Dont keep the box empty";
        feedback.classList.add("showItem","alert-danger");
        setTimeout(() => {
            feedback.classList.remove("showItem","alert-danger");
        }, 1000);
    }else{
        isError=false;
        feedback.innerHTML = "Calculating";
        feedback.classList.add("showItem","alert-success");
        setTimeout(() => {
            feedback.classList.remove("showItem","alert-success");
        }, 2000);
    }
    return isError;
}
// event listener on form
document.querySelector("#customer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
    //  storing all dynamic values
    let index = parseInt(Math.random() * pictures.length - 1);
    let customerName = document.querySelector(".name").value;
    let course = document.querySelector(".course").value;
    let author = document.querySelector(".author").value;
    let iserror = validation(customerName,course,author);
    if(!iserror){
    //   local storage action
    let getItemValue = localStorage.getItem("courseForm");
    if (getItemValue == null) {
        courseArray = [];
    } else {
        courseArray = JSON.parse(getItemValue);
    }
    let myObj = {
        Image:pictures[index],
        Name: customerName,
        Course: course,
        Author: author,
    }
    courseArray.push(myObj);
    localStorage.setItem("courseForm",JSON.stringify(courseArray));
    // console.log(courseArray);
 
    let loading = document.querySelector('.loading');
    
    loading.classList.add("showItem")
    setTimeout(() => {
        loading.classList.remove("showItem")

        showCourse();
    }, 2000);
}
  
})

function showCourse() {
    let getItemValue = localStorage.getItem("courseForm");
    if (getItemValue == null) {
        courseArray = [];
    } else {
        courseArray = JSON.parse(getItemValue);
    }
    let html = "";
    courseArray.forEach(function(element,index){
        html += `<div class="col-11 mx-auto col-md-6 col-lg-4 my-3 courseCard">
        <div class="card text-left">
         <img src="./img/${element.Image}.jpg" class="card-img-top" alt="">
         <div class="card-body">
          <!-- customer name -->
          <h6 class="text-capitalize "><span class="badge bg-warning mr-2">name :</span><span id="customer-name" class="mx-2">${element.Name}</span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize my-3"><span class="badge bg-success mr-2">course :</span><span id="customer-course" class="mx-2">
            ${element.Course}
           </span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize"><span class="badge bg-danger mr-2">author :</span><span id="course-author" class="mx-2 author">${element.Author}</span></h6>
          <!-- end of customer name -->
          <button type="button" class="btn btn-outline-secondary my-2" onclick="deleteCard(${index})" >Delete</button>
         </div>
        </div>
        <!-- single customer -->
       </div>`
    })
    let customerList = document.querySelector(".customer-list");
   
   if(courseArray.length!=0){
    customerList.innerHTML = html;
   }else{
    customerList.innerHTML = `Nothing to show`   
   }
 
    document.querySelector(".name").value="";
    document.querySelector(".course").value="";
    document.querySelector(".author").value="";
}
function deleteCard(index){
    let getItemValue = localStorage.getItem("courseForm");
    if (getItemValue == null) {
        courseArray = [];
    } else {
        courseArray = JSON.parse(getItemValue);
    }
    courseArray.splice(index,1);
    console.log(courseArray);
    localStorage.setItem("courseForm",JSON.stringify(courseArray));
    showCourse();
}
// search 
document.querySelector(".search").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("click submitted");
    let searchValue = document.querySelector(".searchValue").value;
    if(searchValue==""){
        alert("You didnt put anything to search");
    }
    searchValue = searchValue.trim().toLowerCase();
    let cards = document.querySelectorAll(".courseCard");
    cards.forEach((card)=>{
       
        let author = card.children[0].children[1].children[2].children[1].textContent;
        let finalAuthor = author.trim().toLowerCase();
        if(finalAuthor.includes(searchValue)){
          card.style.display = "block";
        }else{
            card.style.display="none";
        }


    })
    
})