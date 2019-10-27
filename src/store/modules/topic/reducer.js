import produce from 'immer';

const INITIAL_STATE = {
  topics: [],
  active: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@topic/CREATE_TOPIC_SUCCESS': {
        state.meetups = [...INITIAL_STATE, action.payload.topics];
        break;
      }
      case '@topic/SELECT_TOPIC': {
        draft.active = action.payload.active_topic;
        break;
      }
      default:
    }
  });
}
