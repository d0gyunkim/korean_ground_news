import Link from "next/link"
import { BellIcon, SearchIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              K-Ground News
            </Link>
            <nav className="hidden space-x-6 md:flex">
              <Link href="/" className="font-medium text-gray-900">
                홈
              </Link>
              <Link href="/trending" className="font-medium text-gray-500 hover:text-gray-900">
                트렌딩
              </Link>
              <Link href="/politics" className="font-medium text-gray-500 hover:text-gray-900">
                정치
              </Link>
              <Link href="/economy" className="font-medium text-gray-500 hover:text-gray-900">
                경제
              </Link>
              <Link href="/society" className="font-medium text-gray-500 hover:text-gray-900">
                사회
              </Link>
              <Link href="/international" className="font-medium text-gray-500 hover:text-gray-900">
                국제
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative rounded-full bg-gray-100 px-3 py-2">
              <div className="flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="뉴스 검색..."
                  className="ml-2 w-40 bg-transparent text-sm focus:outline-none md:w-64"
                />
              </div>
            </div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <BellIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">오늘의 주요 이슈</h1>
          <div className="flex space-x-2">
            <button className="rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white">전체</button>
            <button className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200">
              정치
            </button>
            <button className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200">
              경제
            </button>
            <button className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200">
              사회
            </button>
          </div>
        </div>

        {/* News Card */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">정치</span>
              <span className="text-sm text-gray-500">3시간 전 업데이트</span>
            </div>
            <h2 className="mb-2 text-xl font-bold">대통령, "개헌 논의 시작할 때" 발언에 정치권 반응 엇갈려</h2>
            <p className="mb-6 text-gray-600">
              대통령이 개헌 논의 필요성을 언급하며 정치권에서 찬반 의견이 분분하게 나오고 있습니다.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Conservative Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="font-medium text-blue-700">보수 성향</span>
                  <span className="ml-auto text-sm text-gray-500">3개 언론사</span>
                </div>

                <NewsItem source="조선일보" title={"대통령, 시대에 맞는 개헌 필요성 강조... 여야 협력 촉구"} />
                <NewsItem source="동아일보" title={"개헌 논의, 국가 경쟁력 강화 위한 필수 과제"} />
                <NewsItem source="중앙일보" title={"대통령 개헌 발언, 정치권 '시기상조' vs '필요한 논의'"} />
              </div>

              {/* Centrist Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="font-medium text-gray-700">중도 성향</span>
                  <span className="ml-auto text-sm text-gray-500">4개 언론사</span>
                </div>

                <NewsItem source="중앙일보" title={"대통령 개헌 발언, 정치권 '시기상조' vs '필요한 논의'"} />
                <NewsItem source="JTBC" title={"개헌 논의, 여야 입장차 뚜렷... 국민 여론은?"} />
                <NewsItem source="MBC" title={"개헌, 권력구조 개편 vs 기본권 강화 논쟁 재점화"} />
                <NewsItem source="SBS" title={"대통령 개헌 제안, 정치권 반응과 향후 전망"} />
              </div>

              {/* Progressive Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="font-medium text-red-700">진보 성향</span>
                  <span className="ml-auto text-sm text-gray-500">3개 언론사</span>
                </div>

                <NewsItem source="한겨레" title={"대통령 개헌 발언, '정치적 의도' 의심 커져"} />
                <NewsItem source="경향신문" title={"야당 '개헌 논의는 민생 외면 위한 정치적 전략'"} />
                <NewsItem source="오마이뉴스" title={"개헌 논의, 국민 참여 보장해야"} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">관련 기사 총 24개</span>
                <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
                  미디어 편향도 보기
                </button>
              </div>
              <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
                전체 보기
              </button>
            </div>
          </div>
        </div>

        {/* Second News Card */}
        <div className="mt-6 overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">경제</span>
              <span className="text-sm text-gray-500">5시간 전 업데이트</span>
            </div>
            <h2 className="mb-2 text-xl font-bold">금리 인하 가능성에 시장 반응... 전문가 "하반기 전망 밝아"</h2>
            <p className="mb-6 text-gray-600">
              한국은행의 금리 인하 가능성이 높아지면서 주식 및 부동산 시장에 긍정적 영향이 예상됩니다.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Conservative Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="font-medium text-blue-700">보수 성향</span>
                  <span className="ml-auto text-sm text-gray-500">3개 언론사</span>
                </div>

                <NewsItem source="매일경제" title={"금리 인하, 경기 회복 신호탄 될 것"} />
                <NewsItem source="한국경제" title={"금융시장, 금리 인하 기대감에 상승세"} />
                <NewsItem source="서울경제" title={'전문가들 "하반기 금리 인하 가능성 높아"'} />
              </div>

              {/* Centrist Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="font-medium text-gray-700">중도 성향</span>
                  <span className="ml-auto text-sm text-gray-500">3개 언론사</span>
                </div>

                <NewsItem source="연합뉴스" title={"한은, 금리 인하 시기 저울질... 물가 안정 관건"} />
                <NewsItem source="이데일리" title={"금리 인하 기대감 vs 물가 불안... 한은 딜레마"} />
                <NewsItem source="머니투데이" title={"금리 인하 시기, 미 연준 결정이 변수"} />
              </div>

              {/* Progressive Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="font-medium text-red-700">진보 성향</span>
                  <span className="ml-auto text-sm text-gray-500">3개 언론사</span>
                </div>

                <NewsItem source="경향신문" title={"금리 인하, 서민 가계부채 부담 완화될까"} />
                <NewsItem source="한겨레" title={"금리 인하 효과, 자산가에게만 혜택 우려"} />
                <NewsItem source="프레시안" title={"금융 취약계층 위한 추가 대책 필요"} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">관련 기사 총 18개</span>
                <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
                  미디어 편향도 보기
                </button>
              </div>
              <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
                전체 보기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

interface NewsItemProps {
  source: string
  title: string
}

function NewsItem({ source, title }: NewsItemProps) {
  return (
    <div className="border-t pt-3">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        <span className="text-sm font-medium">{source}</span>
      </div>
      <p className="mt-2 text-sm">{title}</p>
    </div>
  )
}
