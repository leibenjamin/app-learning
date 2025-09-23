import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import GlossaryTerm from './GlossaryTerm';

const glossary = {
  "amygdala": "A collection of cells near the base of the brain responsible for processing strong emotions like fear and pleasure.",
  "neurotransmitter": "A chemical messenger that carries, boosts, and balances signals between neurons and other cells in the body.",
  "GABA": "(Gamma-aminobutyric acid) The primary inhibitory neurotransmitter in the brain, which decreases neuron activity and calms the nervous system.",
  "glutamate": "The primary excitatory neurotransmitter in the brain, which increases neuron activity and is vital for learning and memory.",
  "inhibitory": "A type of effect that makes a neuron less likely to fire an action potential (a nerve signal).",
  "excitatory": "A type of effect that makes a neuron more likely to fire an action potential (a nerve signal).",
  "Prefrontal Cortex": "The front part of the brain involved in planning complex cognitive behavior, personality expression, decision making, and moderating social behavior.",
  "PFC": "Abbreviation for Prefrontal Cortex, the brain's executive center for rational thought and emotional regulation.",
  "hippocampus": "A complex brain structure embedded deep into the temporal lobe. It has a major role in learning and memory, especially in providing context.",
  "HPA Axis": "(Hypothalamic-Pituitary-Adrenal Axis) The body's central stress response system, connecting the brain and the adrenal glands.",
  "cortisol": "A steroid hormone, often called the 'stress hormone', that is released by the adrenal glands in response to stress.",
  "serotonin": "A neurotransmitter that helps regulate mood, sleep, appetite, and feelings of well-being.",
  "norepinephrine": "A neurotransmitter and hormone that is central to the 'fight or flight' response, increasing alertness, heart rate, and blood pressure.",
  "dopamine": "A neurotransmitter that plays a major role in reward-motivated behavior and is central to the brain's motivation system.",
  "neuroplasticity": "The brain's ability to reorganize itself by forming new neural connections, allowing it to adapt and change throughout life.",
  "pharmacotherapy": "The treatment of a disorder or disease with medication.",
  "SSRIs": "(Selective Serotonin Reuptake Inhibitors) A class of drugs typically used as antidepressants that work by increasing the level of available serotonin.",
  "Benzodiazepines": "A class of psychoactive drugs that act as a sedative by enhancing the effect of the neurotransmitter GABA."
};

const LessonCard = ({ lesson }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const renderContentWithGlossary = (content) => {
    const regex = new RegExp(`\\b(${Object.keys(glossary).join('|')})\\b`, 'gi');
    const parts = content.split(regex);
    return parts.map((part, index) => {
      const lowerCasePart = part.toLowerCase();
      if (glossary[lowerCasePart]) {
        return <GlossaryTerm key={index} term={part} definition={glossary[lowerCasePart]} />;
      }
      // Handle multi-word terms that might have different casing
      const foundTerm = Object.keys(glossary).find(term => term.toLowerCase() === lowerCasePart);
      if (foundTerm) {
        return <GlossaryTerm key={index} term={part} definition={glossary[foundTerm]} />;
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
      <div className="p-6 sm:p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{lesson.title}</h3>
        
        {lesson.visuals && lesson.visuals.length > 0 && (
          <div className="my-6 text-center bg-gray-50 p-4 rounded-lg">
            {lesson.visuals.map((visual, index) => (
              <img key={index} src={visual.url} alt={visual.caption} className="rounded-lg mx-auto max-w-full md:max-w-md" />
            ))}
          </div>
        )}

        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>{renderContentWithGlossary(lesson.content)}</p>
        </div>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowQuiz(!showQuiz)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {showQuiz ? 'Hide Quiz' : 'Test Your Knowledge'}
          </button>
        </div>

        {showQuiz && lesson.quiz && lesson.quiz.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="overflow-hidden"
          >
            <Quiz questions={lesson.quiz} lessonId={lesson._id} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;