/* eslint-disable no-console */
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { updateTopicSuccess, updateTopicFailure } from './action';

export function* createTopic({ payload }) {
  try {
    const { name, classification } = payload;

    console.log(payload);

    yield call(api.post, 'topic', {
      name,
      classification,
    });

    toast.success('Topico criado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    console.log(err);
    toast.error('Falha na criação do Topico!');
  }
}

export function* updateTopic({ payload }) {
  try {
    const { name, classification } = payload;

    const topic = Object.assign({
      name,
      classification,
    });

    const response = yield call(api.put, `topic/${payload.id}`, topic);

    toast.success('Topico atualizado com sucesso!');

    yield put(updateTopicSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o topico, confira seus dados!');
    yield put(updateTopicFailure());
  }
}

export default all([
  takeLatest('@topic/CREATE_TOPIC_REQUEST', createTopic),
  takeLatest('@topic/UPDATE_TOPIC_REQUEST', updateTopic),
]);
