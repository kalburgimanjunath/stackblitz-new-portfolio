import Project1 from './project1.mdx';
import Project2 from './project2.mdx';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();
  const { title } = router.query;
  console.log(title);
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
      console.log(item.title+title)
      return item.title == title;
    });
  console.log(filteredProject);

  return <div className='m-20'>{projects && projects.map(item => {
    return <div>{item.title===title? <Project1 /> : <Project2 />}</div>
  })}</div>;
}
