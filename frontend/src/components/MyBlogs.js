import React from 'react'

const MyBlogs = ({blogs}) => {
  return (
      <div>
          <h3 className="mb-4">My Blogs</h3>

               
             
            {blogs?.length > 0 ? (    
            <div className="row">
                {blogs.map((post) => (
                    <div key={post._id} className="col-md-4 mb-4">
                        <div className="card post-card">
                            <div className="card-header post-card-header">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="text-muted">by {post.userName} - {post.category}</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{post.metaDescription}</p>
                                <div className="summary-container">
                                    <p><strong>Summary:</strong></p>
                                    <p>{post.summary}</p>
                                </div>
                                <p><strong>Author:</strong> {post.author}</p>
                                <p><strong>Tags:</strong> {post.tags}</p>
                                <p><strong>Attachments:</strong></p>
                                {/* Display the image or the default image */}
                                <img
                                    src={post.attachments }
                                    alt="attachment"
                                    className="img-fluid" // Make image responsive
                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <p><small>{new Date(post.currentDate).toLocaleString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <p className="text-muted">You haven't written any blogs yet.</p>
            )}</div>
  )
}

export default MyBlogs