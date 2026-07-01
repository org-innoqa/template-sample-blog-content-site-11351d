import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, User, Tag } from 'lucide-react';

const posts = [
  { id: 1, title: 'The Future of Interface Design', category: 'Design', readTime: '8 min', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Understanding Neural Networks', category: 'Tech', readTime: '12 min', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Minimalism in Code', category: 'Tech', readTime: '5 min', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
];

const Nav = () => (
  <nav className="flex justify-between items-center py-8 px-6 max-w-6xl mx-auto">
    <Link to="/" className="text-3xl font-bold tracking-tighter">FIELDNOTES</Link>
    <div className="space-x-6">
      <Link to="/" className="hover:underline">Articles</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="max-w-6xl mx-auto px-6 pb-20">
    <div className="mb-16">
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        <img src={posts[0].image} className="w-full h-full object-cover" alt="Featured" />
        <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/70 to-transparent text-white">
          <span className="text-sm uppercase tracking-widest">Featured</span>
          <h1 className="text-5xl font-bold mt-2">{posts[0].title}</h1>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-10">
      {posts.map(post => (
        <div key={post.id} className="group">
          <img src={post.image} className="w-full h-64 object-cover rounded mb-4" alt={post.title} />
          <div className="flex gap-2 text-xs text-stone-500 mb-2">
            <span>{post.category}</span> • <span>{post.readTime}</span>
          </div>
          <h2 className="text-2xl font-bold group-hover:underline">{post.title}</h2>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="max-w-3xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-8">About Fieldnotes</h1>
    <p className="prose-custom">Fieldnotes is a digital publication exploring the intersection of human-centered design and emerging technology. We believe in slow reading and deep thinking.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}