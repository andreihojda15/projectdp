/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { nanoid } from 'nanoid';

import GuestTemplate from './components/templates/GuestTemplate';

// components
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

// components
import Chemistry from './components/courses/Chemistry';
import English from './components/courses/English';
import Grammar from './components/courses/Grammar';
import Math from './components/courses/Math';
import Physics from './components/courses/Physics';
import Programming from './components/courses/Programming';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is a note',
      date: '12/06/2021',
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={(
            <GuestTemplate title="Login">
              <Login />
            </GuestTemplate>
          )}
        />
        <Route
          path="/register"
          element={(
            <GuestTemplate title="Register">
              <Register />
            </GuestTemplate>
          )}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/forgot-password"
          element={(
            <GuestTemplate title="Change Password">
              <ChangePassword />
            </GuestTemplate>
          )}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<LandingPage />} />

        {/* random subjects dummy data */}
        <Route path="/chemistry" element={<Chemistry notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        <Route path="/english" element={<English notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        <Route path="/grammar" element={<Grammar notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        <Route path="/math" element={<Math notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        <Route path="/physics" element={<Physics notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        <Route path="/programming" element={<Programming notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />} />
        {/* end of dummy data */}
      </Routes>
    </Router>
  );
}

export default App;
