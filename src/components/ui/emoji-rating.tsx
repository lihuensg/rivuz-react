"use client"

import { cn } from '../../lib/utils'

interface RatingInteractionProps {
  value?: number
  className?: string
}

const ratingData = [
  { emoji: '😔', label: 'Terrible' },
  { emoji: '😟', label: 'Poor' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😍', label: 'Amazing' },
]

export function RatingInteraction({ value = 5, className }: RatingInteractionProps) {
  const displayRating = Math.max(1, Math.min(value, 5))

  return (
    <div
      className={cn(
        'inline-flex items-center',
        className,
      )}
      aria-label={`Rating ${displayRating} de 5`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        {ratingData.map((item, i) => {
          const value = i + 1
          const isActive = value <= displayRating

          return (
            <div
              key={item.label}
              className={cn(
                'flex items-center justify-center transition-all duration-200 ease-out',
                isActive ? 'opacity-100' : 'opacity-35',
              )}
            >
              <span
                className={cn(
                  'select-none text-[1.18rem] leading-[1.2] transition-all duration-200 ease-out sm:text-[1.28rem]',
                  isActive ? 'grayscale-0' : 'grayscale-[0.45]',
                )}
              >
                {item.emoji}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RatingInteraction