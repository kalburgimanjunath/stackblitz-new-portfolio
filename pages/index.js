import styles from '../styles/Home.module.css';
import { Hero, Portfolio, Footer } from '../components';
export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'hello world',
      description: 'description',
    },
    {
      id: 2,
      title: 'hello world',
      description: 'description',
    },
    {
      id: 3,
      title: 'hello world',
      description: 'description',
    },
    {
      id: 4,
      title: 'hello world',
      description: 'description',
    },
  ];
  const email = 'manjunathkalburgi@gmail.com';
  return (
    <div>
      <Hero title="Hi! My name is Manjunath Kalburgi Please call me Manju 😊">
        <button>Contact me</button>
      </Hero>
      <h1>My Work</h1>
      <Portfolio projects={projects} />
      <Footer email={email} />
    </div>
  );
}
