// Initialize Chart.js with sample data
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales Data',
            data: [50000, 49000, 48000, 48000, 47000, 45000],
            backgroundColor: 'rgba(99, 110, 250, 0.2)',
            borderColor: 'rgba(99, 110, 250, 1)',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#6c5ce7'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

// Event listener for "Go" button to update chart data
document.getElementById('goButton').addEventListener('click', () => {
    const dropdown1Value = document.getElementById('dropdown1').value;
    const dropdown2Value = document.getElementById('dropdown2').value;

    const newData = dropdown1Value === 'option1' ? [5, 10, 15, 20, 25, 30] : [15, 20, 30, 40, 50, 60];
    myChart.data.datasets[0].data = newData;
    myChart.update();
});

// Function to update the price dynamically
function updatePrice() {
    const randomPrice = (Math.random() * 100).toFixed(2);
    document.getElementById('price').innerText = randomPrice;
}

// Update price every 2 seconds
setInterval(updatePrice, 2000);
