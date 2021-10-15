
import { Link } from 'react-router-dom';


function Articles() {
    var data = require("./db.json");
  return (
    <>
    <div>
      {data.posts.map((blog,idx) => (
        <div >
            <Link to={`/blogs/${idx}`}>
                <h1>{ blog.name }</h1>
            </Link>
            <h2>{ blog.article }</h2>
            <p>{ blog.desc }</p>
            
        </div>
      ))}
    </div>
    </>
  );
}


export default Articles;
