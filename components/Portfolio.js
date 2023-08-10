import Link from 'next/link';
export default function Portfolio({ title, projects }) {
  return (
    <div>
      {projects &&
        projects.map((item) => {
          return (
            <Link href={`./projects/${item.title}`}>
              <div>{item.title}</div>
              <div>
                <img src="https://picsum.photos/seed/picsum/200/300" />
              </div>
            </Link>
          );
        })}
    </div>
  );
}
