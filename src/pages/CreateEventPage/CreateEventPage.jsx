import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import * as s from './CreateEventPage.styled';
import { CreateEventForm } from '../../components/CreateEventForm/CreateEventForm';

const CreateEventPage = () => {
  return (
    <>
      <ButtonBack aria-label="Button back" />
      <s.H1>Create new event</s.H1>
      <CreateEventForm />
    </>
  );
};

export default CreateEventPage;
