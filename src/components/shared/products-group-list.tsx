'use client'

import { cn } from '@/lib/utils'
import { Title } from './title'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useEffect, useRef } from 'react'

interface Props {
  title: string;
  items: any[];
  categoryId: number
  listClassName?: string
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryId, listClassName }) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}