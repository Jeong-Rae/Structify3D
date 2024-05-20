/**
 * 이 코드는 Vercel의 v0에 의해 생성되었습니다.
 * @see https://v0.dev/t/9kCvljCl9gl
 * 문서: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Next.js 프로젝트에 폰트를 추가하려면:

import { Rubik } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

이 폰트를 사용하는 방법에 대해 더 읽으려면 Next.js 문서를 방문하세요:
- App 디렉토리: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages 디렉토리: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
    Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// landing 컴포넌트: 페이지의 메인 콘텐츠를 렌더링합니다.
export function landing() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 헤더 섹션 */}
            <header className="bg-white dark:bg-gray-950 shadow">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* 로고 및 사이트 제목 */}
                    <Link
                        className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
                        href="#"
                    >
                        <CuboidIcon className="w-6 h-6" />
                        <span>Structify 3D</span>
                    </Link>
                    {/* 네비게이션 메뉴 */}
                    {/* <nav className="hidden md:flex items-center gap-4">
                        <Link
                            className="text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300"
                            href="#"
                        >
                            탐색
                        </Link>
                        <Link
                            className="text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300"
                            href="#"
                        >
                            Category
                        </Link>
                        <Link
                            className="text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300"
                            href="#"
                        >
                            소개
                        </Link>
                        <Link
                            className="text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300"
                            href="#"
                        >
                            연락처
                        </Link>
                    </nav> */}
                    {/* 드롭다운 메뉴 및 모바일 메뉴 버튼 */}
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <SunIcon className="w-5 h-5" />
                                    <span className="sr-only">테마 전환</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <SunIcon className="w-5 h-5" />
                                        <span>라이트</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <MoonIcon className="w-5 h-5" />
                                        <span>다크</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <MonitorIcon className="w-5 h-5" />
                                        <span>시스템</span>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            className="md:hidden"
                            size="sm"
                            variant="outline"
                        >
                            <MenuIcon className="w-5 h-5" />
                            <span className="sr-only">메뉴 전환</span>
                        </Button>
                    </div>
                </div>
            </header>
            {/* 메인 콘텐츠 섹션 */}
            <main className="flex-1">
                {/* 소개 섹션 */}
                <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
                                    3D로 표현된 건축 설계도를 확인해보세요
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">
                                    3D로 표현된 건축 설계도를 확인해보세요
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg">View</Button>
                                    <Button size="lg" variant="outline">
                                        <DownloadIcon className="w-5 h-5 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                            <div className="relative w-full h-[500px] md:h-[600px]">
                                <img
                                    alt="3D 건축 청사진"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                    height={600}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "800/600",
                                        objectFit: "cover",
                                    }}
                                    width={800}
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <CuboidIcon className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 추천 섹션 */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">
                                추천 3D 건축 청사진
                            </h2>
                            <Link
                                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                                href="#"
                            >
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img
                                    alt="3D 건축 청사진"
                                    className="w-full h-48 object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                            현대식 사무실 건물
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            현대식 사무실 건물의 상세한 3D 건축
                                            청사진입니다.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Button size="sm">
                                            <EyeIcon className="w-4 h-4 mr-2" />
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img
                                    alt="3D 건축 청사진"
                                    className="w-full h-48 object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                            지속 가능한 주거 단지
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            지속 가능한 주거 단지를 위한 친환경
                                            3D 건축 청사진입니다.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Button size="sm">
                                            <EyeIcon className="w-4 h-4 mr-2" />
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img
                                    alt="3D 건축 청사진"
                                    className="w-full h-48 object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                            미니멀리스트 아트 갤러리
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            미니멀리스트 아트 갤러리를 위한
                                            세련되고 현대적인 3D 건축
                                            청사진입니다.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Button size="sm">
                                            <EyeIcon className="w-4 h-4 mr-2" />
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img
                                    alt="3D 건축 청사진"
                                    className="w-full h-48 object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                            미래형 고층 빌딩
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            미래형 고층 빌딩을 위한 혁신적인 3D
                                            건축 청사진입니다.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Button size="sm">
                                            <EyeIcon className="w-4 h-4 mr-2" />
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 필터 섹션 */}
                <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-[300px_1fr] gap-8">
                            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                                    3D 건축 청사진 필터링
                                </h3>
                                <Accordion collapsible type="single">
                                    <AccordionItem value="category">
                                        <AccordionTrigger className="text-base">
                                            Category
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid gap-2">
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="category-residential" />
                                                    주거용{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="category-commercial" />
                                                    상업용{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="category-institutional" />
                                                    기관용{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="category-industrial" />
                                                    산업용{"\n"}
                                                </Label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="style">
                                        <AccordionTrigger className="text-base">
                                            Style
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid gap-2">
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="style-modern" />
                                                    현대적{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="style-traditional" />
                                                    전통적{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="style-minimalist" />
                                                    미니멀리스트{"\n"}
                                                </Label>
                                                <Label className="flex items-center gap-2 font-normal">
                                                    <Checkbox id="style-sustainable" />
                                                    지속 가능{"\n"}
                                                </Label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            {/* 필터링된 청사진 리스트 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                    <img
                                        alt="3D 건축 청사진"
                                        className="w-full h-48 object-cover"
                                        height={300}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                                친환경 주거 단지
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                                주거 단지를 위한 지속 가능한 3D
                                                건축 청사진입니다.
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Button size="sm">
                                                <EyeIcon className="w-4 h-4 mr-2" />
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                    <img
                                        alt="3D 건축 청사진"
                                        className="w-full h-48 object-cover"
                                        height={300}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                                혁신적인 사무실 단지
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                                사무실 단지를 위한 최첨단 3D
                                                건축 청사진입니다.
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Button size="sm">
                                                <EyeIcon className="w-4 h-4 mr-2" />
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                    <img
                                        alt="3D 건축 청사진"
                                        className="w-full h-48 object-cover"
                                        height={300}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                                                미래형 대학 캠퍼스
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                                대학 캠퍼스를 위한 비전 있는 3D
                                                건축 청사진입니다.
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Button size="sm">
                                                <EyeIcon className="w-4 h-4 mr-2" />
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

// 아이콘 컴포넌트: CuboidIcon
function CuboidIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
            <path d="M10 22v-8L2.25 9.15" />
            <path d="m10 14 11.77-6.87" />
        </svg>
    );
}

// 아이콘 컴포넌트: DownloadIcon
function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}

// 아이콘 컴포넌트: EyeIcon
function EyeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

// 아이콘 컴포넌트: MenuIcon
function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

// 아이콘 컴포넌트: MonitorIcon
function MonitorIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
    );
}

// 아이콘 컴포넌트: MoonIcon
function MoonIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

// 아이콘 컴포넌트: SunIcon
function SunIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}
