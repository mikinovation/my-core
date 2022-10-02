import React, { ReactNode, useState } from 'react';
import { TeacherCard } from '../../atoms/TeacherCard/TeacherCard';

interface Props {
  message: ReactNode;
  isMe: boolean;
}

export const ChatMessage = ({ isMe = false, children }: Props) => {
  return (
    <div className={`flex items-end ${isMe ? 'justify-end' : ''}`}>
      <div
        className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end ${
          isMe ? 'order-1' : 'order-2'
        }`}
      >
        <div>
          <span
            className={`px-4 py-2 rounded-lg inline-block rounded-br-none ${
              isMe ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}
          >
            {children}
          </span>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className={`w-6 h-6 rounded-full ${isMe ? 'order-2' : 'order-1'}`}
      />
    </div>
  );
};
