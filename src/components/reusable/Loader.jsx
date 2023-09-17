import React from 'react'
import { useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  const theme = useSelector((state) => state.app.theme)

  return (
    <div>
      <ClipLoader color={theme === "light" ? 'black' : 'white'} />
    </div>
  )
}

export default Loader
