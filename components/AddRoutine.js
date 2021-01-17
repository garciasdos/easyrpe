import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import FirstStep from './add-routine-form/FirstStep';
import SecondStep from './add-routine-form/SecondStep';

function AddRoutine() {
  const auth = useAuth();

  const [isFirstStep, setFirstStep] = useState(true);
  const [isSecondStep, setSecondStep] = useState(false);
  const [routine, setRoutine] = useState(null);

  function endFirstStep(routine) {
    setFirstStep(false);
    setSecondStep(true);
    setRoutine(routine);
  }

  return (
    <>
      {isFirstStep && (
        <FirstStep endFirstStep={endFirstStep} user={auth.user}></FirstStep>
      )}
      {isSecondStep && <SecondStep routine={routine}></SecondStep>}
    </>
  );
}

export default AddRoutine;
