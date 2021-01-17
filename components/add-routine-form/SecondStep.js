import { useAuth } from '@/lib/auth';
import { Box, Flex, Heading } from '@chakra-ui/react';

const SecondStep = (props) => {
  const days = [];

  if (!props.routine) {
    return <></>;
  }

  console.log(props.routine);

  let iteratorDate = props.routine.startDate;

  for (
    var day = props.routine.startDate;
    day <= props.routine.endDate;
    day.setDate(day.getDate() + 1)
  ) {
    days.push(<Box>{day.getDate()}</Box>);
  }

  return (
    <Flex flexDirection="column" p={10}>
      {days}
    </Flex>
  );
};

export default SecondStep;
