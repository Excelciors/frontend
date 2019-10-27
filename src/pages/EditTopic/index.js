import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone } from 'react-icons/md';
import { updateTopicRequest } from '~/store/modules/topic/action';

import { Container } from './styles';

export default function EditMeetup() {
  const topic = useSelector(state => state.topic.active);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateTopicRequest(data));
  }

  return (
    <Container>
      <Form initialData={topic} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Titulo do Topico" />

        <Input
          type="text"
          name="description"
          placeholder="Descrição Completa"
        />

        <button type="submit">
          <MdDone size={24} />
          <span>Salvar Tópico</span>
        </button>
      </Form>
    </Container>
  );
}
