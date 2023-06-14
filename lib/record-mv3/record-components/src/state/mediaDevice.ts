import { types } from 'mobx-state-tree';
const MediaDevice = types.model('MediaDevice', {
  deviceId: types.identifier,
  groupId: types.string,
  label: types.string,
  kind: types.union(
    types.literal('audioinput'),
    types.literal('videoinput'),
    types.literal('audiooutput'),
  ),
});

export default MediaDevice;
