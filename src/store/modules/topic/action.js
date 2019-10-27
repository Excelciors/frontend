export function createTopicRequest(name, classification) {
  return {
    type: '@topic/CREATE_TOPIC_REQUEST',
    payload: { name, classification },
  };
}

export function createMeetUpSuccess({ topics }) {
  return {
    type: '@topic/CREATE_TOPIC_SUCCESS',
    payload: { topics },
  };
}

export function SelectTopic({ active_topic }) {
  return {
    type: '@topic/SELECT_TOPIC',
    payload: { active_topic },
  };
}

export function updateTopicRequest(data) {
  return {
    type: '@topic/UPDATE_TOPIC_REQUEST',
    payload: { data },
  };
}

export function updateTopicSuccess(topic) {
  return {
    type: '@topic/UPDATE_TOPIC_SUCCESS',
    payload: { topic },
  };
}

export function updateTopicFailure() {
  return {
    type: '@topiv/UPDATE_TOPIC_FAILURE',
  };
}
