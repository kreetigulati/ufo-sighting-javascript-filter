// NEW START 
var tableData = data;

// table body
var tbody = d3.select("tbody");

// Columns
tableData.forEach(ufoSighting => {
    // console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.values(ufoSighting).forEach(value => {

        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
// var button = d3.select("#datetime");

// Select the form
var form = d3.select("#filter-btn");

// Create event handlers 
// button.on("click", runEnter);
form.on("click", runEnter);

// tbody.html("");

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  var filteredData = tableData.filter(x => x.datetime == inputValue);
  // var filteredData = tableData.filter(function (el) {
  //   return el.datatime == inputValue
  // });

  // var filteredData = tableData.forEach(x => 
  //                                     if x.datetime);
  
  
  console.log(filteredData);

  filteredData.forEach(function(selections) {
    console.log(selections);
    // append new table row for each object 
    var row = tbody.append("tr");
    // console.log each UFO Sighting value 
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append row for each value
        var cell = row.append("td");
        cell.text(value);
    });
  });
};