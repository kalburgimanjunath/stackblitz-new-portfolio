import Link from 'next/link';
export default function Footer({ email }) {
  return (
    <>
      <div style={{ height: '50px', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,50.10 C126.03,164.77 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z"
            style={{ stroke: 'none', fill: '#f9a8d4' }}
          ></path>
        </svg>
      </div>
      <div className="text-center text-xl p-10 bg-pink-300">
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
    </>
  );
}
