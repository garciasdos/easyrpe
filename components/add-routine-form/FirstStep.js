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

function FirstStep(props) {
  const toast = useToast();

  const onCreateRoutine = (values, actions) => {
    const routine = {
      userId: props.user.uid,
      name: values.name,
      createdAt: new Date(),
      startDate: new Date(values.startDate),
      endDate: new Date(values.endDate)
    };

    createRoutine(
      routine.userId,
      routine.name,
      routine.createdAt,
      routine.startDate,
      routine.endDate
    );
    actions.setSubmitting(false);
    toast({
      title: `Routine created.`,
      description: `Routine ${values.name} created \u{270C}`,
      status: 'success',
      duration: 9000,
      isClosable: true
    });
    props.endFirstStep(routine);
  };

  const validateDates = (values) => {
    const errors = {};

    if (values.startDate >= values.endDate) {
      errors.endDate = 'End Date must be newer than Start Date';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: '', startDate: '', endDate: '' }}
      onSubmit={onCreateRoutine}
      validate={validateDates}
    >
      {(formikProps) => (
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
                    isInvalid={form.errors.startDate && form.touched.startDate}
                  >
                    <FormLabel htmlFor="startDate">Start Date</FormLabel>
                    <Input {...field} id="startDate" type="date" />
                    <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>
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
                    <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box>
                <Stack direction="row" spacing={4}>
                  <Button
                    colorScheme="pink"
                    variant="solid"
                    type="submit"
                    isLoading={formikProps.isSubmitting}
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
  );
}

export default FirstStep;
