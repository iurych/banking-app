'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname()
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        {sidebarLinks.map(
          (link) => {
            const isActive = pathName === link.route || pathName.startsWith(`${link.route}`)
            return (
              <Link 
                key={link.label} 
                href={link.route}
                className={cn('sidebar-link', {'bg-bank-gradient':isActive})}
              >
                {/* <Image
                  src={link.imgURL}
                  width={34}
                  height={34}
                  alt="Horizon logo"
                  className="size-[24px] max-xl:size-14"
                /> */}
                {link.label}
              </Link>
            )
          }
        )}
      </nav>
    </section>
  )
}

export default Sidebar
