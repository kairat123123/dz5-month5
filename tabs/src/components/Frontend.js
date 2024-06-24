import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFrontendData } from './frontendSlice';

const Frontend = () => {
  const dispatch = useDispatch();
  const frontendData = useSelector((state) => state.frontend.data);
  const status = useSelector((state) => state.frontend.status);

  useEffect(() => {
    dispatch(fetchFrontendData());
  }, [dispatch]);

  return (
    <div>
      <h2>Frontend</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div>
          {/* Render your data here */}
          {JSON.stringify(frontendData)}
        </div>
      )}
      {status === 'failed' && <p>Error loading data.</p>}
    </div>
  );
};

export default Frontend;