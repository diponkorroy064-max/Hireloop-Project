"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                checked={theme === "synthwave"}
                onChange={() =>
                    setTheme(
                        theme === "light"
                            ? "synthwave"
                            : "light"
                    )
                }
            />

            {/* Sun */}
            <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {/* sun path */}
            </svg>

            {/* Moon */}
            <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {/* moon path */}
            </svg>
        </label>
    );
}

