export default function addDate(values) {
  if (!values.hasOwnProperty('date')) {
    values['date'] = new Date()
  }
  return values
}
