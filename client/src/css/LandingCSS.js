import styled from 'styled-components';

const Wrapper = styled.section`
  .container {
    display: flex;
    max-width: var(--max-width);
    height: 100vh;
    min-width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35rem;
  }
  .register-link {
    margin-right: 1rem;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
`;

export default Wrapper;
