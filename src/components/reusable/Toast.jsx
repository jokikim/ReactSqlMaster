import React from 'react'
import { Toaster } from 'react-hot-toast'

const Toast = () => {
  return (
    <Toaster
    position="top-center"
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      className: "",
      duration: 5000,
      style: {
        background: "#ffffff",
        color: "#3A4374",
      },
      success: {
        duration: 3000,
        iconTheme: {
          primary: "#4661E6",
          secondary: "#ffffff",
        },
      },
      error: {
        iconTheme: {
          primary: "#D73737",
          secondary: "#ffffff",
        },
      },
    }}
  />
  )
}

export default Toast
