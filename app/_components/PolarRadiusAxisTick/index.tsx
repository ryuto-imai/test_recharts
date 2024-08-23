import { FC } from 'react'
import { PolarRadiusAxisProps } from 'recharts'

type Props = unknown & {
  payload?: {
    value: number
  }
}

export const PolarRadiusAxisTick: FC<Props> = ({
  payload,
  ...rest
}) => {
  if (payload?.value === 0) return <></>

  return (
    <text {...rest} dx={4} className='font-light text-slate-600'>
      {payload?.value}
    </text>
  )
}
