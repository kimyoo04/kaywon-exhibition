import dayjs from 'dayjs'
import * as React from 'react'

interface CopyrightProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Copyright = (props: CopyrightProps) => {
  return <span {...props}>&copy; {` ${dayjs().year()}. Monarc Living. All rights reserved.`}</span>
}

export { Copyright, type CopyrightProps }
