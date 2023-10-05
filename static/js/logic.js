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
  let stockData = data.map(function (item) {
    return {
      dates: item.Date,
      Open: parseFloat(item.Open),
      High: parseFloat(item.High),
      Low: parseFloat(item.Low),
      Close: parseFloat(item.Close),
    };
  });

  updateChart(stockData);
});
}

function updateChart(data) {
let dates = data.map(function (item) {
return item.dates;
});
// chart for closing price overtime
let trace = {
x: dates,
open: data.map(item => item.Open),
high: data.map(item => item.High),
low: data.map(item => item.Low),
close: data.map(item => item.Close),
increasing: { line: { color: 'black' } },
decreasing: { line: { color: 'red' } },
type: 'candlestick',
xaxis: 'x',
yaxis: 'y'
};

let plot_data = [trace];

let layout = {
dragmode: 'zoom',
showlegend: false,
xaxis: {
  rangeslider: {
    visible: false
  }
}
};

Plotly.newPlot('section3', plot_data, layout);
}
      