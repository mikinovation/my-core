type Props = {
  date: string
}

const DateFormatter = ({ date }: Props) => {
  return <time dateTime={date}>{date}</time>
}

export default DateFormatter
