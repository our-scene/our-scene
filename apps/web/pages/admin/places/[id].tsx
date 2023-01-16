import {
  AdminUpdatePlace,
  useAdminGetPlaceQuery,
  useAdminUpdatePlaceMutation,
} from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { CreatePlaceFormikContainer } from '../../../components/forms/PlacesForm';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { MediaAssetInput } from '../../../components/lib/inputs/MediaAssetInput';

const AdminPlaceDetails = () => {
  const router = useRouter();
  const { id: placeId } = router.query;
  const { data: session } = useSession();
  const {
    data: place,
    isLoading,
    isSuccess,
    // isError,
  } = useAdminGetPlaceQuery(
    session?.idToken as string,
    { id: placeId as string },
    { enabled: Boolean(session && placeId) }
  );

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
      <div className="flex flex-col w-4/5 p-4">
        <div className="flex text-3xl">{place?.title}:</div>
        {place ? (
          <div className="flex p-2 space-y-2 card bg-neutral">
            {/* TODO: MAKE A DIFFERENT FORM */}
            <CreatePlaceFormikContainer
              handleSubmit={handleUpdatePlaceSubmit}
              submitting={isLoading || isUpdateSubmitting}
              success={isSuccess || isUpdateSuccess}
              initialValue={place}
            />
            <div className="flex flex-col w-1/2">
              <header className="text-lg underline">Primary Image:</header>
              <MediaAssetInput fieldName="primaryImage" />
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPlaceDetails;
