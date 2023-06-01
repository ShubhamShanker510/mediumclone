import React from 'react'
import HomeHeader from './HomeHeader'
import './css/index.css'
import HomeMain from './HomeMain'
import RecommendedPost from './RecommendedPost'

const index = () => {
  return (
    <div>
          <HomeHeader />
          <HomeMain />
          <RecommendedPost/>
    </div>
  )
}

export default index
