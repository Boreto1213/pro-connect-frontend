import { ChangeEvent, FC, useState } from 'react'
import { Select, SelectSection, SelectItem } from '@nextui-org/react'
import StatisticCard from './StatisticCard'
import BarChart from './BarChart'

interface StatisticsProps {}

const Statistics: FC<StatisticsProps> = ({}) => {
  const [selectedMonthIndx, setSelectedMonthIndx] = useState<number>(0)
  const today = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const data = [
    [
      {
        text: 'Total Revenue',
        metric: 2220,
        symbol: '$',
        desc: '% of monthly target',
        target: 3000,
      },
      {
        text: 'Sales',
        metric: 50,
        symbol: '+',
        desc: 'sold services this month',
      },
      {
        text: 'Reviews',
        metric: 34,
        symbol: '+',
        desc: '30% of which are 5 star',
      },
      {
        text: 'Active Services',
        metric: 5,
        symbol: '+',
        desc: 'services for sale right now',
      },
    ],
    [
      {
        text: 'Total Revenue',
        metric: 625,
        symbol: '$',
        desc: '% of monthly target',
        target: 3000,
      },
      {
        text: 'Sales',
        metric: 10,
        symbol: '+',
        desc: 'sold services this month',
      },
      {
        text: 'Reviews',
        metric: 3,
        symbol: '+',
        desc: '30% of which are 5 star',
      },
      {
        text: 'Active Services',
        metric: 6,
        symbol: '+',
        desc: 'services for sale right now',
      },
    ],
  ]
  console.log('Selected month indx:', selectedMonthIndx);
  
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log('month', event.target.value);
    
    const monthIndx = monthNames.indexOf(event.target.value)
    console.log('indx', monthIndx);
    
    if (monthIndx >= 0) {
      setSelectedMonthIndx(Number(monthIndx))
    } else {
      setSelectedMonthIndx(0)
    }
  }
  return (
    <div className='py-20'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>
        <Select
          onChange={onChange}
          variant='underlined'
          items={monthNames}
          label='Selected month'
          placeholder='Select a month'
          className='max-w-xs'
          defaultSelectedKeys={['January']}
        >
          {monthNames.map((m, i) => (
            <SelectItem value={i} key={m}>
              {m}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='flex justify-between mt-8'>
        {data[selectedMonthIndx].length &&
          data[selectedMonthIndx].map((d, i) => (
            <StatisticCard
              text={d.text}
              metric={d.metric}
              symbol={d.symbol}
              desc={d.desc}
              target={d.target}
              key={i}
            />
          ))}
      </div>
      <div className='flex justify-evenly mt-4'>
        <BarChart />
      </div>
    </div>
  )
}

export default Statistics
