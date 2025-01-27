import BookLoader from "./Bookloader.jsx";
export const LoadingAnimation = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <BookLoader
                background={"linear-gradient(135deg, #680d28, #690d28)"}
                desktopSize={"50px"}
                mobileSize={"80px"}
                shadowColor="#680d28"
            />
        </div>
    );
};
