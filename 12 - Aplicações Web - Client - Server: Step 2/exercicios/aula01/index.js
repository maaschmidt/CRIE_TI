const getData = async () => {
  const data = await axios.get('https://brasilapi.com.br/api/feriados/v1/2022');
  return data.data;
}

const main = async () => {
  const data = await getData();
  let jan = 0;
  let fev = 0;
  let mar = 0;
  let abr = 0;
  let mai = 0;
  let jun = 0;
  let jul = 0;
  let ago = 0;
  let set = 0;
  let out = 0;
  let nov = 0;
  let dez = 0;
  for (const holiday of data) {
    if (holiday.date.slice(5,7) == 01){
      jan += 1;
    } else if (holiday.date.slice(5,7) == 02){
      fev += 1
    } else if (holiday.date.slice(5,7) == 03){
      mar += 1
    } else if (holiday.date.slice(5,7) == 04){
      abr += 1
    } else if (holiday.date.slice(5,7) == 05){
      mai += 1
    } else if (holiday.date.slice(5,7) == 06){
      jun += 1
    } else if (holiday.date.slice(5,7) == 07){
      jul += 1
    } else if (holiday.date.slice(5,7) == 08){
      ago += 1
    } else if (holiday.date.slice(5,7) == 09){
      set += 1
    } else if (holiday.date.slice(5,7) == 10){
      out += 1
    } else if (holiday.date.slice(5,7) == 11){
      nov += 1
    } else if (holiday.date.slice(5,7) == 12){
      dez += 1
    }
  }
  Highcharts.setOptions({
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
          [1, 'rgb(240, 240, 255)']
        ]
      },
      borderWidth: 2,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
    }
  });

  Highcharts.chart('container',
    {
      title: {
        text: 'Feriados 2022'
      },
      xAxis: {
        title: {
          text: 'Feriados'
        },
        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      },
      series: [{
        type: 'line',
        name: 'Quantidade',
        data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]
      }]
    });
}
main();