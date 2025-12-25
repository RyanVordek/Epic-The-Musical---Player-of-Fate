/* ========= EPIC Player - Ultimate Edition (Mobile & Sagas) ========== */

// --- CONFIGURAÇÃO DE TEMAS ---
const themeBySaga = {
    Troy:       { bg: "#2d1b14", accent: "#fbbf24" },
    Cyclops:    { bg: "#450a0a", accent: "#ef4444" },
    Ocean:      { bg: "#082f49", accent: "#38bdf8" },
    Circe:      { bg: "#581c87", accent: "#f0abfc" },
    Underworld: { bg: "#111827", accent: "#9ca3af" },
    Thunder:    { bg: "#713f12", accent: "#facc15" },
    Wisdom:     { bg: "#312e81", accent: "#a78bfa" },
    Vengeance:  { bg: "#064e3b", accent: "#34d399" },
    Ithaca:     { bg: "#7f1d1d", accent: "#fb7185" },
};

/* --- LISTA DE FAIXAS --- */
const tracks = [
  { title: "The Horse and the Infant", saga: "Troy", index: 1, id: "bWIgy-Ls-SU", stickers: [0,1,2,3] },
  { title: "Just a Man", saga: "Troy", index: 2, id: "hNdvp9Qo8PA", stickers: [4,5,6] },
  { title: "Full Speed Ahead", saga: "Troy", index: 3, id: "x3KOt-3T73c", stickers: [7,8,9] },
  { title: "Open Arms", saga: "Troy", index: 4, id: "-oMZw8DQbaI", stickers: [10,11,12] },
  { title: "Warrior of the Mind", saga: "Troy", index: 5, id: "oB8lqgO9e24", stickers: [13,14,15] },
  { title: "Polyphemus", saga: "Cyclops", index: 6, id: "nDQyFHmuQls", stickers: [16,17,18] },
  { title: "Survive", saga: "Cyclops", index: 7, id: "rND9-qeA7Lo", stickers: [19,20,21] },
  { title: "Remember Them", saga: "Cyclops", index: 8, id: "NGxrhdgAg18", stickers: [22,23] },
  { title: "My Goodbye", saga: "Cyclops", index: 9, id: "xrFaGilus6o", stickers: [24,25] },
  { title: "Storm", saga: "Ocean", index: 10, id: "sRntPU_s-gI", stickers: [26,27,28] },
  { title: "Luck Runs Out", "saga": "Ocean", index: 11, id: "ZxQHl2fVJ-s", stickers: [29,30] },
  { title: "Keep Your Friends Close", "saga": "Ocean", index: 12, id: "Z-Y0iMmFzFE", stickers: [31,32] },
  { title: "Ruthlessness", saga: "Ocean", index: 13, id: "3dzBlSeCJNg", stickers: [33,34] },
  { title: "Puppeteer", saga: "Circe", index: 14, id: "Mz2ASoe6OG0", stickers: [35,36] },
  { title: "Wouldn't You Like", saga: "Circe", index: 15, id: "xkIBM71E0_w", stickers: [37,38] },
  { title: "Done For", saga: "Circe", index: 16, id: "km6NITbLVHc", stickers: [39,40] },
  { title: "There Are Other Ways", "saga": "Circe", index: 17, id: "uXdLAOBANGE", stickers: [41,42] },
  { title: "The Underworld", saga: "Underworld", index: 18, "id": "cyqul8pKHko", stickers: [43,44] },
  { title: "No Longer You", saga: "Underworld", index: 19, "id": "BZ8qL5P270Q", stickers: [45,46] },
  { title: "Monster", saga: "Underworld", index: 20, "id": "4Q0Un9PQ0wk", stickers: [47,48] },
  { title: "Suffering", saga: "Thunder", index: 21, "id": "-u_-wpcpY-0", stickers: [49,50] },
  { title: "Different Beast", saga: "Thunder", index: 22, "id": "x2r7dKWFbP8", stickers: [51,52] },
  { title: "Scylla", saga: "Thunder", index: 23, "id": "PTGWC85tLfg", stickers: [53,54] },
  { title: "Mutiny", saga: "Thunder", index: 24, "id": "x_xJEfDB7y0", stickers: [55,56] },
  { title: "Thunder Bringer", saga: "Thunder", index: 25, "id": "cAId1J7msWI", stickers: [57,58] },
  { title: "Legendary", saga: "Wisdom", index: 26, "id": "Z9NNit-z8wE", stickers: [59,60] },
  { title: "Little Wolf", saga: "Wisdom", index: 27, "id": "-gqU2V1snnc", stickers: [61,62] },
  { title: "We'll Be Fine", saga: "Wisdom", index: 28, "id": "3pIXn3zHkpc", stickers: [63,64] },
  { title: "Love in Paradise", saga: "Wisdom", index: 29, "id": "jWOpikivhbQ", stickers: [65,66] },
  { title: "God Games", saga: "Wisdom", index: 30, "id": "5m3Xe7iDivk", stickers: [67,68] },
  { title: "Not Sorry for Loving You", saga: "Vengeance", index: 31, "id": "7M3gzo-hSCo", stickers: [69,70] },
  { title: "Dangerous", saga: "Vengeance", index: 32, "id": "jZW2GnEcjpM", stickers: [71,72] },
  { title: "Charybdis", saga: "Vengeance", index: 33, "id": "4n0U1Erga90", stickers: [73,74] },
  { title: "Get in the Water", saga: "Vengeance", index: 34, "id": "8njnTRKGdYw", stickers: [75,76] },
  { title: "Six Hundred Strike", saga: "Vengeance", index: 35, "id": "T3rnBuSTNhY", stickers: [77,78] },
  { title: "The Challenge", saga: "Ithaca", index: 36, "id": "Bb6ssHUxrNk", stickers: [79,80] },
  { title: "Hold Them Down", saga: "Ithaca", index: 37, "id": "oeDDZNKHOVo", stickers: [81,82] },
  { title: "Odysseus", saga: "Ithaca", index: 38, "id": "UjcV3CYfCsM", stickers: [83,84] },
  { title: "I Can't Help but Wonder", saga: "Ithaca", index: 39, "id": "FBfT0E6oF6I", stickers: [85,86] },
  { title: "Would You Fall in Love with Me Again", saga: "Ithaca", index: 40, "id": "rF5tJ8xuaIc", stickers: [87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109] }
];

/* =================================================================
   1. SISTEMA DE STATS & CONQUISTAS
   ================================================================= */
const AchievementList = [
    { id: 'first_play', name: "O Início", desc: "Ouviu a primeira música.", check: (s) => s.totalPlays >= 1 },
    { id: 'fan_10', name: "Fã Dedicado", desc: "Ouviu 10 músicas.", check: (s) => s.totalPlays >= 10 },
    { id: 'fan_50', name: "Viciado", desc: "Ouviu 50 músicas.", check: (s) => s.totalPlays >= 50 },
    { id: 'lover', name: "Amado", desc: "Favoritou 3 músicas.", check: (s) => s.favCount >= 3 },
    { id: 'max_vol', name: "No Talo", desc: "Colocou o volume no máximo.", check: (s, track, vol) => vol >= 1 }
];

const StatsManager = {
    data: { plays: {}, achievements: [], totalPlays: 0, favCount: 0 },
    
    load() {
        const stored = localStorage.getItem('epic_stats_final');
        if (stored) this.data = JSON.parse(stored);
    },
    
    save() {
        localStorage.setItem('epic_stats_final', JSON.stringify(this.data));
    },

    showToast(title) {
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = `🏆 Conquista: <strong>${title}</strong>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    },

    checkAchievements(track, vol = 0) {
        AchievementList.forEach(ach => {
            if (!this.data.achievements.includes(ach.id)) {
                if (ach.check(this.data, track, vol)) {
                    this.data.achievements.push(ach.id);
                    this.showToast(ach.name);
                    this.save();
                }
            }
        });
    },

    logPlay(track) {
        if (!this.data.plays[track.id]) this.data.plays[track.id] = 0;
        this.data.plays[track.id]++;
        this.data.totalPlays++;
        this.checkAchievements(track);
        this.save();
    },

    logVolume(track, vol) {
        this.checkAchievements(track, vol);
    },

    toggleFavorite(track) {
        const id = track.id;
        const key = 'fav_' + id;
        const isFav = !(localStorage.getItem(key) === 'true');
        localStorage.setItem(key, isFav);
        if (isFav) this.data.favCount++;
        else this.data.favCount--;
        this.checkAchievements(track);
        this.save();
        return isFav;
    },

    isFavorite(id) { return localStorage.getItem('fav_' + id) === 'true'; },

    updateUI() {
        let mostPlayed = { id: null, count: 0 };
        for(let id in this.data.plays) {
            if(this.data.plays[id] > mostPlayed.count) mostPlayed = { id, count: this.data.plays[id] };
        }
        const track = tracks.find(t => t.id === mostPlayed.id);
        const mostPlayedText = track ? `${track.title} (${mostPlayed.count}x)` : "Nenhuma";
        document.getElementById('statMostPlayed').textContent = mostPlayedText;
        document.getElementById('statTotalPlays').textContent = this.data.totalPlays;
        document.getElementById('statBadges').textContent = `${this.data.achievements.length} Desbloqueadas`;
    }
};

/* =================================================================
   2. GERENCIADOR DE FUNDOS (EFEITOS VISUAIS)
   ================================================================= */
const BackgroundManager = {
    currentSaga: null,
    waterRenderer: null,
    
    init() {
        this.waterRenderer = new RippleRenderer();
        this.troySvg = document.getElementById('saga-troy');
        this.troyPath = document.getElementById('horsePath');
        
        // Preparar caminho SVG de Troia
        if(this.troyPath) {
            this.pathLength = this.troyPath.getTotalLength();
            this.troyPath.style.strokeDasharray = this.pathLength;
            this.troyPath.style.strokeDashoffset = this.pathLength;
        }
    },
    
    setSaga(sagaName) {
        this.currentSaga = sagaName;
        
        // 1. Resetar tudo
        if(this.waterRenderer) this.waterRenderer.active = false;
        if(this.troySvg) this.troySvg.style.display = 'none';
        document.getElementById('waterCanvas').style.display = 'none';
        
        // 2. Ativar Específico
        switch(sagaName) {
            case 'Troy':
                if(this.troySvg) {
                    this.troySvg.style.display = 'block';
                    // Resetar animação
                    this.troyPath.style.strokeDashoffset = this.pathLength;
                }
                break;
                
            case 'Ocean':
            case 'Cyclops':
            case 'Vengeance': // Adicionado Vengeance para água também
                if(this.waterRenderer) {
                    this.waterRenderer.active = true;
                    document.getElementById('waterCanvas').style.display = 'block';
                }
                break;
                
            default:
                // Sagas sem efeito especial usam apenas a cor de fundo do CSS
                break;
        }
    },
    
    updateAnimation(currentTime, duration) {
        if (!duration) return;
        const progress = currentTime / duration;
        
        // Animação Troia: Desenhar constelação
        if (this.currentSaga === 'Troy' && this.troyPath) {
            const drawLength = this.pathLength * progress;
            this.troyPath.style.strokeDashoffset = this.pathLength - drawLength;
        }
    }
};

/* =================================================================
   3. EFEITO DE ÁGUA (OTIMIZADO)
   ================================================================= */
class RippleRenderer {
    constructor() {
        this.canvas = document.getElementById('waterCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.active = false;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Criar gotas aleatórias
        setInterval(() => {
            if (this.active && !document.hidden) {
                this.addRipple(Math.random()*this.width, Math.random()*this.height);
            }
        }, 400); // Menos frequente para economizar mobile
        
        this.loop();
    }
    
    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    
    addRipple(x, y) {
        this.ripples.push({x, y, age: 0, size: 2, power: 1.0});
    }
    
    loop() {
        if (!this.active || document.hidden) {
            requestAnimationFrame(() => this.loop());
            return;
        }

        this.ctx.clearRect(0,0, this.width, this.height);
        
        // Cor da água baseada na saga (levemente azulada)
        this.ctx.fillStyle = "rgba(8, 47, 73, 0.1)"; 
        this.ctx.fillRect(0,0, this.width, this.height);
        
        for(let i=0; i<this.ripples.length; i++) {
            let r = this.ripples[i];
            r.age++;
            r.size += 1.5; 
            r.power -= 0.01;
            
            if(r.power <= 0) {
                this.ripples.splice(i, 1);
                i--;
                continue;
            }
            
            this.ctx.beginPath();
            this.ctx.ellipse(r.x, r.y, r.size, r.size * 0.5, 0, 0, Math.PI * 2);
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = `rgba(100, 200, 255, ${r.power * 0.4})`;
            this.ctx.stroke();
        }
        requestAnimationFrame(() => this.loop());
    }
}

/* =================================================================
   4. GERENCIADOR DE LETRAS
   ================================================================= */
const LyricsManager = {
    isEnabled: false,
    currentLines: [],
    
    init() {
        this.content = document.getElementById('lyricsContent');
        this.btn = document.getElementById('lyricsBtn');
        if(this.btn) this.btn.onclick = () => this.toggle();
        if(this.content) this.content.onclick = () => { if(this.isEnabled) this.toggle(); };
    },
    
    toggle() {
        this.isEnabled = !this.isEnabled;
        if(this.isEnabled) {
            document.body.classList.add('lyrics-active');
            this.btn.style.color = 'var(--accent)';
            if(tracks[currentIndex]) this.load(tracks[currentIndex].id);
        } else {
            document.body.classList.remove('lyrics-active');
            this.btn.style.color = '#fff';
        }
    },
    
    load(trackId) {
        if (typeof LYRICS_DB === 'undefined' || !LYRICS_DB[trackId]) {
            this.content.innerHTML = '<div class="lyrics-placeholder">...</div>';
            this.currentLines = [];
            return;
        }
        this.currentLines = LYRICS_DB[trackId];
        let html = '';
        this.currentLines.forEach((line, index) => {
            html += `<p class="l-line" data-idx="${index}">${line.text}</p>`;
        });
        this.content.innerHTML = html;
    },
    
    sync(currentTime) {
        if (!this.isEnabled || !this.currentLines.length) return;
        let activeIdx = -1;
        for (let i = 0; i < this.currentLines.length; i++) {
            if (currentTime >= this.currentLines[i].time) activeIdx = i;
            else break;
        }
        if (activeIdx !== -1) {
            const old = this.content.querySelector('.l-line.active');
            if(old) old.classList.remove('active');
            const currentEl = this.content.querySelector(`.l-line[data-idx="${activeIdx}"]`);
            if (currentEl) {
                currentEl.classList.add('active');
                currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
};

/* =================================================================
   5. PLAYER CORE
   ================================================================= */
let currentIndex = 0;
let stickerInterval = null;
let currentStickerIndex = 0;
let isShuffle = false;

const audio = document.getElementById('audioEl');
const playBtn = document.getElementById('playPauseBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const favBtn = document.getElementById('favBtn');
const vinylDisk = document.getElementById('vinylDisk');
const albumCover = document.getElementById('albumCover');
const stickerChar = document.getElementById('stickerCharacter');
const progressSlider = document.getElementById('progressSlider');
const volumeSlider = document.getElementById('volumeSlider');

function init() {
    StatsManager.load();
    BackgroundManager.init();
    LyricsManager.init();
    
    document.getElementById('intro').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('mainContent').hidden = false;
        loadTrack(0);
    }, 500);

    document.getElementById('statsBtn').onclick = () => {
        StatsManager.updateUI();
        document.getElementById('statsModal').classList.add('show');
    };
    document.getElementById('closeStats').onclick = () => {
        document.getElementById('statsModal').classList.remove('show');
    };
    
    favBtn.onclick = () => {
        const t = tracks[currentIndex];
        const isFav = StatsManager.toggleFavorite(t);
        updateFavIcon(isFav);
    };
    shuffleBtn.onclick = toggleShuffle;
}

window.startExperience = init;

function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;
    currentIndex = index;
    const t = tracks[index];

    StatsManager.logPlay(t);
    updateFavIcon(StatsManager.isFavorite(t.id));
    BackgroundManager.setSaga(t.saga); // Ativar fundo da saga

    document.getElementById('currentTitle').textContent = `${t.index}. ${t.title}`;
    document.getElementById('currentSaga').textContent = t.saga;
    
    LyricsManager.load(t.id);

    const longName = `${t.title} [${t.id}]`;
    audio.src = `Audio/${longName}.opus`;
    albumCover.src = `Covers/${t.id}.jpg`;
    
    // Tema de Cores
    const theme = themeBySaga[t.saga] || themeBySaga.Troy;
    document.documentElement.style.setProperty('--accent', theme.accent);
    // Mudança suave de cor de fundo
    document.body.style.background = `radial-gradient(circle at center, ${theme.bg} 0%, #000 100%)`;
    
    handleStickers(t);

    document.querySelectorAll('.track').forEach(d => d.classList.remove('active'));
    const item = document.querySelector(`.track[data-index="${index}"]`);
    if(item) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    vinylDisk.classList.remove('spinning');
    updatePlayIcon(false);
    progressSlider.value = 0;
}

audio.addEventListener('error', (e) => {
    const t = tracks[currentIndex];
    const src = audio.src;
    // Fallback simples para MP3 se OPUS falhar
    if (src.includes(".opus")) {
        const longName = `${t.title} [${t.id}]`;
        audio.src = `Audio/${longName}.mp3`;
        if(playBtn.dataset.playing === "true") audio.play();
    }
});

function handleStickers(track) {
    clearInterval(stickerInterval);
    currentStickerIndex = 0;
    const update = () => {
        if(!track.stickers || track.stickers.length === 0) {
            stickerChar.classList.add('hide'); return;
        }
        const num = track.stickers[currentStickerIndex];
        const path = `Kaohto/Kaohto2023-${num}.webp`;
        stickerChar.classList.add('hide');
        setTimeout(() => {
            stickerChar.src = path;
            stickerChar.onload = () => stickerChar.classList.remove('hide');
            stickerChar.onerror = () => { if(path.endsWith('.webp')) stickerChar.src = path.replace('.webp','.png'); }
        }, 300);
    };
    update();
    if (track.stickers && track.stickers.length > 1) {
        stickerInterval = setInterval(() => {
            currentStickerIndex = (currentStickerIndex + 1) % track.stickers.length;
            update();
        }, 8000);
    }
}

function togglePlay() {
    if (audio.paused) {
        audio.play().then(() => {
            vinylDisk.classList.add('spinning');
            updatePlayIcon(true);
            playBtn.dataset.playing = "true";
        }).catch(err => console.error(err));
    } else {
        audio.pause();
        vinylDisk.classList.remove('spinning');
        updatePlayIcon(false);
        playBtn.dataset.playing = "false";
    }
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    if (isShuffle) {
        shuffleBtn.style.color = 'var(--accent)';
        shuffleBtn.style.background = 'rgba(255,255,255,0.1)';
    } else {
        shuffleBtn.style.color = '#fff';
        shuffleBtn.style.background = 'transparent';
    }
}

function updatePlayIcon(isPlaying) {
    document.getElementById('iconPlay').style.display = isPlaying ? 'none' : 'block';
    document.getElementById('iconPause').style.display = isPlaying ? 'block' : 'none';
}

function updateFavIcon(isFav) {
    const icon = favBtn.querySelector('svg');
    if(isFav) {
        icon.setAttribute('fill', 'currentColor');
        favBtn.style.color = 'var(--accent)';
    } else {
        icon.setAttribute('fill', 'none');
        favBtn.style.color = '#fff';
    }
}

volumeSlider.addEventListener('change', (e) => {
    StatsManager.logVolume(tracks[currentIndex], e.target.value);
});
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

function changeTrack(offset) {
    let next;
    if (offset === 1 && isShuffle) {
        do { next = Math.floor(Math.random() * tracks.length); } while (next === currentIndex && tracks.length > 1);
    } else {
        next = currentIndex + offset;
        if(next >= tracks.length) next = 0;
        if(next < 0) next = tracks.length - 1;
    }
    loadTrack(next);
    setTimeout(togglePlay, 100); 
}

audio.addEventListener('timeupdate', () => {
    const cur = audio.currentTime;
    if(audio.duration) {
        const pct = (cur / audio.duration) * 100;
        progressSlider.value = pct;
        document.documentElement.style.setProperty('--progress-width', `${pct}%`);
        document.getElementById('currentTime').textContent = formatTime(cur);
        document.getElementById('totalTime').textContent = formatTime(audio.duration);
        
        // Atualizar Animação da Saga
        BackgroundManager.updateAnimation(cur, audio.duration);
    }
    LyricsManager.sync(cur);
});

audio.addEventListener('ended', () => changeTrack(1));
progressSlider.addEventListener('input', (e) => {
    if(audio.duration) audio.currentTime = (e.target.value / 100) * audio.duration;
});

const grid = document.getElementById('tracksGrid');
tracks.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'track';
    el.dataset.index = i;
    el.innerHTML = `<div>${t.index}. ${t.title}</div><div class="t-meta">${t.saga}</div>`;
    el.onclick = () => { loadTrack(i); setTimeout(togglePlay, 100); };
    grid.appendChild(el);
});

playBtn.onclick = togglePlay;
document.getElementById('nextBtn').onclick = () => changeTrack(1);
document.getElementById('prevBtn').onclick = () => changeTrack(-1);
document.getElementById('forwardBtn').onclick = () => { audio.currentTime += 10; };
document.getElementById('rewindBtn').onclick = () => { audio.currentTime -= 10; };

function formatTime(s) {
    if(isNaN(s)) return "00:00";
    const m = Math.floor(s/60);
    const sec = Math.floor(s%60);
    return `${m}:${sec<10?'0'+sec:sec}`;
}
