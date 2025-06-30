# 🚀 AstroBot - Uzay Temalı React Web Uygulaması

![AstroBot Logo](https://img.shields.io/badge/AstroBot-Cosmic%20Experience-purple?style=for-the-badge&logo=rocket)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.5.0-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📖 Proje Hakkında

**AstroBot**, uzayın derinliklerinden gelen modern bir React web uygulamasıdır. Cosmic temalı tasarımıyla kullanıcıları büyüleyici bir dijital yolculuğa çıkarır. Etkileyici animasyonlar, splash screen ve responsive tasarımıyla geliştirilmiş interaktif bot platformudur.

### ✨ Temel Özellikler

- 🌌 **Cosmic UI/UX Tasarımı** - Uzay temalı modern arayüz
- ✨ **Splash Screen Animasyonu** - Etkileyici giriş deneyimi  
- 🎭 **Framer Motion Animasyonları** - Akıcı geçişler ve etkiler
- 📱 **Tam Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Background Animasyonları** - Dinamik arka plan efektleri
- 🔧 **TypeScript Desteği** - Tip güvenli geliştirme
- ⚡ **Vite ile Hızlı Build** - Lightning-fast development

## 🚀 Teknoloji Stack'i

### Frontend
- **React 18.2.0** - Modern UI kütüphanesi
- **TypeScript 5.2.2** - Tip güvenli JavaScript
- **Vite 4.5.0** - Next generation build aracı

### UI/UX & Animasyon
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Production-ready motion library
- **Lucide React 0.294.0** - Beautiful & consistent icons
- **Class Variance Authority 0.7.0** - Component variant yönetimi
- **Tailwind Merge 2.0.0** - Tailwind class birleştirme
- **clsx 2.0.0** - Conditional class names

### Geliştirme Araçları
- **ESLint 8.53.0** - Code linting
- **TypeScript ESLint 6.10.0** - TypeScript linting
- **PostCSS 8.4.31** - CSS preprocessing
- **Autoprefixer 10.4.16** - CSS vendor prefixing

## 📁 Proje Yapısı

```
astrobot/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── BackgroundAnimation.tsx  # Arka plan animasyonu
│   │   ├── Features.tsx    # Özellikler bölümü
│   │   ├── Hero.tsx        # Ana hero bölümü
│   │   ├── SplashScreen.tsx # Splash screen
│   │   ├── Stats.tsx       # İstatistikler
│   │   └── Testimonials.tsx # Testimonials
│   ├── hooks/              # Özel React hook'ları
│   ├── layout/             # Layout bileşenleri
│   │   ├── Header.tsx      # Navbar/Header
│   │   └── Footer.tsx      # Footer
│   ├── lib/                # Yardımcı fonksiyonlar
│   ├── pages/              # Sayfa bileşenleri
│   ├── styles/             # CSS dosyaları
│   ├── data/               # Statik veri
│   ├── App.tsx             # Ana uygulama bileşeni
│   └── main.tsx            # Uygulama giriş noktası
├── index.html              # HTML template
├── tailwind.config.ts      # Tailwind CSS yapılandırması
├── vite.config.ts          # Vite yapılandırması
├── tsconfig.json           # TypeScript yapılandırması
└── package.json            # Proje bağımlılıkları
```

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm, yarn veya pnpm

### Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd astrobot
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

4. **Tarayıcıda açın:**
```
http://localhost:5173
```

## 📜 Mevcut Script'ler

```bash
npm run dev          # Geliştirme sunucusunu başlat
npm run build        # Production build oluştur (TypeScript + Vite)
npm run lint         # ESLint ile kod kontrolü
npm run preview      # Build'i önizle
```

## 🎨 Kod Standartları

Proje, modern React ve TypeScript best practice'lerini takip eder:

- **TypeScript Strict Mode** aktif
- **ESLint** ile kod kalitesi kontrolü
- **Tailwind CSS** utility-first yaklaşımı
- **Framer Motion** animasyon standartları
- **Responsive-first** design approach

### Bileşen Yapısı
```tsx
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string;
  children: React.ReactNode;
}

const CosmicComponent = ({ title, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-cosmic-950 text-white"
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </motion.div>
  );
};

export default CosmicComponent;
```

## 🌟 Özellik Detayları

### Splash Screen
- Uygulama açılışında etkileyici animasyon
- Framer Motion ile smooth geçişler
- Loading durumu yönetimi

### Cosmic Tasarım
- Uzay temalı color palette
- Custom Tailwind cosmic renkleri
- Gradient ve glow efektleri

### Background Animasyonları
- Dinamik parçacık sistemleri
- Smooth CSS animasyonları
- Performance optimized

## 🔧 Özelleştirme

### Tailwind Config
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#0a0a0f',
          // ... diğer cosmic renkler
        }
      }
    }
  }
}
```

## 📄 Lisans

MIT License - Açık kaynak kullanım için ücretsiz.

## 🤝 Katkıda Bulunma

Proje geliştirme sürecine katkıda bulunmak için:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni cosmic özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 🔄 Versiyon Geçmişi

- **v0.0.0** - İlk sürüm (2024)
  - Cosmic UI/UX tasarımı
  - Splash screen implementasyonu
  - Framer Motion animasyonları
  - TypeScript & Vite setup
  - Responsive web tasarımı

---

**AstroBot ile uzayın derinliklerinde kaybolun! 🚀✨** 