"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip} from "recharts";

const globalAverageData = [
  {category: "학습 계획", average: 3.2, user: 4},
  {category: "집중력", average: 3.5, user: 3},
  {category: "시간 관리", average: 3.0, user: 3.5},
  {category: "복습 빈도", average: 2.8, user: 4.5},
  {category: "자기 동기부여", average: 3.3, user: 3.8},
];

const userProgressData = [
  {month: "1월", score: 3.2},
  {month: "2월", score: 3.5},
  {month: "3월", score: 3.8},
  {month: "4월", score: 4.0},
  {month: "5월", score: 4.2},
  {month: "6월", score: 4.5},
];

export default function StatisticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">러닝 습관 통계</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>글로벌 평균 vs 나의 점수</CardTitle>
            <CardDescription>각 카테고리별 비교</CardDescription>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>2024년 나의 학습 습관 점수 추이</CardTitle>
            <CardDescription>월별 점수 변화</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userProgressData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8884d8" name="점수" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>상세 통계</CardTitle>
          <CardDescription>카테고리별 점수 분석</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {globalAverageData.map((item) => (
              <div key={item.category} className="flex items-center">
                <div className="w-1/3 font-medium">{item.category}</div>
                <div className="w-2/3">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{width: `${(item.user / 5) * 100}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{item.user.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
