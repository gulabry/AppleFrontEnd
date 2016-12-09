var showAllPersonsBtn = $('#btn-showAllPersons');
console.log(showAllPersonsBtn);
showAllPersonsBtn.click(function (event) {
  console.log("button pressed")
  getPersons();
});

function getPersons() {
  $.getJSON("/Persons/all", function (data) {
    var table = $("#resultsTable");
    var tableHead = $('#tablehead');
    document.getElementById('resultsTable').innerHTML = "";
    document.getElementById('tablehead').innerHTML = "";
    tableHead.append(
        "<th>Device ID</th><th>Name</th><th>Type</th><th>Description</th>");
    $.each(data, function (ID, PersonObject) {
      var rowData = $('<tr></tr>');
      rowData.append("<td>" + PersonObject.DeviceID + "</td>");
      rowData.append("<td>" + PersonObject.DeviceName + "</td>");
      rowData.append("<td>" + PersonObject.DeviceTypeID + "</td>");
      rowData.append("<td>" + PersonObject.DeviceDescr + "</td>");
      table.append(rowData);
    });
  });
}

function editPerson(PersonID) {
  window.location.href = "/editPerson/" + PersonID;
}

function deletePerson(PersonID) {
  console.log("Delete Person");
  window.location.href = "/deletePerson/" + PersonID;
}