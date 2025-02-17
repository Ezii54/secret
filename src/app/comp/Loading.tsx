"use client";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 rounded-full border-color-accent animate-spin border-t-transparent"></div>
            </div>
        </div>
    );
};

export default Loading;
