const StarBorder = ({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "3s",
    children,
    ...rest
}) => {
    return (
        <Component
            className={`relative inline-block py-[1px] overflow-hidden rounded-lg ${className}`}
            {...rest}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="relative flex items-center gap-4 px-6 py-3 text-center text-white rounded-lg z-1 bg-[#47081b] font-heading">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
