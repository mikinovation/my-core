import React, { ChangeEventHandler, useState } from 'react';
import { ChatHead } from '../../atoms/ChatHead/ChatHead';
import { ChatMessage } from '../../atoms/ChatMessage/ChatMessage';
import { Textbox } from '../../atoms/Textbox/Textbox';
import { Button } from '../../atoms/Button/Button';
import { SuggestCourseButtonWithModal } from '../SuggestCourseButtonWithModal/SuggestCourseButtonWithModal';
import { Course } from '@/types/course';
import { ChatMessage as ChatMessageType } from '@/types/chatMessage';

type Props = {
  courses: Course[];
  chatMessage: ChatType[];
};

export const Chat = ({ courses, chatMessages }: Props) => {
  const [courseId, setCourseId] = useState<string>('');
  const selectCourse: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setCourseId(e.target.value);
  };
  // TODO: 最後のメッセージだけにプロフィールを表示したい
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <ChatHead />
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <ChatMessage isMe={true}>
          Your error message says permission denied, npm global installs must be
          given root privileges.
        </ChatMessage>
        <ChatMessage isMe={true}>
          Your error message says permission denied, npm global installs must be
          given root privileges.
        </ChatMessage>
        <ChatMessage isMe={false}>
          Command was run with root privileges. I'm sure about that.
        </ChatMessage>
        <ChatMessage isMe={false}>
          I've update the description so it's more obviously now
        </ChatMessage>
        <ChatMessage isMe={false}>
          FYI https://askubuntu.com/a/700266/510172
        </ChatMessage>
        <ChatMessage isMe={false}>
          Check the line above (it ends with a # so, I'm running it as root )
          <pre># npm install -g @vue/devtools</pre>
        </ChatMessage>
      </div>
      <div className="flex flex-col gap-4 border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <Textbox placeholder="Write your message!" />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <Button>
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <SuggestCourseButtonWithModal
            courses={courses}
            selectCourse={selectCourse}
            courseId={courseId}
          />
        </div>
      </div>
    </div>
  );
};
