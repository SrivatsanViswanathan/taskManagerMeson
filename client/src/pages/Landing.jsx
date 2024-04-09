import { Link } from 'react-router-dom';
import Wrapper from '../css/LandingCSS';

const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1 className=''>Task Manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            explicabo qui placeat odit facilis tempore vero nulla velit aliquam
            deserunt?
          </p>
          <div className='btns-container'>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn '>
              Login
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
