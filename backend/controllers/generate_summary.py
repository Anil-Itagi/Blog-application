import google.generativeai as genai

import sys
def generate_summary(blog_title, category, meta_description,api):
    """
    Generates a concise summary using the Gemini API.

    Args:
      blog_title: The title of the blog post.
      category: The category of the blog post.
      meta_description: A brief description of the blog post.

    Returns:
      A string containing the generated summary.
    """
    prompt = f"Generate a concise summary for a blog post with the following details in 8 line:\n" \
             f"Title: {blog_title}\n" \
             f"Category: {category}\n" \
             f"Meta Description: {meta_description}\n"

    # Set the API key
    genai.configure(api_key=api) 

    # Specify the Gemini model
    model = genai.GenerativeModel("gemini-1.5-flash")
    
    # Generate the content
    response = model.generate_content(prompt) 

    # Return the generated summary
    return response.text

if __name__ == "__main__":
    blog_title = sys.argv[1]
    category = sys.argv[2]
    meta_description = sys.argv[3]
    api=sys.argv[4]
    # Generate summary and print it
    summary = generate_summary(blog_title, category, meta_description,api)
    print(summary)

