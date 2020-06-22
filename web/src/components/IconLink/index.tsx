import * as React from 'react'
import 'components/IconLink/index.css'

export const IconLink: React.FunctionComponent = () => {
  return (
    <a className='icon-link' id='github-icon' title='github.com/tangoyankee/tangled-city'
      href='https://github.com/tangoyankee/tangled-city' target="_blank" rel="noopener noreferrer" >
      <span>tangled-city at github</span>
    </a>
  )
}
