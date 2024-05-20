/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xDTx3hPxw4D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { SearchIcon, SettingsIcon, ArrowLeftIcon } from "@/components/ui/icons";

export default function View() {
    return (
        <>
            <header className="flex h-14 items-center justify-between border-b bg-gray-100/40 px-4 dark:bg-gray-800/40 lg:h-[60px] lg:px-6">
                <div className="flex items-center gap-4">
                    <Button size="icon" variant="ghost">
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span className="sr-only">Go back</span>
                    </Button>
                    <h1 className="text-lg font-semibold">Blueprint Models</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button size="icon" variant="ghost">
                        <SearchIcon className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                        <SettingsIcon className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </div>
            </header>
            <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-4 p-4">
                        <h3 className="text-lg font-semibold">
                            Blueprint Models
                        </h3>
                        <div className="flex-1 overflow-auto">
                            <nav className="grid gap-2">
                                <button className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Residential House
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Commercial Building
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Industrial Warehouse
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Retail Store
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Office Complex
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <img
                                        alt="Model Thumbnail"
                                        className="rounded-md"
                                        height="40"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width="40"
                                    />
                                    <span className="text-sm font-medium">
                                        Apartment Building
                                    </span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        <Button size="icon" variant="ghost">
                            <ArrowLeftIcon className="h-5 w-5" />
                            <span className="sr-only">Go back</span>
                        </Button>
                        <h1 className="text-lg font-semibold">
                            Blueprint Models
                        </h1>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="h-full w-full rounded-lg border bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
                            <img
                                alt="Blueprint Model"
                                className="h-full w-full object-contain p-8"
                                height="600"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "900/600",
                                    objectFit: "cover",
                                }}
                                width="900"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
