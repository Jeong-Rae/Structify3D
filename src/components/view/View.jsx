"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";
import blueprintData from "@/data/blueprint_information.json";
import ModelViewer from "@/components/modelviewer/ModelViewer";
import Image from "next/image";

const SearchParamsComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialTitle = searchParams.get("title") || "설계 모델 Title";
    const initialDescription = searchParams.get("description") || "";
    const initialModelSrc = searchParams.get("modelSrc") || "/model/scene.gltf";

    const [selectedModelTitle, setSelectedModelTitle] = useState(initialTitle);
    const [selectedModelDescription, setSelectedModelDescription] =
        useState(initialDescription);
    const [selectedModelModelSrc, setSelectedModelModelSrc] =
        useState(initialModelSrc);

    const handleModelSelect = (title, description, modelSrc) => {
        setSelectedModelTitle(title);
        setSelectedModelDescription(description);
        setSelectedModelModelSrc(modelSrc);
        const params = new URLSearchParams({ title, description, modelSrc });
        router.push(`/view?${params.toString()}`);
    };

    const handleBackClick = () => {
        router.push("/");
    };

    return (
        <>
            <header className="flex h-16 items-center justify-between border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[70px] lg:px-8">
                <div className="flex items-center gap-4">
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={handleBackClick}
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                        <span className="sr-only">뒤로가기</span>
                    </Button>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                        Structify 3D
                    </h1>
                </div>
                <div className="flex items-center gap-4"></div>
            </header>
            <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-4 p-4">
                        <h3 className="text-lg font-semibold">모델 목록</h3>
                        <div className="flex-1 overflow-auto">
                            <nav className="grid gap-2">
                                {blueprintData.map((blueprint, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                        onClick={() =>
                                            handleModelSelect(
                                                blueprint.title,
                                                blueprint.description,
                                                blueprint.modelSrc
                                            )
                                        }
                                    >
                                        <Image
                                            alt="Model Thumbnail"
                                            className="rounded-md"
                                            height={40}
                                            src={blueprint.imgSrc}
                                            width={40}
                                        />
                                        <span className="text-sm font-medium">
                                            {blueprint.title}
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 lg:h-[70px] items-center justify-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 w-full">
                        <h1 className="text-xl lg:text-2xl font-semibold">
                            {selectedModelTitle}
                        </h1>
                    </div>
                    <div className="flex-1 p-4 md:p-6 w-full">
                        <div className="h-full w-full rounded-lg border bg-gray-100 dark:border-gray-800 dark:bg-gray-950 flex flex-col items-center">
                            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                                {selectedModelDescription}
                            </p>
                            <div className="h-full w-full">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ModelViewer
                                        modelUrl={selectedModelModelSrc}
                                    />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const View = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchParamsComponent />
        </Suspense>
    );
};

export default View;
