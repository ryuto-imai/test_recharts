import { SUBJECT_NAME } from '@/app/_constants/subjectName'
import { FC } from 'react'

type Props = unknown & {
  payload?: {
    value: string
  }
}
export const PolarAngleAxisTick: FC<Props> = ({
  payload,
  ...rest
}) => {
  let dx = 0
  let dy = 0

  switch (payload?.value) {
    case SUBJECT_NAME.hoge:
      dy = -14
      break
    case SUBJECT_NAME.fuga:
      dx = 4
      dy = 4
      break
    case SUBJECT_NAME.foo:
      dy = 14
      break
    case SUBJECT_NAME.bar:
      dx = -4
      dy = 4
      break
  }

  return (
    <text {...rest} dx={dx} dy={dy} className='font-bold text-stone-500'>
      {payload?.value}
    </text>
  )
}
