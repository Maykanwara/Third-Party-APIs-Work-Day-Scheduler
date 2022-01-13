$(document).ready(function() {
    var time = moment().format("dddd MMMM Do YYYY");
    var saveButton = document.getElementsByClassName("saveBtn");
    $("#currentDay").text(time);
    
    var currentTime = moment().format("HH");
    
    console.log(currentTime);
    
    // STEPS FOR HOMEWORK!!!
    
    //1 When i click save - save what i typed to local storage!!
    // example on 9am i type eat breakfast and click save
    // eat breakfast 9 should we saved to local storage!!!
    // $("p").click(function () {
    //   alert("The paragraph was clicked!!!");
    // });
    
    // 2 When i refresh the page all my stuff goes away that i typed!! oh no!!!
    // when page refresh grab everyone from local storage and stick them on the page
    // that way when we refresh everyone does not disappear!
    // myStorage = window.localStorage;
    // function populateDesc(){
    //     for (let i = 0; i < 9; i++) {
    //         $("#hour" + hoursShort[i].val(localStorage.getItem(hoursShort[i] + "-btn")))
    //     }
    // }
    // populateDesc()
    
    // Put the object into the storage
    //         alert(person);
    //        localStorage.setItem('person', JSON.stringify(person));
    
    const updateBackgroundColor = function (currentTime) {
      if (currentTime < "09") {
        $(".col-10").addClass("future");
      } else if (currentTime === "09") {
        $(".timeNine").addClass("present");
        $(
          ".timeNine, .timeTen, .timeEleven,.timeTwelve, .timeOne, .timeTwo, .timeThree, .timeFour, .timeFive"
        ).addClass("future");
      } else if (currentTime === "10") {
        $(".timeNine").addClass("past");
        $(".timeTen").addClass("present");
        $(
          ".timeEleven,.timeTwelve, .timeOne, .timeTwo, .timeThree, .timeFour, .timeFive"
        ).addClass("future");
      } else if (currentTime === "11") {
        $(".timeNine, .timeTen").addClass("past");
        $(".timeEleven").addClass("present");
        $(
          ".timeTwelve, .timeOne, .timeTwo, .timeThree, .timeFour, .timeFive"
        ).addClass("future");
      } else if (currentTime === "12") {
        $(".timeNine, .timeTen, .timeEleven").addClass("past");
        $(".timeTwelve").addClass("present");
        $(".timeOne, .timeTwo, .timeThree, .timeFour, .timeFive").addClass(
          "future"
        );
      } else if (currentTime === "13") {
        $(".timeNine, .timeTen, .timeEleven, .timeTwelve").addClass("past");
        $(".timeThirteen").addClass("present");
        $(".timeFourthteen, .timeFiveteen, .timeSixteen, .timeSeventeen").addClass(
          "future"
        );
      } else if (currentTime === "14") {
        $(".timeNine, .timeTen, .timeEleven, .timeTwelve, timeThirteen").addClass(
          "past"
        );
        $(".timeFourteen").addClass("present");
        $(".timeFiveteen, .timeSixteen, .timeSeventeen").addClass("future");
      } else if (currentTime === "15") {
        $(
          ".timeNine, .timeTen, .timeEleven, .timeTwelve, timeThirteen, .timeFourteen"
        ).addClass("past");
        $(".timeFiveteen").addClass("present");
        $(".timeSixteen, .timeSeventeen").addClass("future");
      } else if (currentTime === "16") {
        $(
          ".timeNine, .timeTen, .timeEleven, .timeTwelve, timeThirteen, .timeFourteen, .timeFiveteen"
        ).addClass("past");
        $(".timeSixteen").addClass("present");
        $(".timeSeventeen").addClass("future");
      } else if (currentTime === "17") {
        $(
          ".timeNine, .timeTen, .timeEleven, .timeTwelve, timeThirteen, .timeFourteen, .timeFiveteen, timeSixteen"
        ).addClass("past");
        $(".timeSeven").addClass("present");
        $(".timeEighteen").addClass("future");
      }
    };
    
    // $(".saveBtn").click(function () {
    //   //   alert("The paragraph was clicked.");
    //   console.log(this);
    //   console.log($(this).siblings("textarea").val());
    //   console.log($(this).siblings("textarea").attr("id"));
    //   localStorage.setItem(
    //     $(this).siblings("textarea").attr("id"),
    //     $(this).siblings("textarea").val()
    //   );
    // });
    //const updateBackgroundColorTwo = function(currentTime {
    //   if (currentTime < timeTwo) {
    //       $('.timeTwo').addClass('future')
    //       } else {
    //
    
    // Save Button to add input to local storage
    $(".saveBtn").on("click", function () {
      let description = $(this)
        // .parent("div")
        .siblings(".description")
        // .children(".description")
        .val().trim();
      let btnName = $(this).parent().attr("id")

      
      console.log(btnName)
      console.log(description)
    
    
    
    
    
      localStorage.setItem(btnName, description);
    });
    
    
    
    // Clearing whole day to start fresh
    $("#clear-day").on("click", function () {
      localStorage.clear();
      location.reload(true);
    });
    
})

