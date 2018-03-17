import React, { Component } from 'react';
import './media.css';

class Media extends Component {
  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            src="./images/covers/cover-1.jpeg"
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">Que es responsive design</h3>
          <p className="Media-author">@KeiSalinas</p>
        </div>
      </div>
    )
  }
}

export default Media;