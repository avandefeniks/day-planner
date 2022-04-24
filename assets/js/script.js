var todayEl = document.getElementById("currentDay");
var textAreaEl = document.querySelectorAll(".description");
var nine = document.getElementById("9");
var ten = document.getElementById("10am");
var saveButtonEl = document.getElementById("saveBtn")
var containerEl = document.querySelector(".container")
var dayEntries = [];

// set the day's date
todayEl.textContent = moment().format("dddd, MMMM Do YYYY");

function colorHours() {
    var currentHour = moment().hour()
    console.log(currentHour);

    // loop through current time slots
    for (var i = 0; i < textAreaEl.length; i++) {
        if (textAreaEl[i].id < currentHour) {
            textAreaEl[i].classList.add("past");
        }
        else if (textAreaEl[i].id > currentHour) {
            textAreaEl[i].classList.add("future");
        }
        else {
            textAreaEl[i].classList.add("present");
        }
    }
}

function saveDailyInput(event) {
    console.log(event.target.id);


    if (event.target.id === "saveBtn" || event.target.id === "fa-save") {

        // loop through textArea
        for (var i = 0; i < textAreaEl.length; i++) {
            // console.log(textAreaEl[i].value);
            // add text value of textArea to dayEntries array
            dayEntries.push(textAreaEl[i].value);

        }
    }
    else {
        return;
    }

    // add array to local storage
    localStorage.setItem("dayEntries", JSON.stringify(dayEntries));


}

function retrieveDailyInput() {

    //retrieve dayEntries array from local storage
    var getDayEntries = localStorage.getItem("dayEntries");

    // parse array
    JSON.parse(getDayEntries);
    console.log(getDayEntries);

    // pull information from textArea and getDayEntries
    // solution found on https://stackoverflow.com/questions/57903061/foreach-loop-through-two-arrays-at-the-same-time-in-javascrip
    textAreaEl.forEach((textArea1, index) => {
        var arr2 = getDayEntries[index];
        textArea1.value = arr2;
        console.log(textArea1);
    });


}

// getLocalStorage();
colorHours();
retrieveDailyInput();
containerEl.addEventListener("click", saveDailyInput)
// saveButtonEl.addEventListener("click", saveNine);