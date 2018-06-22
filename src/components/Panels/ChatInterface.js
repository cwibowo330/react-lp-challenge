import React, { Component } from 'react';
import './ChatInterface.css';
import ChatBubble from './ChatBubble';
import { chatData } from '../../assets/chatData';

class ChatInterface extends Component {
  render() {
    const convo = Object.keys(chatData.convo).map((key, idx) => {
      return <ChatBubble key={idx} message={chatData.convo[key].message} class={chatData.convo[key].from} />
    })
    return (
      <div className="ChatInterface">
        <div className="Chat">
         {convo}
        </div>
         <form>
            <label>
                <input className="message" type="text" value='' />
            </label>
            <button>Send</button>
         </form>
      </div>
    );
  }
}

export default ChatInterface;
