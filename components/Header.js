import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Contact', link: 'contact' },
    { title: 'About', link: 'about' },
    { title: 'Work', link: '#' },
  ];
  return (
    <div className="flex">
      <Link href={`/`} className="text-blue-300 font-regular p-5 w-full">
        Manjunath Kalburgi
      </Link>
      <div className="flex justify-end w-full">
        {menus &&
          menus.map((item) => {
            return (
              <Link
                href={item.link}
                className="text-blue-300 font-regular hover:text-blue-500 p-5 hover:rounded-lg hover:bg-pink-300 hover:text-white"
              >
                {item.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
