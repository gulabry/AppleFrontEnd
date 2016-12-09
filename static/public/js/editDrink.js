$(document).ready(function () {
	var href = window.location.href;
	var splitString = href.split("/");
	var DrinkID = splitString[splitString.length -1];
	getDrinkObject(DrinkID);
})

function getDrinkObject(DrinkID) {
	$.getJSON("/getDrink/" + DrinkID, function (data) {
		var DrinkObject = data[0];
		$("#DrinkID").val(DrinkObject.DrinkID);
		$("#DrinkName").val(DrinkObject.DrinkName);
		$("#DrinkDesc").val(DrinkObject.DrinkDesc);
	});
}