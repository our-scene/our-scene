import {
  AdminUpdatePlace,
  useAdminGetPlaceQuery,
  useAdminUpdatePlaceMutation,
} from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PlaceForm } from '../../../components/forms/PlacesForm';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlaceDetails = () => {
  const router = useRouter();
  const { id: placeId } = router.query;
  const { data: session } = useSession();
  const {
    data: place,
    isLoading,
    isSuccess,
    // isError,
  } = useAdminGetPlaceQuery(session?.idToken as string, { id: placeId as string }, { enabled: Boolean(placeId) });

  const adminUpdatePlaceMutation = useAdminUpdatePlaceMutation(session?.idToken as string, { id: placeId as string });
  const {
    isLoading: isUpdateSubmitting,
    isSuccess: isUpdateSuccess,
    // isError: isUpdateError,
  } = adminUpdatePlaceMutation;
  const handleUpdatePlaceSubmit = async (place: AdminUpdatePlace.Request['body']) => {
    try {
      const response = await adminUpdatePlaceMutation.mutateAsync(place);
      console.log({ response });
    } catch (err) {
      console.log('[ERROR UPDATING PLACE]: ', err);
    }
  };

  return (
    <AdminLayout>
      <div>AdminPlaceDetails: {placeId}</div>
      {place ? (
        <PlaceForm
          handleSubmit={handleUpdatePlaceSubmit}
          submitting={isLoading || isUpdateSubmitting}
          success={isSuccess || isUpdateSuccess}
          initialValue={place}
        />
      ) : (
        <div>Loading</div>
      )}
    </AdminLayout>
  );
};

export default AdminPlaceDetails;
