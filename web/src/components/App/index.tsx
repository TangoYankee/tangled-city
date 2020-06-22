import * as React from 'react'
import { Landing } from 'components/Landing'
import { IconLink } from 'components/IconLink'

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Tangled City</h1>
      <IconLink />
      <Landing />
    </div>
  )
}
