import { RootState } from '../../reducers';
import { IHubState } from '../../../@types';

export const selectHub = (state: RootState): IHubState => ({
  hubs: state.hub.hubs
});
