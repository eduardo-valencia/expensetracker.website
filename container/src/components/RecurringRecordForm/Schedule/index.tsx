import React from 'react'

import FrequencyField from './FrequencyField'
import PeriodField from './PeriodField'
import StartDateField from './StartDateField'

function Schedule() {
  return (
    <div>
      <PeriodField />
      <FrequencyField />
      <StartDateField />
    </div>
  )
}

export default Schedule
