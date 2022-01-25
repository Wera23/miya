import React from 'react';
import classnames from 'classnames';

import { Typography } from '@mui/material';

import './Message.scss';

interface MessageType {
  messageText: string;
  colorMessage?: string;
  classCustomeName?: string;
}

const Message: React.FC<MessageType> = ({
  messageText,
  colorMessage,
  classCustomeName,
}) => {
  return (
    <Typography
      color={colorMessage}
      className={classnames(classCustomeName, 'message')}
      variant="body1"
    >
      {messageText}
    </Typography>
  );
};

export default Message;
