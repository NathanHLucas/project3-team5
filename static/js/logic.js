// 

            
            
d3.selectAll("#selDataset").on("change", stockChart);

function stockChart() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
    let stock_open = [];
    let stock_dates = [];

    d3.json(dataset)
        .then(function(data) {
            console.log(data);

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
