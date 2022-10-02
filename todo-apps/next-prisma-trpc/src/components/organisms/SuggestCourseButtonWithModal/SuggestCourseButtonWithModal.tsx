import { Modal } from '../../atoms/Modal/Modal';
import React, { ChangeEventHandler, memo } from 'react';
import { Selectbox } from '../../atoms/Selectbox/Selectbox';
import { Course } from '../../../types/course';

type Props = {
  courseId: string;
  courses: Course[];
  selectCourse: ChangeEventHandler<HTMLInputElement>;
};

export const SuggestCourseButtonWithModal = memo(
  ({ courses, selectCourse, courseId }: Props) => {
    const courseOptions = courses.map((c) => ({ label: c.name, value: c.id }));
    return (
      <Modal label="Suggest Course">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Choose the course you propose to Mike
          </h3>
          <Selectbox
            options={courseOptions}
            onChange={selectCourse}
            value={courseId}
          />
          <div className="modal-action">
            <label
              htmlFor="modal"
              className={`btn ${!courseId && 'btn-disabled'}`}
            >
              Suggest
            </label>
            <label htmlFor="modal" className={`btn`}>
              Cancel
            </label>
          </div>
        </div>
      </Modal>
    );
  },
);
