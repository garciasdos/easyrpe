import { useAuth } from '@/lib/auth';
import { createRoutine } from '@/lib/db';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
  VStack
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

function AddRoutine() {
  const auth = useAuth();

  const toast = useToast();

  const [isFirstStep, endFirstStep] = useState(true);

  const onCreateRoutine = (values, actions) => {
    createRoutine(
      auth.user.uid,
      values.name,
      new Date(),
      new Date(values.startDate),
      new Date(values.endDate)
    );
    actions.setSubmitting(false);
    toast({
      title: `Routine created.`,
      description: `Routine ${values.name} created \u{270C}`,
      status: 'success',
      duration: 9000,
      isClosable: true
    });
    endFirstStep(false);
  };

  const validateDates = (values) => {
    const errors = {};

    if (values.startDate >= values.endDate) {
      errors.endDate = 'End Date must be newer than Start Date';
    }

    return errors;
  };

  return (
    <>
      {isFirstStep && (
        <Formik
          initialValues={{ name: '', startDate: '', endDate: '' }}
          onSubmit={onCreateRoutine}
          validate={validateDates}
        >
          {(props) => (
            <Form>
              <Flex justifyContent="center">
                <VStack spacing={4} width="300px">
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input {...field} id="name" placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="startDate">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.startDate && form.touched.startDate
                        }
                      >
                        <FormLabel htmlFor="startDate">Start Date</FormLabel>
                        <Input {...field} id="startDate" type="date" />
                        <FormErrorMessage>
                          {form.errors.startDate}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="endDate">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.endDate && form.touched.endDate}
                      >
                        <FormLabel htmlFor="endDate">End Date</FormLabel>
                        <Input {...field} id="endDate" type="date" />
                        <FormErrorMessage>
                          {form.errors.endDate}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Box>
                    <Stack direction="row" spacing={4}>
                      <Button
                        colorScheme="pink"
                        variant="solid"
                        type="submit"
                        isLoading={props.isSubmitting}
                      >
                        Save
                      </Button>
                      <Button colorScheme="blue" variant="outline">
                        Call us
                      </Button>
                    </Stack>
                  </Box>
                </VStack>
              </Flex>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default AddRoutine;
