import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Contact', link: 'contact' },
    { title: 'About', link: 'about' },
    { title: 'Work', link: '#' },
  ];
  return (
    <div>
      <Link href={`/`}>Logo</Link>
      {menus &&
        menus.map((item) => {
          return <Link href={item.link}>{item.title}</Link>;
        })}
    </div>
  );
}
