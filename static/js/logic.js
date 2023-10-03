// 
d3.selectAll("#selDataset").on("change", stockChart);

function stockChart() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");

    d3.json(dataset)
        .then(function(data) {
            console.log(data);

            let stock_open = [];
            let stock_dates = [];

            
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

            
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, config);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
           
        });
}
