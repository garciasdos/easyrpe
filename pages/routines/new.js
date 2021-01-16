import AddRoutine from '@/components/AddRoutine';
import Body from '@/components/Body';
import { useAuth } from '@/lib/auth';

const NewRoutine = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return (
    <Body title="New Routine">
      <AddRoutine></AddRoutine>
    </Body>
  );
};

export default NewRoutine;
