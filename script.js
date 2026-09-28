/* =========================================================
   DADOS DO TREINAMENTO
   Para adicionar os vídeos depois:
   video: "https://www.youtube.com/watch?v=ID_DO_VIDEO"
   ou
   video: "https://youtu.be/ID_DO_VIDEO"
========================================================= */

const trainingModules = [
  {
    id: "primeiros-cadastros",
    number: "01",
    title: "Primeiros Cadastros",
    icon: "bi-building-gear",
    description: "Cadastros iniciais utilizados na preparação e organização da empresa.",
    lessons: [
      {
        id: "filial",
        title: "Cadastro de Filial",
        screen: "129 — Cadastro de Filial",
        description: "Aprenda a cadastrar e configurar uma filial no sistema.",
        video: ""
      },
      {
        id: "cargo",
        title: "Cadastro de Cargo",
        screen: "133 — Cadastro de Cargo",
        description: "Veja como criar e organizar os cargos utilizados pela empresa.",
        video: ""
      },
      {
        id: "funcionario",
        title: "Cadastro de Funcionário",
        screen: "132 — Cadastro de Funcionário",
        description: "Passo a passo para cadastrar funcionários e suas informações principais.",
        video: ""
      },
      {
        id: "fornecedor",
        title: "Cadastro de Fornecedores",
        screen: "164 — Cadastro de Fornecedores",
        description: "Aprenda a incluir e manter os dados dos fornecedores.",
        video: ""
      },
      {
        id: "cliente",
        title: "Cadastro de Clientes",
        screen: "107 — Cadastro de Clientes",
        description: "Veja como realizar o cadastro de clientes no sistema.",
        video: ""
      }
    ]
  },

  {
    id: "usuarios-acessos",
    number: "02",
    title: "Usuários e Acessos",
    icon: "bi-person-lock",
    description: "Gerenciamento de usuários, perfis, permissões e senhas.",
    lessons: [
      {
        id: "usuario",
        title: "Cadastro de Usuário",
        screen: "149 — Usuário",
        description: "Criação e manutenção dos usuários que acessam o sistema.",
        video: ""
      },
      {
        id: "acoes-perfil",
        title: "Ações de Perfil",
        screen: "101 — Ações de Perfil",
        description: "Configuração das ações e permissões vinculadas aos perfis.",
        video: ""
      },
      {
        id: "alterar-senha",
        title: "Alterar Senha do Usuário",
        screen: "234 — Alterar Senha do Usuário",
        description: "Veja como alterar a senha de acesso de um usuário.",
        video: ""
      },
      {
        id: "limpar-senha",
        title: "Limpar Senha do Usuário",
        screen: "C297 — Limpar Senha do Usuário",
        description: "Aprenda quando e como limpar a senha de um usuário.",
        video: ""
      }
    ]
  },

  {
    id: "produtos",
    number: "03",
    title: "Produtos",
    icon: "bi-box-seam",
    description: "Organização, classificação e cadastro completo dos produtos.",
    lessons: [
      {
        id: "grupo-produtos",
        title: "Grupos de Produtos",
        screen: "134 — Grupos de Produtos",
        description: "Criação dos grupos utilizados para organizar os produtos.",
        video: ""
      },
      {
        id: "subgrupo-produtos",
        title: "Subgrupo de Produtos",
        screen: "145 — Subgrupo de Produtos",
        description: "Veja como detalhar a organização dos produtos por subgrupos.",
        video: ""
      },
      {
        id: "marca-produto",
        title: "Cadastro de Marca de Produto",
        screen: "135 — Cadastro de Marca de Produto",
        description: "Cadastro das marcas relacionadas aos produtos.",
        video: ""
      },
      {
        id: "linha-produto",
        title: "Cadastro de Linha de Produto",
        screen: "446 — Cadastro de Linha de Produto",
        description: "Organização dos produtos por linhas.",
        video: ""
      },
      {
        id: "unidade-medida",
        title: "Unidade de Medida",
        screen: "290 — Unidade de Medida",
        description: "Configuração das unidades de medida utilizadas nos produtos.",
        video: ""
      },
      {
        id: "ncm",
        title: "Cadastro de NCM",
        screen: "236 — Cadastro de NCM",
        description: "Cadastro e consulta das classificações NCM.",
        video: ""
      },
      {
        id: "cadastro-produtos",
        title: "Cadastro de Produtos",
        screen: "159 — Cadastro de Produtos",
        description: "Cadastro completo do produto e de seus principais dados.",
        video: ""
      }
    ]
  },

  {
    id: "tributacao",
    number: "04",
    title: "Tributação",
    icon: "bi-receipt-cutoff",
    description: "Configurações fiscais e tributárias utilizadas nas operações do sistema.",
    lessons: [
      {
        id: "tipo-tributacao",
        title: "Cadastro Tipo de Tributação",
        screen: "466 — Cadastro Tipo de Tributação",
        description: "Definição dos tipos de tributação utilizados nas operações.",
        video: ""
      },
      {
        id: "icms",
        title: "Grupos de Tributação ICMS",
        screen: "287 — Grupos de Tributação ICMS",
        description: "Configuração de grupos e regras relacionadas ao ICMS.",
        video: ""
      },
      {
        id: "pis-cofins",
        title: "Grupo de Tributação PIS e COFINS",
        screen: "457 — Grupo de Tributação PIS e COFINS",
        description: "Configuração dos grupos tributários de PIS e COFINS.",
        video: ""
      },
      {
        id: "ipi",
        title: "Tributação de IPI",
        screen: "458 — Tributação de IPI",
        description: "Configuração das regras relacionadas ao IPI.",
        video: ""
      },
      {
        id: "classificacao-tributaria",
        title: "Classificação Tributária",
        screen: "343 — Classificação Tributária",
        description: "Organização e definição das classificações tributárias.",
        video: ""
      },
      {
        id: "ibs",
        title: "Grupo de IBS",
        screen: "342 — Grupo de IBS",
        description: "Configuração dos grupos relacionados ao IBS.",
        video: ""
      },
      {
        id: "cbs",
        title: "Grupo de CBS",
        screen: "340 — Grupo de CBS",
        description: "Configuração dos grupos relacionados à CBS.",
        video: ""
      },
      {
        id: "aliquota-pis-cofins",
        title: "Alíquotas de PIS e COFINS",
        screen: "829 — Alíquotas de PIS e COFINS",
        description: "Cadastro e manutenção das alíquotas de PIS e COFINS.",
        video: ""
      },
      {
        id: "aliquota-tributacao",
        title: "Alíquotas para Tributação",
        screen: "443 — Alíquotas para Tributação",
        description: "Cadastro das alíquotas utilizadas nas regras tributárias.",
        video: ""
      }
    ]
  },

  {
    id: "tabelas-preco",
    number: "05",
    title: "Tabelas de Preço",
    icon: "bi-tags",
    description: "Criação, manutenção e atualização das tabelas de preço.",
    lessons: [
      {
        id: "tabela-preco",
        title: "Cadastro de Tabela de Preço",
        screen: "146 — Cadastro de Tabela de Preço",
        description: "Criação e configuração das tabelas de preço.",
        video: ""
      },
      {
        id: "produto-tabela",
        title: "Produto da Tabela de Preço",
        screen: "147 — Produto da Tabela de Preço",
        description: "Associação e manutenção de produtos nas tabelas de preço.",
        video: ""
      },
      {
        id: "tabela-simplificada",
        title: "Tabela de Preço Simplificada",
        screen: "480 — Tabela de Preço Simplificada",
        description: "Utilização da manutenção simplificada de preços.",
        video: ""
      },
      {
        id: "copia-tabela",
        title: "Cópia de Tabelas de Preço",
        screen: "540 — Cópia de Tabelas de Preço",
        description: "Veja como duplicar uma tabela de preço existente.",
        video: ""
      },
      {
        id: "precos-lote",
        title: "Alteração de Tabela de Preços em Lote",
        screen: "541 — Alteração de Tabela de Preços em Lote",
        description: "Atualização de vários preços de forma agrupada.",
        video: ""
      },
      {
        id: "atualizacao-nota",
        title: "Atualização de Tabela pela Nota de Entrada",
        screen: "604 — Atualização de Tabela pela Nota de Entrada",
        description: "Atualização de preços a partir das informações da nota de entrada.",
        video: ""
      }
    ]
  },

  {
    id: "politicas-custos",
    number: "06",
    title: "Políticas e Custos",
    icon: "bi-calculator",
    description: "Políticas comerciais, percentuais e formação do preço de venda.",
    lessons: [
      {
        id: "politicas-comerciais",
        title: "Políticas Comerciais",
        screen: "143 — Políticas Comerciais",
        description: "Configuração das políticas comerciais utilizadas nas vendas.",
        video: ""
      },
      {
        id: "dvv",
        title: "Alteração de Percentual de DVV",
        screen: "637 — Alteração de Percentual de DVV",
        description: "Alteração do percentual de DVV aplicado no processo de formação de preço.",
        video: ""
      },
      {
        id: "simulador",
        title: "Simulador de Custo e Preço de Venda",
        screen: "503 — Simulador de Custo e Preço de Venda",
        description: "Simule custos e preços para apoiar a formação do valor de venda.",
        video: ""
      }
    ]
  },

  {
    id: "estoque-wms",
    number: "07",
    title: "Estoque e WMS",
    icon: "bi-boxes",
    description: "Estrutura física do estoque, endereçamento e consulta de produtos.",
    lessons: [
      {
        id: "tipo-estrutura-wms",
        title: "Tipo de Estrutura WMS",
        screen: "804 — Tipo de Estrutura WMS",
        description: "Cadastro dos tipos de estrutura utilizados no WMS.",
        video: ""
      },
      {
        id: "estrutura-wms",
        title: "Estrutura WMS",
        screen: "800 — Estrutura WMS",
        description: "Configuração da estrutura geral utilizada no armazenamento.",
        video: ""
      },
      {
        id: "ala-wms",
        title: "Ala WMS",
        screen: "801 — Ala WMS",
        description: "Cadastro das alas utilizadas na organização do estoque.",
        video: ""
      },
      {
        id: "deposito-wms",
        title: "Depósito WMS",
        screen: "802 — Depósito WMS",
        description: "Cadastro dos depósitos utilizados pelo WMS.",
        video: ""
      },
      {
        id: "endereco-wms",
        title: "Endereço WMS",
        screen: "803 — Endereço WMS",
        description: "Criação dos endereços de armazenagem.",
        video: ""
      },
      {
        id: "consulta-produto",
        title: "Consulta Detalhada de Produto",
        screen: "440 — Consulta Detalhada de Produto",
        description: "Consulta de informações detalhadas e movimentações do produto.",
        video: ""
      }
    ]
  },

  {
    id: "compras",
    number: "08",
    title: "Compras",
    icon: "bi-cart-check",
    description: "Fluxo de compras, conferência e entrada de mercadorias.",
    lessons: [
      {
        id: "pedido-compra",
        title: "Pedido de Compra",
        screen: "303 — Pedido de Compra",
        description: "Criação e manutenção dos pedidos de compra.",
        video: ""
      },
      {
        id: "conferencia-pedido",
        title: "Conferência dos Pedidos de Compra",
        screen: "614 — Conferência dos Pedidos de Compra",
        description: "Conferência dos pedidos antes da entrada das mercadorias.",
        video: ""
      },
      {
        id: "nota-entrada",
        title: "Nota Fiscal de Entrada",
        screen: "256 — Nota Fiscal de Entrada",
        description: "Lançamento e conferência da nota fiscal de entrada.",
        video: ""
      }
    ]
  },

  {
    id: "vendas",
    number: "09",
    title: "Vendas",
    icon: "bi-bag-check",
    description: "Criação, acompanhamento e autorização dos pedidos de venda.",
    lessons: [
      {
        id: "pedido-venda",
        title: "Pedido de Venda",
        screen: "424 — Pedido de Venda",
        description: "Criação e preenchimento de pedidos de venda.",
        video: ""
      },
      {
        id: "visualizacao-pedidos",
        title: "Visualização de Pedidos de Venda",
        screen: "519 — Visualização de Pedidos de Venda",
        description: "Acompanhamento e consulta dos pedidos de venda.",
        video: ""
      },
      {
        id: "autorizacoes-pedido",
        title: "Autorizações do Pedido de Venda",
        screen: "416 — Autorizações do Pedido de Venda",
        description: "Processo de autorização e liberação dos pedidos de venda.",
        video: ""
      }
    ]
  }
];

/* =========================================================
   ELEMENTOS
========================================================= */

const modulesGrid = document.getElementById("modulesGrid");

const moduleModalElement = document.getElementById("moduleModal");
const moduleModal = new bootstrap.Modal(moduleModalElement);

const videoModalElement = document.getElementById("videoModal");
const videoModal = new bootstrap.Modal(videoModalElement);

const moduleModalNumber = document.getElementById("moduleModalNumber");
const moduleModalLabel = document.getElementById("moduleModalLabel");
const moduleModalDescription = document.getElementById("moduleModalDescription");
const lessonsList = document.getElementById("lessonsList");

const videoModalLabel = document.getElementById("videoModalLabel");
const youtubeFrame = document.getElementById("youtubeFrame");
const videoFrameWrapper = document.getElementById("videoFrameWrapper");
const videoPlaceholder = document.getElementById("videoPlaceholder");

const overallProgressText = document.getElementById("overallProgressText");
const overallProgressPercent = document.getElementById("overallProgressPercent");
const overallProgressBar = document.getElementById("overallProgressBar");

const STORAGE_KEY = "flexmart-training-progress-v1";

let activeModuleId = null;
let pendingVideoLesson = null;
let reopenModuleAfterVideo = false;

/* =========================================================
   LOCAL STORAGE
========================================================= */

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getLessonKey(moduleId, lessonId) {
  return `${moduleId}__${lessonId}`;
}

function isLessonCompleted(moduleId, lessonId) {
  const progress = getProgress();
  return Boolean(progress[getLessonKey(moduleId, lessonId)]);
}

function setLessonCompleted(moduleId, lessonId, completed) {
  const progress = getProgress();
  const key = getLessonKey(moduleId, lessonId);

  if (completed) {
    progress[key] = true;
  } else {
    delete progress[key];
  }

  saveProgress(progress);
}

/* =========================================================
   PROGRESSO
========================================================= */

function getModuleProgress(module) {
  const total = module.lessons.length;

  const completed = module.lessons.filter((lesson) =>
    isLessonCompleted(module.id, lesson.id)
  ).length;

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, percent };
}

function getOverallProgress() {
  const lessons = trainingModules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      moduleId: module.id,
      lessonId: lesson.id
    }))
  );

  const total = lessons.length;

  const completed = lessons.filter((lesson) =>
    isLessonCompleted(lesson.moduleId, lesson.lessonId)
  ).length;

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, percent };
}

function updateOverallProgress() {
  const { total, completed, percent } = getOverallProgress();

  overallProgressText.textContent =
    `${completed} de ${total} aulas concluídas`;

  overallProgressPercent.textContent = `${percent}%`;
  overallProgressBar.style.width = `${percent}%`;

  overallProgressBar.parentElement.setAttribute(
    "aria-valuenow",
    percent
  );
}

/* =========================================================
   CARDS DOS MÓDULOS
========================================================= */

function renderModules() {
  modulesGrid.innerHTML = "";

  trainingModules.forEach((module, index) => {
    const { total, completed, percent } = getModuleProgress(module);

    const column = document.createElement("div");
    column.className = "col-12 col-md-6 col-lg-4";
    column.style.animationDelay = `${index * 45}ms`;

    column.innerHTML = `
      <article
        class="module-card"
        role="button"
        tabindex="0"
        data-module-id="${module.id}"
        aria-label="Abrir módulo ${module.title}"
      >
        <div class="module-card-top">
          <div class="module-icon">
            <i class="bi ${module.icon}"></i>
          </div>

          <span class="module-number">
            MÓDULO ${module.number}
          </span>
        </div>

        <h3>${module.title}</h3>

        <p>${module.description}</p>

        <div class="module-card-footer">
          <div class="module-progress-info">
            <strong>${completed} de ${total} aulas</strong>
            <span>${percent}%</span>
          </div>

          <div
            class="progress module-progress-bar"
            role="progressbar"
            aria-valuenow="${percent}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar"
              style="width: ${percent}%"
            ></div>
          </div>

          <div class="module-open-link">
            <span>Ver aulas</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </article>
    `;

    modulesGrid.appendChild(column);
  });

  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("click", () => {
      openModule(card.dataset.moduleId);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModule(card.dataset.moduleId);
      }
    });
  });
}

/* =========================================================
   MODAL DO MÓDULO
========================================================= */

function openModule(moduleId) {
  const module = trainingModules.find((item) => item.id === moduleId);

  if (!module) return;

  activeModuleId = moduleId;

  moduleModalNumber.textContent = `Módulo ${module.number}`;
  moduleModalLabel.textContent = module.title;
  moduleModalDescription.textContent = module.description;

  renderLessons(module);
  moduleModal.show();
}

function renderLessons(module) {
  lessonsList.innerHTML = "";

  module.lessons.forEach((lesson, index) => {
    const completed = isLessonCompleted(module.id, lesson.id);
    const collapseId = `lessonDetails_${module.id}_${lesson.id}`;

    const lessonElement = document.createElement("div");
    lessonElement.className = `lesson-item ${completed ? "completed" : ""}`;

    lessonElement.innerHTML = `
      <div class="lesson-main">
        <div class="lesson-title-area">
          <span class="lesson-number">
            Aula ${String(index + 1).padStart(2, "0")}
          </span>

          <h3 class="lesson-title">
            ${lesson.title}

            <button
              class="lesson-expand"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#${collapseId}"
              aria-expanded="false"
              aria-controls="${collapseId}"
              title="Ver detalhes"
            >
              <i class="bi bi-chevron-down"></i>
            </button>
          </h3>
        </div>

        <button
          class="play-button"
          type="button"
          title="Assistir aula"
          aria-label="Assistir ${lesson.title}"
        >
          <i class="bi bi-play-fill"></i>
        </button>

        <label class="lesson-check">
          <input
            type="checkbox"
            ${completed ? "checked" : ""}
            aria-label="Marcar ${lesson.title} como concluída"
          >
          <span>
            ${completed ? "Concluída" : "Concluir"}
          </span>
        </label>
      </div>

      <div
        class="collapse lesson-details"
        id="${collapseId}"
      >
        <div class="lesson-details-inner">
          <p class="mb-2">${lesson.description}</p>
          <strong>Tela utilizada:</strong> ${lesson.screen}
        </div>
      </div>
    `;

    const playButton = lessonElement.querySelector(".play-button");
    const checkbox = lessonElement.querySelector('input[type="checkbox"]');
    const checkboxLabel = lessonElement.querySelector(".lesson-check span");

    playButton.addEventListener("click", () => {
      openVideo(lesson);
    });

    checkbox.addEventListener("change", () => {
      setLessonCompleted(module.id, lesson.id, checkbox.checked);

      lessonElement.classList.toggle("completed", checkbox.checked);

      checkboxLabel.textContent =
        checkbox.checked ? "Concluída" : "Concluir";

      renderModules();
      updateOverallProgress();
    });

    lessonsList.appendChild(lessonElement);
  });
}

/* =========================================================
   VÍDEO
========================================================= */

function extractYouTubeId(url) {
  if (!url) return "";

  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match && match[1]) {
      return match[1];
    }
  }

  return "";
}

function prepareVideo(lesson) {
  videoModalLabel.textContent = lesson.title;

  const videoId = extractYouTubeId(lesson.video);

  if (videoId) {
    youtubeFrame.src =
      `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    videoFrameWrapper.classList.remove("d-none");
    videoPlaceholder.classList.add("d-none");
  } else {
    youtubeFrame.src = "";

    videoFrameWrapper.classList.add("d-none");
    videoPlaceholder.classList.remove("d-none");
  }
}

function openVideo(lesson) {
  pendingVideoLesson = lesson;
  reopenModuleAfterVideo = true;

  // Fecha a lista primeiro para evitar dois modais Bootstrap empilhados.
  moduleModal.hide();
}

moduleModalElement.addEventListener("hidden.bs.modal", () => {
  if (!pendingVideoLesson) return;

  const lesson = pendingVideoLesson;
  pendingVideoLesson = null;

  prepareVideo(lesson);
  videoModal.show();
});

videoModalElement.addEventListener("hidden.bs.modal", () => {
  youtubeFrame.src = "";

  if (reopenModuleAfterVideo && activeModuleId) {
    reopenModuleAfterVideo = false;
    openModule(activeModuleId);
  }
});

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderModules();
updateOverallProgress();
