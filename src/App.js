import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alex Rivera', score: 58 },
    { id: 2, name: 'Jordan Lee', score: 38 },
    { id: 3, name: 'Keshav', score: 85}
  ]);

  const handleUpdateScore = (id, newScore) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s
    ));
  };

  const handleAddStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score: parseInt(score) }]);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />
    </div>
  );
}

export default App;