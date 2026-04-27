import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => (
  <table className="student-table">
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Score</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => (
        <StudentRow 
          key={student.id} 
          student={student} 
          onUpdateScore={onUpdateScore} 
        />
      ))}
    </tbody>
  </table>
);

export default StudentTable;