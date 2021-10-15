
import { Link } from 'react-router-dom';

function Articles() {
  /*
var data = await fetch('http://my-json-server.typicode.com/abhishek815/testRepo/db')
.then(response => response.json())
.then(json => json)
  */
  var data = require("./db.json");
  return (
    <>
    <div className = "articles">
      {data.posts.map((blog,idx) => (
        <><Link to={`/blogs/${idx}`}>
              <h1>{blog.name}</h1>
          </Link>
          <div className='blog-preview'>
                  <h2>{blog.article}</h2>
                  <p>{blog.desc}</p>
              </div></>
      ))}
    </div>
    </>
  );
}


export default Articles;
