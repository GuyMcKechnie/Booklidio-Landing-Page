import "ldrs/ring";
export const LoadingAnimation = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <l-ring
                size="40"
                stroke="5"
                bg-opacity="0"
                speed="2"
                color="#680d28"
            ></l-ring>
        </div>
    );
};
