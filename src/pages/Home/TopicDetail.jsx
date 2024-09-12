import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import chapters from '../../components/List/List'
import SideCard from '../../components/Cards/SideCard';

const TopicDetail = () => {
  const { topicId } = useParams();
  const topicChapters = chapters.filter((chapter) => chapter.topicId === Number(topicId));

  const getInitialProgress = () => {
    const storedProgress = localStorage.getItem('progress');
    return storedProgress ? JSON.parse(storedProgress) : {};
  };

  const [progress, setProgress] = useState(getInitialProgress());
  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [progress]);

  const handleCheckboxChange = (chapterId, problemIndex) => {
    const updatedProgress = { ...progress };
    if (!updatedProgress[chapterId]) {
      updatedProgress[chapterId] = [];
    }

    if (updatedProgress[chapterId].includes(problemIndex)) {
      updatedProgress[chapterId] = updatedProgress[chapterId].filter((idx) => idx !== problemIndex);
    } else {
      updatedProgress[chapterId].push(problemIndex);
    }

    setProgress(updatedProgress);
  };

  const isProblemCompleted = (chapterId, problemIndex) => {
    return progress[chapterId] && progress[chapterId].includes(problemIndex);
  };

  return (
    <>
      <Navbar />

      <div className="flex px-4 py-8">
        <div className="w-3/4 pr-8">
          <div className="container mx-md px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Chapter Details</h1>
            <div className="space-y-8">
              {topicChapters.map((chapter) => (
                <div key={chapter.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">{chapter.title}</h2>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/1yrh60og6qc?si=t5N6m-vIaESyjbqK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <ul className="mt-4 list-disc list-inside">
                    {chapter.problems.map((problem, index) => (
                      <li key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isProblemCompleted(chapter.id, index)}
                          onChange={() => handleCheckboxChange(chapter.id, index)}
                          className="mr-2"
                        />
                        <a
                          href={problem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-blue-500 underline ${isProblemCompleted(chapter.id, index) ? 'line-through' : ''}`}
                        >
                          {problem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a href={chapter.resources.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      YouTube Tutorial
                    </a>
                    <a href={chapter.resources.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-4">
                      LeetCode Problem
                    </a>
                    <a href={chapter.resources.article} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-4">
                      Article
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Difficulty: {chapter.resources.difficulty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4">
       <SideCard />
         </div>
        </div>
   
    </>
  );
};

export default TopicDetail;
