import IApiItem from './ApiItem'

export interface IDayOfMonthInterval extends IApiItem {
  type: 'dayOfMonth'
  dayOfMonth: number
}

export interface IDaysInterval extends IApiItem {
  type: 'regular'
  days: number
}

type TInterval = IDaysInterval | IDayOfMonthInterval

export default TInterval
