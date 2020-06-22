import * as React from 'react'

import { getWelcome } from 'components/Landing/util'

export class Landing extends React.Component<{}, {}> {
  constructor (props: any) {
    super(props)
    this.alertMessage = this.alertMessage.bind(this)
  }

    alertMessage = () => {
      getWelcome()
        .then(response => response.json())
        .then(data => alert(data.couchdb))
        .catch(error => {
          console.warn(error)
          alert(error.message)
        })
    }

    render () {
      return (
        <button id="welcome-btn" onClick={this.alertMessage}>
                Welcome!
        </button>
      )
    }
}
