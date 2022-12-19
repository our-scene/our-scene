import Link from 'next/link';
import { BaseLayout } from '../../components/layout/BaseLayout';

export default function Places() {
  return (
    <BaseLayout>
      <div className="flex w-full justify-center items-center">
        <div className="flex text-primary">
          <Link href="/places/new">
            <div className="btn bg-primary text-primary-content">Add Place</div>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
}
