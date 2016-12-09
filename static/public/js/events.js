var showAllEventsBtn = $('#btn-showAllEvents');
console.log(showAllEventsBtn);
showAllEventsBtn.click(function (event) {
  console.log("button pressed")
  getEvents();
});

function getEvents() {
  $.getJSON("/Events/all", function (data) {
    var table = $("#resultsTable");
    var tableHead = $('#tablehead');
    document.getElementById('resultsTable').innerHTML = "";
    document.getElementById('tablehead').innerHTML = "";

    tableHead.append(
        "<th>Test ID</th><th>Name</th><th>Version</th><th>Family ID</th><th>Description</th>");
    $.each(data, function (ID, EventObject) {
      var rowData = $('<tr></tr>');
      rowData.append("<td>" + EventObject.TestID + "</td>");
      rowData.append("<td>" + EventObject.TestName + "</td>");
      rowData.append("<td>" + EventObject.TestVersionID + "</td>");
      rowData.append("<td>" + EventObject.TestFamID + "</td>");
      rowData.append("<td>" + EventObject.TestDescr + "</td>");
      table.append(rowData);
    });
  });
}

function editEvent(EventID) {
  window.location.href = "/editEvent/" + EventID;
}

function deleteEvent(EventID) {
  console.log("Delete Event");
  window.location.href = "/delete/" + EventID;
}