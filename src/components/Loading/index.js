import { CircularProgress } from '@material-ui/core';
import React from 'react';

import './Loading.css';

const Loading = () => (
  <>
    <div className="loading">
      <CircularProgress size={50} />
    </div>
  </>
);

export default Loading;
