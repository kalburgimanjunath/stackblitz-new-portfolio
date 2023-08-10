import Link from 'next/link';
export default function Footer({ email }) {
  return (
    <div className="text-center text-xl mt-20 p-10 bg-pink-300">
      <Link href={`mailto:${email}`}>{email}</Link>
    </div>
  );
}
