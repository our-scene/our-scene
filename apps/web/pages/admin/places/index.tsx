import Link from 'next/link';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const AdminPlaces = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col w-3/4">
        <div className="">Admin Places</div>
        <Link href="/admin/places/new">
          <div className="btn btn-primary w-16">Add Place</div>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default AdminPlaces;
