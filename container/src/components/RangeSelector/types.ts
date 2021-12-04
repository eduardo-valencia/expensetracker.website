export interface IStatisticsRange {
  minDate: Date | null
  maxDate: Date | null
}

export interface IRangeState {
  setRange: (range: IStatisticsRange) => void
  range: IStatisticsRange
}
