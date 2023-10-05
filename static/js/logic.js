// Attach the event listener to the dropdown
d3.selectAll("#selDataset").on("change", stockData);

// Define your arrays inside the displayData function
function stockData(){
let dropdownMenu = d3.select("#selDataset");
let dataset = dropdownMenu.property("value");
let selectedOption = dropdownMenu.select("option:checked");
let selectedOptionText = selectedOption.text();

let stock_open = [];
let stock_dates = [];
let stock_close = [];
let stock_vol = [];
let keys = [
  "Company",
  "AVG Open",
  "Avg Close",
  "Avg Volume"
]

d3.json(dataset)
  .then(function(data){
    console.log(data);

    for (i = 0; i < data.length; i++){
      stock_open.push(parseFloat(data[i].Open))
      stock_dates.push(data[i].Date)
      stock_close.push(parseFloat(data[i].Close))
      stock_vol.push(parseInt(data[i].Volume))
    }

    let vals = [
      selectedOptionText,
      _.mean(stock_open).toFixed(2),
      _.mean(stock_close).toFixed(2),
      _.mean(stock_vol).toFixed(2)
    ]

    let stockData = data.map(function (item) {
    return {
      dates: item.Date,
      Open: parseFloat(item.Open),
      High: parseFloat(item.High),
      Low: parseFloat(item.Low),
      Close: parseFloat(item.Close),
    };
  });
  let demoChart = d3.select(".panel-body");
  //Will clear all data in the field before appending new data
  demoChart.html("");
        
    for(i=0; i < keys.length; i++){
      //Will add the keys and values as labels in text form into the demo info container
      demoChart.append("h6").text(`${keys[i]}: ${vals[i]}`);
  }
  updateChart(stockData);
  updateHistogram(stockData);


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
increasing: { line: { color: 'green' } },
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

function updateHistogram(data) {
  let returns = [];
  for (let i = 1; i < data.length; i++) {
   let percentReturn = ((data[i].Close - data[i - 1].Close) / data[i - 1].Close) * 100;
   returns.push(percentReturn);
  }
  let trace = {
   x: returns,
   type: 'histogram',
   xbins: {
    start: -10,
    end: 10,
    size: 0.5
   }
  };
  let plotData = [trace];
  let layout = {
   title: "Daily Price Returns",
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
   rangeslider: {
    visible: false
   }
  }
  };
  Plotly.newPlot('section4', plotData, layout);
 }