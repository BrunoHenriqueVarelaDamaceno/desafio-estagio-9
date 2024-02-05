import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MoviePreview } from '../pages/MoviePreview'
import { CreateMovie } from '../pages/CreateMovie'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/preview/:id' element={<MoviePreview />} />
      <Route path='/create' element={<CreateMovie />} />
    </Routes>
  )
}