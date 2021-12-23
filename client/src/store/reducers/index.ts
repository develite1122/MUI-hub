import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import uiReducer from './ui/uiReducer';
import HubReducer from './hub/hubReducer';

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
    hub: HubReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
