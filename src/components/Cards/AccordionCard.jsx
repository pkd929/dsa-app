import React, { useState } from 'react';
import chapters from '../List/List';
import Topic from '../../pages/Home/Topic';

const AccordionCard = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  const getChaptersForTopic = (topicId) => {
    return chapters.filter(chapter => chapter.topicId === topicId);
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-class="text-gray-500 dark:text-gray-400"
    >
      {Topic.map((topic, index) => (
        <div key={topic.id}>
          <h2 id={`accordion-flush-heading-${topic.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              onClick={() => toggleAccordion(topic.id)}
              aria-expanded={activeIndex === topic.id}
              aria-controls={`accordion-flush-body-${topic.id}`}
            >
              <span>{topic.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === topic.id ? 'rotate-180' : ''} shrink-0`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <div
            id={`accordion-flush-body-${topic.id}`}
            className={`${activeIndex === topic.id ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-flush-heading-${topic.id}`}
          >
            {getChaptersForTopic(topic.id).map((chapter) => (
              <div key={chapter.id} className="py-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">{chapter.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Watch the video: <a href={chapter.videoUrl} className="text-blue-600 dark:text-blue-500 hover:underline">Video Link</a>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Problems:
                </p>
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  {chapter.problems.map((problem, index) => (
                    <li key={index}>
                      <a href={problem.url} className="text-blue-600 dark:text-blue-500 hover:underline">{problem.name}</a>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Additional resources: <a href={chapter.resources.article} className="text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionCard;
