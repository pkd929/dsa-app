import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Topic from './Topic';

const MainPage = () => {
  const navigate = useNavigate();

  const handleContinueLearning = (topicId) => {
    navigate(`/topics/${topicId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Select your topic for start learning</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Topic.map((topic) => (
            <div key={topic.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">{topic.title}</h2>
              <p className="text-sm text-gray-500">{topic.level}</p>
              <p className="text-sm text-gray-400">{topic.courseStarted}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleContinueLearning(topic.id)}
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
