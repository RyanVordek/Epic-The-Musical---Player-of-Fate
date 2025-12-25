/* === EPIC Player - Orientation Handler (Deteccao de Rotacao da Tela) === */

/**
 * Detecta e ajusta as proporcoes do player baseado na orientacao da tela
 * Portrait (em pe): Proporcoes verticais otimizadas
 * Landscape (deitado): Proporcoes horizontais otimizadas
 */

const OrientationHandler = (() => {
  let currentOrientation = null;

  /**
   * Detecta a orientacao atual da tela
   * @returns {string} 'portrait' ou 'landscape'
   */
  function getOrientation() {
    if (window.innerHeight > window.innerWidth) {
      return 'portrait';
    } else {
      return 'landscape';
    }
  }

  /**
   * Aplica estilos para modo portrait (em pe)
   */
  function applyPortraitStyles() {
    console.log('🎵 Orientacao: PORTRAIT (em pe)');
    
    const root = document.documentElement;
    const style = root.style;

    // Vinil e player
    const vinylDisk = document.querySelector('.vinyl-disk');
    const playerScene = document.querySelector('.player-scene');
    const characterPopup = document.querySelector('.character-popup');

    if (vinylDisk) {
      vinylDisk.style.width = '260px';
      vinylDisk.style.height = '260px';
    }

    if (playerScene) {
      playerScene.style.width = '240px';
      playerScene.style.height = '240px';
    }

    if (characterPopup) {
      characterPopup.style.height = '180px';
      characterPopup.style.bottom = '-20px';
      characterPopup.style.right = '-40px';
    }

    // Container e layout
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.gridTemplateColumns = '1fr';
      hero.style.padding = '15px 10px';
      hero.style.gap = '20px';
      hero.style.textAlign = 'center';
    }

    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.style.padding = '10px';
      mainContainer.style.paddingBottom = '40px';
    }

    // Grid de faixas
    const tracksGrid = document.querySelector('.tracks-grid');
    if (tracksGrid) {
      tracksGrid.style.gridTemplateColumns = '1fr';
    }

    // Now playing
    const nowplaying = document.querySelector('.nowplaying');
    if (nowplaying) {
      nowplaying.style.padding = '15px';
      nowplaying.style.paddingBottom = '60px';
      nowplaying.style.minHeight = '100%';
    }

    // Botoes
    const iconButtons = document.querySelectorAll('.btn.icon-btn');
    iconButtons.forEach((btn, index) => {
      // Primeiro grupo de botoes menores
      if (index < 6) {
        btn.style.width = '40px';
        btn.style.height = '40px';
      }
      // Segundo grupo um pouco maior
      else {
        btn.style.width = '50px';
        btn.style.height = '50px';
      }
    });

    const primaryBtn = document.querySelector('.btn.primary');
    if (primaryBtn) {
      primaryBtn.style.width = '80px';
      primaryBtn.style.height = '80px';
    }
  }

  /**
   * Aplica estilos para modo landscape (deitado)
   */
  function applyLandscapeStyles() {
    console.log('🎵 Orientacao: LANDSCAPE (deitado)');
    
    const root = document.documentElement;
    const style = root.style;

    // Vinil e player - maior para landscape
    const vinylDisk = document.querySelector('.vinyl-disk');
    const playerScene = document.querySelector('.player-scene');
    const characterPopup = document.querySelector('.character-popup');

    if (vinylDisk) {
      vinylDisk.style.width = '200px';
      vinylDisk.style.height = '200px';
    }

    if (playerScene) {
      playerScene.style.width = '180px';
      playerScene.style.height = '180px';
    }

    if (characterPopup) {
      characterPopup.style.height = '120px';
      characterPopup.style.bottom = '-10px';
      characterPopup.style.right = '-30px';
      characterPopup.style.display = 'none'; // Esconde em landscape
    }

    // Container - layout horizontal
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.gridTemplateColumns = '1fr 1fr';
      hero.style.padding = '10px';
      hero.style.gap = '15px';
      hero.style.textAlign = 'left';
    }

    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.style.padding = '8px';
      mainContainer.style.paddingBottom = '20px';
    }

    // Grid de faixas - 2 colunas em landscape
    const tracksGrid = document.querySelector('.tracks-grid');
    if (tracksGrid) {
      tracksGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      tracksGrid.style.marginTop = '20px';
    }

    // Now playing compacto
    const nowplaying = document.querySelector('.nowplaying');
    if (nowplaying) {
      nowplaying.style.padding = '10px';
      nowplaying.style.paddingBottom = '30px';
      nowplaying.style.minHeight = 'auto';
      nowplaying.style.marginTop = '15px';
    }

    // Botoes menores em landscape
    const iconButtons = document.querySelectorAll('.btn.icon-btn');
    iconButtons.forEach((btn) => {
      btn.style.width = '36px';
      btn.style.height = '36px';
    });

    const primaryBtn = document.querySelector('.btn.primary');
    if (primaryBtn) {
      primaryBtn.style.width = '64px';
      primaryBtn.style.height = '64px';
    }
  }

  /**
   * Atualiza o layout quando a orientacao muda
   */
  function handleOrientationChange() {
    const newOrientation = getOrientation();
    
    if (newOrientation !== currentOrientation) {
      currentOrientation = newOrientation;
      
      if (currentOrientation === 'portrait') {
        applyPortraitStyles();
      } else {
        applyLandscapeStyles();
      }
      
      // Dispatch custom event para outros scripts
      window.dispatchEvent(new CustomEvent('orientationChanged', {
        detail: { orientation: currentOrientation }
      }));
    }
  }

  /**
   * Inicializa o handler
   */
  function init() {
    console.log('🎬 Iniciando OrientationHandler...');
    
    // Aplicar estilos iniciais
    handleOrientationChange();
    
    // Listener para mudancas de orientacao
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    
    console.log('✅ OrientationHandler inicializado');
  }

  /**
   * Limpar event listeners
   */
  function destroy() {
    window.removeEventListener('orientationchange', handleOrientationChange);
    window.removeEventListener('resize', handleOrientationChange);
  }

  return {
    init,
    destroy,
    getOrientation,
    handleOrientationChange
  };
})();

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    OrientationHandler.init();
  });
} else {
  OrientationHandler.init();
}

// Exportar globalmente
window.OrientationHandler = OrientationHandler;
