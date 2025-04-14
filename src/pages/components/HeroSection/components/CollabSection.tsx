import { collabs } from '@Constants'
import { useAutoScroll } from '@Hooks'
import { useRef } from 'react'

const CollabSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  useAutoScroll(scrollRef)

  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-16 md:w-4/5">
      <h2 className="text-center text-[20px] font-bold md:text-[40px]">
        More than 25,000 teams use Collabs
      </h2>

      <div
        ref={scrollRef}
        id="collabs-scroll"
        className="no-scrollbar flex w-full gap-16 overflow-x-auto pb-4 md:gap-12"
      >
        {collabs.map(({ name, logo }, index) => (
          <div
            key={`${name}-${index}`}
            className="flex flex-shrink-0 items-center gap-2 text-2xl font-semibold text-[#A6A6A6]"
          >
            <img
              src={logo}
              alt={name}
              className={`h-[30px] w-[30px] ${name === 'grammarly' ? 'rounded-full bg-[#A6A6A6] p-2' : ''}`}
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollabSection