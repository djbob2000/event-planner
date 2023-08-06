import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import * as s from './CreateEventPage.styled';

const eventCategory = [
  'art',
  'music',
  'business',
  'conference',
  'workshop',
  'party',
  'sport',
];

const priorityCategory = ['high', 'medium', 'low'];

const CreateEventValidationSchema = Yup.object().shape({
  title: Yup.string().email('This is an ERROR email').required('Required'),
});

const CreateEventPage = () => {
  return (
    <>
      <ButtonBack aria-label="Button back" />
      <s.H1>Create new event</s.H1>

      <Formik
        validationSchema={CreateEventValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <s.StyledForm>
            <s.FieldsWrapper>
              <s.WrapInput>
                <s.Label htmlFor="title">Title:</s.Label>
                <Field type="text" id="title" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="description">Description:</s.Label>
                <Field as="textarea" id="description" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="date">Select Date:</s.Label>
                <Field type="date" id="date" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="time">Select Time:</s.Label>
                <Field type="time" id="time" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="location">Location:</s.Label>
                <Field type="text" id="location" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="category">Category:</s.Label>
                <Field as="select" id="category">
                  <option value="">Select a category</option>
                  {eventCategory.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="picture">Add picture:</s.Label>
                <Field type="file" id="picture" />
              </s.WrapInput>

              <s.WrapInput>
                <s.Label htmlFor="priority">Priority:</s.Label>
                <Field as="select" id="priority">
                  {priorityCategory.map(priority => (
                    <option key={priority} value={priority}>
                      {priority}
                    </option>
                  ))}
                </Field>
              </s.WrapInput>
            </s.FieldsWrapper>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </s.StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CreateEventPage;
