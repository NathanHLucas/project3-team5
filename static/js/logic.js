// Attach the event listener to the dropdown and call on the stockData function on change
d3.selectAll("#selDataset").on("change", stockData);

//Our function to create the visualizations when the drop down is changed
function stockData(){
  //Use d3 to select elements of the webpage
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");
  let selectedOption = dropdownMenu.select("option:checked");
  let selectedOptionText = selectedOption.text();
  //Variabels to store the relevant data from the dictionaries
  let stock_open = [];
  let stock_dates = [];
  let stock_close = [];
  let stock_vol = [];
  //Keys we will use in our details section
  let keys = [
    "Company",
    "AVG Open",
    "Avg Close",
    "Avg Volume"
  ]
  //Use d3 to read the defined webpage/endpoint
  d3.json(dataset)
    .then(function(data){
      console.log(data);
      //Loop that will append the information to the array variables, parsed for int or float
      for (i = 0; i < data.length; i++){
        stock_open.push(parseFloat(data[i].Open))
        stock_dates.push(data[i].Date)
        stock_close.push(parseFloat(data[i].Close))
        stock_vol.push(parseInt(data[i].Volume))
      }
      //Values we will use in our details section, lodash library used to pull means values
      let vals = [
        selectedOptionText,
        _.mean(stock_open).toFixed(2),
        _.mean(stock_close).toFixed(2),
        _.mean(stock_vol).toFixed(2)//.toFixed limits the values to a specified decimal count
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
//Function to update our candlestick chart
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
//Plot layout
let layout = {
dragmode: 'zoom',
showlegend: false,
xaxis: {
  rangeslider: {
    visible: false
  }
}
};
//Create the plot
Plotly.newPlot('section3', plot_data, layout);
}
//Function to update our histogram chart
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
  //Layout for the chart
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
  //Plot the chart
  Plotly.newPlot('section4', plotData, layout);
 }