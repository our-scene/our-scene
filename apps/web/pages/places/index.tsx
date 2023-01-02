import { useAdminGetAllPlacesQuery } from '@our-scene/api-hooks/resources/admin/places';
import { useSession } from 'next-auth/react';
import { BaseLayout } from '../../components/layout/BaseLayout';

export default function Places() {
  return (
    <BaseLayout>
      <div className="flex text-primary">
        <div>Here are some places</div>
      </div>
    </BaseLayout>
  );
}
