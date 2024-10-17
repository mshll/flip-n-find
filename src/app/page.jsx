import Image from 'next/image';
import CardGrid from './components/CardGrid';

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] mx-auto p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-black text-4xl">Flip n&apos; Find</h1>
      <CardGrid />
    </div>
  );
}
