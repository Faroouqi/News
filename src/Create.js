import React, { Component } from 'react'

export default class Create extends Component {

    render() {
        let {description}=this.props
    return (
      <div>{description}</div>
    )
  }
}
