'use client'

import { useState } from 'react'

interface DateTimeBookingProps {
  onDateTimeSelect: (date: string, time: string) => void
  selectedDate?: string
  selectedTime?: string
}

const HOURS = Array.from({ length: 13 }, (_, i) => {
  const hour = 9 + i
  const ampm = hour < 12 ? 'AM' : 'PM'
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
  return { value: `${hour}:00`, display: `${displayHour}:00 ${ampm}` }
})

// Check if date is available (any future date, no past dates)
function isDateAvailable(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date >= today
}

function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()

  const days: Date[] = []
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i))
  }
  return days
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

export default function DateTimeBooking({
  onDateTimeSelect,
  selectedDate,
  selectedTime,
}: DateTimeBookingProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate || '')
  const [localSelectedTime, setLocalSelectedTime] = useState(selectedTime || '')

  const days = getDaysInMonth(currentMonth)
  const firstDayOfWeek = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
  const emptyDays = Array(firstDayOfWeek).fill(null)

  const handleDateSelect = (date: Date) => {
    const dateStr = formatDate(date)
    setLocalSelectedDate(dateStr)
    if (localSelectedTime) {
      onDateTimeSelect(dateStr, localSelectedTime)
    }
  }

  const handleTimeSelect = (time: string) => {
    setLocalSelectedTime(time)
    if (localSelectedDate) {
      onDateTimeSelect(localSelectedDate, time)
    }
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-4">
          Select Date *
        </label>
        <div className="bg-surface border border-white/10 p-6 rounded">
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              ← Prev
            </button>
            <h3 className="text-foreground font-semibold">{monthName}</h3>
            <button
              type="button"
              onClick={handleNextMonth}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Next →
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-xs text-foreground/40 font-semibold py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {days.map((day) => {
              const available = isDateAvailable(day)
              const dateStr = formatDate(day)
              const isSelected = dateStr === localSelectedDate
              const isToday = formatDate(new Date()) === dateStr
              const isPast = day < new Date() && !isToday

              return (
                <button
                  key={dateStr}
                  type="button"
                  onClick={() => available && handleDateSelect(day)}
                  disabled={!available || isPast}
                  className={`
                    aspect-square rounded flex items-center justify-center text-sm font-semibold
                    transition-all duration-200
                    ${!available || isPast
                      ? 'bg-foreground/5 text-foreground/20 cursor-not-allowed'
                      : isSelected
                        ? 'bg-accent text-background'
                        : 'bg-foreground/5 text-foreground hover:bg-foreground/10 cursor-pointer'
                    }
                    ${isToday ? 'ring-1 ring-accent' : ''}
                  `}
                >
                  {day.getDate()}
                </button>
              )
            })}
          </div>

          {selectedDate && (
            <div className="mt-4 p-3 bg-foreground/5 rounded text-sm text-foreground/70">
              Selected: {new Date(localSelectedDate + 'T00:00').toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      {/* Time Selection */}
      {localSelectedDate && (
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-4">
            Select Time *
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {HOURS.map((hour) => (
              <button
                key={hour.value}
                type="button"
                onClick={() => handleTimeSelect(hour.value)}
                className={`
                  py-2 px-3 text-sm rounded transition-all duration-200
                  ${
                    localSelectedTime === hour.value
                      ? 'bg-accent text-background'
                      : 'bg-surface border border-white/10 text-foreground hover:border-accent'
                  }
                `}
              >
                {hour.display}
              </button>
            ))}
          </div>

          {localSelectedTime && (
            <div className="mt-4 p-3 bg-foreground/5 rounded text-sm text-foreground/70">
              Selected: {new Date(localSelectedDate + 'T00:00').toLocaleDateString()} at {HOURS.find((h) => h.value === localSelectedTime)?.display}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
