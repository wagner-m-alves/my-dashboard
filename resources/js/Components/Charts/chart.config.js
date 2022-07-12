export const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860'
  }
}

const randomChartData = n => {
  const data = []

  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 20000))
  }

  return data
}

const datasetObject = (color, points) => {
  return {
    fill: false,
    borderColor: chartColors.default[color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: 'default'
  }
}

export const sampleChartData = (points = 12) => {
  const labels = []

  for (let i = 1; i <= points; i++) {
    labels.push(`${i}`)
  }

  return {
    labels,
    datasets: [
      datasetObject('info', points),
    ]
  }
}
