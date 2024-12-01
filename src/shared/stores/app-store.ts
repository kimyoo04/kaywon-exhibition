import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { setCookie } from '@/shared/utils/cookie'

interface AppState {
  theme: string
  language: string
  layout: number[]
  collapsed: boolean
  setTheme: (theme: string) => void
  setLanguage: (language: string) => void
  setLayout: (layout: number[]) => void
  setCollapsed: (collapsed: boolean) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          theme: 'system',
          language: 'ko',
          layout: [25, 75],
          collapsed: false,

          setTheme: (theme) => {
            set({ theme })
            setCookie('app:theme', theme)
          },

          setLanguage: (language) => {
            set({ language })
            document.documentElement.lang = language
            setCookie('app:language', language)
          },

          setLayout: (layout) => {
            set({ layout })
          },

          setCollapsed: (collapsed) => {
            set({ collapsed })
          },
        }),
        {
          name: 'app-storage',
          storage: createJSONStorage(() => localStorage),
          partialize: (state) => ({
            theme: state.theme,
            language: state.language,
            layout: state.layout,
            collapsed: state.collapsed,
          }),
        },
      ),
    ),
  ),
)
