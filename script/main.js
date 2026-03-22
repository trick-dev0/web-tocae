// script.js (completo)
// ================= DADOS DAS LIÇÕES =================
const lessonsData = [
  { id: 1, nome: "Trem Bala", instrumento: "Violão", dificuldade: "fácil", xp: 30, letra: "Não para, não para... Eu vou seguindo em frente.\nEu quero estar perto de você\nPra nunca mais me perder\nNão para, não para..." },
  { id: 2, nome: "Garota de Ipanema", instrumento: "Violão", dificuldade: "médio", xp: 50, letra: "Olha que coisa mais linda, mais cheia de graça.\nÉ ela menina que vem e que passa\nNum doce balanço, a caminho do mar..." },
  { id: 3, nome: "Imagine", instrumento: "Teclado", dificuldade: "médio", xp: 55, letra: "Imagine there's no heaven\nIt's easy if you try\nNo hell below us\nAbove us only sky..." },
  { id: 4, nome: "Smells Like Teen Spirit", instrumento: "Guitarra", dificuldade: "difícil", xp: 80, letra: "Load up on guns, bring your friends\nIt's fun to lose and to pretend\nShe's over-bored and self-assured\nOh no, I know a dirty word..." },
  { id: 5, nome: "Aquarela", instrumento: "Teclado", dificuldade: "fácil", xp: 30, letra: "Numa folha qualquer eu desenho um sol amarelo\nE com cinco ou seis retas é fácil fazer um castelo\nCorro o lápis em torno da mão e me dou uma luva\nE se faço chover, com dois riscos tenho um guarda-chuva..." },
  { id: 6, nome: "Yesterday", instrumento: "Violão", dificuldade: "médio", xp: 45, letra: "Yesterday, all my troubles seemed so far away\nNow it looks as though they're here to stay\nOh, I believe in yesterday..." },
  { id: 7, nome: "Billie Jean", instrumento: "Guitarra", dificuldade: "difícil", xp: 75, letra: "She was more like a beauty queen from a movie scene\nI said don't mind, but what do you mean I am the one\nWho will dance on the floor in the round..." }
];

// Estado global
let userXP = 0;
let completedLessons = new Set();
let currentLesson = null;
let lyricInterval = null;
let isPlayingSimulation = false;
let currentLineIndex = 0;
let lessonLines = [];

// Elementos DOM
const homeScreen = document.getElementById('homeScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const lessonScreen = document.getElementById('lessonScreen');

// Botões
const btnComecar = document.getElementById('btnComecar');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const completeLessonBtn = document.getElementById('completeLessonBtn');
const lessonsListDiv = document.getElementById('lessonsList');

// Elementos de XP e progresso
const totalXpDisplay = document.getElementById('totalXpDisplay');
const xpProgressFill = document.getElementById('xpProgressFill');

// Elementos da aula
const lessonNameSpan = document.getElementById('lessonName');
const lessonInstrumentIcon = document.getElementById('lessonInstrumentIcon');
const lessonXpBadge = document.getElementById('lessonXpBadge');
const lyricsContentDiv = document.getElementById('lyricsContent');
const lessonProgressFill = document.getElementById('lessonProgressFill');
const videoPlaceholder = document.getElementById('videoPlaceholder');

// ================= FUNÇÕES AUXILIARES =================
function updateXPUI() {
  totalXpDisplay.innerText = userXP;
  // Meta XP: 500 para 100% (gamificação)
  let percent = Math.min(100, (userXP / 500) * 100);
  xpProgressFill.style.width = `${percent}%`;
}

function addXP(amount) {
  userXP += amount;
  updateXPUI();
  saveProgressToLocal();
  
  // Animação de feedback
  const xpDisplay = document.getElementById('totalXpDisplay');
  xpDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    xpDisplay.style.transform = 'scale(1)';
  }, 200);
}

function saveProgressToLocal() {
  localStorage.setItem('tocae_userXP', userXP);
  localStorage.setItem('tocae_completed', JSON.stringify([...completedLessons]));
}

function loadProgress() {
  const savedXP = localStorage.getItem('tocae_userXP');
  if(savedXP) userXP = parseInt(savedXP) || 0;
  const savedCompleted = localStorage.getItem('tocae_completed');
  if(savedCompleted) {
    try {
      const arr = JSON.parse(savedCompleted);
      completedLessons = new Set(arr);
    } catch(e) {}
  }
  updateXPUI();
}

// Renderizar dashboard com cards
function renderDashboard() {
  if(!lessonsListDiv) return;
  lessonsListDiv.innerHTML = '';
  
  lessonsData.forEach(lesson => {
    const isCompleted = completedLessons.has(lesson.id);
    const card = document.createElement('div');
    card.className = 'card-lesson';
    
    let diffClass = '';
    let diffText = '';
    if(lesson.dificuldade === 'fácil') {
      diffClass = 'diff-facil';
      diffText = '⭐ Fácil';
    } else if(lesson.dificuldade === 'médio') {
      diffClass = 'diff-medio';
      diffText = '⭐⭐ Médio';
    } else {
      diffClass = 'diff-dificil';
      diffText = '⭐⭐⭐ Difícil';
    }
    
    card.innerHTML = `
      <div class="lesson-card-title">${lesson.nome}</div>
      <div class="lesson-details">
        <span class="badge-instrument">${getInstrumentIcon(lesson.instrumento)} ${lesson.instrumento}</span>
        <span class="badge-diff ${diffClass}">${diffText}</span>
      </div>
      <div style="font-size:0.9rem; margin: 8px 0; color: var(--purple-dark);">
        🏆 ${lesson.xp} XP
      </div>
      <button class="btn-learn" data-id="${lesson.id}" ${isCompleted ? 'disabled style="opacity:0.6;"' : ''}>
        ${isCompleted ? '✅ Concluída' : '🎸 Aprender'}
      </button>
    `;
    
    const btn = card.querySelector('.btn-learn');
    if(btn && !isCompleted) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openLesson(lesson.id);
      });
    }
    lessonsListDiv.appendChild(card);
  });
}

function getInstrumentIcon(instrumento) {
  const icons = {
    'Violão': '🎸',
    'Teclado': '🎹',
    'Guitarra': '🎸',
    'Bateria': '🥁',
    'Baixo': '🎸'
  };
  return icons[instrumento] || '🎵';
}

// Abrir tela de aula
function openLesson(lessonId) {
  // Parar qualquer simulação anterior
  stopLyricSimulation();
  isPlayingSimulation = false;
  
  const lesson = lessonsData.find(l => l.id === lessonId);
  if(!lesson) return;
  currentLesson = lesson;
  
  // Atualizar cabeçalho
  lessonNameSpan.innerText = lesson.nome;
  lessonInstrumentIcon.innerText = getInstrumentIcon(lesson.instrumento);
  lessonXpBadge.innerText = `+${lesson.xp} XP`;
  
  // Resetar progresso da lição
  if(lessonProgressFill) lessonProgressFill.style.width = '0%';
  
  // Processar letra em linhas
  lessonLines = lesson.letra.split('\n').filter(line => line.trim().length > 0);
  if(lessonLines.length === 0) {
    lessonLines = [lesson.letra];
  }
  
  // Renderizar letra
  lyricsContentDiv.innerHTML = lessonLines.map((line, idx) => 
    `<p data-line="${idx}">${escapeHtml(line)}</p>`
  ).join('');
  
  // Resetar índice atual
  currentLineIndex = 0;
  
  // Destacar primeira linha
  highlightCurrentLine();
  
  // Resetar botão play/pause
  if(playPauseBtn) playPauseBtn.innerText = '▶ Play';
  
  // Trocar telas com animação
  homeScreen.classList.add('hidden');
  dashboardScreen.classList.add('hidden');
  lessonScreen.classList.remove('hidden');
  
  // Scroll para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function highlightCurrentLine() {
  const allLines = document.querySelectorAll('#lyricsContent p');
  allLines.forEach((line, idx) => {
    if(idx === currentLineIndex) {
      line.classList.add('active-line');
      // Scroll suave para a linha ativa
      line.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      line.classList.remove('active-line');
    }
  });
}

function stopLyricSimulation() {
  if(lyricInterval) {
    clearInterval(lyricInterval);
    lyricInterval = null;
  }
  isPlayingSimulation = false;
}

// Simulação sincronizada de letra com progresso
function startLyricSimulation() {
  if(lyricInterval) clearInterval(lyricInterval);
  if(!lessonLines.length) return;
  
  currentLineIndex = 0;
  highlightCurrentLine();
  
  // Atualizar progresso inicial
  updateLessonProgress();
  
  lyricInterval = setInterval(() => {
    // Avançar para próxima linha
    if(currentLineIndex < lessonLines.length - 1) {
      currentLineIndex++;
      highlightCurrentLine();
      updateLessonProgress();
    } else {
      // Chegou ao fim da música
      pauseLyricSimulation();
      playPauseBtn.innerText = '▶ Play';
      // Se chegou ao final, completa automaticamente o progresso
      if(lessonProgressFill) {
        lessonProgressFill.style.width = '100%';
      }
      showFeedback('🎵 Música completa! Agora conclua a lição! 🎵');
    }
  }, 3500); // A cada 3.5 segundos muda a linha
  
  isPlayingSimulation = true;
}

function updateLessonProgress() {
  if(!lessonLines.length) return;
  const progress = (currentLineIndex / (lessonLines.length - 1)) * 100;
  if(lessonProgressFill) {
    lessonProgressFill.style.width = `${Math.min(100, progress)}%`;
  }
}

function pauseLyricSimulation() {
  if(lyricInterval) {
    clearInterval(lyricInterval);
    lyricInterval = null;
  }
  isPlayingSimulation = false;
}

// Concluir lição
function completeCurrentLesson() {
  if(!currentLesson) return;
  
  const lessonId = currentLesson.id;
  if(completedLessons.has(lessonId)) {
    showFeedback("🎉 Você já concluiu essa lição! 🎉");
    return;
  }
  
  // Verificar progresso
  const progressWidth = parseFloat(lessonProgressFill.style.width) || 0;
  let earnedXP = currentLesson.xp;
  let feedbackMsg = '';
  
  if(progressWidth >= 90) {
    earnedXP = currentLesson.xp;
    feedbackMsg = `✨ Perfeito! +${earnedXP} XP! ✨`;
  } else if(progressWidth >= 60) {
    earnedXP = Math.floor(currentLesson.xp * 0.8);
    feedbackMsg = `🎵 Bom trabalho! +${earnedXP} XP! 🎵`;
  } else if(progressWidth >= 30) {
    earnedXP = Math.floor(currentLesson.xp * 0.6);
    feedbackMsg = `👍 Continue praticando! +${earnedXP} XP! 👍`;
  } else {
    earnedXP = Math.floor(currentLesson.xp * 0.3);
    feedbackMsg = `💪 Treine mais para ganhar mais XP! +${earnedXP} XP 💪`;
  }
  
  addXP(earnedXP);
  completedLessons.add(lessonId);
  saveProgressToLocal();
  showFeedback(feedbackMsg);
  
  // Animação de confete no botão
  const btn = completeLessonBtn;
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 200);
  
  // Voltar para dashboard após 1.5 segundos
  setTimeout(() => {
    goToDashboard();
  }, 1500);
}

function showFeedback(msg) {
  // Criar elemento de feedback flutuante
  const feedback = document.createElement('div');
  feedback.innerText = msg;
  feedback.style.position = 'fixed';
  feedback.style.bottom = '80px';
  feedback.style.left = '50%';
  feedback.style.transform = 'translateX(-50%)';
  feedback.style.background = 'linear-gradient(135deg, var(--purple-main), var(--purple-dark))';
  feedback.style.color = 'white';
  feedback.style.padding = '12px 24px';
  feedback.style.borderRadius = '40px';
  feedback.style.zIndex = '1000';
  feedback.style.fontWeight = 'bold';
  feedback.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  feedback.style.animation = 'fadeSlideUp 0.3s ease';
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.style.opacity = '0';
    feedback.style.transform = 'translateX(-50%) translateY(-20px)';
    feedback.style.transition = 'all 0.3s ease';
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

function goToDashboard() {
  stopLyricSimulation();
  lessonScreen.classList.add('hidden');
  dashboardScreen.classList.remove('hidden');
  renderDashboard();
  currentLesson = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToHome() {
  stopLyricSimulation();
  homeScreen.classList.remove('hidden');
  dashboardScreen.classList.add('hidden');
  lessonScreen.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simular vídeo com placeholder interativo
function setupVideoSimulation() {
  if(videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
      showFeedback('🎬 Vídeo aula: pratique os acordes junto com a música! 🎬');
      // Efeito visual de clique
      videoPlaceholder.style.transform = 'scale(0.98)';
      setTimeout(() => {
        videoPlaceholder.style.transform = 'scale(1)';
      }, 200);
    });
  }
}

// ================= EVENT LISTENERS =================
btnComecar.addEventListener('click', () => {
  homeScreen.classList.add('hidden');
  dashboardScreen.classList.remove('hidden');
  renderDashboard();
});

backToDashboardBtn.addEventListener('click', () => {
  if(lyricInterval) clearInterval(lyricInterval);
  goToDashboard();
});

playPauseBtn.addEventListener('click', () => {
  if(!currentLesson) return;
  if(isPlayingSimulation) {
    pauseLyricSimulation();
    playPauseBtn.innerText = '▶ Play';
    showFeedback('⏸ Letra pausada');
  } else {
    startLyricSimulation();
    playPauseBtn.innerText = '⏸ Pause';
    showFeedback('▶ Letra sincronizada em reprodução');
  }
});

completeLessonBtn.addEventListener('click', () => {
  if(currentLesson) completeCurrentLesson();
});

// Permitir voltar ao início clicando no logo (opcional)
const logoSmall = document.querySelector('.logo-small');
if(logoSmall) {
  logoSmall.style.cursor = 'pointer';
  logoSmall.addEventListener('click', () => {
    if(confirm('Voltar para a tela inicial?')) {
      goToHome();
    }
  });
}

// Inicialização
loadProgress();
renderDashboard();
setupVideoSimulation();

// Adicionar animação de hover nos cards via CSS já está no estilo

// Exportar funções para debug (opcional)
window.debug = {
  addXP: (amount) => addXP(amount),
  resetProgress: () => {
    userXP = 0;
    completedLessons.clear();
    saveProgressToLocal();
    updateXPUI();
    renderDashboard();
    showFeedback('Progresso resetado!');
  }
};