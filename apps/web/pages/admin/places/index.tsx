import { useAdminGetAllPlacesQuery } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { AdminPlacesTable } from '../../../components/tables/AdminPlacesTable';

const AdminPlaces = () => {
  const { data: session } = useSession();
  const adminGetAllPlacesQuery = useAdminGetAllPlacesQuery(session?.idToken as string, { enabled: Boolean(session) });
  const { data: places, isLoading, isError } = adminGetAllPlacesQuery;

  // TODO: handle errors
  if (isError) return <div>error loading places</div>;
  return (
    <AdminLayout>
      <div className="flex flex-col w-3/4">
        <div className="mt-4 flex w-full justify-between">
          <div className="text-primary text-2xl">Admin Places</div>
          <Link href="/admin/places/new">
            <div className="btn btn-primary w-16 text-xs">Add Place</div>
          </Link>
        </div>
        <div className="mt-4">{isLoading ? <div>loading...</div> : <AdminPlacesTable places={places} />}</div>
      </div>
    </AdminLayout>
  );
};

export default AdminPlaces;
