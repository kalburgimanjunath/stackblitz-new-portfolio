import styles from '../styles/Home.module.css';
import { Hero, Portfolio, Footer } from '../components';
export default function Home() {
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
    <div className="">
      <Hero title="Hi! My name is Manjunath Kalburgi Please call me Manju 😊">
        <button className="rounded-lg p-3 bg-blue-300 text-white hover:bg-blue-500">
          Contact me
        </button>
      </Hero>

      <Portfolio projects={projects} title="My Work" />
    </div>
  );
}
