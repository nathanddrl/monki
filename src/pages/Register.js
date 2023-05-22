import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();  // instanciez useNavigate ici

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoyer une requête POST à l'API avec les données d'inscription
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .catch(err => {
          console.error(err);
          setMessage(`Erreur : ${err.message}`);
        });


      if (response.status === 201) {
        const { authToken } = await response.json();
        localStorage.setItem('authToken', authToken);
        setMessage('Inscription réussie. Vous êtes maintenant connecté.');
        navigate('/');  // Redirige l'utilisateur vers la page d'accueil
      } else {
        const data = await response.json();
        setMessage(`Erreur : ${data}`);
      }
    } catch (err) {
      setMessage(`Erreur : ${err.message}`);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-primary px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-secondary'>Inscription</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>Email :</label>
              <input
                id='email-address'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-secondary bg-primary placeholder-secondary-100 text-gray-100 rounded-t-md focus:outline-none focus:border-secondary-100 focus:ring-secondary-100 focus:z-10 sm:text-sm'
                placeholder='Email'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>Mot de passe :</label>
              <input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-secondary bg-primary placeholder-secondary-100 text-gray-100 rounded-b-md focus:outline-none focus:border-secondary-100 focus:ring-secondary-100 focus:z-10 sm:text-sm'
                placeholder='Mot de passe'
              />
            </div>
          </div>

          <div>
            <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              S'inscrire
            </button>
          </div>
        </form>
        {message && <p className='mt-2 text-center text-sm text-red-600'>{message}</p>}
      </div>
    </div>
  );

}

export default Register