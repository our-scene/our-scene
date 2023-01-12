import { useAdminGetPlaceQuery } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlaceDetails = () => {
  const router = useRouter();
  const { id: placeId } = router.query;
  const { data: session } = useSession();
  const { data, isLoading, isError } = useAdminGetPlaceQuery(
    session?.idToken as string,
    { id: placeId as string },
    { enabled: Boolean(placeId) }
  );

  return (
    <AdminLayout>
      <div>AdminPlaceDetails: {placeId}</div>
    </AdminLayout>
  );
};

export default AdminPlaceDetails;
