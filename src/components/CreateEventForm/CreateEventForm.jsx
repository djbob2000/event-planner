import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import * as s from './CreateEventForm.styled';
import { ButtonClearField } from '../ButtonClearField/ButtonClearField';
import { PRIORITY } from '../../constants/priority';
import { Button } from '../Button/Button.jsx';

const eventCategory = [
  'art',
  'music',
  'business',
  'conference',
  'workshop',
  'party',
  'sport',
];

// const priorityCategory = ['high', 'medium', 'low'];

const CreateEventValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$/,
      'Invalid title format'
    )
    .min(6, 'Title must be at least 6 characters')
    .max(150, 'Title must not exceed 150 characters'),

  location: Yup.string()
    .required('Location is required')
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$/,
      'Invalid title format'
    )
    .min(3, 'Title must be at least 6 characters')
    .max(50, 'Title must not exceed 50 characters'),
});

export const CreateEventForm = () => {
  const initialValues = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    picture: '',
    priority: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateEventValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(
            '🚀 ~ file: CreateEventForm.jsx:58 ~ CreateEventForm ~ values:',
            values
          );
          alert('FORMIK');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <s.StyledForm>
            <s.FieldsWrapper>
              <s.Label>
                Title:
                <s.StyledField type="text" name="title" error={errors.title} />
                <s.StyledErrorMessage name="title" component="div" />
                {values.title && (
                  <ButtonClearField
                    error={errors.title}
                    onClick={() => setFieldValue('title', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Description:
                <s.StyledTextArea
                  as="textarea"
                  name="description"
                  error={errors.description}
                />
                {values.description && (
                  <ButtonClearField
                    error={errors.description}
                    onClick={() => setFieldValue('description', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Select Date:
                <s.StyledField type="date" name="date" />
              </s.Label>

              <s.Label>
                Select Time:
                <s.StyledField type="time" name="time" />
              </s.Label>

              <s.Label>
                Location:
                <s.StyledField
                  type="text"
                  name="location"
                  error={errors.title}
                />
                <s.StyledErrorMessage name="location" component="div" />
                {values.location && (
                  <ButtonClearField
                    error={errors.title}
                    onClick={() => setFieldValue('location', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Category:
                <s.StyledField as="select" name="category">
                  <option value="">Select a category</option>
                  {eventCategory.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </s.StyledField>
              </s.Label>

              <s.Label disabled={true}>
                Add picture:
                <s.StyledField disabled={true} type="text" name="picture" />
              </s.Label>

              <s.Label>
                Priority:
                <s.StyledField as="select" name="priority">
                  {Object.keys(PRIORITY).map(priorityKey => (
                    <option key={priorityKey} value={priorityKey}>
                      {PRIORITY[priorityKey]}
                    </option>
                  ))}
                </s.StyledField>
              </s.Label>
            </s.FieldsWrapper>
            <Button type="submit" disabled={isSubmitting} title="Save" />
          </s.StyledForm>
        )}
      </Formik>
    </>
  );
};
