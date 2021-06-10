// This project is completly made by me all logics are mine
console.log("This is index.js file");
let pictures = ['cust-0', 'cust-1', 'cust-2', 'cust-3', 'cust-4', 'cust-5'];
// event listener on form

document.querySelector("#customer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
    //  storing all dynamic values
    let customerName = document.querySelector(".name").value;
    let course = document.querySelector(".course").value;
    let author = document.querySelector(".author").value;
  inserting(customerName,course,author);
})
let html = "";
function inserting(name, course, author) {
    let index = parseInt(Math.random()*pictures.length-1);
   
    html += `<div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
    <div class="card text-left">
     <img src="./img/${pictures[index]}.jpg" class="card-img-top" alt="">
     <div class="card-body">
      <!-- customer name -->
      <h6 class="text-capitalize "><span class="badge bg-warning mr-2">name :</span><span id="customer-name">${name}</span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize my-3"><span class="badge bg-success mr-2">course :</span><span id="customer-course">
        ${course}
       </span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize"><span class="badge bg-danger mr-2">author :</span><span id="course-author">${author}</span></h6>
      <!-- end of customer name -->
     </div>
    </div>
    <!-- single customer -->
   </div>`
   let customerList = document.querySelector(".customer-list");
   let loading = document.querySelector('.loading');
//    console.log(loading);
    loading.classList.add("showItem")
    setTimeout(() => {
        loading.classList.remove("showItem")
        customerList.innerHTML = html;
    }, 2000);


  

}