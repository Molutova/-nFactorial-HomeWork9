import "./App.css";
import Article from "./components/Article";
import Img1 from "./Images/Img.svg";
import Img2 from "./Images/Img2.svg";
import Img3 from "./Images/Img3.svg";

const articles = [
  {
    id: 1,
    author: "Authors name in Topic name 7 july",
    title: "7 Practical CSS Tips",
    content:
      "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off..",
    img: Img1,
  },
  {
    id: 2,
    author: "Authors name in Topic name 7 july",
    title: "7 Practical CSS Tips",
    content:
      "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    img: Img2,
  },
  {
    id: 3,
    author: "Authors name in Topic name 7 july",
    title: "7 Practical CSS Tips",
    content:
      "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    img: Img3,
  },
];

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default App;
