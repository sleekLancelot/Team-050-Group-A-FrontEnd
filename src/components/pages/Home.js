import React from 'react';
import bg from '../assets/01.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <main>
        <h1>RETRIEVE YOUR CRIMINAL RECORDS WITH NO HASSLE</h1>
        <p>
          Crimgistry aids and speeds up the retriving process of your criminal
          records in Nigeria to any part of the world.
        </p>
        <div className='access'>
          <Link to='/sign-up'>
            <div
              className='btn'
              style={{ background: '#00e6b0', marginRight: '70px' }}
            >
              Sign up
            </div>
          </Link>
          <Link to='/log-in'>
            <div
              className='btn'
              style={{ background: 'transparent', border: '2px solid #00e6b0' }}
            >
              Log in
            </div>
          </Link>
        </div>
      </main>
      <div className='home-left'>
        <img src={bg} alt='img' style={{ width: '50vw' }} />
      </div>
    </div>
  );
};

export default Home;
