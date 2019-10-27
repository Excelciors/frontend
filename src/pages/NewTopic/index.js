import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone } from 'react-icons/md';

import { Container } from './styles';
import { createTopicRequest } from '../../store/modules/topic/action';

export default function NewTopic() {
  const dispatch = useDispatch();

  function handleSubmit({ name, classification }) {
    console.log({ name, classification });
    dispatch(createTopicRequest(name, classification));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Titulo do Topico" />
        <Input
          type="text"
          name="classification"
          placeholder="Descrição Completa"
        />

        <button type="submit">
          <MdDone size={24} />
          <span>Criar Topico</span>
        </button>
      </Form>
    </Container>
  );
}
