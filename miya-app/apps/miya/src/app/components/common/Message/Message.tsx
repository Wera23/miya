import React from 'react';

import { Typography } from '@mui/material';

import './Message.scss';

interface MessageType {
  messageText: string;
  colorMessage: string;
}

const Message: React.FC<MessageType> = ({ messageText, colorMessage }) => {
  return (
    <Typography
      color={colorMessage}
      variant="body1"
      className="retrieverMessage"
    >
      {messageText}
    </Typography>
  );
};

export default Message;
