$(document).ready(function () {
	var href = window.location.href;
	var splitString = href.split("/");
	var PersonID = splitString[splitString.length -1];
	getPersonObject(PersonID);
})

function getPersonObject(PersonID) {
	$.getJSON("/getPerson/" + PersonID, function (data) {
		var PersonObject = data[0];
		$("#PersonID").val(PersonObject.PersonID);
		$("#PersonFname").val(PersonObject.PersonFname);
		$("#PersonLname").val(PersonObject.PersonLname);
		$("#PersonDOB").val(PersonObject.PersonDOB);
	});
}