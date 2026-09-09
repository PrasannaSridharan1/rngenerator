import { RandomGenerator } from "@/components/random-generator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col p-6">
      <header className="flex items-center justify-end">
        <ThemeToggle />
      </header>

      <div className="flex flex-1 items-center justify-center py-10">
        <RandomGenerator />
      </div>
    </main>
  )
}
