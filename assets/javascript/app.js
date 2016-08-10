// Create a variable to reference the database
var database = firebase.database();

	var trainName = "";
	var destination = "";
	var firstTrain = "";
	var frequency = "";
	var tableElem = "";

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
		}); //goes to database push

			console.log("hello again");
		return false;
	}); //goes to submit onclick

		database.ref().on('child_added', function(childSnapshot) {
		console.log(childSnapshot.val());
		var tFrequency = childSnapshot.val().frequency;
		var firstTime = childSnapshot.val().firstTrain; 
		console.log("first time: " + firstTime);
		var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
		console.log(firstTimeConverted);
		var currentTime = moment();
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log(diffTime);
		var tRemainder = diffTime % tFrequency;
		var tMinutesTillTrain = tFrequency - tRemainder;
		var nextTrain = moment().add(tMinutesTillTrain, "minutes")

		var tableElem = $('<tr>').attr("dataName", childSnapshot.val().trainName);
		tableElem.append($('<td>').text(childSnapshot.val().trainName));
		tableElem.append($('<td>').text(childSnapshot.val().destination));
		tableElem.append($('<td>').text(childSnapshot.val().firstTrain));
		tableElem.append($('<td>').text(childSnapshot.val().frequency));
		tableElem.append($('<td>').text(nextTrain));
		tableElem.append($('<td>').text(tMinutesTillTrain));
		//tableElem.append($('<td>').(diff);
		$('#tBody').append(tableElem);

		//function(errorObject) {
			//console.log("Errors handled: " + errorObject.code);
		//};

		$('.trainName').val("");
		$('.destination').val("");
		$('.firstTrain').val("");
		$('.frequency').val("");
		});