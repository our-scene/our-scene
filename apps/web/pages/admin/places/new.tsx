import { AdminCreatePlace, useAdminCreatePlaceMutation } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { CreatePlaceFormValues, CreatePlaceFormikContainer } from '../../../components/forms/PlacesForm';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlacesNew = () => {
  const { data: session } = useSession();
  const createPlaceMutation = useAdminCreatePlaceMutation(session?.idToken as string);
  const { isLoading, isSuccess } = createPlaceMutation;

  const handleCreateNewPlace = async (body: CreatePlaceFormValues) => {
    console.log('CREATING PLACE');
    try {
      const placeData: AdminCreatePlace.Request['body'] = {
        ...body,
        status: 'active',
        userId: session?.userId as number,
      };
      await createPlaceMutation.mutateAsync(placeData);
    } catch (err) {
      console.log('[ADMIN CREATE NEW PLACE ERROR]: ', err);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col w-3/4 py-4">
        <CreatePlaceFormikContainer handleSubmit={handleCreateNewPlace} submitting={isLoading} success={isSuccess} />
      </div>
    </AdminLayout>
  );
};

export default AdminPlacesNew;
