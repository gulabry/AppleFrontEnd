var showAllDrinksBtn = $('#btn-showAllDrinks');
console.log(showAllDrinksBtn);
showAllDrinksBtn.click(function (event) {
  console.log("button pressed")
  getDrinks();
});

function getDrinks() {
  $.getJSON("/Drinks/all", function (data) {
    var table = $("#resultsTable");
    var tableHead = $('#tablehead');
    document.getElementById('resultsTable').innerHTML = "";
    document.getElementById('tablehead').innerHTML = "";

    tableHead.append(
        "<th>ID</th><th>Device Name</th><th>Type ID</th><th>Description</th>");
    $.each(data, function (ID, DrinkObject) {
      var rowData = $('<tr></tr>');
      rowData.append("<td>" + DrinkObject.DrinkID + "</td>");
      rowData.append("<td>" + DrinkObject.DrinkName + "</td>");
      rowData.append("<td>" + DrinkObject.DrinkDesc + "</td>");
      table.append(rowData);
    });
  });
}

function editDrink(DrinkID) {
  window.location.href = "/editDrink/" + DrinkID;
}

function deleteDrink(DrinkID) {
  console.log("Delete Drink");
  window.location.href = "/deleteDrink/" + DrinkID;
}