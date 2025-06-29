import { useEffect, useState } from 'react';
import { Sun, Moon } from 'react-icons/lu';

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 bg-gray-800 dark:bg-white text-white dark:text-black p-2 rounded-full shadow-md"
      aria-label="Toggle Theme"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
