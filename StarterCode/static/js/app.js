// from data.js
var tableData = data;

console.log (tableData);
// YOUR CODE HERE!

//Use D3 to select the table
//var table = d3.select ("table");

//Use d3 to create a bootstrap stiped  table
//table.attr("class", "table table-striped");

// Use D3 to select the table body

var tbody = d3.select ("tbody");

function buildTable (dataArray) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    dataArray.forEach((dataRow) => {
      // Append a row to the table body
    //console.log (dataRow)
      var row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        //console.log ("values",val)
          cell.text(val);
        }
      );
    });
  }

  function handleClick() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    console.log (date);
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    console.log (filteredData)
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    
    buildTable(filteredData);
  }
console.log ("starting main process")


d3.selectAll("#filter-btn").on("click", handleClick);

buildTable (tableData)


  
// Append one table row 'tr' to the table body
//var row = tbody.append("tbody")



