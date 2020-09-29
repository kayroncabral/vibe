import { parseISO, format } from 'date-fns'

export const groupByDate = (array, key) => {
  return array.reduce((groups, current) => {
    const date = format(parseISO(current[key]), 'yyyy-MM-dd')

    if (!groups[date]) groups[date] = []

    groups[date].push(current)

    return groups
  }, {})
}
