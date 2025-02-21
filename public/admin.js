document.getElementById('blogForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);
  
    const token = localStorage.getItem('token');
  
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
  
    const data = await response.json();
    if (data.title) {
      alert('Blog post created successfully!');
    } else {
      alert('Error creating blog post');
    }
  });