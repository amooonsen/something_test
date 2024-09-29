import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-700">러닝 습관 테스트</CardTitle>
          <CardDescription className="text-lg mt-2">
            당신의 학습 습관을 분석하고 개선해보세요
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-blue-700" />
          </div>
        </CardContent>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            53개의 질문을 통해 당신의 학습 습관을 진단하고, 
            개선을 위한 맞춤형 조언을 받아보세요.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/test">
              시작하기 <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/statistics">
              통계보기 <BarChart className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}