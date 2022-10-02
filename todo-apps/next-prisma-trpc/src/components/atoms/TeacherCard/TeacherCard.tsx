import React from 'react';
import { Badge } from '../Badge/Badge';

interface Props {
  teacher: {
    name: string;
  };
}

export const TeacherCard = ({ teacher }: Props) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-24 h-24 rounded">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-1">
              <Badge>Tagalog</Badge>
              <Badge>Bisaya</Badge>
            </div>
            <h2 className="card-title">{teacher.name}</h2>
            <p>
              TESOL Certified American English Tutor w/ Language Interpretation
              Background & 7 years of experience My over 122 reviews speak for
              themselves, but if you really want to take your English to the
              next level and are serious about cutting back on?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book trial lesson</button>
              <button className="btn btn-secondary">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
