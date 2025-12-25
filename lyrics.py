import json
import re

# Tenta importar a biblioteca. Se não tiver, avisa.
try:
    import syncedlyrics
except ImportError:
    print("ERRO: Você precisa instalar a biblioteca primeiro!")
    print("Digite no terminal: pip install syncedlyrics")
    exit()

# Lista das músicas (Copiei do seu JS para garantir os nomes exatos)
tracks = [
  {"title": "The Horse and the Infant", "saga": "Troy", "id": "bWIgy-Ls-SU"},
  {"title": "Just a Man", "saga": "Troy", "id": "hNdvp9Qo8PA"},
  {"title": "Full Speed Ahead", "saga": "Troy", "id": "x3KOt-3T73c"},
  {"title": "Open Arms", "saga": "Troy", "id": "-oMZw8DQbaI"},
  {"title": "Warrior of the Mind", "saga": "Troy", "id": "oB8lqgO9e24"},
  {"title": "Polyphemus", "saga": "Cyclops", "id": "nDQyFHmuQls"},
  {"title": "Survive", "saga": "Cyclops", "id": "rND9-qeA7Lo"},
  {"title": "Remember Them", "saga": "Cyclops", "id": "NGxrhdgAg18"},
  {"title": "My Goodbye", "saga": "Cyclops", "id": "xrFaGilus6o"},
  {"title": "Storm", "saga": "Ocean", "id": "sRntPU_s-gI"},
  {"title": "Luck Runs Out", "saga": "Ocean", "id": "ZxQHl2fVJ-s"},
  {"title": "Keep Your Friends Close", "saga": "Ocean", "id": "Z-Y0iMmFzFE"},
  {"title": "Ruthlessness", "saga": "Ocean", "id": "3dzBlSeCJNg"},
  {"title": "Puppeteer", "saga": "Circe", "id": "Mz2ASoe6OG0"},
  {"title": "Wouldn't You Like", "saga": "Circe", "id": "xkIBM71E0_w"},
  {"title": "Done For", "saga": "Circe", "id": "km6NITbLVHc"},
  {"title": "There Are Other Ways", "saga": "Circe", "id": "uXdLAOBANGE"},
  {"title": "The Underworld", "saga": "Underworld", "id": "cyqul8pKHko"},
  {"title": "No Longer You", "saga": "Underworld", "id": "BZ8qL5P270Q"},
  {"title": "Monster", "saga": "Underworld", "id": "4Q0Un9PQ0wk"},
  {"title": "Suffering", "saga": "Thunder", "id": "-u_-wpcpY-0"},
  {"title": "Different Beast", "saga": "Thunder", "id": "x2r7dKWFbP8"},
  {"title": "Scylla", "saga": "Thunder", "id": "PTGWC85tLfg"},
  {"title": "Mutiny", "saga": "Thunder", "id": "x_xJEfDB7y0"},
  {"title": "Thunder Bringer", "saga": "Thunder", "id": "cAId1J7msWI"},
  {"title": "Legendary", "saga": "Wisdom", "id": "Z9NNit-z8wE"},
  {"title": "Little Wolf", "saga": "Wisdom", "id": "-gqU2V1snnc"},
  {"title": "We'll Be Fine", "saga": "Wisdom", "id": "3pIXn3zHkpc"},
  {"title": "Love in Paradise", "saga": "Wisdom", "id": "jWOpikivhbQ"},
  {"title": "God Games", "saga": "Wisdom", "id": "5m3Xe7iDivk"},
  {"title": "Not Sorry for Loving You", "saga": "Vengeance", "id": "7M3gzo-hSCo"},
  {"title": "Dangerous", "saga": "Vengeance", "id": "jZW2GnEcjpM"},
  {"title": "Charybdis", "saga": "Vengeance", "id": "4n0U1Erga90"},
  {"title": "Get in the Water", "saga": "Vengeance", "id": "8njnTRKGdYw"},
  {"title": "Six Hundred Strike", "saga": "Vengeance", "id": "T3rnBuSTNhY"},
  {"title": "The Challenge", "saga": "Ithaca", "id": "Bb6ssHUxrNk"},
  {"title": "... Hold Them Down", "saga": "Ithaca", "id": "oeDDZNKHOVo"},
  {"title": "Odysseus", "saga": "Ithaca", "id": "UjcV3CYfCsM"},
  {"title": "I Can't Help but Wonder", "saga": "Ithaca", "id": "FBfT0E6oF6I"},
  {"title": "Would You Fall in Love with Me Again", "saga": "Ithaca", "id": "rF5tJ8xuaIc"}
]

print("=== GERADOR AUTOMÁTICO DE LETRAS EPIC ===")
print("Isso pode demorar um pouco dependendo da sua internet...")

js_content = """
/* ========= EPIC Player - Letras Automáticas ========== */

function parseLRC(lrcString) {
    if(!lrcString) return [];
    const lines = lrcString.split('\\n');
    const result = [];
    for (const line of lines) {
        const match = line.match(/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\](.*)/);
        if (match) {
            const min = parseInt(match[1]);
            const sec = parseInt(match[2]);
            const ms = match[3] ? parseInt(match[3]) : 0;
            const text = match[4].trim();
            const time = min * 60 + sec + (ms / 1000);
            if (text) result.push({ time, text });
        }
    }
    return result;
}

const LYRICS_DB = {
"""

for track in tracks:
    print(f"Buscando: {track['title']}...")
    
    # Termo de busca: "Epic The Musical - Nome da Musica" para ser exato
    search_term = f"Epic The Musical {track['title']}"
    
    try:
        # Busca a letra no formato LRC
        lrc = syncedlyrics.search(search_term)
        
        if lrc:
            # Limpa caracteres perigosos para JS (crase e quebras extras)
            lrc_safe = lrc.replace("`", "'").replace("\\", "\\\\")
            
            # Adiciona ao arquivo JS
            js_content += f'    "{track["id"]}": parseLRC(`{lrc_safe}`),\n\n'
            print("  [OK] Letra encontrada!")
        else:
            print("  [X] Letra não encontrada.")
            
    except Exception as e:
        print(f"  [ERRO] Falha ao buscar: {e}")

js_content += "};\n"

# Salva o arquivo final
with open("lyrics.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("\nConcluído! O arquivo 'lyrics.js' foi criado com sucesso.")