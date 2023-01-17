import { Place } from '@our-scene/api-hooks/resources/admin/places';
import Link from 'next/link';

export const AdminPlacesTable = ({ places }: { places: Place[] }) => {
  // TODO: figure out how to set this at the theme level
  // TODO: make table sortable
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-normal">
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
          {places?.map((place) => (
            <tr key={place.attributes.id}>
              <td>{place.attributes.id}</td>
              <td>{place.attributes.title}</td>
              <td>{place.attributes.status}</td>
              <td>{place.attributes.user.name}</td>
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
