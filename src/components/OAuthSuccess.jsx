import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuthSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/home'); 
    } else {
      alert('OAuth failed or token missing');
      navigate('/login');
    }
  }, []);

  return <p>Redirecting...</p>;
};

export default OAuthSuccess;
