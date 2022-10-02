import React from 'react';
import { TeacherProfile } from '../../molecules/TeacherProfile/TeacherProfile';

export const TeacherDetail = () => {
  return (
    <main>
      <TeacherProfile
        teacher={{
          name: 'Tom',
          image: 'https://placeimg.com/192/192/people',
        }}
        courses={[
          {
            id: 1,
            name: 'Tagalog for for beginners',
            description: 'This is a course for beginners',
          },
          {
            id: 2,
            name: 'Tagalog Conversation',
            description:
              'This is conversation class. We can have free talk time',
          },
        ]}
      />
    </main>
  );
};
