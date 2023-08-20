import {useNavigate, useRouteError} from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong {error.status} 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;