import React from 'react'

interface Props {
  alert(): void
}

interface State {
  foo: string
}

class Foo extends React.Component<Props, State> {
  state: State = {
    foo: 'bar',
  }

  myThing: string | undefined = undefined

  ref = React.createRef<HTMLDivElement>()

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
