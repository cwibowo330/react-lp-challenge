import React, { Component } from 'react';
import './ChatInterface.css';
import ChatBubble from './ChatBubble';
import { chatData } from '../../assets/chatData';

class ChatInterface extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const convo = Object.keys(chatData.convo).map((key, idx) => {
      return <ChatBubble key={idx} message={chatData.convo[key].message} bubbleClass={chatData.convo[key].from} />
    })
    return (
      <div className="ChatInterface">
        <div className="Chat">
         {convo}
        </div>
         <form>
            <label>
                <input className="message" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button>Send</button>
         </form>
      </div>
    );
  }
}

export default ChatInterface;
