import { Routes, Route, Navigate } from 'react-router-dom'
import { CreateNote } from '../pages/CreateNote'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { NoteDetails } from '../pages/NoteDetails'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-note" element={<CreateNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/note-details/:id" element={<NoteDetails />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}