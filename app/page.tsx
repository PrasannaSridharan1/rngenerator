import Image from "next/image"
import { RandomGenerator } from "@/components/random-generator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col p-6">
      <header className="flex items-center justify-between">
        <Image
          src="/prajna-ai-logo.png"
          alt="Prajna AI Solutions"
          width={72}
          height={108}
          priority
          className="h-auto w-16 md:w-20"
        />
        <ThemeToggle />
      </header>

      <div className="flex flex-1 items-center justify-center py-10">
        <RandomGenerator />
      </div>
    </main>
  )
}
