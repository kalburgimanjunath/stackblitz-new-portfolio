import Post1 from './post1.mdx';
import Post2 from './post2.mdx';
export default function index() {
  const articles = [
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
    <div>
      {/* {articles &&
        articles.map((item) => {
          return (
            <>
              <div className="font-bold text-3xl">{item.title}</div>
              <div className="text-2xs">{item.description}</div>
            </>
          );
        })} */}
      <Post1 />
      <Post2 />
    </div>
  );
}
