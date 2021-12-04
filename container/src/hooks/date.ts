import React, { useState } from 'react'

type DateValue = Date | null

export interface IDateState {
  date: DateValue
  setDate: React.Dispatch<React.SetStateAction<DateValue>>
}

export const useSelectDate = (): IDateState => {
  const [date, setDate] = useState<DateValue>(null)
  return {
    date,
    setDate,
  }
}
