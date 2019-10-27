import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdEdit } from 'react-icons/md';
import { Container, Topics } from './styles';
import { SelectTopic } from '~/store/modules/topic/action';

import api from '~/services/api';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function loadTopics() {
      const response = await api.get('topic');

      setTopics(response.data);
    }
    loadTopics();
  });

  function handleSelectTopic(topic) {
    console.log(topic);
    dispatch(SelectTopic(topic));
  }

  return (
    <Container>
      <header>
        <strong>Tópicos</strong>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={24} />
            <span>Novo Tópico</span>
          </button>
        </Link>
      </header>
      <ul>
        {topics.map(topic => (
          <Topics>
            <div>
              <strong>{topic.name}</strong>
            </div>
            <div>
              <Link to="/edit" onClick={() => handleSelectTopic(topic)}>
                <MdEdit size={36} color="#10bed8" />
              </Link>
            </div>
          </Topics>
        ))}
      </ul>
    </Container>
  );
}
