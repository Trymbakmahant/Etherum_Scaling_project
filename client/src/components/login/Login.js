import { Field, Form, Formik } from 'formik';
import { Input,FormErrorMessage ,FormLabel,Button,FormControl} from '@chakra-ui/react';

function  Login() {
    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: 'Sasuke' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
            <FormControl>
            <FormLabel>First name</FormLabel>
            <Input  placeholder='name' />
            <FormErrorMessage>{"this is trymbak"}</FormErrorMessage>
          </FormControl>
          </Form>
           
        )}
      </Formik>
    )
  }
  export default Login;