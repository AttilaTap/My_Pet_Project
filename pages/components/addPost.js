import { useState } from 'react';

export default function AddPost({ onAdd }) {
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState(generateRandomUnsplashURL());

  function generateRandomUnsplashURL() {
    const sig = Math.random();
    return `https://source.unsplash.com/random/900x450?sig=${sig}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a post object with the current title and image URL
    const post = {
      title: title,
      image: imageURL,
    };

    onAdd(post);

    // Clear the title input, generate a new random image URL for next use
    setTitle('');
    setImageURL(generateRandomUnsplashURL());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter post title'
          required
        />
        <input
          type='text'
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder='Enter image URL'
          required
        />
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}
