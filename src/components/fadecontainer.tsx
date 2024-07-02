import React, { useState, useEffect, useRef } from "react";

const FadeContainer = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null); // Utilisation d'une référence pour l'observer

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (observer.current) {
                            observer.current.unobserve(entry.target);
                        }
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current && observer.current) {
            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current && ref.current) {
                observer.current.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
            }}
        >
            {children}
        </div>
    );
};

export default FadeContainer;
