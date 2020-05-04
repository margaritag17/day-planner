


//var $currentDay = $("#currentDay");
//$(".clearBtn").html("Clear All");
//var $saveBtn = $(".saveBtn");

// Creating the Current Time


var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');

//January is 0!
var mm = String(today.getMonth() + 1).padStart(2, '0'); 

var yyyy = today.getFullYear();

today = mm + "-" + dd + "-" + yyyy;

document.write(today);
console.log(today);


//Showing Military Time at the top

//function checkTime(i) {
  //  if (i < 10) {
    //i = "0" + i;
    //}
    //return i;
  //}


  (function () {
    function checkTime(i) {
       return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 12);
    }
    startTime();
    console.log(time);
})();

//saves whats in the text area to local storage.
$(".saveBtn").on("click", function(e) {
	e.preventDefault();
	var input = $(this)
		.siblings(".description")
		.val();
	var key = $(this)
		.siblings(".description")
		.attr("id");
	localStorage.setItem(key, input);
	console.log(input);
});

