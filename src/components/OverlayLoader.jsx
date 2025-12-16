const OverlayLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-2xl font-bold animate-pulse">Loading…</div>
            <div className="w-36 h-2 bg-gray-300 rounded overflow-hidden">
                <div className="h-full bg-orange-500 animate-[loading_10s_infinite]"></div>
            </div>
        </div>
    );
};

export default OverlayLoader;
