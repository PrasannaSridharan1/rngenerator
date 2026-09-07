"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

export function RandomGenerator() {
  const [rawInput, setRawInput] = useState("")
  const [maxNumber, setMaxNumber] = useState<number | null>(null)
  const [error, setError] = useState("")
  const [results, setResults] = useState<number[]>([])

  const clicksUsed = results.length
  const clicksLeft = maxNumber ? maxNumber - clicksUsed : 0
  const isLocked = maxNumber !== null
  const isExhausted = isLocked && clicksLeft <= 0

  function handleStart(e: FormEvent) {
    e.preventDefault()
    const trimmed = rawInput.trim()

    if (!/^\d+$/.test(trimmed)) {
      setError("Please enter a numeric number only.")
      return
    }

    const value = Number(trimmed)
    if (value < 1 || value > 100) {
      setError("Enter a number between 1 and 100.")
      return
    }

    setError("")
    setMaxNumber(value)
    setResults([])
  }

  function handleGenerate() {
    if (maxNumber === null || isExhausted) return

    // Pick from the numbers not yet used so values never repeat.
    const available: number[] = []
    for (let n = 1; n <= maxNumber; n++) {
      if (!results.includes(n)) available.push(n)
    }
    if (available.length === 0) return

    const next = available[Math.floor(Math.random() * available.length)]
    setResults((prev) => [...prev, next])
  }

  function handleReset() {
    setMaxNumber(null)
    setResults([])
    setRawInput("")
    setError("")
  }

  const latest = results[results.length - 1]

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight">Random Number Generator</h1>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">
          Enter a number from 1 to 100. You get that many clicks, each producing a unique random number.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
        <form onSubmit={handleStart} className="flex flex-col gap-3">
          <label htmlFor="max-input" className="text-sm font-medium">
            Maximum number
          </label>
          <div className="flex gap-2">
            <input
              id="max-input"
              inputMode="numeric"
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              disabled={isLocked}
              placeholder="e.g. 5"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "input-error" : undefined}
              className="h-11 flex-1 rounded-md border border-input bg-background px-3 font-mono text-base outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
            <Button type="submit" disabled={isLocked} className="h-11">
              Set
            </Button>
          </div>
          {error ? (
            <p id="input-error" role="alert" className="text-sm text-destructive">
              {error}
            </p>
          ) : null}
        </form>

        {isLocked ? (
          <div className="mt-6 border-t border-border pt-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Range: <span className="font-mono text-foreground">1&ndash;{maxNumber}</span>
              </span>
              <span>
                Clicks left: <span className="font-mono text-foreground">{clicksLeft}</span>
              </span>
            </div>

            <div
              aria-live="polite"
              className="mt-4 flex h-32 items-center justify-center rounded-lg bg-secondary text-secondary-foreground"
            >
              {latest !== undefined ? (
                <span className="font-mono text-6xl font-bold tabular-nums">{latest}</span>
              ) : (
                <span className="text-sm text-muted-foreground">Click generate to begin</span>
              )}
            </div>

            <Button onClick={handleGenerate} disabled={isExhausted} className="mt-4 h-11 w-full">
              {isExhausted ? "No clicks left" : "Generate random number"}
            </Button>

            {results.length > 0 ? (
              <div className="mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Generated ({results.length}/{maxNumber})
                </p>
                <ul className="flex flex-wrap gap-2">
                  {results.map((num, i) => (
                    <li
                      key={i}
                      className="flex h-9 min-w-9 items-center justify-center rounded-md border border-border px-2 font-mono text-sm tabular-nums"
                    >
                      {num}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <Button onClick={handleReset} variant="outline" className="mt-4 h-11 w-full bg-transparent">
              Reset
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
