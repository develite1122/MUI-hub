import { combineReducers } from 'redux';

import HubReducer from './hub/hubReducer';

const rootReducer = combineReducers({
    hub: HubReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
