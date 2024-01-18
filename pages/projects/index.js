import Project1 from './project1.mdx';
import Project2 from './project2.mdx';
import Link from 'next/link';
export default function index() {
  const projects = [
    {
      id: 1,
      title: 'belk-redesign-case-study',
      description: 'description',
    },
    {
      id: 2,
      title: 'tumareliye-freelance-project',
      description: 'description',
    },
    {
      id: 3,
      title: 'iterateux-website-redesign-case-study',
      description: 'description',
    },
    {
      id: 4,
      title: 'fitly-app-update-case-study',
      description: 'description',
    },
  ];
  return (
    <div className='m-20'>
      {projects &&
        projects.map((item) => {
          return (
            <Link href={`./projects/${item.title}`}>
              <div className="font-bold text-3xl">{item.title}</div>
              <div className="text-2xs">{item.description}</div>
            </Link>
          );
        })}
      {/* <Post1 />
      <Post2 /> */}
    </div>
  );
}
