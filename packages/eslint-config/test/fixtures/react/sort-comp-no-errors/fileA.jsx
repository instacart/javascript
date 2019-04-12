import React from 'react'
import PropTypes from 'prop-types'

class Foo extends React.Component {
  static propTypes = {
    alert: PropTypes.func.isRequired,
  }

  state = {
    foo: 'bar',
  }

  myThing = undefined

  ref = React.createRef()

  componentDidMount() {
    this.sendAlert()
  }

  handleButtonClick() {}

  doSomethingBound = () => {}

  sendAlert() {
    this.props.alert()
  }

  renderThing() {
    return <div />
  }

  render() {
    const { foo } = this.state

    return (
      <div ref={this.ref}>
        <button onClick={this.handleButtonClick}>{foo}</button>
        {this.renderThing()}
      </div>
    )
  }
}

export default Foo
