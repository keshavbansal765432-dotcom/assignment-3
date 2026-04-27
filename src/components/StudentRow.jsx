import React from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPass = student.score >= 40; // Logic for pass/fail [cite: 52, 53]

  return (
    <tr className="table-row">
      <td style={{ fontWeight: 600 }}>{student.name}</td>
      <td>
        <input 
          className="score-input-table"
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)} 
          style={{ width: '60px', border: '1px solid #e2e8f0', padding: '4px' }}
        />
      </td>
      <td>
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;