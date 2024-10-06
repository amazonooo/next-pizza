import { cn } from '@/lib/utils'
import { FC } from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'

interface IFilters {
  className?: string
}

export const Filters: FC<IFilters> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собрать' value='1' />
        <FilterCheckbox text='Новинка' value='2' />
      </div>
    </div>
  )
}