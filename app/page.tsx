'use client'

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export const SUBJECT_NAME = {
  hoge: "hoge",
  fuga: "fuga",
  foo: "foo",
  bar: "bar",
}


export default function Home() {
  const fullMark = 5
  const data = [
    {
      subject: SUBJECT_NAME.hoge,
      A: 5,
      B: 2,
      fullMark,
    },
    {
      subject: SUBJECT_NAME.fuga,
      A: 3,
      B: 1,
      fullMark,
    },
    {
      subject: SUBJECT_NAME.foo,
      A: 1,
      B: 5,
      fullMark,
    },
    {
      subject: SUBJECT_NAME.bar,
      A: 4,
      B: 4,
      fullMark,
    },
  ]

  const aDataKey = 'A'
  const bDataKey = 'B'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col">
        <ResponsiveContainer aspect={1} width={1000} height={1000}>
          <RadarChart
            data={data}
            // outerRadius={90}
            // margin={{
            //   top: 40,
            //   right: 40,
            //   bottom: 40,
            //   left: 40,
            // }}
          >
            <PolarGrid strokeWidth={0.5} />
            <PolarAngleAxis
              dataKey="subject"
            />
            <PolarRadiusAxis
              scale="linear"
              angle={30}
              tickCount={5}
              domain={[0, fullMark]}
            />
            <Radar
              dataKey={aDataKey}
              stroke="#BCE2E8"
              fill="#BCE2E8"
              fillOpacity={0.2}
            />
            <Radar
              dataKey={bDataKey}
              stroke="#F0908D"
              fill="#F0908D"
              fillOpacity={0.2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}
