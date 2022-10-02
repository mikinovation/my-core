import React from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Tag } from '../../atoms/Heading/Heading.const';
import { TeacherDetails } from '../TeacherDetails/IntroDetails';

interface Course {
  name: string;
  description: string;
}

interface Props {
  courses: Course[];
}

export const CourseTable = ({ courses = [] }: Props) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Course</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(({ name, description }) => (
          <tr key={name}>
            <th>{name}</th>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
