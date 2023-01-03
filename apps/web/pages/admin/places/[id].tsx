import { useRouter } from 'next/router';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlaceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AdminLayout>
      <div>AdminPlaceDetails: {id}</div>
    </AdminLayout>
  );
};

export default AdminPlaceDetails;
