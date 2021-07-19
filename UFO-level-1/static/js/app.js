// from data.js
var tableData = data;

// table body
var tbody = d3.select("tbody");

// Columns
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);

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
    // filter data - datetime = inputValue
    var filterData = tableData.filter(sighting => sighting.datatime === inputValue);
    console.loge(filterData);

    filterData.forEach(function(selections) {
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
});