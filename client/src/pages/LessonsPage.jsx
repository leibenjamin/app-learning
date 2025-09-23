import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LessonCard from '../components/LessonCard';

// Use an environment variable for the backend base URL.
// If it's not set (e.g., local dev), fall back to an empty string so "/api/..." still works.
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const LessonsPage = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/lessons`);
        if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        const data = await res.json();
        setLessons(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error)   return <div className="text-center mt-20 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">NeuroLearn Lessons</h1>
        <p className="text-lg text-gray-600 mt-2">Explore the neuroscience of anxiety.</p>
      </header>

      <motion.div className="space-y-10" variants={container} initial="hidden" animate="show">
        {lessons.map((lesson) => (
          <motion.div key={lesson._id} variants={item}>
            <LessonCard lesson={lesson} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LessonsPage;
