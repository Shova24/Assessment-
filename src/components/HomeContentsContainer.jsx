import React from 'react'

import Categories from './Categories'
import ImagesContainer from './ImagesContainer'

const HomeContentsContainer = () => {
  return (
    <div className='space-y-8'>
      <Categories/>

      <ImagesContainer/>
    </div>
  )
}

export default HomeContentsContainer