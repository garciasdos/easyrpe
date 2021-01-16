// const {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   useToast,
//   FormErrorMessage,
//   Stack,
//   Box,
//   VStack
// } = require('@chakra-ui/react');
// import { useAuth } from '@/lib/auth';
// import { createRoutine } from '@/lib/db';
// import { Form, Formik } from 'formik';
// import React from 'react';

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

// function AddRoutine() {
//   const auth = useAuth();

//   const toast = useToast();

//   const onCreateRoutine = (values) => {
//     createRoutine(
//       auth.user.uid,
//       values.name,
//       new Date(),
//       values.startDate,
//       values.endDate
//     );
//     toast({
//       title: `Routine created.`,
//       description: `Routine ${values.name} created \u{270C}`,
//       status: 'success',
//       duration: 9000,
//       isClosable: true
//     });
//   };

//   return (
//     <VStack spacing={4}>
//       <Formik
//         initialValues={{ name: 'Sasuke' }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             actions.setSubmitting(false);
//           }, 1000);
//         }}
//       >
//         {(props) => (
//           <Form>
//             {({ field, form }) => (
//               <>
//                 <FormControl>
//                   <FormLabel>Name</FormLabel>
//                   <Input
//                     errorBorderColor="crimson"
//                     name="name"
//                     placeholder="Best routine ever!"
//                   />
//                   <FormErrorMessage>Error message</FormErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Start date</FormLabel>
//                   <Input
//                     errorBorderColor="crimson"
//                     name="startDate"
//                     type="date"
//                   />
//                   <FormErrorMessage>Error message</FormErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>End date</FormLabel>
//                   <Input
//                     errorBorderColor="crimson"
//                     name="endDate"
//                     validate={(value) => {
//                       const values = getValues();
//                       return (
//                         values.startDate < values.endDate ||
//                         'End Date must be newer than Start Date'
//                       );
//                     }}
//                     type="date"
//                   />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//               </>
//             )}
//             <Button
//               mt={4}
//               colorScheme="teal"
//               isLoading={props.isSubmitting}
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//       {/* <Formik
//         initialValues={{ name: 'Sasuke' }}
//         onSubmit={handleSubmit(onCreateRoutine)}
//       ></Formik>
//       <FormControl>
//         <FormLabel>Name</FormLabel>
//         <Input
//           errorBorderColor="crimson"
//           name="name"
//           placeholder="Best routine ever!"
//         />
//         <FormErrorMessage>Error message</FormErrorMessage>
//       </FormControl>
//       <FormControl>
//         <FormLabel>Start date</FormLabel>
//         <Input errorBorderColor="crimson" name="startDate" type="date" />
//         <FormErrorMessage>Error message</FormErrorMessage>
//       </FormControl>
//       <FormControl>
//         <FormLabel>End date</FormLabel>
//         <Input
//           errorBorderColor="crimson"
//           name="endDate"
//           validate={(value) => {
//             const values = getValues();
//             return (
//               values.startDate < values.endDate ||
//               'End Date must be newer than Start Date'
//             );
//           }}
//           type="date"
//         />
//         <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//       </FormControl>
//       <Box>
//         <Stack direction="row" spacing={4}>
//           <Button colorScheme="pink" variant="solid" type="submit">
//             Save
//           </Button>
//           <Button colorScheme="blue" variant="outline">
//             Call us
//           </Button>
//         </Stack>
//       </Box> */}
//     </VStack>
//   );
// }

// export default AddRoutine;
function AddRoutine() {
  const auth = useAuth();

  const toast = useToast();

  const onCreateRoutine = (values) => {
    createRoutine(
      auth.user.uid,
      values.name,
      new Date(),
      values.startDate,
      values.endDate
    );
    toast({
      title: `Routine created.`,
      description: `Routine ${values.name} created \u{270C}`,
      status: 'success',
      duration: 9000,
      isClosable: true
    });
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
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
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
  );
}

export default AddRoutine;
