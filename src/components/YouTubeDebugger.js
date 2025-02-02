import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor () {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  resolutionClick = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  bitrateClick = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render () {
    return (
      <div>
      <button className='bitrate' onClick={this.bitrateClick}/>
      <button className='resolution' onClick={this.resolutionClick}/>
      </div>

    )
  }
}

export default YouTubeDebugger