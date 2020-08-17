

// Business Logic
$(document).ready(function() {
  $("#userInput").submit(function() {
    event.preventDefault();
    $("#userInput").hide();
    const item1 = $("input#item1").val().toUpperCase();
    const item2 = $("input#item2").val().toUpperCase();
    const item3 = $("input#item3").val().toUpperCase(); 
    //const li= "<li>" + grocery + "</li>" 
    let groceries = [item1,item2,item3];
    groceries.sort();
    groceries.forEach(function(grocery) {
      let item = grocery
    //   const ul = document.getElementById("groceryList");
    //   const li = document.createElement("li");
    //   li.appendChild(document.createTextNode(grocery));
    //   ul.appendChild(li);
      $("#groceryList").append("<li>" + item + "</li>");
    // $("#groceryList").append(grocery);
      $("#userArray").show();    
    }); 

   
  });
});

