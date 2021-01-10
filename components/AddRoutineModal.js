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
  ModalOverlay
} = require('@chakra-ui/react');
import { useAuth } from '@/lib/auth';
import { createRoutine } from '@/lib/db';
import React from 'react';
import { useForm } from 'react-hook-form';

function AddRoutineModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const auth = useAuth();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { handleSubmit, register } = useForm();
  const onCreateRoutine = (values) => {
    createRoutine(
      auth.user.uid,
      values.name,
      new Date().toDateString(),
      values.startDate,
      values.endDate
    );
    onClose();
    toast({
      title: `Routine created.`,
      description: `Routine ${values.name} created \u{270C}`,
      status: 'success',
      duration: 9000,
      isClosable: true
    });
  };

  return (
    <>
      <Button
        variant="solid"
        size="md"
        mt={5}
        backgroundColor="whatsapp.400"
        color="white"
        onClick={onOpen}
      >
        Add routine
      </Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateRoutine)}>
          <ModalHeader fontWeight="bold">Add Routine</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Routine Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                name="name"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Start date</FormLabel>
              <Input
                name="startDate"
                ref={register({
                  required: 'Required'
                })}
                type="date"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>End date</FormLabel>
              <Input
                name="endDate"
                ref={register({
                  required: 'Required'
                })}
                type="date"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button backgroundColor="whatsapp.400" ml={3} type="submit">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddRoutineModal;
