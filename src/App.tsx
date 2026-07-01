import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { db } from './lib/db';
import { BookOpen, User, Tag } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  created_at: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    db.select('posts', '?order=created_at.desc').then(setPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Son Yazılar</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{new Date(post.created_at).toLocaleDateString()} • {post.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    db.select('posts', `?id=eq.${id}`).then(data => setPost(data[0]));
  }, [id]);

  if (!post) return <div className="p-10">Yükleniyor...</div>;

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-8">
        <span className="flex items-center gap-1"><Tag size={16}/> {post.category}</span>
      </div>
      <div className="prose max-w-none">{post.content}</div>
    </article>
  );
};

const About = () => (
  <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
    <p>Bu blog, teknoloji ve yazılım üzerine düşüncelerimi paylaştığım kişisel bir alandır.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <nav className="bg-white border-b p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl flex items-center gap-2"><BookOpen /> BlogApp</Link>
          <div className="flex gap-4">
            <Link to="/">Ana Sayfa</Link>
            <Link to="/about">Hakkında</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}