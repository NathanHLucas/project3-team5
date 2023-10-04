// Attach the event listener to the dropdown
d3.selectAll("#selDataset").on("change", stockData);

// Define your arrays inside the displayData function
function stockData(){
let dropdownMenu = d3.select("#selDataset");
let dataset = dropdownMenu.property("value");

let stock_open = [];
let stock_dates = [];

console.log(dataset);

d3.json(dataset)
  .then(function(data){
    console.log(data);

    for (i = 0; i < data.length; i++){
      stock_open.push(data[i].Open)
      stock_dates.push(data[i].Date)
    }

  // Now you can log or do something with the data inside this callback
  console.log(stock_dates);
  console.log(stock_open);
});
}