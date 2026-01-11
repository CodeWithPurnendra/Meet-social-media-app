import Posts from "./Posts";
import antarctica from "./assets/antarctica.jpg"
import iceland from "./assets/iceland.jpg"
import japan from "./assets/japan.jpg"
import kashmir from "./assets/kashmir.jpg"

function App() {
  const posts = [
    { id: 1, realName: "Ravi", image: antarctica},
    { id: 2, realName: "Rakesh", image: iceland},
    { id: 3, realName: "Rahul", image: japan},
    { id: 4, realName: "Raju", image: kashmir},
  ];
  return <Posts posts={posts} />;
}

export default App;
