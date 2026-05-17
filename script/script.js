/**
 * ============================================================
 * TOCAÊ – script.js
 * Plataforma de aprendizado musical
 * ============================================================
 *
 * Para adicionar novos vídeos, basta inserir um novo objeto
 * no array `videos` abaixo, seguindo o mesmo padrão.
 * O restante do código cuidará de tudo automaticamente.
 * ============================================================
 */

/* ============================================================
   BANCO DE DADOS DE VÍDEOS
   Adicione novos vídeos aqui ↓
   ============================================================ */
const videos = [
  // ── VIOLÃO ────────────────────────────────────────────────
  {
    titulo: "Aula 01 - INTRODUÇÃO - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Introdução do curso completo de violão para iniciantes. Primeiros passos e preparação.",
    youtube: "https://www.youtube.com/watch?v=-oT2SfILGCY",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 02 - COMO TROCAR CORDAS DO VIOLÃO - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Aprenda a trocar as cordas do violão corretamente, garantindo melhor som e durabilidade.",
    youtube: "https://www.youtube.com/watch?v=yB9AqmAI9g0&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=2",
    thumbnail: "assets/img/thumb.png"  },
  {
    titulo: "Aula 03 - COMO AFINAR O VIOLÃO - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Técnicas e dicas para afinar seu violão de ouvido ou com aplicativos. Mantenha seu instrumento sempre afinado.",
    youtube: "https://www.youtube.com/watch?v=Ruv4gyxcl-s&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=3&pp=iAQB",
    thumbnail: "assets/img/thumb.png"  },
  {
    titulo: "Aula 04 - COMO LER CIFRAS - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Aprenda a ler cifras de forma simples e rápida. O segredo para tocar suas músicas favoritas.",
    youtube: "https://www.youtube.com/watch?v=79FfQdFf1mc&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=4&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 05 - COMO LER TABLATURA - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Descomplique a tablatura e entenda como ler todos os números e símbolos para tocar solos e melodias.",
    youtube: "https://www.youtube.com/watch?v=8XHafoUWm98&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=5&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 06 - POSTURA e POSIÇÃO DAS MÃOS - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Postura correta e posição das mãos para tocar sem dores e evoluir mais rápido no violão.",
    youtube: "https://www.youtube.com/watch?v=ehHQiPHirHA&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=6&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 07 - ACORDES MAIORES - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Domine os acordes maiores (C, D, E, G, A, etc.) e comece a tocar suas primeiras músicas.",
    youtube: "https://www.youtube.com/watch?v=RRDFTygve1M&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=7&pp=iAQB0gcJCQQLAYcqIYzv",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 08 - ACORDES MENORES - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Aprenda os acordes menores (Am, Dm, Em, etc.) e amplie seu repertório de harmonias.",
    youtube: "https://www.youtube.com/watch?v=X7cQw5lj4iM&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=8&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 09 - DICAS para TROCAR de ACORDES - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Técnicas infalíveis para trocar de acordes com mais velocidade e precisão.",
    youtube: "https://www.youtube.com/watch?v=nppz4Wq-D_E&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=9&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 10 - RITMOS de VIOLÃO que você PRECISA saber - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Os principais ritmos para violão: bossa nova, samba, rock, pop e muito mais.",
    youtube: "https://www.youtube.com/watch?v=f_Vlmy9uGdc&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=10&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 11 - DEDILHADO - 3 padrões fáceis - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Aprenda 3 padrões de dedilhado fáceis para dar um toque especial às suas músicas.",
    youtube: "https://www.youtube.com/watch?v=1MndeduC9fQ&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=11&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 12 - CAMPINHA (Introdução de Violão) - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Como fazer a famosa 'campinha' para iniciar músicas com um toque mais profissional.",
    youtube: "https://www.youtube.com/watch?v=1nOd4FcVoj4&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=12&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 13 - PRIMEIRA MÚSICA no Violão - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Música fácil para iniciantes. Toque sua primeira música completa com poucos acordes.",
    youtube: "https://www.youtube.com/watch?v=cAxs0WA7uhA&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=13&pp=iAQB0gcJCQQLAYcqIYzv",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 14 - Samba/Pagode (parte 1) - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Primeira parte do ritmo de samba e pagode no violão. A levada que você precisa saber.",
    youtube: "https://www.youtube.com/watch?v=EDT-5ykwHm4&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=14&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 15 - Samba/Pagode (parte 2) - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Continuação do samba/pagode. Variações e dicas para tocar com mais swing.",
    youtube: "https://www.youtube.com/watch?v=855K3-RBeAc&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=15&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },
  {
    titulo: "Aula 16 - Dica FINAL - Curso de violão BÁSICO",
    categoria: "Violão",
    descricao: "Última aula do curso com dicas finais para você continuar evoluindo no violão.",
    youtube: "https://www.youtube.com/watch?v=epUtlcS7mYs&list=PLPXmN3KeXMo6PSh5-XBjw5NUKpycSic3d&index=16&pp=iAQB",
    thumbnail: "assets/img/thumb.png"
  },

  // ── GUITARRA ──────────────────────────────────────────────
  {
    titulo: "Aprenda ou Revise - Guitarra do Zero com este Curso Grátis - Rodrigo Ferrarezi",
    categoria: "Guitarra",
    descricao: "Aprenda os power chords e comece a tocar seus riffs favoritos de rock e metal.",
    youtube: "https://www.youtube.com/watch?v=FarPV-el_g8&list=PL19fL74WZJO9VatMFzLsZsWyGREIZ8-AY&index=1&pp=iAQB",
    thumbnail: "assets/img/thumb_guitar.png"
  }
];

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

/**
 * Extrai o ID do vídeo a partir de uma URL do YouTube.
 * Suporta os formatos:
 *   - youtube.com/watch?v=XXXXX
 *   - youtu.be/XXXXX
 *   - youtube.com/embed/XXXXX
 */
function extrairYoutubeId(url) {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Converte o nome da categoria para uma classe CSS segura.
 * Ex: "Notícias" → "noticias"
 */
function categoriaParaClasse(categoria) {
  return categoria
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // remove acentos
    .replace(/\s+/g, '-');             // espaços → hífen
}

/**
 * Retorna o emoji da categoria correspondente.
 */
function emojiCategoria(categoria) {
  const emojis = {
    'Violão':   '🎸',
    'Guitarra': '⚡',
    'Teclado':  '🎹',
    'Bateria':  '🥁',
    'Canto':    '🎤',
    'Notícias': '📰'
  };
  return emojis[categoria] || '🎵';
}

/* ============================================================
   RENDERIZAÇÃO DOS CARDS
   ============================================================ */

/**
 * Cria e retorna o elemento HTML de um card de vídeo.
 * @param {Object} video - Objeto com dados do vídeo
 * @param {number} index - Índice para stagger animation
 */
function criarCard(video, index) {
  const id = extrairYoutubeId(video.youtube);
  const thumb = video.thumbnail || (id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '');
  const classeCategoria = categoriaParaClasse(video.categoria);
  const emoji = emojiCategoria(video.categoria);

  const article = document.createElement('article');
  article.className = 'card';
  article.setAttribute('role', 'listitem');
  article.setAttribute('tabindex', '0');
  article.setAttribute('aria-label', `${video.titulo} – categoria ${video.categoria}`);

  // Stagger na animação de entrada
  article.style.animationDelay = `${index * 0.06}s`;

  article.innerHTML = `
    <div class="card__thumb">
      <img
        src="${thumb}"
        alt="Thumbnail do vídeo: ${video.titulo}"
        loading="lazy"
        onerror="this.src='https://placehold.co/640x360/13131f/7c3aed?text=Tocaê'"
      />
      <div class="card__play-overlay" aria-hidden="true">
        <div class="card__play-icon">▶</div>
      </div>
      <span class="card__categoria-badge badge--${classeCategoria}" aria-hidden="true">
        ${emoji} ${video.categoria}
      </span>
    </div>
    <div class="card__body">
      <h3 class="card__titulo">${video.titulo}</h3>
      <p class="card__descricao">${video.descricao}</p>
      <div class="card__footer">
        <button
          class="btn btn--primary card__btn"
          data-youtube="${video.youtube}"
          data-titulo="${video.titulo}"
          data-categoria="${video.categoria}"
          data-descricao="${video.descricao}"
          aria-label="Assistir: ${video.titulo}"
        >
          ▶ Assistir Agora
        </button>
      </div>
    </div>
  `;

  // Evento de clique no card inteiro (exceto botão, que tem próprio listener)
  article.addEventListener('click', (e) => {
    if (!e.target.closest('.card__btn')) {
      abrirModal(video);
    }
  });

  // Teclado: Enter / Space abre o modal
  article.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      abrirModal(video);
    }
  });

  return article;
}

/**
 * Renderiza os cards no grid.
 * @param {Array} lista - Array filtrado de vídeos
 */
function renderizarVideos(lista) {
  const grid      = document.getElementById('videosGrid');
  const emptyState = document.getElementById('emptyState');
  const count     = document.getElementById('videosCount');

  // Limpa o grid
  grid.innerHTML = '';

  if (lista.length === 0) {
    grid.hidden = true;
    emptyState.hidden = false;
    count.textContent = '';
    return;
  }

  grid.hidden = false;
  emptyState.hidden = true;
  count.textContent = `${lista.length} vídeo${lista.length !== 1 ? 's' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;

  lista.forEach((video, i) => {
    const card = criarCard(video, i);
    grid.appendChild(card);
  });

  // Delegação de eventos para os botões "Assistir Agora"
  grid.querySelectorAll('.card__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const video = {
        youtube:   btn.dataset.youtube,
        titulo:    btn.dataset.titulo,
        categoria: btn.dataset.categoria,
        descricao: btn.dataset.descricao
      };
      abrirModal(video);
    });
  });
}

/* ============================================================
   FILTROS E BUSCA
   ============================================================ */

let categoriaAtiva = 'todos';
let termoBusca    = '';

/**
 * Filtra o array de vídeos com base na categoria ativa
 * e no termo de busca digitado.
 */
function filtrarERendarizar() {
  const lista = videos.filter(video => {
    const matchCategoria =
      categoriaAtiva === 'todos' || video.categoria === categoriaAtiva;

    const busca = termoBusca.toLowerCase().trim();
    const matchBusca =
      busca === '' ||
      video.titulo.toLowerCase().includes(busca) ||
      video.descricao.toLowerCase().includes(busca) ||
      video.categoria.toLowerCase().includes(busca);

    return matchCategoria && matchBusca;
  });

  renderizarVideos(lista);
}

/**
 * Configura os botões de filtro de categoria.
 */
function inicializarFiltros() {
  const botoes = document.querySelectorAll('.filtro-btn');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      categoriaAtiva = btn.dataset.categoria;

      // Atualiza estado visual / aria
      botoes.forEach(b => {
        b.classList.remove('filtro-btn--ativo');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('filtro-btn--ativo');
      btn.setAttribute('aria-pressed', 'true');

      filtrarERendarizar();

      // Rola suavemente até o grid
      document.getElementById('videos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/**
 * Configura os campos de busca (header e mobile).
 */
function inicializarBusca() {
  const inputs = document.querySelectorAll('.search-input');

  inputs.forEach(input => {
    // Sincroniza os dois inputs
    input.addEventListener('input', (e) => {
      termoBusca = e.target.value;
      // Sincroniza o outro campo
      inputs.forEach(i => { if (i !== input) i.value = termoBusca; });
      filtrarERendarizar();
    });

    // Busca ao pressionar Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Botão limpar filtros no empty state
  document.getElementById('limparBusca')?.addEventListener('click', () => {
    termoBusca = '';
    categoriaAtiva = 'todos';
    inputs.forEach(i => i.value = '');

    document.querySelectorAll('.filtro-btn').forEach(b => {
      b.classList.remove('filtro-btn--ativo');
      b.setAttribute('aria-pressed', 'false');
    });
    const todosBtn = document.querySelector('[data-categoria="todos"]');
    todosBtn?.classList.add('filtro-btn--ativo');
    todosBtn?.setAttribute('aria-pressed', 'true');

    filtrarERendarizar();
  });
}

/* ============================================================
   MODAL DE VÍDEO
   ============================================================ */

const modal        = document.getElementById('videoModal');
const modalIframe  = document.getElementById('modalIframe');
const modalTitulo  = document.getElementById('modalTitulo');
const modalCategoria = document.getElementById('modalCategoria');
const modalDescricao = document.getElementById('modalDescricao');
const modalFechar  = document.getElementById('modalFechar');
const modalBackdrop = document.getElementById('modalBackdrop');

// Guarda o elemento que abriu o modal para restaurar foco
let elementoFocoAnterior = null;

/**
 * Abre o modal e carrega o vídeo.
 * @param {Object} video
 */
function abrirModal(video) {
  const id = extrairYoutubeId(video.youtube);
  if (!id) {
    console.warn('ID do YouTube inválido:', video.youtube);
    return;
  }

  elementoFocoAnterior = document.activeElement;

  modalTitulo.textContent   = video.titulo;
  modalCategoria.textContent = `${emojiCategoria(video.categoria)} ${video.categoria}`;
  modalDescricao.textContent = video.descricao;
  modalIframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';

  // Foco no botão fechar
  setTimeout(() => modalFechar.focus(), 50);
}

/**
 * Fecha o modal e para o vídeo.
 */
function fecharModal() {
  modal.hidden = true;
  modalIframe.src = '';           // Para o vídeo
  document.body.style.overflow = '';

  // Restaura o foco
  if (elementoFocoAnterior) {
    elementoFocoAnterior.focus();
    elementoFocoAnterior = null;
  }
}

/**
 * Configura os eventos do modal.
 */
function inicializarModal() {
  // Botão X
  modalFechar.addEventListener('click', fecharModal);

  // Clicar no backdrop
  modalBackdrop.addEventListener('click', fecharModal);

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      fecharModal();
    }
  });

  // Trap focus dentro do modal
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focaveis = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const primeiro = focaveis[0];
    const ultimo   = focaveis[focaveis.length - 1];

    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  });
}

/* ============================================================
   HEADER – comportamento ao rolar
   ============================================================ */
function inicializarHeader() {
  const header = document.getElementById('header');

  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('header--scrolled', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
  );

  const hero = document.querySelector('.hero');
  if (hero) observer.observe(hero);
}

/* ============================================================
   MENU MOBILE
   ============================================================ */
function inicializarMenuMobile() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('mobileMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const aberto = !menu.hidden;
    menu.hidden = aberto;
    toggle.setAttribute('aria-expanded', String(!aberto));
    toggle.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
    toggle.classList.toggle('aberto', !aberto);
  });

  // Fecha menu ao clicar em links
  menu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      toggle.classList.remove('aberto');
    });
  });
}

/* ============================================================
   LINKS DE CATEGORIA NO FOOTER
   ============================================================ */
function inicializarFooterCategorias() {
  document.querySelectorAll('.footer-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.categoria;

      // Ativa o filtro
      categoriaAtiva = cat;
      termoBusca = '';
      document.querySelectorAll('.search-input').forEach(i => i.value = '');

      document.querySelectorAll('.filtro-btn').forEach(b => {
        b.classList.remove('filtro-btn--ativo');
        b.setAttribute('aria-pressed', 'false');
      });
      const alvo = document.querySelector(`[data-categoria="${cat}"]`);
      alvo?.classList.add('filtro-btn--ativo');
      alvo?.setAttribute('aria-pressed', 'true');

      filtrarERendarizar();

      // Rola até o grid
      document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   ANIMAÇÃO DE ENTRADA AO ROLAR (Intersection Observer)
   ============================================================ */
function inicializarAnimacoesScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observa seções
  document.querySelectorAll('.sobre__card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza todos os vídeos inicialmente
  renderizarVideos(videos);

  // Inicializa todos os módulos
  inicializarFiltros();
  inicializarBusca();
  inicializarModal();
  inicializarHeader();
  inicializarMenuMobile();
  inicializarFooterCategorias();
  inicializarAnimacoesScroll();

  console.log(`✅ Tocaê carregado com ${videos.length} vídeos.`);
});
