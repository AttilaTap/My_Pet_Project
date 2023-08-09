// For simplicity, using an array to store posts. In real life, use a database.
let posts = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const newPost = req.body;
    posts = [newPost, ...posts];
    res.status(201).json(newPost);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
