// Script for navigation bar  which is toggle between oepn and close the nav bar
function opener() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("nav");
}

// gettting the array data from HCC_tracker_data.js
console.log(HCC_tracker_data);

// creating a virtual DOM inside of main_content and Data_container
const main_content = document.getElementById("main_content");
const Date_container = document.getElementById("Date_container");

// loop the data that we get from HCC_tracker_data.js
for (let i = 0; i < HCC_tracker_data.length; i++) {
  main_content.insertAdjacentHTML(
    "beforeend",
    `
    <div class="main_content_box">
    <h1 id="HCC_Study_Materials_${HCC_tracker_data[i].date}">Date : ${HCC_tracker_data[i].date}</h1>
    <h2>Word Meanings</h2>
    <pre>
    ${HCC_tracker_data[i].words}
      </pre>
      <h2>Spoken Sentences</h2>
      <pre>
      ${HCC_tracker_data[i].spoken}
        </pre>
        <h2>General Knowledge</h2>
        <pre>
        ${HCC_tracker_data[i].gk}
          </pre>
          <h2>More Knowledge</h2>
        <pre>
        ${HCC_tracker_data[i].more}
          </pre>
  </div>
    `
  );
  Date_container.insertAdjacentHTML(
    "beforeend",
    `<a href="#HCC_Study_Materials_${HCC_tracker_data[i].date}" id="date">${HCC_tracker_data[i].date}</a>`
  );
}

// open and close the filter panel
function open_filter() {
  Date_container.style.right = "0";
}
function close_filter() {
  Date_container.style.right = "-100%";
}

// filter the date
function search_input() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search_input");
  filter = input.value.toUpperCase();
  a = Date_container.getElementsByTagName("a");
  console.log(a);
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    console.log(a[i].innerHTML);
    txtValue = a[i].innerHTML || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
