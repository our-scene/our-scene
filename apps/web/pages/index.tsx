import Image from 'next/image';
import { BaseLayout } from '../components/layout/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div className="w-full flex items-center justify-center">
        <Image src="/assets/logos/logo.svg" alt="logo" width={600} height={600} />
      </div>
    </BaseLayout>
  );
}
