import { FC } from 'react'
import { BarChart as BarChartTremor, Card, Title } from '@tremor/react'

const chartdata5 = [
  {
    date: 'Jan',
    Income: 2220,
  },
  {
    date: 'Feb',
    Income: 625,
  },
  {
    date: 'Mar',
    Income: 336,
  },
  {
    date: 'Apr',
    Income: 1890,
  },
  {
    date: 'May',
    Income: 875,
  },
  {
    date: 'Jun',
    Income: 540,
  },
  {
    date: 'Jul',
    Income: 1700,
  },
  {
    date: 'Aug',
    Income: 1230,
  },
  {
    date: 'Sep',
    Income: 2110,
  },
  {
    date: 'Oct',
    Income: 2200,
  },
  {
    date: 'Nov',
    Income: 1990,
  },
  {
    date: 'Dec',
    Income: 1650,
  },
]

interface BarChartProps {}

const BarChart: FC<BarChartProps> = ({}) => {
  return (
    <Card>
      <Title>Income Overview</Title>
      <BarChartTremor
        className='h-72 mt-4'
        data={chartdata5}
        index='date'
        categories={['Income']}
        colors={['teal']}
        yAxisWidth={50}
        customTooltip={customTooltip}
      />
    </Card>
  )
}

const customTooltip: FC<{ payload: any; active: any }> = ({
  payload,
  active,
}) => {
  if (!active || !payload) return null
  return (
    <div className='w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border'>
      {payload.map((category: any, idx: number) => (
        <div key={idx} className='flex flex-1 space-x-2.5'>
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className='space-y-1'>
            <p className='text-tremor-content'>{category.dataKey}</p>
            <p className='font-medium text-tremor-content-emphasis'>
              {category.value} $
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BarChart
