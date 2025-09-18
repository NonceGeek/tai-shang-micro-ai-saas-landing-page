import { Testimonials } from '@/components/Testimonials'
import { DarkMode } from '@/components/home/DarkMode'
import { ConstraintBased } from '@/components/home/ConstraintBased'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Performance } from '@/components/home/Performance'
import { MobileFirst } from '@/components/home/MobileFirst'
import { StateVariants } from '@/components/home/StateVariants'
import { ComponentDriven } from '@/components/home/ComponentDriven'
import { Customization } from '@/components/home/Customization'
import { ModernFeatures } from '@/components/home/ModernFeatures'
import { EditorTools } from '@/components/home/EditorTools'
import { ReadyMadeComponents } from '@/components/home/ReadyMadeComponents'
import { SearchButton } from '@/components/Search'
import { Hero } from '@/components/home/Hero'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'
import { NavItems, NavPopover } from '@/components/Header'
import styles from '@/pages/index.module.css'
import clsx from 'clsx'
import { ThemeToggle } from '@/components/ThemeToggle'
import socialCardLarge from '@/img/social-card-large.jpg'

import urania from '@/img/urania.png'
import StarryBackground from '@/components/starry-background'

function Header() {
  return (
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            'absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
            styles.beams
          )}
        >
          {/* <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          /> */}
          <StarryBackground />
        </div>
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <div className="flex items-center">
            <Logo className="w-auto h-10 mr-8" />
            <nav>
              <ul className="flex items-center gap-x-8">
                <NavItems />
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <SearchButton className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </SearchButton>
            <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
            <div className="hidden md:flex items-center">
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggle />
                <a
                  href="https://github.com/NonceGeek/awesome-ai-dimsum/"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Lab on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                {/* Language switcher dropdown */}
                <div className="relative ml-6">
                  <select
                    onChange={(e) => (window.location.href = e.target.value)}
                    className="appearance-none bg-transparent border-none text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 cursor-pointer pr-6"
                    defaultValue="/cantonese"
                  >
                    <option value="/">&nbsp;&nbsp;&nbsp;&nbsp;中文</option>
                    <option value="/en">English</option>
                    <option value="/cantonese">&nbsp;&nbsp;&nbsp;&nbsp;粤语</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <svg
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto pt-20">
          <br></br><br></br><br></br>
          <div className="flex items-start justify-between">
            <div>
            <img src={urania.src} alt="Yue" className="w-80 object-contain" />
            <h3 className="text-slate-900 font-extrabold text-3xl sm:text-3xl lg:text-5xl tracking-tight text-white">
            <br></br>
            <br></br>
            <br></br>
              {/* Key Lab of 
              <br></br>
              Cantonese Corpus Construction and LLMs Evaluation */}
            </h3>
            <br></br>
            <br></br>
            <br></br>
              <p className="mt-6 text-lg text-slate-600 max-w-3xl dark:text-slate-400 text-left dark:text-white">
                <b> 建設AI友好型粵語語料庫，連接全球粵語AI生態</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="AI Dim Sum Lab - Collaboration Without Borders, Empowering Science Through Decentralization."
        />
        <meta
          key="og:title"
          property="og:title"
          content="AI Dim Sum Lab - Collaboration Without Borders, Empowering Science Through Decentralization."
        />
        <title>
          Cantonese Corpus Construction & AI Agents - Dim Sum AI Lab
        </title>
      </Head>
      <div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
        <Header />

        <section className="text-center px-8 mt-20">
          <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
            Dim Sum AI Lab
          </h2>
          <br></br>
          {/* TODO: to render the content in markdown use remark or something like that */}
          <div className="mt-8 text-left max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <p className="dark:text-white">
              作為最具活力和辨識度嘅漢語方言，粵語唔單止係一種交流工具，更係嶺南文化嘅精神載體同活態文化遺產，被全球約 8500 萬人+ 所使用。
              喺當前 AI 發展日新月異嘅技術背景下，構建粵語語料庫及其上嘅人工智能應用生態，令粵語成為「AI 友好型」方言，係文化傳承嘅挑戰與機遇，都係構建粵語人工智能應用創新嘅基礎。
            </p>

            <p className="dark:text-white">喺呢一背景下，<span className="text-red-500">Dim Sum AI Lab</span> 致力於探索一系列關鍵命題：</p>

            <ul className="dark:text-white">
              <li>點樣構建標註規範，以高效建設大規模自治多模態粵語語料庫（Autonomous Multimodal Cantonese Corpus）？</li>
              <li>點樣設計接入機制，以喺粵語語料庫嘅基礎上構建 Yue App Store 與粵語多用途應用生態？</li>
              <li>點樣改進搜索算法，以喺粵語語料庫嘅基礎上開發新一代人工智能友好嘅搜索引擎？</li>
              <li>點樣創新服務模式，以喺粵語語料庫嘅基礎上打造新一代 AI SaaS 框架？</li>
              <li>點樣培育開源社區，以圍繞粵語語料庫創建新一代全球化嘅建設者與研究者社區（DAO for Buidlers & Researchers）？</li>
            </ul>

            <pre >
              {`+--------------- Yue 應用商店 powered by AI ------------------+
   🤖 Yue AI Agents    |   📱 Yue Apps   |    🛠️  Yue Tools 
+------------------------------------------------------------+
        ↑                       ↑                       ↑
+------------------------------------------------------------+
|                            APIs                            |
+------------------------------------------------------------+
        ↑                       ↑                       ↑
+------------------------+ +----------------+ +--------------+ +--------+
| 🚗 人工智能友好嘅搜索引擎 | | 🤖 AI SaaS 框架 | |  🔌 擴展插件    | |  LLMs  |
+------------------------+ +----------------+ +--------------+ +--------+
                                   ↑               ↑     接入       |
                                   +---------------+---------------+
        ↑                       ↑                       ↑
+-----------------------------+ +----------------------------+
|  多模態數據庫（文本/音頻/視頻）  | |  🔖 標註系統（AI+人工+區塊鏈） |
+-----------------------------+ +----------------------------+`}
            </pre>
          </div>
        </section>
      </div>
      {/* <Testimonials /> */}
      {/* <div className="pt-20 mb-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-40 md:mb-40 md:gap-y-40">
        <ConstraintBased />
        <BuildAnything />
        <Performance />
        <MobileFirst />
        <StateVariants />
        <ComponentDriven />
        <DarkMode />
        <Customization />
        <ModernFeatures />
        <EditorTools />
        <ReadyMadeComponents />
      </div> */}

      <Footer />
      {/* TODO: optimize the style */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:px-8">
          <p className="text-sm text-center text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Key Lab of Cantonese Corpus Construction and AI Agents. All rights reserved. DimSum AI Lab 版權所有 | 蘇ICP備2025170597號
          </p>
        </div>
      </div>
    </>
  )
}

Home.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
  },
}
