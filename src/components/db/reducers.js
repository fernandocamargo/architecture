import update from 'immutability-helper';

export const register = state => params =>
  update(state, {
    network: {
      [params.fingerprint]: (fingerprint = {}) =>
        update(fingerprint, {
          [params.timestamp]: (timestamp = {}) =>
            update(timestamp, {
              $merge: params.details,
            }),
        }),
    },
  });
