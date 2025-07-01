import React from 'react'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Ana zemin - gece laciverti */}
      <div className="absolute inset-0 bg-night-navy"></div>
      
      {/* Yumuşak gölgeli gezegen şekilleri - sol üst */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-wine-purple/30 to-wine-purple/10 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute top-32 left-32 w-16 h-16 bg-sand-beige/20 rounded-full blur-xl opacity-40"></div>
      
      {/* Sağ üst gezegen grubu */}
      <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-silver-line/25 to-wine-purple/15 rounded-full blur-xl opacity-50"></div>
      <div className="absolute top-16 right-40 w-40 h-40 bg-wine-purple/20 rounded-full blur-3xl opacity-30"></div>
      
      {/* Sol alt gezegen */}
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-gradient-to-tr from-sand-beige/15 to-wine-purple/20 rounded-full blur-2xl opacity-45"></div>
      <div className="absolute bottom-20 left-40 w-12 h-12 bg-silver-line/30 rounded-full blur-lg opacity-60"></div>
      
      {/* Sağ alt büyük gezegen */}
      <div className="absolute bottom-24 right-32 w-36 h-36 bg-gradient-to-tl from-wine-purple/25 to-sand-beige/15 rounded-full blur-3xl opacity-35"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-wine-purple/20 rounded-full blur-xl opacity-50"></div>
      
      {/* Orta alan çok subtle gezegen efektleri */}
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-radial from-wine-purple/10 to-transparent rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-radial from-sand-beige/12 to-transparent rounded-full blur-2xl opacity-30"></div>
      
      {/* İnce çizgiler - gümüş akcentler */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-silver-line/20 to-transparent opacity-30"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-silver-line/15 to-transparent opacity-25"></div>
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-silver-line/15 to-transparent opacity-20"></div>
      <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-silver-line/10 to-transparent opacity-15"></div>
      
      {/* Minimal nokta akcentleri */}
      <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-honey-energy/60 rounded-full blur-sm"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-sand-beige/70 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-wine-purple/80 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-silver-line/60 rounded-full blur-sm"></div>
      
      {/* Çok subtle overlay - lüks görünüm için */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-navy/50 via-transparent to-night-navy/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-wine-purple/5 via-transparent to-sand-beige/5"></div>
    </div>
  )
}

export default BackgroundAnimation 