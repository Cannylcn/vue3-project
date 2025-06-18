// src/i18n.js
import { createI18n } from 'vue-i18n'
// 动态加载语言文件（减少初始加载体积）
const loadLocaleMessages = () => {
    return {
        'en': () => import('@/assets/en.json'),
        'zh-CN': () => import('@/assets/zh-CN.json')
    }
}

// 创建 i18n 实例
const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: 'en', // 默认语言
    fallbackLocale: 'en', // 回退语言
    messages: {
        en: await (await loadLocaleMessages()['en']()).default,
        'zh-CN': await (await loadLocaleMessages()['zh-CN']()).default
    }
})

export default i18n