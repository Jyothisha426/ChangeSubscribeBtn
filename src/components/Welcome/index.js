import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  btnText = () => {
    this.setState(previousState => ({
      isSubscribed: !previousState.isSubscribed,
    }))
  }

  changingBtnText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.changingBtnText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div className="btn-container">
          <button
            className="button-styles"
            type="button"
            onClick={this.btnText}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
