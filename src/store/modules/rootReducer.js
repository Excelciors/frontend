import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import topic from './topic/reducer';

export default combineReducers({
  auth,
  user,
  topic,
});
