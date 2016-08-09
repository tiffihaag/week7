// Create a variable to reference the database
var database = firebase.database();

	var trainName = "";
	var destination = "";
	var firstTrain = "";
	var frequency = "";

	//var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");

	$(".submit").on("click", function() {
		console.log("this is working");
		trainName = $('.trainName').val().trim();
		destination = $('.destination').val().trim();
		firstTrain = $('.firstTrain').val().trim();
		frequency = $('.frequency').val().trim();
	
		database.ref().push({
			trainName: trainName,
			destination: destination,
			firstTrain: firstTrain,
			frequency: frequency,
			//diff = moment(timeStamp:firebase.database.ServerValue.TIMESTAMP).diff(childSnapshot.val().startDate,"month", false)
		}); //goes to database push

			console.log("hello again");
		return false;
	}); //goes to submit onclick

		// database.ref().on('child_added', function(childSnapshot) {
		// 	console.log(childSnapshot.val());
		// });

		// console.log("pushed to database")

		// database.ref().on('child_added', function(childSnapshot) {
		// console.log(childSnapshot.val());

		//var tableElem = $('<tr>').attr("dataName", childSnapshot.val().trainName);
			// tableElem.append($('<td>').text("dataName", childSnapshot.val().trainName));
			// tableElem.append($('<td>').text("dataName", childSnapshot.val().location));
			// tableElem.append($('<td>').text("dataName", childSnapshot.val().frequency));
			// tableElem.append($('<td>').text("dataName", childSnapshot.val().nextArrival));
			// tableElem.append($('<td>').text("dataName", childSnapshot.val().minutesAway));
			//tableElem.append($('<td>').(diff);
			//$('#body').append(tableElem);

		//function(errorObject) {
			//console.log("Errors handled: " + errorObject.code);
		//};
