import { cn } from '@/lib/utils'
import { FC } from 'react'
import { Container } from './container'
import { Categories } from './Categories'
import { SortPopup } from './SortPopup'

interface ITopBar {
  className?: string
}

export const TopBar: FC<ITopBar> = ({ className }) => {
	return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}