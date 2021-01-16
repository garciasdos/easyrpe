const {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Modal,
  useDisclosure,
  useToast,
  ModalOverlay,
  Flex,
  FormErrorMessage,
  Stack,
  Box,
  VStack
} = require('@chakra-ui/react');
import { useAuth } from '@/lib/auth';
import { createRoutine } from '@/lib/db';
import React from 'react';
import { useForm } from 'react-hook-form';

function AddRoutine() {
  const auth = useAuth();

  const { handleSubmit, register } = useForm();

  const toast = useToast();

  const onCreateRoutine = (values) => {
    createRoutine(
      auth.user.uid,
      values.name,
      new Date().toDateString(),
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

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit(onCreateRoutine)}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          ref={register({
            required: 'Required'
          })}
          placeholder="Best routine ever!"
        />
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Start date</FormLabel>
        <Input
          name="startDate"
          ref={register({
            required: 'Required'
          })}
          type="date"
        />
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>End date</FormLabel>
        <Input
          name="endDate"
          ref={register({
            required: 'Required'
          })}
          type="date"
        />
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <Box>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="pink" variant="solid" type="submit">
            Save
          </Button>
          <Button colorScheme="blue" variant="outline">
            Call us
          </Button>
        </Stack>
      </Box>
    </VStack>
  );
}

export default AddRoutine;
