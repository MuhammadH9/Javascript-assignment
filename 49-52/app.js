//1. Create a signup form and display form data in your web 
// page on submission.
// function func(){
//     var x = document.getElementsByName("fname")[0].value;
//     var y = document.getElementsByName("lname")[0].value;
//     var z = document.getElementsByName("fathername")[0].value;
//     var t = document.getElementsByName("age")[0].value;
//     document.getElementById("empty").innerHTML = `<h1><q>Obtained Data</q></h1><strong>First Name: </strong> ${x}<br><strong>Last Name: </strong> ${y}<br><strong>Father Name: </strong> ${z}<br><strong>Age: </strong> ${t}<br>`
// }


//2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed. 
// var x = document.getElementById("container").innerHTML;
// function more(){
//  document.getElementById("container").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis? Molestiae sint quibusdam suscipit eos veritatis quisquam repudiandae minima quos optio molestias quis omnis consequuntur nobis unde a pariatur error nihil cumque itaque alias, reiciendis laboriosam officia quasi odio. Aspernatur rerum autem veritatis illum doloribus ducimus quibusdam quam dignissimos maxime &nbsp;<button onclick='less()'>Read Less</button>"
// }

// function less(){
//     document.getElementById("container").innerHTML = x;
// }


//3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.
// function func(){
//     var x = document.getElementsByName("fname")[0].value;
//     var y = document.getElementsByName("lname")[0].value;
//     var z = document.getElementsByName("fathername")[0].value;      
//     var t = document.getElementsByName("age")[0].value;
//     if (x !== "" && y !== "" && z !== "" && t !== ""){
//         var ele = document.createElement("tr");
//         var x1 = document.createElement("td");
//         var x2 = document.createElement("td");
//         var x3 = document.createElement("td");
//         var x4 = document.createElement("td");
//         var x5 = document.createElement("td");
//         var x6 = document.createElement("td");
//         var y1 = document.createTextNode(`${x}`);
//         var y2 = document.createTextNode(`${y}`);
//         var y3 = document.createTextNode(`${z}`);
//         var y4 = document.createTextNode(`${t}`);
//         var y5 = document.createElement("button");
//         var y6 = document.createElement("button");
//         y5.setAttribute("onclick", "hid(this)");
//         console.log(y5)
//         y6.setAttribute("onclick", "this.parentNode.parentNode.remove()")
//         var z5 = document.createTextNode("Edit");
//         var z6 = document.createTextNode("Delete");
//         x5.appendChild(y5);
//         x6.appendChild(y6);
//         y5.appendChild(z5);
//         y6.appendChild(z6);
//         x1.appendChild(y1);
//         x2.appendChild(y2);
//         x3.appendChild(y3);
//         x4.appendChild(y4);
//         ele.appendChild(x1);
//         ele.appendChild(x2);
//         ele.appendChild(x3);
//         ele.appendChild(x4);
//         ele.appendChild(x5);
//         ele.appendChild(x6);
//         document.getElementById("table").appendChild(ele);
//     }
// }

// function hid(r){
//     var x = r.parentNode.parentNode;
//     var x1 = x.childNodes[0].innerHTML;
//     var x2 = x.childNodes[1].innerHTML;
//     var x3 = x.childNodes[2].innerHTML;
//     var x4 = x.childNodes[3].innerHTML;
//     document.getElementById("hide").innerHTML = `<form action="" style="display: block;text-align: center;">
//     <label for="fname">First Name: </label><br>
//     <input type="text" name="fname" value="${x1}"><br>
//     <label for="lname">Last Name: </label><br>
//     <input type="text" name="lname" value="${x2}"><br>
//     <label for="fathername">Father Name: </label><br>
//     <input type="text" name="fathername" value="${x3}"><br>
//     <label for="age">Age: </label><br>
//     <input type="text" name="age" value="${x4}"><br>
//     </form>`
// }