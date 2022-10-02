import React from 'react';
import { Chat } from '../../organisms/Chat/Chat';

export const TeacherChat = () => {
  return (
    <Chat
      chatMessages={[
        {
          isMe: true,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
        {
          isMe: true,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
        {
          isMe: false,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
        {
          isMe: false,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
        {
          isMe: false,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
        {
          isMe: true,
          message:
            'Your error message says permission denied, npm global installs must be given root privileges.',
        },
      ]}
      courses={[
        {
          id: 1,
          name: 'Tagalog for for beginners',
          description: 'This is a course for beginners',
        },
        {
          id: 2,
          name: 'Tagalog Conversation',
          description: 'This is conversation class. We can have free talk time',
        },
      ]}
    />
  );
};
