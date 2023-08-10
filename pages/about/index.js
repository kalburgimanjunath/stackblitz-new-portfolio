import Aboutme from './about.mdx';
import Background from './background.mdx';
import Values from './values.mdx';
export default function index() {
  return (
    <div className="m-20 w-full">
      <h1>About</h1>
      <Aboutme />
      <Background />
      <Values />
    </div>
  );
}
