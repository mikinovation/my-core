import React, { useState } from 'react';
import { TeacherCard } from '../../atoms/TeacherCard/TeacherCard';

interface Teacher {
  name: string;
}

export const TeacherList = () => {
  const teachers = [
    {
      name: 'James',
    },
    {
      name: 'Brad',
    },
  ];
  const [teachersList] = useState<Teacher[]>(teachers);
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {teachersList.map((teacher) => (
          <li>
            <TeacherCard key={teacher.name} teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  );
};
