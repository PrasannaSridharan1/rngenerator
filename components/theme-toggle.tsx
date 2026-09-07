"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const initial = stored === "dark" ? "dark" : "light"
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="bg-transparent"
    >
      <Sun className="h-5 w-5 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
    </Button>
  )
}
