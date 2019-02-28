var canvas = document.getElementById('bridge-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge", "George Washington Bridge","Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Length In Meters',
            data: [1298.4, 	1280.2, 1158.0,1067.0,	853.44],
            backgroundColor: ['pink', 'salmon', 'brown', 'yellow','black']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})