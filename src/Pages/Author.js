import React from "react";
import { Link, useLocation } from "react-router-dom";

const Author = () => {
  const [posts, setPosts] = React.useState([]);
  const [authorName, setAuthorName] = React.useState("");
  const [error, setError] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    setError(null);
    const id = location.pathname.split("/")[2];
    const fetchData = async () => {
      const response = await fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      const author = data.find((author) => author.id === id);
      if (!author) {
        setError("Author not found");
        return;
      }
      setPosts(author.posts);
      setAuthorName(author.author);
    };

    fetchData();
  }, [location.pathname]);
/**navbar styled with JSX with link to return back to the homepage */
  return (
    <main>
      <nav className="w-full py-3 bg-neutral-400">
        <div className="container">
          <Link to="/" className="text-white font-bold text-lg">
            HOME
          </Link>
        </div>
      </nav>

      {error && (
        <section className="container">
          <div className="text-red-500 my-4 font-bold text-xl">{error}</div>
        </section>
      )}


      {!error && (
        <section className="container">
          <h1 className="text-2xl font-bold my-4">{authorName}</h1>
          <h2 className="text-xl my-2 text-neutral-700 font-serif">
            Check out {authorName.split(" ")[0]}'s Recipes!
          </h2>

          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <AuthorPost key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

/* const used for displaying content and style to the author specific blog page using JSX*/
const AuthorPost = ({ post }) => {
  return (
    <div className="w-full p-2 flex flex-col gap-2 border-rose-500 border-2 rounded pb-8">
      <h2 className="font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Author;
