
$(document).ready(function () {
   let myChart = echarts.init(document.getElementById("main"))

   myChart.setOption({
      title: {
         text: 'Планирование ЗП',
         left: 'center'
      },
      tooltip: {
         trigger: 'axis',
         position: function (pt) {
            return [pt[0], '10%'];
         }
      },
      legend: {
         data: ['ЗП'],
         padding: 50
      },
      xAxis: {
         data: []
      },
      yAxis: {
         type: 'value'
      },
      grid: {
         top: '12%',
         left: '0%',
         right: '0%',
         containLabel: true
      },
      dataZoom: [
         {
            type: 'slider',
            show: true,
            start: 0,
            end: 100,
            handleSize: 8
         },
         {
            type: 'inside',
            start: 0,
            end: 100
         },

      ],

      series: [{
         data: [],
         name: 'ЗП',
         type: 'line',
         itemStyle: {
            color: 'rgb(255, 70, 131)'
         }, areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               offset: 0,
               color: 'rgb(255, 158, 68)'
            }, {
               offset: 1,
               color: 'rgb(255, 70, 131)'
            }])
         },
      }]
   })
   $.get('db.json').done(function (data) {
      myChart.setOption({
         xAxis: {
            data: data.date
         },
         series: {
            name: 'ЗП',
            data: data.price
         }
      });
   });
})


