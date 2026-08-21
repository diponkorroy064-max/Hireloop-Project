"use client";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";


const emptySubscribe = () => () => { };
function useIsMounted() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const isMounted = useIsMounted();

    if (!isMounted) {
        return <div className="w-9 h-9" aria-hidden="true" />;
    }

    const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
