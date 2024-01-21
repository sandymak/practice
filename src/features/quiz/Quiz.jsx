import React, { useEffect, useState } from 'react'

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz'

export default function Quiz() {
    const [questions, setQuestions] = useState(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [chosenAnswers, setChosenAnswers] = useState([])

    // LOADING ASYNC DATA
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch(QUIZ_API_BASE_URL);
    //     const jsonResponse = await response.json();
    //     setQuestions(jsonResponse)
    //   };
    //   fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const jsonResponse = [
                {
                    question:
                        'Which of the following is a built-in React hook?',
                    answers: [
                        'useState',
                        'useFetch',
                        'useLocalStorage',
                        'useTimeout',
                    ],
                    correctAnswer: 0,
                },
                {
                    question:
                        'What is the correct order of these lifecycle phases?',
                    answers: [
                        'unmount, update, mount',
                        'mount, update, unmount',
                        'update, mount, unmount',
                        'mount, unmount, update',
                    ],
                    correctAnswer: 1,
                },
                {
                    question: 'What is reconciliation?',
                    answers: [
                        'The process of converting the virtual DOM to DOM nodes.',
                        'The process of combining two virtual DOM trees into one.',
                        'The algorithm used by React to determine which state updates to batch together.',
                        'The algorithm used by React to determine which elements changed between renders.',
                    ],
                    correctAnswer: 3,
                },
            ]
            setQuestions(jsonResponse)
        }
        fetchData()
    }, [])

    if (questions === null) return <h1>No Quiz Available</h1>

    const currentQuestion = questions[currentQuestionIndex]
    const isFirstQuestion = currentQuestionIndex === 0
    const isLastQuestion = currentQuestionIndex === questions.length - 1

    const handleAnswerSelection = (answerIndex) => {
        if (chosenAnswers[currentQuestionIndex] == undefined) {
            const newChosenAnswers = [...chosenAnswers]
            newChosenAnswers[currentQuestionIndex] = answerIndex
            setChosenAnswers(newChosenAnswers)
        }
    }

    return (
        <>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.answers.map((answer, answerIndex) => {
                const chosenAnswer = chosenAnswers[currentQuestionIndex]
                const getAnswerClass = () => {
                    if (
                        answerIndex === chosenAnswer &&
                        chosenAnswer === currentQuestion.correctAnswer
                    )
                        return 'answer correct'
                    if (
                        answerIndex === chosenAnswer &&
                        chosenAnswer !== currentQuestion.correctAnswer
                    )
                        return 'answer incorrect'
                    return 'answer'
                }
                return (
                    <h2
                        key={answerIndex}
                        className={getAnswerClass()}
                        onClick={() => handleAnswerSelection(answerIndex)}
                    >
                        {answer}
                    </h2>
                )
            })}
            <button
                disabled={isFirstQuestion}
                onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
            >
                Back
            </button>
            <button
                disabled={
                    isLastQuestion ||
                    chosenAnswers[currentQuestionIndex] === undefined
                }
                onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
            >
                Next
            </button>
        </>
    )
}
