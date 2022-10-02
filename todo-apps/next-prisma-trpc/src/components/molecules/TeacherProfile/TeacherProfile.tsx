import React from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Tag } from '../../atoms/Heading/Heading.const';
import { TeacherDetails } from '../TeacherDetails/IntroDetails';
import { CourseTable } from '../CourseTable/CourseTable';
import { Course } from '../../../types/course';
import { Button } from '../../atoms/Button/Button';
import { Badge, BADGE_COLOR, BADGE_SIZE } from '../../atoms/Badge/Badge';

interface Props {
  teacher: {
    name: string;
    image: string;
  };
  courses: Course[];
}

export const TeacherProfile = ({
  teacher: { name, image },
  courses,
}: Props) => {
  return (
    <div>
      <Heading tag={Tag.H2}>{name}</Heading>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <img
            className="w-[16em] h-[16em]"
            src={image}
            alt={`${name}-image`}
          />
          <TeacherDetails />
        </div>
        <div className="flex">
          <Button>Send Message</Button>
        </div>
        <div>
          <Heading tag={Tag.H3}>About Teacher</Heading>
          <p>
            Would you like to gain more CONFIDENCE when speaking and improve
            your PRONUNCIATION with the correction of a NATIVE English
            speaker?Would you like to gain more CONFIDENCE when speaking and
            improve your PRONUNCIATION with the correction of a NATIVE English
            speaker?
          </p>
        </div>
        <div>
          <Heading tag={Tag.H3}>Languages</Heading>
          <div className="flex gap-2">
            <Badge bgColor={BADGE_COLOR.PRIMARY} size={BADGE_SIZE.LG}>
              <span className="font-bold">Tagalog</span>(Native)
            </Badge>
            <Badge bgColor={BADGE_COLOR.SECONDARY} size={BADGE_SIZE.LG}>
              <span className="font-bold">Bisaya</span>(Advance)
            </Badge>
            <Badge bgColor={BADGE_COLOR.ACCENT} size={BADGE_SIZE.LG}>
              <span className="font-bold">English</span>
              (Intermediate)
            </Badge>
          </div>
        </div>
        <div>
          <Heading tag={Tag.H3}>Courses</Heading>
          <CourseTable courses={courses} />
        </div>
      </div>
    </div>
  );
};
