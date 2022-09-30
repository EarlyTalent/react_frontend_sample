import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <nav className="w-full py-3 bg-neutral-400">
        <div className="container">
          <Link to="/" className="text-white font-bold text-lg">
            HOME
          </Link>
        </div>
      </nav>
      
    
      <section className="container">
        <h2 className="text-xl my-2 text-neutral-700 font-serif">
          Check out Top Posts from our Authors!
        </h2>
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <TopPostSection key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

/** By using the .map method in the section above, I am able to route data stored in the data.json file into this simple div using basic javascript */
const TopPostSection = ({ post }) => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        to={`/author/${post.id}`}
        className="font-bold text-cyan-700 underline"
      >
        {post.author}
      </Link>
      <div className="w-full p-2 flex flex-col gap-2 border-rose-500 border-2 rounded pb-8">
        <h2 className="font-semibold">{post.posts[0].title}</h2>
        <p>{post.posts[0].content}</p>
      </div>
    </div>
  );
};

export default Home;
