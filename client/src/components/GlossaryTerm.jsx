import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const GlossaryTerm = ({ term, definition }) => {
  return (
    <Tippy
      content={
        <div className="p-2 bg-gray-800 text-white rounded-md shadow-lg max-w-xs border border-gray-600">
          {definition}
        </div>
      }
      interactive={true}
      placement="top"
      animation="shift-away"
    >
      <span className="text-blue-600 font-semibold cursor-pointer underline decoration-dotted">
        {term}
      </span>
    </Tippy>
  );
};

export default GlossaryTerm;