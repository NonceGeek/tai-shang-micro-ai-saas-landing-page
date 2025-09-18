import Link from 'next/link'
import { VersionSwitcher } from '@/components/VersionSwitcher'
import { SearchButton } from '@/components/Search'
import Router from 'next/router'
import { Logo } from '@/components/Logo'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ThemeSelect, ThemeToggle } from './ThemeToggle'

function Featured() {
  return (
    <a
      href="/blog/2024-08-15"
      className="ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20"
    >
      <strong className="font-semibold">News</strong>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="ml-2 text-sky-600 dark:text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span className="ml-2">Web app coming soon</span>
      <svg
        width="3"
        height="6"
        className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export function NavPopover({ display = 'md:hidden', className, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Dialog open={isOpen} onClose={setIsOpen} className={clsx('fixed z-50 inset-0', display)}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <DialogPanel className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <li>
              <a
                href="https://github.com/NonceGeek/awesome-yue-lab/"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            <ThemeSelect />
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}

export function NavItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCorpusDropdownOpen, setIsCorpusDropdownOpen] = useState(false)
  
  return (
    <>
      <li className="relative whitespace-nowrap">
        <button 
          className="flex items-center hover:text-sky-500 dark:hover:text-sky-400"
          onClick={() => setIsCorpusDropdownOpen(!isCorpusDropdownOpen)}
        >
          主程序
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 transition-transform duration-200 ${isCorpusDropdownOpen ? 'rotate-180' : ''}`}
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isCorpusDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-50">
            <a 
              href="https://search.aidimsum.com/appStore" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              搜索引擎
            </a>
            <a 
              href="https://app.aidimsum.com" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              搜索引擎（Beta）
            </a>
          </div>
        )}
      </li>
      <li className="whitespace-nowrap">
        <Link href="https://search.aidimsum.com/appStore" className="hover:text-sky-500 dark:hover:text-sky-400">
          应用
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link href="/kanban" className="hover:text-sky-500 dark:hover:text-sky-400">
          看板
        </Link>
      </li>
      <li className="relative">
        <button 
          className="flex items-center hover:text-sky-500 dark:hover:text-sky-400"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          应用
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-50">

            <a 
              href="https://search.aidimsum.com" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              搜索引擎
            </a>
            <a 
              href="https://saas.aidimsum.com" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              AI SaaS
            </a>
            <a 
              href="https://prompts.aidimsum.com" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Prompt Manager
            </a>
            <a 
              href="https://lang.rootmud.xyz" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              粤语学习小助手
            </a>
            <a 
              href="https://todo" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Yuer-粤化工具 
            </a>
            <a 
              href="https://github.com/NonceGeek/awesome-yue-lab/" 
              target="_blank"
              className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              ✨ Idea Stacks
            </a>
          </div>
        )}
      </li>
    </>
  )
}

export function Header({ hasNav = false, navIsOpen, onNavToggle, title, section }) {
  let [isOpaque, setIsOpaque] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [isOpaque])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet={require('@/img/beams/docs@30.avif').default.src} type="image/avif" />
            <img
              src={require('@/img/beams/docs@tinypng.png').default.src}
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet={require('@/img/beams/docs-dark@30.avif').default.src}
              type="image/avif"
            />
            <img
              src={require('@/img/beams/docs-dark@tinypng.png').default.src}
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div
        className={clsx(
          'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]',
          isMobile 
            ? '!bg-black/60 !backdrop-blur-md !text-white supports-backdrop-blur:!bg-black/40'
            : isOpaque
              ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
              : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
        )}
        style={isMobile ? {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12px)',
          color: 'white'
        } : {}}
      >
        <div className="max-w-8xl mx-auto">
          {hasNav && (
            <div className="flex items-center justify-between p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
              <button
                type="button"
                onClick={() => onNavToggle(!navIsOpen)}
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24">
                  <path
                    d="M5 6h14M5 12h14M5 18h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {title && (
                <ol className="ml-4 flex flex-nowrap items-center text-sm leading-6 overflow-hidden">
                  {section && (
                    <li className="flex items-center flex-shrink-0">
                      {section}
                      <svg
                        width="3"
                        height="6"
                        aria-hidden="true"
                        className="mx-3 overflow-visible text-slate-400"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </li>
                  )}
                  <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                    {title}
                  </li>
                </ol>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
