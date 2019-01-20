
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  
  // BEGIN BAR CHART
  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['months', 'Service Revenue', 'Product Revenue'],
    ['January',  1050,      600],
    ['February',  1370,      910],
    ['March ',  660,       400],
    ['April',  1030,      540],
    ['May',  1000,      480],
    ['June',  1170,      960],
    ['July',  660,       320],
    ['August', 222, 121],
    ['September', 345, 644],
    ['Octuber', 567, 786],
    ['November', 785, 668],
    ['December', 987, 1111]
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'months',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11,
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
            startup: true
    }
  };
  // draw bar chart twice so it animates
  var chart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  chart.draw(barData, barOptions);
}
  
 
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
  // BEGIN PIE CHART
  
  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Service Type', 'Service Name'],
    ['abc',      3200],
    ['def',   4563],
    ['ghi',   7030],
    ['jkl',    4530],
    ['mno',  2150],
    ['pqr',  3543],
    ['stu',  2678]
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.2,
    colors: [ "cornflowerblue", 
              "olivedrab", 
              "orange", 
              "tomato", 
              "crimson", 
              "purple", 
              "turquoise", 
              "forestgreen", 
              "navy", 
              "gray"],
    pieSliceText: 'value',
    tooltip: {
      text: 'percentage'
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '94%'
    },
    legend: {
      textStyle: {
        fontSize: 13
      }
    }
  };
  // draw pie chart
  var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  chart.draw(pieData, pieOptions);
}

$(window).resize(function(){
  drawChart1();
  drawChart2();
});
