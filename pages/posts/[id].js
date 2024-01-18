import Post1 from './post1.mdx';
import Post2 from './post2.mdx';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();
  const { title } = router.query;
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
  const filteredProject =
    projects &&
    projects.filter((item) => {
      return item.title == title;
    });

  return (
    <div className='m-20'>
      {projects &&
        projects.map((item) => {
          return item.title===title? <>{title}<Post1/></> : <Post2/>
        })}
    </div>
  );
}
