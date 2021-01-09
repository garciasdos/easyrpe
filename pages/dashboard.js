import { useAuth } from '@/lib/auth';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
      return 'Loading...';
  }

  return (
    <Navbar/>
  )
}

export default Dashboard;