import { FC, HTMLAttributes } from "react"

type Props = {
  data: {
    name: string
    colorStyle: string
  }[]
}

export const CustomLegend: FC<Props> = ({
  data
}) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 text-12 text-black">
      {data.map(({name, colorStyle}) => (
        <li
        className="flex items-center justify-center gap-1"
      >
        <div className={`h-4 w-11 border-3 ${colorStyle}`} />
        <span>
          {name}
        </span>
      </li>
      ))}
    </ul>
  )
}