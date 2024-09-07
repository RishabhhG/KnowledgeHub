import React from 'react';

const TestimonialCard = ({ profilePic, name, feedback }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;