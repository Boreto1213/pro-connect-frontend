import { FC } from 'react'
import { Card, Text, Metric, Flex, ProgressBar } from '@tremor/react'

interface StatisticCardProps {
  text: string
  metric: number
  symbol: string
  desc: string
  target?: number
}

const StatisticCard: FC<StatisticCardProps> = ({
  text,
  metric,
  symbol,
  desc,
  target,
}) => {
  const percentage = target && Math.round(metric / target * 100 )
  return (
    <Card className='max-w-xs'>
      <Text>{text}</Text>
      <Metric>
        {symbol} {metric}
      </Metric>
      <Flex className='mt-4'>
        <Text>{percentage}{desc}</Text>

        {target ? (
          <Text>
            {symbol} {target}
          </Text>
        ) : null}
      </Flex>
      {target ? <ProgressBar color='teal' value={percentage || 0} className='mt-2' /> : null}
    </Card>
  )
}

export default StatisticCard
