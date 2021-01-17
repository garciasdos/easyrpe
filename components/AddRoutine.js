import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import FirstStep from './add-routine-form/FirstStep';

function AddRoutine() {
  const auth = useAuth();

  const [isFirstStep, setFirstStep] = useState(true);

  function endFirstStep(value) {
    setFirstStep(value);
  }

  return (
    <>
      {isFirstStep && (
        <FirstStep endFirstStep={endFirstStep} user={auth.user}></FirstStep>
      )}
    </>
  );
}

export default AddRoutine;
