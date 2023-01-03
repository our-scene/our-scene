import { Place } from '@our-scene/api-hooks/resources/admin/places';
import Link from 'next/link';

export const AdminPlacesTable = ({ places }: { places: Place[] }) => {
  // TODO: make table sortable
  // TODO: paginate
  return (
    <div className="overflow-x-auto">
      <table className="table table-normal w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-primary">
          {places.map((place) => (
            <tr key={place.id}>
              <td>{place.id}</td>
              <td>{place.title}</td>
              <td>{place.status}</td>
              <td>{place.user.name}</td>
              <td>{new Date(place.createdAt).toDateString()}</td>
              <td>
                <Link href={`/admin/places/${place.id}`}>
                  <button className="btn btn-primary btn-xs">details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
