// components/InfoCard.jsx

import { Button } from "@/components/ui/button";
import { EyeIcon } from "@/components/ui/icons"; // 아이콘 경로는 실제 위치에 따라 수정하세요

export const InfoCard = ({ title, description, imgSrc }) => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <img
                alt="3D 건축 청사진"
                className="w-full h-48 object-cover"
                height={300}
                src={imgSrc}
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                }}
                width={400}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {description}
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
    );
};

export default InfoCard;
