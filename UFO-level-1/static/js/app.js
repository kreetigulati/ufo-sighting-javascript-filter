// from data.js
var tableData = data;

// table body
var tbody = d3.select("tbody");

// Columns
tableData.forEach(ufoSighting => {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.values(ufoSighting).forEach(value => {

        var cell = row.append("td");
        cell.text(value);
    });
});

// Button 
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // input date
    var inputElement = d3.select("#datetime");
    // date, state, shape - value property
    var inputValue = inputElement.property("value");
        console.log(inputValue);
    // datetime = input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
        console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // append row 
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append cell 
        var cell = row.append("td");
        cell.text(value);
    });
    });
});