import React, { useState } from "react";
import "./App.css";

function Questions(props) {
  let [id, setId] = useState(0);
  let [selected, setSelected] = useState(null);
  let [history, setHistory] = useState([]);

  function nextClick() {
    if (selected === null) {
      return;
    }
    if (id + 1 > quizQuestions.length-1) {
      props.setAppState("result");
      props.setResults(history);
      return;
    }

    setHistory([...history, selected]);
    setSelected(null);
    setId(id + 1);
  }

  const quizQuestions = [
    {
      id: 0,
      question: "How is your hair?",
      options: [
        { label: "Thick, oily, curly", value: "c" },
        { label: "Soft, fine, tends to be red/blond", value: "b" },
        { label: "Dry, frizzy, brittle", value: "a" },
      ],
    },
    {
      id: 1,
      question: "How are your teeth?",
      options: [
        { label: "Strong, white, well-shaped ", value: "c" },
        { label: "Medium-sized, yellowish, soft gums ", value: "b" },
        { label: "Crooked, gapped, sensitive gums ", value: "a" },
      ],
    },
    {
      id: 2,
      question: "How do your eyes look?",
      options: [
        { label: "Big, soft, thick eyelashes ", value: "c" },
        { label: "Medium-sized, sharp gaze", value: "b" },
        { label: "Small, active, quick-moving", value: "a" },
      ],
    },
    {
      id: 3,
      question: "How is your appetite?",
      options: [
        { label: "Slow but steady", value: "c" },
        { label: "Strong and regular ", value: "b" },
        { label: "Unpredictable and light", value: "a" },
      ],
    },
    {
      id: 4,
      question: "How is your body frame?",
      options: [
        { label: "Big and strong", value: "c" },
        { label: "Medium and balanced ", value: "b" },
        { label: "Thin and light ", value: "a" },
      ],
    },
    {
      id: 5,
      question: "How thirsty do you feel?",
      options: [
        { label: "Not very thirsty ", value: "c" },
        { label: "It varies ", value: "a" },
        { label: "Very thirsty ", value: "b" },
      ],
    },
    {
      id: 6,
      question: "Which health issues do you face most?",
      options: [
        { label: "Joint pain, insomnia, anxiety", value: "a" },
        { label: "Weight gain, sinus issues, mucus buildup", value: "c" },
        { label: "Acid reflux, skin rashes, anger issues", value: "b" },
      ],
    },
    {
      id: 7,
      question: "How do your muscles feel?",
      options: [
        { label: "Soft and well-shaped", value: "c" },
        { label: "Weak and stiff", value: "a" },
        { label: "Strong and toned ", value: "b" },
      ],
    },
    {
      id: 8,
      question: "What best describes your personality?",
      options: [
        { label: "Calm and patient ", value: "c" },
        { label: "Confident and determined ", value: "b" },
        { label: "Energetic and curious ", value: "a" },
      ],
    },
    {
      id: 9,
      question: "Which emotion do you experience the most?",
      options: [
        { label: "Irritable and impatient ", value: "b" },
        { label: "Nervous and overthinking ", value: "a" },
        { label: "Possessive and attached", value: "c" },
      ],
    },
    {
      id: 10,
      question: "How do you approach beliefs or spirituality?",
      options: [
        { label: "I have steady beliefs ", value: "c" },
        { label: "I am passionate but intense ", value: "b" },
        { label: "I question and explore a lot ", value: "a" },
      ],
    },
    {
      id: 11,
      question: "How is your memory?",
      options: [
        { label: "Good but forgets quickly ", value: "a" },
        { label: "Learns slowly but remembers well ", value: "c" },
        { label: "Sharp but forgets old things ", value: "b" },
      ],
    },
    {
      id: 12,
      question: "How do you sleep?",
      options: [
        { label: "Light sleep, wake up easily ", value: "a" },
        { label: "Long and deep sleep ", value: "c" },
        { label: "Short but refreshing sleep", value: "b" },
      ],
    },
    {
      id: 13,
      question: "Which flavors do you prefer?",
      options: [
        { label: "Sweet, bitter, tart ", value: "c" },
        { label: "Spicy, bitter, tart ", value: "b" },
        { label: "Sweet, salty, sour", value: "a" },
      ],
    },
  ];

  let currentQuestion = quizQuestions.find((item) => item.id === id);

  return (
    <div className="Questions">
      <div className="container">
        <section className="question-number">
          <p>
            Question {id + 1} of {quizQuestions.length}
          </p>
        </section>
        <section className="Question-btns">
          <h3 className="Question-1">{currentQuestion.question}</h3>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={
                  selected === option.value
                    ? "Question-btn-selected Question-btn"
                    : "Question-btn"
                }
                onClick={() => setSelected(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
        <section>
          <button className="next-btn" onClick={nextClick}>
            Next Question
          </button>
        </section>
      </div>
    </div>
  );
}

export default Questions;
