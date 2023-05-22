import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-primary max-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col justify-between h-32 items-center bg-primary text-4xl'>
        <h1 className='text-secondary font-bold'>Bienvenue sur Monki</h1>
        <div id='buttons' className='flex justify-around h-1/2 items-center w-full bg-primary text-2xl'>
          <div id="register_button" className="flex justify-center items-center bg-primary text-2xl">
            <Link to='/register'>
            <button className="bg-secondary hover:bg-secondary-400 text-white font-bold py-2 px-4 rounded">
              S'inscrire
            </button>
            </Link>
          </div>
          <div id="login_button" className="flex justify-center items-center bg-primary text-2xl">
            <Link to='/login'>
              <button className="bg-secondary hover:bg-secondary-400 text-white font-bold py-2 px-4 rounded">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home