// Fetch and display blog posts
async function fetchBlogs() {
    const response = await fetch('/api/blogs');
    const blogs = await response.json();
    const blogContainer = document.getElementById('blogContainer');
  
    blogs.forEach(blog => {
      const blogPost = document.createElement('div');
      blogPost.className = 'bg-white p-4 rounded-lg shadow-md';
      blogPost.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${blog.title}</h3>
        ${blog.image ? `<img src="/uploads/${blog.image}" alt="${blog.title}" class="mb-2 rounded-lg">` : ''}
        <p class="text-gray-700">${blog.content}</p>
        <small class="text-gray-500">${new Date(blog.date).toLocaleDateString()}</small>
      `;
      blogContainer.appendChild(blogPost);
    });
  }
  
  fetchBlogs();