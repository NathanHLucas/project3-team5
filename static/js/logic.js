function fetchData(endpoint) {
    return fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}
const API_BASE_URL = 'http://127.0.0.1:5000/';

// Fetch data from a specific endpoint and update the chart
function fetchDataAndDrawChart(endpoint) {
    const url = API_BASE_URL + endpoint;

    return fetchData(url)
        .then(data => {
            // Process the fetched data and update the chart
            // For example, assuming data is an array of objects with x and y values
            var labels = data.map(item => item.x);
            var values = data.map(item => item.y);

            // Return the processed data
            return { labels, values };
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error as per your requirement
            throw error; // Re-throw the error to indicate failure
        });
}
fetchDataAndDrawChart('blnk_data');
fetchDataAndDrawChart('chpt_data');
fetchDataAndDrawChart('evgo_data');


// function fetchData(endpoint)
//     return fetch(endpoint)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             throw error;
//         });

       // Get the select element by its ID
var selectElement = document.getElementById("selDataset");

// Attach an event listener for the "change" event
selectElement.addEventListener("change", function() {
    var selectedOption = selectElement.value; // Get the selected option value

    // Define the endpoint based on the selected option
    var selectedEndpoint;
    if (selectedOption === "Blink") {
        selectedEndpoint = blnkEndpoint;
    } else if (selectedOption === "Chpt") {
        selectedEndpoint = chptEndpoint;
    } else if (selectedOption === "Evgo") {
        selectedEndpoint = evgoEndpoint;
    } else {
        // Handle the case when no option is selected or handle it as per your requirement
        return;
    }

    // Fetch data from the selected endpoint
    fetchDataAndDrawChart(selectedEndpoint);
});

// Fetch data from the endpoints and update the chart
function fetchDataAndDrawChart(endpoint) {
    fetchData(endpoint)
        .then(data => {
            // Process the fetched data and update the chart
            // For example, assuming data is an array of objects with x and y values
            var labels = data.map(item => item.x);
            var values = data.map(item => item.y);

            // Update the chart with new data
            updateChart(labels, values);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error as per your requirement
        });
}
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if Chart.js is available
    if (typeof Chart !== "undefined") {
        // Your chart creation code here
    } else {
        console.error("Chart.js library not found.");
    }
});

        
        // Function to update the chart
        function updateChart(labels, values) {
            // Assuming you have a canvas element with id 'myChart' for the chart
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Stock Data',
                        data: values,
                        borderColor: 'rgba(75, 192, 192, 1)', // Line color
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
       
     
