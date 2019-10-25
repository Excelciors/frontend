import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
// import api from '~/services/api';

export default function Dashboard() {
  // const dispatch = useDispatch();
  // const [meetups, setMeetups] = useState([]);
  // const [date, setDate] = useState();

  // useEffect(() => {
  //   setDate(format(new Date(), 'MM/dd/yyyy'));

  //   async function loadMeetupps() {
  //     const response = await api.get('organizing', { params: { date } });
  //     const data = response.data.map(m => ({
  //       ...m,
  //       formattedDate: format(parseISO(m.date), "d 'de' MMMM', às' hh'h'mm", {
  //         locale: pt,
  //       }),
  //     }));
  //     setMeetups(data);
  //   }
  //   loadMeetupps();
  // }, [date]);

  // function handleSelectMeetup(meetup) {
  //   dispatch(SelectMeetup(meetup));
  // }

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={24} />
            <span>Novo Meetup</span>
          </button>
        </Link>
      </header>
    </Container>
  );
}
