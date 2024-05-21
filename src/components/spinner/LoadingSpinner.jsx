"use client";

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin-slow rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
    );
}
