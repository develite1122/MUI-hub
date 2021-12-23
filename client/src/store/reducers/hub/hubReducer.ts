import { HubAction } from '../../actions/hub/hubTypes';
import { IHubState } from '../../../@types';

const initialState: IHubState = {
hubs: [
  {
    code: "",
    voyage: "",
    programDateStart: new Date(),
    programDateEnd: new Date(),
    status: "",
    containers: 0,
    containersRemaining: 0,
    progress: 0
  }]
};

const HubReducer = (
    state: IHubState = initialState,
    action: HubAction,
) => {
    switch (action.type) {
        case 'SET_Hub':
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case 'SET_Hub_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_Hub_ERROR':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default HubReducer;
