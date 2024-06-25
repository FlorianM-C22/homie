import React, { useState, useEffect } from "react";

const FadeContainer = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out"
            }}
        >
            {children}
        </div>
    );
};

export default FadeContainer;
