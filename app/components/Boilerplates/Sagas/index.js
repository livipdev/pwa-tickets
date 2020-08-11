import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import flow from 'lodash/flow';

import { startUserTest } from 'store/user/actions';

const Sagas = () => {
  const dispatch = useDispatch();
  const startTest = flow(startUserTest, dispatch);

  return (
    <Fragment>
      <button onClick={startTest} style={{display: 'block'}}>
        Click here to start Saga test
      </button>
      Take a look at Redux developer tools to see the Saga result
    </Fragment>
  );
};

export default Sagas;
