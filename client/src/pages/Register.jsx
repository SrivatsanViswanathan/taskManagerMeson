import { Form, Link } from 'react-router-dom';
import Wrapper from '../css/RegisterCSS';
import { FormRow } from '../components';
import { useNavigation } from 'react-router-dom';

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        <FormRow type='text' name='name'></FormRow>
        <FormRow type='text' name='lastName' labelText='Last Name'></FormRow>
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
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
