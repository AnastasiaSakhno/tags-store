import React from 'react'
import LinkBox from './LinkBox'
import TagBox from './TagBox'

const RootBox = () => {
  return (
    <div className="container">
      <div className="col-md-6">
        <LinkBox/>
      </div>
      <div className="col-md-6">
        <TagBox/>
      </div>
    </div>
  )
}

export default RootBox
