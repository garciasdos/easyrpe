import { Box, Flex, Stack, StackDivider, Text } from '@chakra-ui/react';
import Calendar from 'model/value_objects/calendar';

const SecondStep = (props) => {
  if (!props.routine) {
    return <></>;
  }

  console.log(props.routine);
  const weekLength = [...Array(7).keys()];
  const weeks = Calendar(props.routine.startDate, props.routine.endDate);
  return (
    <Stack
      direction={'column'}
      spacing={4}
      divider={<StackDivider borderColor="gray.200" />}
    >
      {Object.entries(weeks).map(([key, week]) => (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          {weekLength.map((weekDayNumber) => (
            <Stack direction="column">
              {week[weekDayNumber] ? (
                <>
                  <Text>{week[weekDayNumber].toLocaleDateString()}</Text>
                  <Box width={{ base: 100, md: '100px' }} height="100px" />
                </>
              ) : (
                <Box
                  width={{ base: 0, md: '100px' }}
                  height={{ base: 0, md: '100px' }}
                  backgroundColor="gray.200"
                />
              )}
            </Stack>
          ))}
          )
        </Stack>
      ))}
    </Stack>
  );
};

export default SecondStep;
