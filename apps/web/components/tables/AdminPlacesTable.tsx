import { Place } from '@our-scene/api-hooks/resources/admin/places';
import Link from 'next/link';

export const AdminPlacesTable = ({ places }: { places: Place[] }) => {
  // TODO: figure out how to set this at the theme level
  const thClass = 'bg-primary';
  return (
    <div className="overflow-x-auto">
      <table className="table table-normal w-full">
        <thead>
          <tr>
            <th className={thClass}>Id</th>
            <th className={thClass}>Title</th>
            <th className={thClass}>Status</th>
            <th className={thClass}>Created By</th>
            <th className={thClass}>Created At</th>
            <th className={thClass}></th>
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
