import {ReactNode} from "react";

interface Props {
  href: string
  children: ReactNode
}

const ExternalLink = ({href, children}: Props) => {
  return (
    <a className="no-underline hover:underline text-cyan-600 dark:text-cyan-400" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default ExternalLink