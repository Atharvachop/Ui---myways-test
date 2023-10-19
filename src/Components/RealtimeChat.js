import React, { Component } from 'react';

class RealtimeChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;

    if (newMessage.trim() === '') return;

    const updatedMessages = [...messages, newMessage];

    this.setState({
      messages: updatedMessages,
      newMessage: '',
    });
  };

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat-container">
        <h1 className="chat-heading">Realtime Chat</h1>
        <div className="message-container">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              {message}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message..."
            value={newMessage}
            onChange={this.handleInputChange}
          />
          <button className="send-button" onClick={this.handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default RealtimeChat;
