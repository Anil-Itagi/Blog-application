import React from 'react'

const MyBlogs = ({blogs}) => {
  return (
      <div>
          <h3 className="mb-4">My Blogs</h3>
            {blogs.length > 0 ? (
                <div className="list-group">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="list-group-item list-group-item-action mb-3"
                        >
                            <h5>{blog.title}</h5>
                            <p>{blog.description}</p>
                            <small className="text-muted">Published on: {blog.date}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted">You haven't written any blogs yet.</p>
            )}</div>
  )
}

export default MyBlogs