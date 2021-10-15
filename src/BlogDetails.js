import { useParams } from "react-router-dom";



function BlogDetails() {
  const { id } = useParams();
  var data = require("./db.json");
  let name = data.posts[id].name
  let firstname = name.split(" ")[0]
  return (
    <>
    <div>
      <h1> {name} </h1>
      <h2> Check out {firstname}'s Recipes!</h2>
      {data.authors[id].map((blog) => (
        <div >
            <h1>{ blog.article }</h1>
            <p>{ blog.desc }</p>
        </div>
      ))}
    </div>
    </>
  );
}


export default BlogDetails;
