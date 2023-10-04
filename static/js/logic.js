<<<<<<< HEAD
// Attach the event listener to the dropdown
d3.selectAll("#selDataset").on("change", stockData);

// Define your arrays inside the displayData function
function stockData(){
let dropdownMenu = d3.select("#selDataset");
let dataset = dropdownMenu.property("value");
=======
// 

            
            
d3.selectAll("#selDataset").on("change", stockChart);

function stockChart() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
    let stock_open = [];
    let stock_dates = [];
>>>>>>> a04ba4787e1138a17a8d2fb27f34bfd26262963a

let stock_open = [];
let stock_dates = [];

<<<<<<< HEAD
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
=======
           data.forEach(function(item) {
                stock_open.push(item.open); 
                stock_dates.push(item.date); 
            });

    
            
            const labels = stock_dates; 
            const blink_data = stock_open; 

            const config = {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'blink Chart',
                        data: blink_data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    
                }
            };
            function addData(chart, label, data) {
                chart.data.labels.push(label);
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.push(data);
                });
                chart.update();
            }
            
            function removeData(chart) {
                chart.data.labels.pop();
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.pop();
                });
                chart.update();
            }
            
            let ctx = document.getElementById('myChart').getContext('2d');
          let myChart = new Chart(ctx, config);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
           
        });
}
>>>>>>> a04ba4787e1138a17a8d2fb27f34bfd26262963a
