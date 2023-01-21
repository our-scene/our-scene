import { useAdminGetPlacesQuery } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { AdminPlacesTable } from '../../../components/tables/AdminPlacesTable';

const AdminPlaces = () => {
  const { data: session } = useSession();
  const adminGetAllPlacesQuery = useAdminGetPlacesQuery(session?.idToken as string, { enabled: Boolean(session) });
  const { data: places, isLoading, isError } = adminGetAllPlacesQuery;

  if (isError) return <div>error loading places</div>;
  return (
    <AdminLayout>
      <div className="flex flex-col w-3/4">
        <div className="flex justify-between w-full mt-4">
          <div className="text-2xl text-primary">Admin Places</div>
          <Link href="/admin/places/new">
            <div className="w-16 text-xs btn btn-primary">Add Place</div>
          </Link>
        </div>
        <div className="mt-4">{isLoading ? <div>loading...</div> : <AdminPlacesTable places={places} />}</div>
      </div>
    </AdminLayout>
  );
};

export default AdminPlaces;
