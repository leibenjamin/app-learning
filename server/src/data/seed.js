const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');

const lessons = [
  // =================================================================
  // Module 1: Foundations
  // =================================================================
  {
    module: 1, order: 1, title: 'Introduction to Anxiety',
    content: "Anxiety is a natural and often helpful human response to stress, acting as an internal alarm system. It's a future-oriented state of mind characterized by feelings of fear, worry, or apprehension about what's to come. For instance, feeling nervous before a job interview can improve performance. However, when these feelings become excessive, persistent, and interfere with daily functioning, they may indicate an anxiety disorder. The distinction between normal anxiety and a disorder is primarily based on severity, duration (typically lasting six months or more), and the level of impairment it causes in one's life.",
    visuals: [],
    quiz: [
      { factId: "1-1-A", questions: [
          { questionText: "What is the primary function of normal anxiety?", options: ["To cause distress", "To act as an internal alarm system", "To impair daily functioning", "To focus on past events"], correctAnswerIndex: 1 },
          { questionText: "From a functional perspective, what purpose does everyday anxiety serve?", options: ["It is a sign of a disorder", "It helps in planning for future challenges", "It only occurs in response to past trauma", "It has no useful purpose"], correctAnswerIndex: 1 },
          { questionText: "Normal anxiety is best described as a future-oriented state that prepares an individual for what?", options: ["Deep relaxation", "Potential threats or challenges", "REM sleep", "Digesting a meal"], correctAnswerIndex: 1 }
      ]},
      { factId: "1-1-B", questions: [
          { questionText: "A key factor in diagnosing an anxiety disorder is when the anxiety lasts for more than:", options: ["One week", "One month", "Six months", "One year"], correctAnswerIndex: 2 },
          { questionText: "For anxiety to be considered a potential disorder, the duration is typically at least:", options: ["A few hours", "Several days", "Half a year", "Two years"], correctAnswerIndex: 2 },
          { questionText: "Which is a primary criterion for distinguishing an anxiety disorder from normal anxiety?", options: ["The feeling is unpleasant", "It occurs in the morning", "It is a response to a real threat", "It is persistent and impairs daily life"], correctAnswerIndex: 3 }
      ]}
    ]
  },
  {
    module: 1, order: 2, title: "The Amygdala: The Brain's Alarm System",
    content: "Deep within the brain's temporal lobes lies the amygdala, an almond-shaped set of neurons that serves as the primary hub for processing emotions, emotional behavior, and motivation. It is most known for its role in processing fear and forming fear-related memories. When you perceive a threat, the amygdala rapidly activates the 'fight or flight' response before your conscious mind has even had time to fully process the situation. In anxiety disorders, the amygdala can become hyper-responsive, triggering intense fear reactions to situations that are not genuinely threatening.",
    visuals: [{ type: 'image', url: 'images/amygdala.svg', caption: "A diagram showing the location of the amygdala." }],
    quiz: [
      { factId: "1-2-A", questions: [
          { questionText: "Where is the amygdala located?", options: ["In the frontal lobe", "In the temporal lobe", "In the cerebellum", "On the brain's surface"], correctAnswerIndex: 1 },
          { questionText: "The amygdala is an almond-shaped structure found within which part of the brain?", options: ["The Occipital Lobes", "The Brain Stem", "The Temporal Lobes", "The Parietal Lobes"], correctAnswerIndex: 2 },
          { questionText: "Which brain structure is primarily responsible for the rapid activation of the 'fight or flight' response?", options: ["The Prefrontal Cortex", "The Hippocampus", "The Amygdala", "The Thalamus"], correctAnswerIndex: 2 }
      ]},
      { factId: "1-2-B", questions: [
          { questionText: "A hyper-responsive amygdala is characteristic of what condition?", options: ["Normal stress response", "Anxiety disorders", "Memory formation", "Logical reasoning"], correctAnswerIndex: 1 },
          { questionText: "In anxiety disorders, the amygdala often shows what pattern of activity?", options: ["Reduced activity", "Hyper-responsiveness", "No change in activity", "Delayed activity"], correctAnswerIndex: 1 },
          { questionText: "An amygdala that triggers intense fear in non-threatening situations is described as being:", options: ["Under-active", "Atrophied", "Disconnected", "Hyper-responsive"], correctAnswerIndex: 3 }
      ]}
    ]
  },
  {
    module: 1, order: 3, title: 'Neurotransmitters: GABA and Glutamate',
    content: "The brain's activity is a delicate balancing act between 'go' and 'stop' signals, primarily managed by two key neurotransmitters. Glutamate is the main 'go' signal, an excitatory neurotransmitter that increases the likelihood a neuron will fire. It's essential for learning and memory. Conversely, GABA (gamma-aminobutyric acid) is the main 'stop' signal, an inhibitory neurotransmitter that calms the brain by reducing neuronal excitability. In many anxiety disorders, there is a functional deficit in GABAergic signaling or an excess of glutamatergic activity, leading to a state of hyperexcitability and a feeling of being 'on edge'.",
    visuals: [],
    quiz: [
      { factId: "1-3-A", questions: [
          { questionText: "Which neurotransmitter is described as 'inhibitory', helping to calm the nervous system?", options: ["Glutamate", "Dopamine", "Serotonin", "GABA"], correctAnswerIndex: 3 },
          { questionText: "The brain's primary 'stop' signal, which reduces neuronal excitability, is known as:", options: ["Glutamate", "Norepinephrine", "GABA", "Cortisol"], correctAnswerIndex: 2 },
          { questionText: "A functional deficit in which neurotransmitter system is linked to anxiety?", options: ["Glutamatergic", "Dopaminergic", "GABAergic", "Serotonergic"], correctAnswerIndex: 2 }
      ]},
      { factId: "1-3-B", questions: [
          { questionText: "An excess of which neurotransmitter can lead to a state of hyperexcitability?", options: ["GABA", "Glutamate", "Acetylcholine", "Endorphins"], correctAnswerIndex: 1 },
          { questionText: "The brain's main 'go' signal, essential for learning and memory, is:", options: ["GABA", "Serotonin", "Dopamine", "Glutamate"], correctAnswerIndex: 3 },
          { questionText: "A state of being 'on edge' in anxiety disorders can be caused by too much activity of which neurotransmitter?", options: ["GABA", "Glutamate", "Melatonin", "Oxytocin"], correctAnswerIndex: 1 }
      ]}
    ]
  },
  // =================================================================
  // Module 2: Brain Circuits
  // =================================================================
  {
    module: 2, order: 4, title: 'The Prefrontal Cortex (PFC): The "Brake"',
    content: "The Prefrontal Cortex, or PFC, is the brain's executive center, located at the very front of the brain. It's responsible for rational thinking, decision-making, and regulating emotional responses. Think of it as the 'brake' for the amygdala's 'gas pedal'. In a non-anxious brain, the PFC assesses the situation and can send signals to the amygdala to calm down if the threat is not real. In anxiety, the PFC can struggle to override the amygdala's alarm signals, weakening the 'brake' on anxious feelings.",
    visuals: [],
    quiz: [
      { factId: "2-4-A", questions: [
          { questionText: "What is the main role of the Prefrontal Cortex (PFC) in relation to anxiety?", options: ["Generate fear signals", "Regulate and apply 'brakes' to emotional responses", "Store emotional memories", "Release stress hormones"], correctAnswerIndex: 1 },
          { questionText: "Which part of the brain is considered the 'executive center' responsible for rational thinking?", options: ["Amygdala", "Hippocampus", "Prefrontal Cortex", "Cerebellum"], correctAnswerIndex: 2 },
          { questionText: "A weakened 'brake' on anxious feelings is associated with reduced control from the:", options: ["HPA Axis", "PFC", "Brain Stem", "Temporal Lobe"], correctAnswerIndex: 1 }
      ]},
      { factId: "2-4-B", questions: [
          { questionText: "The PFC acts as a 'brake' on which other brain structure's 'gas pedal'?", options: ["Hippocampus", "Cerebellum", "Amygdala", "Thalamus"], correctAnswerIndex: 2 },
          { questionText: "In a non-anxious brain, the PFC sends calming signals to the _____ when a threat is not real.", options: ["Hippocampus", "Amygdala", "Pituitary Gland", "Adrenal Gland"], correctAnswerIndex: 1 },
          { questionText: "The relationship between the PFC and the amygdala can be described as:", options: ["Gas pedal and gas pedal", "Brake and brake", "Brake and gas pedal", "Engine and wheels"], correctAnswerIndex: 2 }
      ]}
    ]
  },
  {
    module: 2, order: 5, title: 'The Hippocampus: Memory and Context',
    content: "The hippocampus is crucial for forming and retrieving memories. It helps the brain determine if a threat is real by comparing the current situation to past experiences, providing essential context. For example, if you see a coiled rope, your amygdala might initially react as if it's a snake. Your hippocampus quickly provides the context that it's just a rope in your garage, calming the fear response. A poorly functioning hippocampus might fail to provide the proper context, causing the amygdala to overreact to a situation that isn't actually dangerous.",
    visuals: [],
    quiz: [
      { factId: "2-5-A", questions: [
          { questionText: "How does the hippocampus help regulate fear responses?", options: ["By releasing calming neurotransmitters", "By providing context from past memories", "By physically stopping the amygdala", "By increasing heart rate"], correctAnswerIndex: 1 },
          { questionText: "The hippocampus's role in managing anxiety involves comparing a current situation to what?", options: ["Future possibilities", "Imaginary scenarios", "Past experiences", "Logical rules"], correctAnswerIndex: 2 },
          { questionText: "Which brain part provides context to help the PFC calm an amygdala response?", options: ["The Hippocampus", "The Cerebellum", "The Brain Stem", "The Thalamus"], correctAnswerIndex: 0 }
      ]},
      { factId: "2-5-B", questions: [
          { questionText: "A failure of the hippocampus to provide context can lead to an overreaction from the...?", options: ["PFC", "Amygdala", "Brain Stem", "Corpus Callosum"], correctAnswerIndex: 1 },
          { questionText: "If the hippocampus is not functioning well, what is a likely outcome in a stressful situation?", options: ["The PFC will take over completely", "The amygdala may overreact", "GABA levels will increase", "The situation will be ignored"], correctAnswerIndex: 1 },
          { questionText: "Seeing a rope and thinking it's a snake is an initial reaction from the amygdala. What structure provides the context that it's just a rope?", options: ["The Hippocampus", "The Adrenal Gland", "The Pituitary Gland", "The PFC"], correctAnswerIndex: 0 }
      ]}
    ]
  },
  {
    module: 2, order: 6, title: 'The HPA Axis: The Stress Response',
    content: "The Hypothalamic-Pituitary-Adrenal (HPA) Axis is the body's central stress response system. When the amygdala sounds the alarm, the hypothalamus releases a hormone that tells the pituitary gland to release another hormone, which in turn tells the adrenal glands to release cortisol, the primary stress hormone. This cascade prepares the body for 'fight or flight'. Chronic anxiety can lead to a dysregulated HPA Axis, causing prolonged high levels of cortisol, which can have negative effects on the body and brain over time.",
    visuals: [{ type: 'image', url: 'images/hpa_axis.svg', caption: "A diagram of the HPA Axis feedback loop." }],
    quiz: [
      { factId: "2-6-A", questions: [
          { questionText: "What is the final hormone released by the HPA Axis during the stress response?", options: ["Adrenaline", "GABA", "Cortisol", "Serotonin"], correctAnswerIndex: 2 },
          { questionText: "The HPA Axis culminates in the adrenal glands releasing what hormone?", options: ["ACTH", "CRH", "Cortisol", "Estrogen"], correctAnswerIndex: 2 },
          { questionText: "The body's primary stress hormone, released by the adrenal glands, is called:", options: ["Glutamate", "GABA", "Norepinephrine", "Cortisol"], correctAnswerIndex: 3 }
      ]},
      { factId: "2-6-B", questions: [
          { questionText: "What does 'HPA' in HPA Axis stand for?", options: ["Hippocampus-Pons-Adrenal", "Hypothalamic-Pituitary-Adrenal", "Hyper-Protective-Amygdala", "High-Performance-Anxiety"], correctAnswerIndex: 1 },
          { questionText: "Which three components make up the HPA axis?", options: ["Hippocampus, PFC, Amygdala", "Hypothalamus, Pituitary, Adrenal", "Heart, Pancreas, Arteries", "Hypothalamus, Pons, Amygdala"], correctAnswerIndex: 1 },
          { questionText: "Chronic anxiety can lead to a dysregulated state in which system?", options: ["The visual system", "The digestive system", "The HPA Axis", "The motor system"], correctAnswerIndex: 2 }
      ]}
    ]
  },
  // =================================================================
  // Module 3: Biochemistry
  // =================================================================
  {
    module: 3, order: 7, title: "Serotonin's Role in Mood",
    content: "Serotonin is a neurotransmitter famously associated with feelings of well-being and happiness. While its role is complex, it's understood that serotonin helps regulate mood, sleep, and appetite. In the synapse (the gap between neurons), serotonin is released from one neuron and binds to receptors on the next. After it has delivered its message, it is taken back up into the original neuron in a process called reuptake. In anxiety disorders, signaling of serotonin can be less efficient. This is why medications like SSRIs (Selective Serotonin Reuptake Inhibitors), which block this reuptake process, are often prescribed to increase the amount of available serotonin.",
    visuals: [],
    quiz: [
      { factId: "3-7-A", questions: [
          { questionText: "Medications known as SSRIs are designed to primarily affect which neurotransmitter?", options: ["Dopamine", "GABA", "Serotonin", "Glutamate"], correctAnswerIndex: 2 },
          { questionText: "SSRIs work by blocking the reuptake of which chemical messenger?", options: ["Cortisol", "Serotonin", "Norepinephrine", "Dopamine"], correctAnswerIndex: 1 },
          { questionText: "Inefficient signaling of which neurotransmitter is associated with anxiety and often targeted by medications like SSRIs?", options: ["Glutamate", "GABA", "Serotonin", "Acetylcholine"], correctAnswerIndex: 2 }
      ]},
      { factId: "3-7-B", questions: [
          { questionText: "What is the process of a neurotransmitter being taken back up into the neuron that released it?", options: ["Receptor Binding", "Reuptake", "Re-synthesis", "Reactivation"], correctAnswerIndex: 1 },
          { questionText: "SSRIs increase the amount of available serotonin in the synapse by inhibiting what process?", options: ["Release", "Binding", "Reuptake", "Creation"], correctAnswerIndex: 2 },
          { questionText: "The reabsorption of a neurotransmitter by the sending neuron is called:", options: ["Synaptic firing", "Action potential", "Reuptake", "Neurogenesis"], correctAnswerIndex: 2 }
      ]}
    ]
  },
  {
    module: 3, order: 8, title: 'Norepinephrine: Fight or Flight',
    content: "Norepinephrine is both a hormone and a neurotransmitter involved in the 'fight or flight' response. It increases heart rate, blood pressure, and alertness, preparing the body for action. In people with anxiety, the system regulating norepinephrine can be overly sensitive. This contributes to many of the physical symptoms of anxiety, such as a racing heart, sweating, restlessness, and trembling. It's the chemical messenger that makes you feel physically 'on alert'.",
    visuals: [],
    quiz: [
      { factId: "3-8-A", questions: [
          { questionText: "Norepinephrine is most closely associated with which response?", options: ["Rest and digest", "Sleep and wake cycles", "Fight or flight", "Memory formation"], correctAnswerIndex: 2 },
          { questionText: "Which neurotransmitter is central to preparing the body for action by increasing heart rate and alertness?", options: ["Serotonin", "GABA", "Norepinephrine", "Dopamine"], correctAnswerIndex: 2 },
          { questionText: "The 'fight or flight' response is driven by which chemical messenger?", options: ["Melatonin", "Norepinephrine", "Oxytocin", "Endorphin"], correctAnswerIndex: 1 }
      ]},
      { factId: "3-8-B", questions: [
          { questionText: "An overly sensitive norepinephrine system can cause what kind of symptoms?", options: ["Feelings of calm", "Physical symptoms like a racing heart", "Improved digestion", "Deep sleep"], correctAnswerIndex: 1 },
          { questionText: "A racing heart and restlessness in anxiety are often caused by an overactive system of which neurotransmitter?", options: ["Serotonin", "GABA", "Norepinephrine", "Dopamine"], correctAnswerIndex: 2 },
          { questionText: "Which of the following is a physical symptom of an overactive norepinephrine system?", options: ["Slowed breathing", "Reduced alertness", "Sweating and trembling", "Feeling tired"], correctAnswerIndex: 2 }
      ]}
    ]
  },
  {
    module: 3, order: 9, title: 'Dopamine: Motivation and Reward',
    content: "Dopamine is a neurotransmitter central to the brain's reward and motivation system. While often linked to pleasure, its role in anxiety is more nuanced. Dopamine drives us to seek rewards and avoid punishments. In anxiety, this system can become dysregulated. For example, the motivation to avoid a feared situation (like public speaking) can be very strong, and successfully avoiding it can provide a brief, dopamine-driven sense of relief. This reinforces the avoidance behavior, making the anxiety worse in the long run.",
    visuals: [],
    quiz: [
      { factId: "3-9-A", questions: [
          { questionText: "Dopamine is primarily central to the brain's system for:", options: ["Fear processing", "Sleep regulation", "Reward and motivation", "Breathing control"], correctAnswerIndex: 2 },
          { questionText: "Which neurotransmitter is most associated with motivation and seeking rewards?", options: ["GABA", "Dopamine", "Serotonin", "Cortisol"], correctAnswerIndex: 1 },
          { questionText: "The brain's reward system is heavily reliant on which neurotransmitter?", options: ["Dopamine", "Norepinephrine", "Glutamate", "GABA"], correctAnswerIndex: 0 }
      ]},
      { factId: "3-9-B", questions: [
          { questionText: "How can dopamine reinforce anxiety?", options: ["By directly causing fear", "By providing relief when a feared situation is avoided", "By calming the amygdala", "By increasing serotonin levels"], correctAnswerIndex: 1 },
          { questionText: "Avoiding a feared situation can provide a sense of relief, which is a reward driven by:", options: ["Serotonin", "GABA", "Dopamine", "Cortisol"], correctAnswerIndex: 2 },
          { questionText: "The reinforcement of avoidance behavior in anxiety is linked to which neurotransmitter's role in the reward system?", options: ["Dopamine", "Norepinephrine", "Serotonin", "GABA"], correctAnswerIndex: 0 }
      ]}
    ]
  },
  // =================================================================
  // Module 4: Treatment
  // =================================================================
  {
    module: 4, order: 10, title: 'Neuroplasticity: The Brain Can Change',
    content: "Neuroplasticity is the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. This principle, often summarized as 'neurons that fire together, wire together,' is the biological basis for how we learn and adapt. It means that the brain's anxiety circuits are not fixed. Just as pathways can be strengthened to create anxious responses, they can also be weakened and replaced with new, healthier pathways through experience and practice.",
    visuals: [],
    quiz: [
      { factId: "4-10-A", questions: [
          { questionText: "What is neuroplasticity?", options: ["The brain's fixed structure", "The study of brain neurons", "The brain's ability to change and form new connections", "A type of brain cell"], correctAnswerIndex: 2 },
          { questionText: "The brain's ability to reorganize and adapt throughout life is known as:", options: ["Neurogenesis", "Neuroplasticity", "Synaptic Pruning", "Neural Rigidity"], correctAnswerIndex: 1 },
          { questionText: "Which concept explains why the brain's anxiety circuits are not fixed and can be rewired?", options: ["Genetic determinism", "Neuroplasticity", "The HPA Axis", "The 'fight or flight' response"], correctAnswerIndex: 1 }
      ]},
      { factId: "4-10-B", questions: [
          { questionText: "The phrase 'neurons that fire together, wire together' describes what concept?", options: ["Neurogenesis", "Synaptic pruning", "Neuroplasticity", "Action potential"], correctAnswerIndex: 2 },
          { questionText: "What principle is the biological basis for how we learn and adapt?", options: ["Homeostasis", "Neuroplasticity", "Genetic predisposition", "The All-or-None Law"], correctAnswerIndex: 1 },
          { questionText: "The strengthening of neural pathways through repeated use is a key aspect of:", options: ["Neuroplasticity", "The refractory period", "Myelination", "The amygdala's function"], correctAnswerIndex: 0 }
      ]}
    ]
  },
  {
    module: 4, order: 11, title: 'How Therapy Rewires the Brain',
    content: "Therapies like Cognitive-Behavioral Therapy (CBT) are a practical application of neuroplasticity. CBT involves identifying and challenging anxious thought patterns (cognitive restructuring) and gradually facing feared situations (exposure therapy). By repeatedly challenging anxious thoughts and proving them wrong, or by facing a feared situation without a negative outcome, a person can strengthen the PFC's control over the amygdala. This effectively 'rewires' the brain to be less reactive to triggers, creating new, non-anxious neural pathways.",
    visuals: [],
    quiz: [
      { factId: "4-11-A", questions: [
          { questionText: "Therapy helps 'rewire' the brain by strengthening the control of which part of the brain over the amygdala?", options: ["Hippocampus", "HPA Axis", "Prefrontal Cortex (PFC)", "Cerebellum"], correctAnswerIndex: 2 },
          { questionText: "Cognitive-Behavioral Therapy (CBT) leverages neuroplasticity to increase the regulatory control of the:", options: ["Amygdala over the PFC", "PFC over the amygdala", "Hippocampus over the HPA Axis", "HPA Axis over the hippocampus"], correctAnswerIndex: 1 },
          { questionText: "Which therapy is mentioned as a practical application of neuroplasticity for rewiring the brain?", options: ["Psychoanalysis", "Humanistic Therapy", "Cognitive-Behavioral Therapy (CBT)", "Gestalt Therapy"], correctAnswerIndex: 2 }
      ]},
      { factId: "4-11-B", questions: [
          { questionText: "What is the therapeutic technique of gradually facing feared situations called?", options: ["Cognitive Restructuring", "Psychoanalysis", "Exposure Therapy", "Mindfulness"], correctAnswerIndex: 2 },
          { questionText: "Challenging anxious thought patterns is a technique in CBT known as:", options: ["Exposure Therapy", "Cognitive Restructuring", "Systematic Desensitization", "Aversion Therapy"], correctAnswerIndex: 1 },
          { questionText: "CBT works by creating new, non-anxious neural pathways, which is an example of:", options: ["Genetic modification", "The 'fight or flight' response", "Neuroplasticity in action", "Hormonal regulation"], correctAnswerIndex: 2 }
      ]}
    ]
  },
  {
    module: 4, order: 12, title: 'Pharmacotherapy: SSRIs and Benzodiazepines',
    content: "Pharmacotherapy involves using medication to treat disorders. SSRIs (Selective Serotonin Reuptake Inhibitors) work by increasing the amount of available serotonin in the brain over time, helping to regulate mood and anxiety in the long term. In contrast, Benzodiazepines work much more quickly by enhancing the effect of GABA, the brain's primary inhibitory neurotransmitter. This produces a rapid, short-term calming effect, but they can be habit-forming and are typically not recommended for long-term use.",
    visuals: [],
    quiz: [
      { factId: "4-12-A", questions: [
          { questionText: "Which medication class works by enhancing the effect of GABA for a rapid calming effect?", options: ["SSRIs", "Beta-blockers", "Benzodiazepines", "Antihistamines"], correctAnswerIndex: 2 },
          { questionText: "Benzodiazepines produce a calming effect by boosting the action of which neurotransmitter?", options: ["Glutamate", "Serotonin", "Dopamine", "GABA"], correctAnswerIndex: 3 },
          { questionText: "For rapid, short-term relief from anxiety, which class of medication is often used?", options: ["SSRIs", "Benzodiazepines", "Tricyclic Antidepressants", "MAOIs"], correctAnswerIndex: 1 }
      ]},
      { factId: "4-12-B", questions: [
          { questionText: "Which medication is generally preferred for long-term management of anxiety?", options: ["Benzodiazepines, because they work quickly", "SSRIs, because they work on serotonin levels over time", "Both are equally preferred for long-term use", "Neither are used for long-term management"], correctAnswerIndex: 1 },
          { questionText: "SSRIs are a long-term treatment that works by increasing the availability of:", options: ["GABA", "Dopamine", "Serotonin", "Norepinephrine"], correctAnswerIndex: 2 },
          { questionText: "Why are Benzodiazepines typically not recommended for long-term use?", options: ["They are not effective", "They can be habit-forming", "They work too slowly", "They increase glutamate levels"], correctAnswerIndex: 1 }
      ]}
    ]
  }
];

const seedDB = async () => {
  try {
    await Lesson.deleteMany({});
    await Lesson.insertMany(lessons);
    console.log('Database seeded successfully with all 12 complete lessons.');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

module.exports = seedDB;
