import Navbar from '../components/Nav-bar.jsx'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard.jsx'
import api from '../lib/axios.js'
import NotesNotFound from '../components/NoteNotFound.jsx'


const HomePage = () => {
 const [israteLimited, setIsRateLimited] = useState(false)
 const [note , setNote] = useState([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes')
      console.log('Fetched notes:', response.data)
      setNote(response.data)
      setIsRateLimited(false)
    } catch (error) {
      console.error('Error fetching notes:', error)
      if ( error.response?.status === 429) {
      setIsRateLimited(true)
      }else {
        toast.error('Error fetching notes')
      } 
    } finally {
      setLoading(false)
    }
  }

  fetchNotes()}, [])


  return (
    <div>
      <Navbar />
      {israteLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && 
          <p className='text-center text-primary py-10'>Loading notes...</p> }

          {note.length > 0 && !israteLimited &&(
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>

              {note.map((note) => (
                <NoteCard key={note._id} note={note} setNote={setNote} />
              ))}
            </div>
          )}
          {note.length === 0 && !israteLimited && !loading && <NotesNotFound />}
      </div>
    </div>
  )
}

export default HomePage
