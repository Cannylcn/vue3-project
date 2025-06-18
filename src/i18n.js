// src/i18n.js
import { createI18n } from 'vue-i18n'
import messages from '@/assets/language.json'

// 创建 i18n 实例
const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: 'en', // 默认语言
    fallbackLocale: 'en', // 回退语言
    messages // 语言消息
})

export default i18n