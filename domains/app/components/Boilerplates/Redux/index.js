import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import flow from 'lodash/flow';

import { selectUserTest } from 'store/user/selectors';
import { updateTest } from 'store/user/actions';

const Redux = () => {
  const dispatch = useDispatch();
  const testValue = useSelector(selectUserTest);
  const updateTestValue = flow(updateTest, dispatch);

  return (
    <Fragment>
      The current test value is: {testValue}
      <button onClick={updateTestValue} style={{display: 'block'}}>
        Update test value
      </button>
    </Fragment>
  );
};

export default Redux;
