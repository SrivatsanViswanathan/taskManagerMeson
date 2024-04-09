import { Link, Form } from 'react-router-dom';
import Wrapper from '../css/LoginCSS';
import { FormRow } from '../components';
import { useNavigation } from 'react-router-dom';

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Login</h4>
        <FormRow type='email' name='email'></FormRow>
        <FormRow type='password' name='password'></FormRow>
        <button
          type='submit'
          className={`btn btn-block`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
