import { useAuth } from '@/lib/auth';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Calendar from 'model/value_objects/calendar';
import Link from 'next/link';
import Week from '../Calendar/Day';

const SecondStep = (props) => {
  if (!props.routine) {
    return <></>;
  }

  console.log(props.routine);

  const weeks = Calendar(props.routine.startDate, props.routine.endDate);
  console.log(weeks);
  return (
    <Flex>
      <Flex flexDirection={'column'} spacing={4} width="300px">
        {Object.values(weeks).map((week) => (
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            {Object.values(week).map((day) => (
              <Box border="1px">
                <Text>{day.getDate()}</Text>
                {/* TODO: Each day component */}
              </Box>
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SecondStep;
