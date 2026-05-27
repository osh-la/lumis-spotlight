import React from 'react'

const NotFound = () => {
  return (
    <section className='h-screen bg-red-50 text-zinc-800 flex flex-col justify-center items-center'>
            <h1 className='text-9xl  font-extrabold '>PAGE NOT FOUND!</h1>
            <a onClick={history.back}>Head back home </a>


    </section>
  )
}

export default NotFound