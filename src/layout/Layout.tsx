import { ReactNode } from 'react'

/**
 * This is an Applayout which handles paddings in x-axis to make consistent padding across all sections
 */
const Layout = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`p-0 px-[20px] sm:px-40px md:px-[80px] lg:px-[120px] ${className}`}>
      {children}
    </div>
  )
}

export default Layout
