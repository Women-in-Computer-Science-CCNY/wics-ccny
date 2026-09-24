import { upcomingEvents } from "@/lib/data/events";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDateFromString(dateValue: string) {
  return new Date(dateValue);
}

function getMonthDays(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingEmptyDays = firstDay.getDay();
  const totalCells = Math.ceil((leadingEmptyDays + daysInMonth) / 7) * 7;

  const cells: Array<number | null> = [];

  for (let i = 0; i < totalCells; i += 1) {
    const dayNumber = i - leadingEmptyDays + 1;
    cells.push(dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null);
  }

  return cells;
}

function EventCalendarMonth({
  monthIndex,
  year,
}: {
  monthIndex: number;
  year: number;
}) {
  const monthName = new Date(year, monthIndex).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const days = getMonthDays(year, monthIndex);
  const eventMap = new Map<number, string[]>();

  upcomingEvents.forEach((event) => {
    const eventDate = getDateFromString(event.isoDate || event.date);

    if (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === monthIndex
    ) {
      const existing = eventMap.get(eventDate.getDate()) ?? [];
      existing.push(event.title);
      eventMap.set(eventDate.getDate(), existing);
    }
  });

  return (
    <div className="rounded-3xl border border-lavender-200/60 bg-white/60 p-4 shadow-card backdrop-blur-sm">
      <h3 className="font-display text-xl font-semibold text-violet-deep mb-4">
        {monthName}
      </h3>

      <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          const eventTitles = day !== null ? eventMap.get(day) ?? [] : [];

          return (
            <div
              key={`${monthName}-${day ?? `empty-${index}`}`}
              className={`min-h-[72px] rounded-2xl border p-2 text-left ${
                day
                  ? "border-lavender-100 bg-slate-50/80"
                  : "border-transparent bg-transparent"
              }`}
            >
              {day !== null && (
                <>
                  <div className="text-[11px] font-semibold text-slate-500 mb-2">
                    {day}
                  </div>
                  <div className="space-y-1.5">
                    {eventTitles.slice(0, 2).map((title) => (
                      <div
                        key={`${day}-${title}`}
                        className="rounded-lg bg-lavender-100 px-1.5 py-1 text-[9px] font-semibold text-violet-deep leading-tight"
                      >
                        {title.length > 16 ? `${title.slice(0, 16)}...` : title}
                      </div>
                    ))}
                    {eventTitles.length > 2 && (
                      <div className="text-[8px] font-bold uppercase tracking-wide text-lavender-500">
                        +{eventTitles.length - 2} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EventCalendar() {
  const monthsToShow = [8, 9, 10, 11];

  return (
    <section className="relative py-16 md:py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-lavender-500">
            Semester Calendar
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-violet-deep mt-3">
            What&apos;s coming up this semester
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {monthsToShow.map((monthIndex) => (
            <EventCalendarMonth
              key={`month-${monthIndex}`}
              monthIndex={monthIndex}
              year={2026}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
