import { Place } from '@our-scene/api-hooks/resources/admin/places';

export const AdminPlacesTable = ({ places }: { places: Place[] }) => {
  return (
    <div>
      Admin Places table
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.title}</td>
                <td>{place.status}</td>
                <td>{place.user.name}</td>
                <td>{place.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
