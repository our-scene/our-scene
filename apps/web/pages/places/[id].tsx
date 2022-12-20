import { useRouter } from 'next/router';
import { BaseLayout } from '../../components/layout/BaseLayout';

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  return <BaseLayout>Place Details: {id}</BaseLayout>;
}
