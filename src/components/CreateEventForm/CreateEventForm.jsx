import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import * as s from './CreateEventForm.styled';
import { ButtonClearField } from '../ButtonClearField/ButtonClearField';
import { PRIORITY } from '../../constants/priority';
import { CATEGORIES } from '../../constants/categories';
import { Button } from '../Button/Button.jsx';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { addEvent } from '../../redux/events/events.operations';

const priorityArray = Object.values(PRIORITY);
const categoryArray = Object.values(CATEGORIES);

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
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  category: Yup.string().required('Category is required'),
  priority: Yup.string().required('Priority is required'),
});

export const CreateEventForm = () => {
  const dispatch = useDispatch();

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

  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      title: values.title,
      description: values.description,
      date: values.date,
      time: values.time,
      location: values.location,
      category: values.category,
      image: values.picture,
      priority: values.priority,
    };

    dispatch(addEvent(payload));
    resetForm();
    // toast.success("Event added successfully");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateEventValidationSchema}
        onSubmit={(values, { resetForm }) =>
          handleSubmit(values, { resetForm })
        }
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
                <s.StyledField type="text" name="title" $error={errors.title} />
                <s.StyledErrorMessage name="title" component="div" />
                {values.title && (
                  <ButtonClearField
                    $error={errors.title}
                    onClick={() => setFieldValue('title', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Description:
                <s.StyledTextArea
                  as="textarea"
                  name="description"
                  $error={errors.description}
                />
                {values.description && (
                  <ButtonClearField
                    $error={errors.description}
                    onClick={() => setFieldValue('description', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Select Date:
                <s.StyledField type="date" name="date" $error={errors.date} />
                <s.StyledErrorMessage name="date" component="div" />
              </s.Label>

              <s.Label>
                Select Time:
                <s.StyledField type="time" name="time" $error={errors.time} />
                <s.StyledErrorMessage name="time" component="div" />
              </s.Label>

              <s.Label>
                Location:
                <s.StyledField
                  type="text"
                  name="location"
                  $error={errors.title}
                />
                <s.StyledErrorMessage name="location" component="div" />
                {values.location && (
                  <ButtonClearField
                    $error={errors.title}
                    onClick={() => setFieldValue('location', '')}
                  />
                )}
              </s.Label>

              <s.Label>
                Category:
                <CustomSelect
                  name="category"
                  options={categoryArray}
                  setFieldValue={setFieldValue}
                  error={errors.category}
                />
                <s.StyledErrorMessage name="category" component="div" />
              </s.Label>

              <s.Label disabled={true}>
                Add picture:
                <s.StyledField disabled={true} type="text" name="picture" />
              </s.Label>

              <s.Label>
                Priority:
                <CustomSelect
                  name="priority"
                  options={priorityArray}
                  setFieldValue={setFieldValue}
                  error={errors.priority}
                />
                <s.StyledErrorMessage name="priority" component="div" />
              </s.Label>
            </s.FieldsWrapper>
            <s.BtnWrap>
              <Button
                type="submit"
                disabled={errors || isSubmitting}
                title="Add event"
              />
            </s.BtnWrap>
          </s.StyledForm>
        )}
      </Formik>
    </>
  );
};
