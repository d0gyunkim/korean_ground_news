import Link from "next/link"
import { ArrowLeftIcon, ShareIcon } from "lucide-react"

export default function IssuePage({ params }: { params: { id: string } }) {
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
              <Link href="/" className="font-medium text-gray-500 hover:text-gray-900">
                홈
              </Link>
              <Link href="/trending" className="font-medium text-gray-500 hover:text-gray-900">
                트렌딩
              </Link>
              <Link href="/politics" className="font-medium text-gray-900">
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
            <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
              <ArrowLeftIcon className="mr-1 h-4 w-4" />
              뒤로 가기
            </Link>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <ShareIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center">
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">정치</span>
            <span className="ml-2 text-sm text-gray-500">2025년 5월 9일</span>
          </div>
          <h1 className="text-3xl font-bold">대통령, "개헌 논의 시작할 때" 발언에 정치권 반응 엇갈려</h1>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <p className="mb-6 text-lg text-gray-700">
              대통령이 개헌 논의 필요성을 언급하며 정치권에서 찬반 의견이 분분하게 나오고 있습니다. 여당은 시대 변화에
              맞는 헌법 개정이 필요하다는 입장인 반면, 야당은 정치적 의도가 있다며 반대하고 있습니다.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <h2 className="text-lg font-bold text-blue-700">보수 언론 관점</h2>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm text-gray-700">
                    "대통령의 개헌 제안은 시대 변화에 맞는 적절한 제안이다. 30년이 넘은 현행 헌법은 급변하는 사회 환경과
                    국제 정세에 대응하기 어렵다. 여야가 정치적 이해관계를 떠나 국가 발전을 위해 협력해야 한다."
                  </p>
                  <p className="mt-2 text-xs text-gray-500">- 조선일보 사설 중</p>
                </div>

                <div className="space-y-4">
                  <DetailedNewsItem
                    source="조선일보"
                    title={"대통령, 시대에 맞는 개헌 필요성 강조... 여야 협력 촉구"}
                    summary="대통령이 개헌 논의의 필요성을 강조하며 여야 정치권의 협력을 촉구했다. 급변하는 사회 환경과 국제 정세에 대응하기 위해 30년 넘은 헌법의 개정이 필요하다는 입장이다."
                  />
                  <DetailedNewsItem
                    source="동아일보"
                    title={"개헌 논의, 국가 경쟁력 강화 위한 필수 과제"}
                    summary="개헌 논의는 국가 경쟁력 강화를 위한 필수 과제라는 분석이 나왔다. 전문가들은 현행 헌법의 한계를 지적하며 시대에 맞는 개헌이 필요하다고 강조했다."
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                  <h2 className="text-lg font-bold text-gray-700">중도 언론 관점</h2>
                </div>

                <div className="rounded-lg bg-gray-100 p-4">
                  <p className="text-sm text-gray-700">
                    "개헌 논의 자체는 필요하지만, 시기와 방법에 대한 사회적 합의가 선행되어야 한다. 정치권의 이해관계가
                    아닌 국민의 필요에 맞는 개헌이 되어야 하며, 충분한 논의 과정이 보장되어야 한다."
                  </p>
                  <p className="mt-2 text-xs text-gray-500">- 중앙일보 사설 중</p>
                </div>

                <div className="space-y-4">
                  <DetailedNewsItem
                    source="중앙일보"
                    title={"대통령 개헌 발언, 정치권 '시기상조' vs '필요한 논의'"}
                    summary="대통령의 개헌 발언에 대해 정치권에서는 '시기상조'라는 의견과 '필요한 논의'라는 의견이 엇갈리고 있다. 개헌의 필요성에는 공감하지만 시기와 방법에 대한 이견이 존재한다."
                  />
                  <DetailedNewsItem
                    source="JTBC"
                    title={"개헌 논의, 여야 입장차 뚜렷... 국민 여론은?"}
                    summary="개헌 논의에 대한 여야의 입장차가 뚜렷한 가운데, 국민 여론은 어떨지 관심이 모아진다. 최근 여론조사에 따르면 개헌 필요성에는 공감하지만 정치적 의도에 대한 우려도 있는 것으로 나타났다."
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <h2 className="text-lg font-bold text-red-700">진보 언론 관점</h2>
                </div>

                <div className="rounded-lg bg-red-50 p-4">
                  <p className="text-sm text-gray-700">
                    {
                      "대통령의 개헌 제안은 정치적 의도가 의심된다. 현재 민생 문제와 경제 위기가 심각한 상황에서 개헌 논의는 국민의 관심을 다른 곳으로 돌리려는 시도로 보인다. 진정한 개헌은 국민 참여가 보장되어야 한다."
                    }
                  </p>
                  <p className="mt-2 text-xs text-gray-500">- 한겨레 사설 중</p>
                </div>

                <div className="space-y-4">
                  <DetailedNewsItem
                    source="한겨레"
                    title={"대통령 개헌 발언, '정치적 의도' 의심 커져"}
                    summary="대통령의 개헌 발언에 대해 정치적 의도가 있다는 의심이 커지고 있다. 야당과 시민단체는 현재의 민생 위기와 경제 문제를 외면하고 정치적 이슈로 관심을 돌리려는 시도라고 비판했다."
                  />
                  <DetailedNewsItem
                    source="경향신문"
                    title={"야당 '개헌 논의는 민생 외면 위한 정치적 전략'"}
                    summary="야당은 개헌 논의가 민생을 외면하기 위한 정치적 전략이라고 비판했다. 현재 경제 위기와 민생 문제 해결이 우선되어야 한다는 입장이다."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="mb-4 text-lg font-bold">관련 이슈</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <RelatedIssueCard title="여야 원내대표, 개헌 논의 관련 입장차 확인" category="정치" />
                <RelatedIssueCard title="개헌 논의 역사, 과거 시도와 실패 원인은?" category="정치" />
                <RelatedIssueCard title="헌법학자들 '개헌 필요성과 방향' 제시" category="정치" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

interface DetailedNewsItemProps {
  source: string
  title: string
  summary: string
}

function DetailedNewsItem({ source, title, summary }: DetailedNewsItemProps) {
  return (
    <div className="rounded-lg border p-4 hover:bg-gray-50">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        <span className="font-medium">{source}</span>
      </div>
      <h3 className="mt-2 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{summary}</p>
      <button className="mt-2 text-sm font-medium text-blue-600 hover:underline">기사 읽기</button>
    </div>
  )
}

interface RelatedIssueCardProps {
  title: string
  category: string
}

function RelatedIssueCard({ title, category }: RelatedIssueCardProps) {
  return (
    <div className="cursor-pointer rounded-lg border p-4 hover:bg-gray-50">
      <span className="mb-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
        {category}
      </span>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">관련 기사 8개</p>
    </div>
  )
}
