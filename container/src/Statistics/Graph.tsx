import React, { useEffect } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  useTheme,
} from '@material-ui/core'
import {
  BarController,
  BarElement,
  Chart,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

import { useAppSelector } from '../hooks/selector'
import { selectTransactions } from '../reducers/transaction'
import ITransaction from '../types/Transaction'
import _ from 'lodash'
import { getTotal } from '../utils/total'
import SectionToolbar from './SectionToolbar'
import Section from './Section'
import { useFilterTransactionsByRange } from '../hooks/transactions'
import { IStatisticsRange } from '../components/RangeSelector/types'
import { getYearRange } from '../utils/range'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip)

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const Graph = ({ classes }: Props) => {
  const { transactions } = useAppSelector(selectTransactions)
  const {
    palette: {
      primary,
      secondary,
      divider,
      text: { tertiary },
      grey,
    },
  } = useTheme()
  const filterTransactionsByRange = useFilterTransactionsByRange()

  const getMonthName = ({ date: dateString }: ITransaction): string => {
    const date: Date = new Date(dateString)
    return date.toLocaleString('en-US', { month: 'short' })
  }

  type TransactionsByMonth = {
    [key: string]: ITransaction[]
  }

  const getTransactionsForYear = (): ITransaction[] => {
    const yearRange: IStatisticsRange = getYearRange()
    return filterTransactionsByRange(yearRange)
  }

  const getTransactionsByMonth = (): TransactionsByMonth => {
    const transactionsForYear: ITransaction[] = getTransactionsForYear()
    return _.groupBy(transactionsForYear, getMonthName)
  }

  interface TotalsAndLabels {
    totals: number[]
    labels: string[]
  }

  const getTotals = (
    transactionsByMonth: TransactionsByMonth
  ): TotalsAndLabels['totals'] => {
    const transactionsLists: ITransaction[][] =
      Object.values(transactionsByMonth)
    return transactionsLists.map(getTotal)
  }

  const getTotalsAndLabels = (): TotalsAndLabels => {
    const transactionsByMonth: TransactionsByMonth = getTransactionsByMonth()
    const totals: TotalsAndLabels['totals'] = getTotals(transactionsByMonth)
    const labels: TotalsAndLabels['labels'] = Object.keys(transactionsByMonth)
    return { totals, labels }
  }

  const chartId: string = 'transactions-chart'

  const getChartElement = (): HTMLCanvasElement => {
    const chartElement: HTMLElement | null = document.getElementById(chartId)
    if (!chartElement) throw new Error('Chart element not found')
    return chartElement as HTMLCanvasElement
  }

  const createChart = (): Chart => {
    const { labels, totals } = getTotalsAndLabels()

    const fontStyles = { weight: '500', size: 14 }
    const ticksConfig = {
      font: fontStyles,
      color: tertiary,
    }
    const paddingY = 5
    const paddingX = 8

    const chartElement: HTMLCanvasElement = getChartElement()

    return new Chart(chartElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            data: totals,
            hoverBackgroundColor: primary.main,
            backgroundColor: secondary.main,
            borderWidth: 0,
            borderRadius: 5,
            maxBarThickness: 25,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            backgroundColor: grey['900'],
            bodyFont: fontStyles,
            displayColors: false,
            padding: {
              top: paddingY,
              bottom: paddingY,
              left: paddingX,
              right: paddingX,
            },
            callbacks: {
              title: () => '',
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: ticksConfig,
          },
          y: {
            grid: {
              color: divider,
              borderDash: [10, 6],
            },
            ticks: ticksConfig,
          },
        },
      },
    })
  }

  useEffect(() => {
    const chart: Chart = createChart()
    return () => chart.destroy()
  }, [transactions])

  return (
    <Section>
      <SectionToolbar title="Trends" />
      <canvas id={chartId} />
    </Section>
  )
}

export default withStyles(styles)(Graph)
