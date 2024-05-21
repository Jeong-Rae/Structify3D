"use client";

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
import {
    DownloadIcon,
    EyeIcon,
    SunIcon,
    MonitorIcon,
    MoonIcon,
    MenuIcon,
    CuboidIcon,
} from "@/components/ui/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import Image from "next/image";

import { InfoCard } from "@/components/infocard/InfoCard";
import blueprintData from "@/data/blueprint_information.json";

// landing 컴포넌트: 페이지의 메인 콘텐츠를 렌더링합니다.
export default function Landing() {
    const [theme, setTheme] = useState("system");

    const handleThemeChange = (newTheme) => {
        console.log("Changing theme to:", newTheme);
        setTheme(newTheme);
        if (newTheme === "system") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemThemeChange = (e) => {
            console.log(
                "System theme change detected:",
                e.matches ? "dark" : "light"
            );
            if (theme === "system") {
                document.documentElement.setAttribute(
                    "data-theme",
                    e.matches ? "dark" : "light"
                );
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () =>
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, [theme]);

    useEffect(() => {
        console.log("Initial theme setting:", theme);
        if (theme === "system") {
            document.documentElement.setAttribute(
                "data-theme",
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            );
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

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
                    <nav className="hidden md:flex items-center gap-4">
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
                    </nav>
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
                                <DropdownMenuItem
                                    onClick={() => handleThemeChange("light")}
                                >
                                    <div className="flex items-center gap-2">
                                        <SunIcon className="w-5 h-5" />
                                        <span>Light</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleThemeChange("dark")}
                                >
                                    <div className="flex items-center gap-2">
                                        <MoonIcon className="w-5 h-5" />
                                        <span>Dark</span>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleThemeChange("system")}
                                >
                                    <div className="flex items-center gap-2">
                                        <MonitorIcon className="w-5 h-5" />
                                        <span>System</span>
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
                                <Image
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
                            {blueprintData.map((blueprint, index) => (
                                <InfoCard
                                    key={index}
                                    title={blueprint.title}
                                    description={blueprint.description}
                                    imgSrc={blueprint.imgSrc}
                                />
                            ))}
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
                                {blueprintData.map((blueprint, index) => (
                                    <InfoCard
                                        key={index}
                                        title={blueprint.title}
                                        description={blueprint.description}
                                        imgSrc={blueprint.imgSrc}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
