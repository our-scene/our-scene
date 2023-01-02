import { useAdminCreatePlaceMutation } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { PlaceFormValues, PlaceForm } from '../../../components/forms/PlacesForm';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlacesNew = () => {
  const { data: session } = useSession();
  const createPlaceMutation = useAdminCreatePlaceMutation(session?.idToken as string);

  const handleCreateNewPlace = async (body: PlaceFormValues) => {
    try {
      const newPlace = await createPlaceMutation.mutateAsync(body);
      console.log(newPlace);
      return newPlace;
    } catch (err) {
      console.log('[ADMIN CREATE NEW PLACE ERROR]: ', err);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col w-3/4 py-4">
        <PlaceForm handleSubmit={handleCreateNewPlace} />
      </div>
    </AdminLayout>
  );
};

export default AdminPlacesNew;
