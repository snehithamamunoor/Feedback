import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickImage = () => {
    this.setState(prevState => ({isClicked: true}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {id, name, imageUrl} = emojis
    return (
      <div>
        <div>
          <div>
            <h1>
              How satisfied are you with our
              <br /> customer support performance?
            </h1>
            <div>
              <img src={imageUrl} alt="name" onClick={this.onClickImage} />
            </div>
            <div>
              {isClicked && (
                <div>
                  <img src={loveEmojiUrl} alt="love emoji" />
                  <h1>Thank You</h1>
                  <p>
                    We will use your feedback to improve our customer support
                    performance
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Feedback
