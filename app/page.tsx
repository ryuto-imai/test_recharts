'use client'

import { CustomLegend } from '@/app/_components/CustomLegend'
import { PolarAngleAxisTick } from '@/app/_components/PolarAngleAxisTick'
import { PolarRadiusAxisTick } from '@/app/_components/PolarRadiusAxisTick'
import { SUBJECT_NAME } from '@/app/_constants/subjectName'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'


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
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <div className='w-full h-4 bg-gray-500' />
      <div className='flex flex-col w-full min-w-48'>
        <ResponsiveContainer aspect={1} >
          <RadarChart
            data={data}
            outerRadius="100%"
            margin={{
              top: 60,
              right: 60,
              bottom: 60,
              left: 60,
            }}
          >
            <PolarGrid strokeWidth={0.5} />
            <PolarAngleAxis
              dataKey="subject"
              tick={<PolarAngleAxisTick />}
            />
            <PolarRadiusAxis
              scale="linear"
              angle={30}
              tickCount={5}
              domain={[0, fullMark]}
              tick={<PolarRadiusAxisTick />}
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
          </RadarChart>
        </ResponsiveContainer>
        <CustomLegend data={[
          {name: "Aデータ", colorStyle: "border-[#BCE2E8] bg-[#BCE2E8]"},
          {name: "Bデータ", colorStyle: "border-[#F0908D] bg-[#F0908D]"}
        ]} />
      </div>
      <div className='w-full h-4 bg-gray-500' />
    </main>
  )
}
