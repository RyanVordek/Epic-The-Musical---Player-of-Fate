/* === EPIC Player - Media Session API (Notificação/Barra de Tarefas) === */

let currentTrackMetadata = null;

/**
 * Atualiza a sessão de mídia com informações da faixa
 * Mostra na barra de notificação/tarefas com artwork (bandeira)
 */
function updateMediaSession(track) {
  if ('mediaSession' in navigator) {
    currentTrackMetadata = track;
    
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title || 'Música Desconhecida',
        artist: 'EPIC: The Musical',
        album: track.saga || 'Album',
        artwork: [
          {
            src: track.flag || '',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: track.flag || '',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: track.flag || '',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: track.flag || '',
            sizes: '256x256',
            type: 'image/png'
          }
        ]
      });

      navigator.mediaSession.playbackState = 'playing';
    } catch (e) {
      console.log('MediaSession metadata error:', e);
    }
  }
}

/**
 * Atualiza o estado de reprodução (playing/paused)
 */
function updateMediaSessionPlayState(isPlaying) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
  }
}

/**
 * Atualiza o tempo atual e duração na sessão de mídia
 */
function updateMediaSessionPosition(currentTime, duration) {
  if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
    try {
      navigator.mediaSession.setPositionState({
        duration: duration,
        playbackRate: 1.0,
        position: currentTime
      });
    } catch (e) {
      console.log('MediaSession position error:', e);
    }
  }
}

/**
 * Configurar action handlers da barra de tarefas
 * Estes permitem controlar o player através da notificação
 */
if ('mediaSession' in navigator) {
  // Play
  navigator.mediaSession.setActionHandler('play', () => {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.click();
  });

  // Pause
  navigator.mediaSession.setActionHandler('pause', () => {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.click();
  });

  // Próxima faixa
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.click();
  });

  // Faixa anterior
  navigator.mediaSession.setActionHandler('previoustrack', () => {
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.click();
  });

  // Seek (avançar/retroceder)
  navigator.mediaSession.setActionHandler('seekto', (details) => {
    const audio = document.getElementById('audio');
    if (audio) {
      if (details.fastSeek && 'fastSeek' in audio) {
        audio.fastSeek(details.seekTime);
      } else {
        audio.currentTime = details.seekTime;
      }
    }
  });
}

// Exportar funções para uso global
window.updateMediaSession = updateMediaSession;
window.updateMediaSessionPlayState = updateMediaSessionPlayState;
window.updateMediaSessionPosition = updateMediaSessionPosition;
