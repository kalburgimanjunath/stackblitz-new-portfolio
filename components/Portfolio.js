import Link from 'next/link';
export default function Portfolio({ title, projects }) {
  return (
    <>
      <div className="text-center text-4xl mb-5">{title}</div>
      <div className="text-center flex grid grid-cols-4">
        {projects &&
          projects.map((item) => {
            return (
              <Link href={`./projects/${item.title}`} className="m-2 ">
                <div>
                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    className="rounded-[30px] w-90 h-90"
                  />
                </div>
                <div className="m-5">{item.title}</div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
