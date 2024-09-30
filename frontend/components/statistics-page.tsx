"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { RefreshCw, Share2 } from 'lucide-react'

const globalAverageData = [
  { category: "학습 계획", average: 3.2, user: 4 },
  { category: "집중력", average: 3.5, user: 3 },
  { category: "시간 관리", average: 3.0, user: 3.5 },
  { category: "복습 빈도", average: 2.8, user: 4.5 },
  { category: "자기 동기부여", average: 3.3, user: 3.8 },
]

const userProgressData = [
  { month: "1월", score: 3.2 },
  { month: "2월", score: 3.5 },
  { month: "3월", score: 3.8 },
  { month: "4월", score: 4.0 },
  { month: "5월", score: 4.2 },
  { month: "6월", score: 4.5 },
]

export default function StatisticsPage() {
  const handleRetake = () => {
    // 테스트 다시 시작 로직
    console.log("Retaking the test")
  }

  const handleShare = () => {
    // 공유 로직
    console.log("Sharing results")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">러닝 습관 통계</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">글로벌 평균 vs 나의 점수</CardTitle>
              <CardDescription>각 카테고리별 비교</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={globalAverageData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="average" fill="#8884d8" name="글로벌 평균" />
                  <Bar dataKey="user" fill="#82ca9d" name="나의 점수" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800">2024년 나의 학습 습관 점수 추이</CardTitle>
              <CardDescription>월별 점수 변화</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userProgressData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={2} name="점수" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-800">상세 통계</CardTitle>
            <CardDescription>카테고리별 점수 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {globalAverageData.map((item) => (
                <div key={item.category} className="flex items-center">
                  <div className="w-1/3 font-medium text-gray-700">{item.category}</div>
                  <div className="w-2/3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div
                          className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                          style={{ width: `${(item.user / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-purple-800">{item.user.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center space-x-4">
          <Button onClick={handleRetake} className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="mr-2 h-4 w-4" /> 다시하기
          </Button>
          <Button onClick={handleShare} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Share2 className="mr-2 h-4 w-4" /> 공유하기
          </Button>
        </div>
      </div>

      <footer className="bg-gray-100 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 러닝 습관 테스트. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-600 hover:underline">이용약관</a> | 
            <a href="#" className="text-blue-600 hover:underline ml-2">개인정보처리방침</a>
          </p>
        </div>
      </footer>
    </div>
  )
}