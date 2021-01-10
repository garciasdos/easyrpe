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
  ModalOverlay
} = require('@chakra-ui/react');
import React from 'react';
import { useForm } from 'react-hook-form';

function AddRoutineModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { handleSubmit, register } = useForm();
  const createRoutine = (values) => console.log(values);

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
        <ModalContent as="form" onSubmit={handleSubmit(createRoutine)}>
          <ModalHeader fontWeight="bold">Create your account</ModalHeader>
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
              <FormLabel>User</FormLabel>
              <Input
                placeholder="Last name"
                name="user"
                ref={register({
                  required: 'Required'
                })}
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
