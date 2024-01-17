import { Input, Slider, SliderValue } from '@nextui-org/react'
import { FC, useEffect, useRef, useState } from 'react'
import { Icons } from '../../Icons'
import { useExpertFilter } from '../../../hooks/useExpertFilter'

interface ExpertFilterProps {}

const ExpertFilter: FC<ExpertFilterProps> = ({}) => {
  const { setFilter } = useExpertFilter()
  const [sliderValue, setSliderValue] = useState<number>(0)
  const [yearsOfExp, setYearsOfExp] = useState<number | undefined>()
  const [query, setQuery] = useState<string | undefined>()

  useEffect(() => {
    
    setFilter({query: query || '', yearsOfExperience: yearsOfExp || 0, rating: sliderValue })
  }, [sliderValue, yearsOfExp, query])

  return (
    <div className='flex flex-col gap-5 col-span-3 pr-8'>
      <h2 className='text-3xl font-semibold'>Filter</h2>
      <Input
        type='text'
        placeholder='Search...'
        labelPlacement='outside'
        onChange={(event) => setQuery(event.target.value)}
        endContent={
          <Icons.Search className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
        }
      />

      <div className='flex items-center gap-1'>
        <label className='w-full text-lg'>Years of experience</label>
        <Input
          type='number'
          placeholder='Min.'
          labelPlacement='outside'
          onChange={(event) => setYearsOfExp(Number(event.target.value))}
          min={0}
          endContent={
            <Icons.Star className='text-2xl text-slate-400 pointer-events-none' />
          }
        />
      </div>
      <Slider
        label='Rating'
        showTooltip={true}
        color='foreground'
        step={0.01}
        value={sliderValue}
        onChange={(value: SliderValue) => setSliderValue(value as number)}
        formatOptions={{ style: 'percent' }}
        maxValue={1}
        minValue={0}
        size='sm'
        marks={[
          {
            value: 0.2,
            label: '20%',
          },
          {
            value: 0.5,
            label: '50%',
          },
          {
            value: 0.8,
            label: '80%',
          },
        ]}
        defaultValue={0.2}
        className='max-w-md'
      />
    </div>
  )
}

export default ExpertFilter
