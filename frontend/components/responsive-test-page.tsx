"use client";

import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {ChevronLeft, ChevronRight} from "lucide-react";

export function ResponsiveTestPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(53).fill(null));
  const [progress, setProgress] = useState(0);

  const questions = [
    "나는 새로운 학습 방법을 시도하는 것을 즐긴다.",
    "나는 학습 목표를 명확히 설정한다.",
    "나는 학습 계획을 세우고 이를 따른다.",
    "나는 학습 중 어려움을 만나면 포기하지 않고 해결책을 찾는다.",
    "나는 정기적으로 학습 진도를 점검한다.",
    // ... 나머지 48개 질문
  ];

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  useEffect(() => {
    const answeredQuestions = answers.filter((answer) => answer !== null).length;
    setProgress((answeredQuestions / questions.length) * 100);
  }, [answers, questions.length]);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const renderQuestions = () => {
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return questions.slice(startIndex, endIndex).map((question, index) => (
      <Card key={startIndex + index} className="mb-4">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg font-medium text-gray-700">
            {question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center px-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <Button
                key={value}
                variant={answers[startIndex + index] === value ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-200 ease-in-out transform hover:scale-110"
                onClick={() => handleAnswer(startIndex + index, value)}
              >
                {value}
              </Button>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-500">
            <span>전혀 아니다</span>
            <span>매우 그렇다</span>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        러닝 습관 테스트
      </h1>
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
        <p className="text-right text-sm text-gray-500 mt-1">{Math.round(progress)}% 완료</p>
      </div>
      {renderQuestions()}
      <CardFooter className="flex justify-between mt-8">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          variant="outline"
          size="sm"
          className="w-24 sm:w-32"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> 이전
        </Button>
        <span className="text-sm sm:text-lg font-medium text-gray-700">
          {currentPage + 1} / {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
          disabled={currentPage === totalPages - 1}
          variant="default"
          size="sm"
          className="w-24 sm:w-32"
        >
          다음 <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </div>
  );
}
