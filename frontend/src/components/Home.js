import React from "react";


const Home = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to My Blog</h1>
        <p className="text-muted">Explore and share amazing stories and ideas!</p>
      </header>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Blog Post Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Post Title 1</h5>
              <p className="card-text">
                A short description of the blog post to catch the reader's attention.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Blog Post Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Post Title 2</h5>
              <p className="card-text">
                Another brief description highlighting the essence of the post.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Blog Post Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Post Title 3</h5>
              <p className="card-text">
                Discover insights, tips, and stories that inspire creativity.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
