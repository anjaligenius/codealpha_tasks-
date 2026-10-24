/**
 * Cosmic Runtime - Interactive Application Controller
 * Tailored for Anjali Mishra's Software Engineering Portfolio
 */

// ==========================================
// 1. PROJECT CASE STUDY DATABASE
// ==========================================
const projectDatabase = {
  'saas-boilerplate': {
    title: 'SaaS Boilerplate Generator // Full-Stack Scaffolding Engine',
    badge: 'FLAGSHIP FULL-STACK',
    metric: 'Instant Scaffolding',
    techStack: ['Node.js', 'Express.js', 'React', 'JavaScript', 'CLI'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>SaaS Boilerplate Generator</strong> is an intelligent developer CLI and web scaffolding tool that automates the setup of modern SaaS web applications. Instead of spending 10+ hours setting up folder structures, authentication boilerplate, database connections, and standard CRUD route boilerplate, developers can choose their desired architecture and generate a clean, modular repository ready for development.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-secondary text-sm font-bold mb-1">01 / Modular Architecture</div>
          <p class="text-xs text-on-surface-variant">Generates organized folders for controllers, models, routes, middleware, and config.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-primary text-sm font-bold mb-1">02 / Ready-to-Use Auth</div>
          <p class="text-xs text-on-surface-variant">Pre-configured JWT authentication, cookie sessions, and secure password hashing.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-tertiary text-sm font-bold mb-1">03 / Database Config</div>
          <p class="text-xs text-on-surface-variant">Instant connection pools for SQL (PostgreSQL/MySQL) with pre-built migrations.</p>
        </div>
      </div>
      <h4 class="font-headline text-lg font-bold text-on-surface mb-2">Key Problem Solved:</h4>
      <p class="text-on-surface-variant leading-relaxed">
        Starting new software projects frequently incurs repetitive overhead. This generator establishes uniform file conventions, environmental variable validation, CORS policies, and error handling layers in seconds, empowering engineers to focus straight on core business logic.
      </p>
    `,
    specs: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="flex justify-between items-center mb-2">
            <span class="font-headline font-semibold text-on-surface">Execution Speed</span>
            <span class="font-code text-secondary text-sm">&lt; 1.2s Generation</span>
          </div>
          <div class="w-full bg-surface-highest h-2 rounded-full overflow-hidden">
            <div class="bg-secondary h-full" style="width: 95%;"></div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="flex justify-between items-center mb-2">
            <span class="font-headline font-semibold text-on-surface">Boilerplate Redundancy Eliminated</span>
            <span class="font-code text-primary text-sm">~85% Setup Time Saved</span>
          </div>
          <div class="w-full bg-surface-highest h-2 rounded-full overflow-hidden">
            <div class="bg-primary h-full" style="width: 85%;"></div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <h5 class="font-code text-xs text-outline uppercase tracking-wider mb-2">Architecture Schema</h5>
          <pre class="font-code text-xs text-on-surface bg-surface-lowest p-3 rounded-lg overflow-x-auto">
├── server/
│   ├── config/ (db.config.js, env.js)
│   ├── controllers/ (authController.js, userController.js)
│   ├── middleware/ (authMiddleware.js, errorHandler.js)
│   ├── models/ (User.js, schema.sql)
│   ├── routes/ (api.js, authRoutes.js)
│   └── app.js
└── client/ (React + Tailwind dashboard)</pre>
        </div>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-tertiary">const</span> fs = require('fs');
<span class="text-tertiary">const</span> path = require('path');

<span class="text-secondary">async function</span> <span class="text-primary font-bold">generateBoilerplate</span>(options) {
  <span class="text-outline-variant">// Scaffold root project directory</span>
  <span class="text-tertiary">const</span> rootDir = path.join(process.cwd(), options.projectName);
  <span class="text-secondary">if</span> (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir, { recursive: <span class="text-secondary">true</span> });
  }

  <span class="text-outline-variant">// Build structured MVC framework</span>
  <span class="text-tertiary">const</span> dirs = ['server/controllers', 'server/routes', 'server/middleware', 'server/models', 'client'];
  dirs.forEach(dir => fs.mkdirSync(path.join(rootDir, dir), { recursive: <span class="text-secondary">true</span> }));

  console.log(<span class="text-primary-light">\`✓ Scaffolding completed for: \${options.projectName}\`</span>);
  <span class="text-secondary">return</span> { success: <span class="text-secondary">true</span>, path: rootDir };
}

module.exports = { generateBoilerplate };</pre>
    `
  },

  'nl-to-sql': {
    title: 'Natural Language to SQL Generator // AI Query Synthesizer',
    badge: 'AI & DATABASE SYSTEMS',
    metric: 'Zero-Syntax Querying',
    techStack: ['JavaScript', 'Node.js', 'SQL', 'NLP', 'Express'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>Natural Language to SQL Generator</strong> bridges non-technical users and relational database queries. Users input questions in plain conversational English (e.g., <em>"Show top 5 customers with orders over $500 placed last month"</em>), and the system dynamically produces validated, syntactically accurate SQL statements ready for execution.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-secondary text-sm font-bold mb-1">Semantic Parsing</div>
          <p class="text-xs text-on-surface-variant">Extracts entities, tables, relationships, aggregate functions, and temporal filters.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-primary text-sm font-bold mb-1">SQL Sanitization</div>
          <p class="text-xs text-on-surface-variant">Guards against destructive queries (DROP, TRUNCATE) with strict readonly execution.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-tertiary text-sm font-bold mb-1">Database Verification</div>
          <p class="text-xs text-on-surface-variant">Matches generated queries directly against real table schemas and column indices.</p>
        </div>
      </div>
    `,
    specs: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-surface-container">
          <span class="font-headline font-semibold text-on-surface block mb-1">Query Conversion Pipeline</span>
          <p class="text-xs text-on-surface-variant mb-3">Natural Language Input &rarr; Intent Classification &rarr; Schema Resolution &rarr; SQL Token Generation &rarr; AST Validation &rarr; Executable SQL</p>
          <div class="bg-surface-lowest p-3 rounded font-code text-xs text-secondary">
            Input: "Find all users in Mumbai registered after January 2024"<br/>
            Output: SELECT id, name, email FROM users WHERE city = 'Mumbai' AND created_at >= '2024-01-01';
          </div>
        </div>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-secondary">function</span> <span class="text-primary font-bold">buildSqlQuery</span>(prompt, schema) {
  <span class="text-tertiary">const</span> tokens = tokenizePrompt(prompt);
  <span class="text-tertiary">const</span> matchedTables = schema.tables.filter(t => tokens.includes(t.name));
  
  <span class="text-outline-variant">// Construct structured query with safety filters</span>
  <span class="text-tertiary">const</span> generatedQuery = <span class="text-primary-light">\`SELECT \${schema.defaultColumns} FROM \${matchedTables[0] || 'records'} WHERE status = 'active' LIMIT 100;\`</span>;
  
  <span class="text-secondary">return</span> sanitizeQuery(generatedQuery);
}</pre>
    `
  },

  'rag-platform': {
    title: 'RAG Platform // Retrieval-Augmented Generation Engine',
    badge: 'VECTOR SEARCH & NLP',
    metric: 'Fact-Grounded Answers',
    techStack: ['Node.js', 'React', 'Vector Embeddings', 'Express', 'JavaScript'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>RAG Platform</strong> ingests long-form documents (PDFs, Markdown, Documentation) and empowers users to query them directly. Rather than hallucinating or producing guesses, the system uses semantic similarity search to locate the exact relevant paragraphs and synthesizes precise, verifiable answers with citations.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-secondary text-sm font-bold mb-1">Smart Chunking</div>
          <p class="text-xs text-on-surface-variant">Splits text by token boundaries while preserving semantic context overlaps.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-primary text-sm font-bold mb-1">Vector Search</div>
          <p class="text-xs text-on-surface-variant">Performs cosine similarity searches to retrieve top-k factual context snippets.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-container">
          <div class="font-code text-tertiary text-sm font-bold mb-1">Source Citations</div>
          <p class="text-xs text-on-surface-variant">Highlights verbatim reference passages to ensure 100% transparency.</p>
        </div>
      </div>
    `,
    specs: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-surface-container">
          <span class="font-headline font-semibold text-on-surface block mb-2">Ingestion & Retrieval Workflow</span>
          <pre class="font-code text-xs text-on-surface bg-surface-lowest p-3 rounded-lg overflow-x-auto">
Document Input (PDF / Doc) ──▶ Semantic Text Splitter (500 tokens)
    ──▶ Embedding Pipeline ──▶ Vector Index
User Query ──▶ Query Embedding ──▶ Cosine Distance Top-3 ──▶ Grounded Prompt ──▶ Answer</pre>
        </div>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-secondary">async function</span> <span class="text-primary font-bold">queryRAG</span>(userQuery, documentStore) {
  <span class="text-tertiary">const</span> queryEmbedding = <span class="text-secondary">await</span> generateEmbedding(userQuery);
  <span class="text-tertiary">const</span> topChunks = documentStore.searchSimilar(queryEmbedding, { limit: 3 });

  <span class="text-tertiary">const</span> context = topChunks.map(c => c.text).join('\\n\\n');
  <span class="text-secondary">return</span> synthesizeAnswer({ query: userQuery, context: context });
}</pre>
    `
  },

  'chat-codebase': {
    title: 'Chat With Any Codebase // AST Repository Explorer',
    badge: 'DEVELOPER PRODUCTIVITY',
    metric: 'Instant Code Comprehension',
    techStack: ['React', 'Node.js', 'AST Parser', 'JavaScript', 'Express'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>Chat With Any Codebase</strong> helps engineers understand unfamiliar codebases fast. It indexes source directories, builds symbol dependency trees (classes, exports, functions), and allows developers to ask questions in plain language—such as <em>"Where is user authentication validated?"</em> or <em>"Explain the payment webhook flow"</em>.
      </p>
    `,
    specs: `
      <div class="p-4 rounded-xl bg-surface-container">
        <span class="font-headline font-semibold text-on-surface block mb-2">Code Indexing Mechanics</span>
        <p class="text-xs text-on-surface-variant">Recursively scans file directories, extracts imports and function headers, builds an in-memory symbol graph, and retrieves relevant files to answer inquiries.</p>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-secondary">function</span> <span class="text-primary font-bold">indexCodebase</span>(repoPath) {
  <span class="text-tertiary">const</span> files = scanFilesRecursively(repoPath);
  <span class="text-secondary">return</span> files.map(file => ({
    path: file.relativePath,
    symbols: extractExportedSymbols(file.content),
    summary: createCodeSummary(file.content)
  }));
}</pre>
    `
  },

  'api-reverse-engineer': {
    title: 'API Reverse Engineer from Docs // OpenAPI Schema Builder',
    badge: 'API AUTOMATION',
    metric: 'Structured Schema Gen',
    techStack: ['Node.js', 'Express', 'Web Scraper', 'JSON Schema', 'JavaScript'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>API Reverse Engineer from Docs</strong> scans online documentation pages and automatically compiles a clean, machine-readable catalog of REST endpoints, HTTP methods, headers, payload parameters, and example responses. It saves developers hours of reading scattered documentation by producing standardized OpenAPI specs instantly.
      </p>
    `,
    specs: `
      <div class="p-4 rounded-xl bg-surface-container">
        <span class="font-headline font-semibold text-on-surface block mb-2">Capabilities</span>
        <ul class="text-xs text-on-surface-variant list-disc list-inside space-y-1">
          <li>Detects REST methods: GET, POST, PUT, DELETE, PATCH</li>
          <li>Identifies request parameter types (string, integer, boolean, object)</li>
          <li>Exports clean Swagger/OpenAPI 3.0 JSON specifications</li>
        </ul>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-secondary">function</span> <span class="text-primary font-bold">parseApiDocumentation</span>(htmlContent) {
  <span class="text-tertiary">const</span> endpoints = [];
  <span class="text-outline-variant">// Match HTTP methods and path routes via regex</span>
  <span class="text-tertiary">const</span> routePattern = /(GET|POST|PUT|DELETE)\s+(\/[a-zA-Z0-9_\-\/{}]+)/g;
  <span class="text-secondary">let</span> match;
  <span class="text-secondary">while</span> ((match = routePattern.exec(htmlContent)) !== <span class="text-secondary">null</span>) {
    endpoints.push({ method: match[1], path: match[2] });
  }
  <span class="text-secondary">return</span> buildOpenApiSpec(endpoints);
}</pre>
    `
  },

  'knowledge-assistant': {
    title: 'Personal Knowledge Assistant // Persistent Context Memory',
    badge: 'FULL-STACK MEMORY SUITE',
    metric: 'Long-term Recall',
    techStack: ['JavaScript', 'SQL', 'Node.js', 'Express', 'React'],
    overview: `
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        <strong>Personal Knowledge Assistant</strong> serves as a persistent contextual brain. It captures daily notes, ideas, code snippets, and conversation logs in a structured SQL relational database. When asked new questions, it retrieves historical context to provide coherent continuity over time.
      </p>
    `,
    specs: `
      <div class="p-4 rounded-xl bg-surface-container">
        <span class="font-headline font-semibold text-on-surface block mb-2">Relational Memory Architecture</span>
        <p class="text-xs text-on-surface-variant">SQL tables for notes, tags, and conversation_threads with indexed timestamp tracking and full-text search.</p>
      </div>
    `,
    code: `
      <pre class="font-code text-xs text-on-surface bg-surface-lowest p-4 rounded-xl overflow-x-auto leading-relaxed">
<span class="text-secondary">async function</span> <span class="text-primary font-bold">retrieveContextualMemory</span>(keyword, pool) {
  <span class="text-tertiary">const</span> sql = <span class="text-primary-light">\`
    SELECT id, title, content, created_at 
    FROM personal_notes 
    WHERE content LIKE $1 OR title LIKE $1 
    ORDER BY created_at DESC LIMIT 5;\`</span>;
  <span class="text-secondary">const</span> res = <span class="text-secondary">await</span> pool.query(sql, [\`%\${keyword}%\`]);
  <span class="text-secondary">return</span> res.rows;
}</pre>
    `
  }
};

// ==========================================
// 2. MODAL CONTROLLER
// ==========================================
let currentProjectKey = 'saas-boilerplate';

function openCaseStudyModal(projectKey) {
  const modal = document.getElementById('caseStudyModal');
  const project = projectDatabase[projectKey];
  if (!modal || !project) return;

  currentProjectKey = projectKey;

  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalBadge').innerText = project.badge;
  document.getElementById('modalMetricBadgeText').innerText = project.metric;

  // Set default tab to overview
  switchModalTab('overview');

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = 'auto';
}

function switchModalTab(tabName) {
  const project = projectDatabase[currentProjectKey];
  if (!project) return;

  const contentContainer = document.getElementById('modalTabContent');
  const tabButtons = document.querySelectorAll('.modal-tab-btn');

  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.className = 'modal-tab-btn px-4 py-3 font-code text-xs font-semibold border-b-2 border-primary text-primary transition-all flex items-center gap-2 whitespace-nowrap';
    } else {
      btn.className = 'modal-tab-btn px-4 py-3 font-code text-xs font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2 whitespace-nowrap';
    }
  });

  if (tabName === 'overview') {
    contentContainer.innerHTML = project.overview;
  } else if (tabName === 'specs') {
    contentContainer.innerHTML = project.specs;
  } else if (tabName === 'code') {
    contentContainer.innerHTML = project.code;
  }
}

// ==========================================
// 3. THREE.JS 3D COSMIC TECH CORE CANVAS
// ==========================================
function initThreeJsCanvas() {
  const container = document.getElementById('threejs-container');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 400;
  const height = container.clientHeight || 450;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7.5);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x2e1065, 2.5);
  scene.add(ambientLight);

  const pointLightPurple = new THREE.PointLight(0xa855f7, 8, 25);
  pointLightPurple.position.set(4, 4, 4);
  scene.add(pointLightPurple);

  const pointLightCyan = new THREE.PointLight(0x38bdf8, 7, 25);
  pointLightCyan.position.set(-4, -3, 3);
  scene.add(pointLightCyan);

  const pointLightCore = new THREE.PointLight(0xec4899, 4, 15);
  pointLightCore.position.set(0, 0, 0);
  scene.add(pointLightCore);

  const coreGroup = new THREE.Group();
  scene.add(coreGroup);

  // Central Icosahedron
  const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
  const coreMaterial = new THREE.MeshPhongMaterial({
    color: 0x12072b,
    emissive: 0x4c1d95,
    emissiveIntensity: 0.8,
    specular: 0x38bdf8,
    shininess: 90,
    wireframe: false,
    flatShading: true,
    transparent: true,
    opacity: 0.92
  });
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
  coreGroup.add(coreMesh);

  // Glowing Outer Wireframe
  const wireGeometry = new THREE.IcosahedronGeometry(1.68, 1);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
  coreGroup.add(wireMesh);

  // Orbiting Rings
  const ringGeo1 = new THREE.TorusGeometry(2.35, 0.028, 16, 120);
  const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.85 });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3;
  ring1.rotation.y = Math.PI / 6;
  coreGroup.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(2.7, 0.02, 16, 120);
  const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.y = Math.PI / 3;
  coreGroup.add(ring2);

  const ringGeo3 = new THREE.TorusGeometry(3.05, 0.015, 16, 120);
  const ringMat3 = new THREE.MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.6 });
  const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
  ring3.rotation.z = Math.PI / 5;
  ring3.rotation.y = -Math.PI / 4;
  coreGroup.add(ring3);

  // Floating Orbit Nodes
  const nodeGroup = new THREE.Group();
  const nodeGeo = new THREE.OctahedronGeometry(0.12);
  const nodeMat1 = new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7 });
  const nodeMat2 = new THREE.MeshPhongMaterial({ color: 0xa855f7, emissive: 0x7e22ce });

  const nodes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = i % 2 === 0 ? 2.35 : 2.7;
    const node = new THREE.Mesh(nodeGeo, i % 2 === 0 ? nodeMat1 : nodeMat2);
    nodeGroup.add(node);
    nodes.push({ mesh: node, angle: angle, radius: radius, speed: (i % 2 === 0 ? 0.015 : -0.012), yOffset: Math.sin(i) * 0.4 });
  }
  coreGroup.add(nodeGroup);

  // Particles Swarm
  const particleCount = 200;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  const colorCyan = new THREE.Color(0x38bdf8);
  const colorPurple = new THREE.Color(0xa855f7);

  for (let i = 0; i < particleCount; i++) {
    const r = 1.8 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);

    particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i * 3 + 2] = r * Math.cos(phi);

    const pickedColor = i % 2 === 0 ? colorCyan : colorPurple;
    particleColors[i * 3] = pickedColor.r;
    particleColors[i * 3 + 1] = pickedColor.g;
    particleColors[i * 3 + 2] = pickedColor.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  coreGroup.add(particleSystem);

  // Mouse Parallax
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    coreGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;
    targetX += (mouseX * 0.4 - targetX) * 0.05;
    targetY += (mouseY * 0.3 - targetY) * 0.05;

    coreMesh.rotation.x = elapsedTime * 0.25 + targetY;
    coreMesh.rotation.y = elapsedTime * 0.35 + targetX;
    wireMesh.rotation.x = -elapsedTime * 0.15;
    wireMesh.rotation.y = -elapsedTime * 0.2;

    ring1.rotation.z = elapsedTime * 0.4;
    ring2.rotation.z = -elapsedTime * 0.3;
    ring3.rotation.x = elapsedTime * 0.25;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.angle += n.speed;
      n.mesh.position.x = Math.cos(n.angle) * n.radius;
      n.mesh.position.z = Math.sin(n.angle) * n.radius;
      n.mesh.position.y = n.yOffset + Math.sin(elapsedTime * 2 + i) * 0.12;
      n.mesh.rotation.x += 0.02;
    }

    particleSystem.rotation.y = elapsedTime * 0.08;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    const newWidth = container.clientWidth || window.innerWidth;
    const newHeight = container.clientHeight || 450;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
}

// ==========================================
// 4. SKILLS FILTER & SEARCH CONTROLLER
// ==========================================
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  const searchInput = document.getElementById('skillSearchInput');

  let activeFilter = 'all';
  let searchTerm = '';

  function applyFilter() {
    skillCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const text = card.innerText.toLowerCase();

      const matchesCategory = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = searchTerm === '' || text.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-[0_0_16px_rgba(183,109,255,0.4)]');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      this.classList.remove('bg-surface-container', 'text-on-surface-variant');
      this.classList.add('bg-primary', 'text-on-primary', 'shadow-[0_0_16px_rgba(183,109,255,0.4)]');

      activeFilter = this.getAttribute('data-filter');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchTerm = this.value.toLowerCase().trim();
      applyFilter();
    });
  }
}

// ==========================================
// 5. TIMELINE FILTER CONTROLLER
// ==========================================
function initTimelineFilter() {
  const filterBtns = document.querySelectorAll('.timeline-filter-btn');
  const timelineNodes = document.querySelectorAll('.timeline-node');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-[0_0_16px_rgba(183,109,255,0.4)]');
        b.classList.add('text-on-surface-variant', 'bg-surface-container');
      });
      this.classList.remove('text-on-surface-variant', 'bg-surface-container');
      this.classList.add('bg-primary', 'text-on-primary', 'shadow-[0_0_16px_rgba(183,109,255,0.4)]');

      const filter = this.getAttribute('data-filter');
      timelineNodes.forEach(node => {
        if (filter === 'all' || node.getAttribute('data-category') === filter) {
          node.style.display = 'block';
        } else {
          node.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 6. ABOUT SECTION TAB SWITCHER
// ==========================================
function switchAboutTab(targetTab) {
  const visualPane = document.getElementById('visual-content-pane');
  const terminalPane = document.getElementById('terminal-content-pane');
  const visualBtn = document.getElementById('tab-visual-btn');
  const terminalBtn = document.getElementById('tab-terminal-btn');

  if (targetTab === 'visual') {
    visualPane.classList.remove('hidden');
    visualPane.classList.add('flex');
    terminalPane.classList.add('hidden');
    terminalPane.classList.remove('flex');

    visualBtn.className = 'px-3 py-1 rounded font-code text-xs text-on-primary bg-primary shadow-sm transition-all';
    terminalBtn.className = 'px-3 py-1 rounded font-code text-xs text-on-surface-variant hover:text-on-surface transition-all';
  } else {
    visualPane.classList.add('hidden');
    visualPane.classList.remove('flex');
    terminalPane.classList.remove('hidden');
    terminalPane.classList.add('flex');

    terminalBtn.className = 'px-3 py-1 rounded font-code text-xs text-on-primary bg-primary shadow-sm transition-all';
    visualBtn.className = 'px-3 py-1 rounded font-code text-xs text-on-surface-variant hover:text-on-surface transition-all';
  }
}

// ==========================================
// 7. INTERACTIVE FRONTEND APPS
// ==========================================

// --- A. Functional Calculator ---
let calcExpression = '0';
function pressCalc(val) {
  const display = document.getElementById('calcDisplay');
  if (!display) return;

  if (val === 'C') {
    calcExpression = '0';
  } else if (val === 'DEL') {
    calcExpression = calcExpression.length > 1 ? calcExpression.slice(0, -1) : '0';
  } else if (val === '=') {
    try {
      // Safe evaluation for basic math
      const sanitized = calcExpression.replace(/[^0-9+\-*/.]/g, '');
      const result = Function('"use strict";return (' + sanitized + ')')();
      calcExpression = String(result);
    } catch (e) {
      calcExpression = 'Error';
    }
  } else {
    if (calcExpression === '0' || calcExpression === 'Error') {
      calcExpression = val;
    } else {
      calcExpression += val;
    }
  }
  display.innerText = calcExpression;
}

// --- B. Interactive Music Player Demo ---
let isPlaying = false;
let currentTrackIdx = 0;
const playlist = [
  { title: 'Cosmic Drift // Focus Beat', artist: 'Anjali Mishra • Dev Audio', duration: '2:45' },
  { title: 'Midnight Syntax // Cyberwave', artist: 'TSEC Soundscape', duration: '3:12' },
  { title: 'Neural Flow // Ambient Lofi', artist: 'Code Session Chill', duration: '2:58' }
];

function togglePlayTrack() {
  const playIcon = document.getElementById('musicPlayIcon');
  const waves = document.getElementById('musicWaveforms');
  isPlaying = !isPlaying;

  if (playIcon) playIcon.innerText = isPlaying ? 'pause' : 'play_arrow';
  if (waves) {
    if (isPlaying) {
      waves.classList.remove('opacity-40');
      waves.classList.add('opacity-100');
    } else {
      waves.classList.remove('opacity-100');
      waves.classList.add('opacity-40');
    }
  }
}

function nextTrack(dir) {
  currentTrackIdx = (currentTrackIdx + dir + playlist.length) % playlist.length;
  const track = playlist[currentTrackIdx];
  const titleEl = document.getElementById('musicTrackTitle');
  const artistEl = document.getElementById('musicTrackArtist');
  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (!isPlaying) togglePlayTrack();
}

// --- C. Interactive Image Gallery Lightbox ---
function openLightbox(imgSrc, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = imgSrc;
  if (cap) cap.innerText = caption || 'Image Gallery Preview';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==========================================
// 8. RESUME UTILITIES
// ==========================================
let isResumeZoomed = false;

function toggleResumeZoom() {
  const sheet = document.getElementById('resumeSheet');
  const text = document.getElementById('zoomText');
  const icon = document.getElementById('zoomIcon');
  if (!sheet) return;

  isResumeZoomed = !isResumeZoomed;
  if (isResumeZoomed) {
    sheet.style.transform = 'scale(1.06)';
    if (text) text.innerText = '106%';
    if (icon) icon.innerText = 'zoom_out';
  } else {
    sheet.style.transform = 'scale(1)';
    if (text) text.innerText = '100%';
    if (icon) icon.innerText = 'zoom_in';
  }
}

function toggleResumeFullscreen(show) {
  const modal = document.getElementById('fullscreenModal');
  const cloneTarget = document.getElementById('modalResumeClone');
  const sheet = document.getElementById('resumeSheet');
  if (!modal || !sheet) return;

  if (show) {
    cloneTarget.innerHTML = sheet.innerHTML;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

const plaintextResumeData = `ANJALI MISHRA
Mumbai, India | +91 88579 02061 | anjalibhavanimishra@gmail.com
LinkedIn: https://linkedin.com/in/anjali-mishra-a14a88382

OBJECTIVE
Second-year engineering student seeking a software development (SDE) internship. Build full-stack web projects with the JavaScript stack and write C++ for problem solving.

EDUCATION
Thakur Shyamnarayan Engineering College (TSEC), Mumbai University
B.E. in Electronics and Communication Engineering, Second Year (Sem 3) | Expected graduation: 2029

TECHNICAL SKILLS
- Languages: C++
- Web: HTML, CSS, JavaScript, React, Node.js, Express.js
- Databases: SQL

PROJECTS
1. SaaS Boilerplate Generator
- Generates starter code and folder structure for a SaaS app from selected options.
- Saves the time of setting up a new project from scratch.
- Gives developers a ready base to build their own features on.

2. Natural Language to SQL Generator
- Converts plain-English questions into SQL queries.
- Lets a user ask about data without writing SQL by hand.
- Turns the question into a query that can be run on a database.

3. RAG Platform
- Finds relevant sections of documents and answers questions based on them.
- Answers come from the document content instead of guesses.
- Lets a user get quick answers from long documents without reading them fully.

4. Chat With Any Codebase
- Finds relevant files in a repository and answers questions about the code.
- Lets a user ask in plain language how the code works.
- Helps in understanding an unfamiliar codebase faster.

5. API Reverse Engineer from Docs
- Reads API documentation and builds a structured summary of endpoints and parameters.
- Saves the effort of going through long API docs by hand.
- Gives a clear overview a developer can use to start working with the API.

6. Personal Knowledge Assistant
- Recalls relevant context from saved notes and past conversations.
- Brings up earlier information when it is needed in a new question.
- Works as a personal assistant that keeps context over time.

FRONTEND PROJECTS
- Image Gallery: Image gallery built with HTML, CSS and JavaScript.
- Calculator: Calculator with arithmetic operations.
- Music Player: Music player built with JavaScript.`;

function copyPlaintextResume() {
  navigator.clipboard.writeText(plaintextResumeData).then(() => {
    const label = document.getElementById('copyResumeLabel');
    const icon = document.getElementById('copyResumeIcon');
    if (label && icon) {
      label.innerText = 'Copied to Clipboard!';
      icon.innerText = 'check';
      setTimeout(() => {
        label.innerText = 'Copy Plaintext';
        icon.innerText = 'content_copy';
      }, 2000);
    }
  });
}

function copyContactText(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const indicator = btnElement.querySelector('.copy-indicator');
    if (indicator) {
      const original = indicator.innerText;
      indicator.innerText = 'COPIED!';
      indicator.classList.add('text-secondary');
      setTimeout(() => {
        indicator.innerText = original;
        indicator.classList.remove('text-secondary');
      }, 1800);
    }
  });
}

function printOrDownloadResume() {
  window.print();
}

// ==========================================
// 9. CONTACT FORM TRANSMISSION CONTROLLER
// ==========================================
function validateEmail(input) {
  const badge = document.getElementById('emailFormatBadge');
  const icon = document.getElementById('emailCheckIcon');
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!badge || !icon) return;

  if (input.value.length === 0) {
    badge.innerText = 'Awaiting input';
    badge.className = 'font-code text-xs text-outline-variant';
    icon.className = 'material-symbols-outlined absolute right-3.5 text-[20px] text-outline-variant';
  } else if (re.test(input.value)) {
    badge.innerText = 'Valid Address';
    badge.className = 'font-code text-xs text-secondary';
    icon.className = 'material-symbols-outlined absolute right-3.5 text-[20px] text-secondary';
  } else {
    badge.innerText = 'Invalid format';
    badge.className = 'font-code text-xs text-red-400';
    icon.className = 'material-symbols-outlined absolute right-3.5 text-[20px] text-red-400';
  }
}

function updateCharCount(textarea) {
  const counter = document.getElementById('charCounter');
  if (!counter) return;
  const len = textarea.value.length;
  counter.innerText = `${len} / 1000`;
  if (len > 900) {
    counter.classList.add('text-red-400');
  } else {
    counter.classList.remove('text-red-400');
  }
}

function handleTransmission(event) {
  if (event) event.preventDefault();
  const btn = document.getElementById('submitTransmissionBtn');
  const btnText = document.getElementById('transmissionBtnText');
  const btnIcon = document.getElementById('transmissionBtnIcon');
  const successBanner = document.getElementById('successBanner');

  if (!btn || !btnText) return;

  btn.disabled = true;
  btnText.innerText = 'Broadcasting Signal...';
  if (btnIcon) {
    btnIcon.innerText = 'sync';
    btnIcon.classList.add('animate-spin');
  }

  setTimeout(() => {
    if (btnIcon) {
      btnIcon.classList.remove('animate-spin');
      btnIcon.innerText = 'done_all';
    }
    btnText.innerText = 'Signal Transmitted';
    if (successBanner) {
      successBanner.classList.remove('hidden');
      successBanner.classList.add('flex');
    }

    // Reset fields
    const form = document.getElementById('contactForm');
    if (form) form.reset();

    setTimeout(() => {
      btn.disabled = false;
      btnText.innerText = 'Send Another Transmission';
      if (btnIcon) btnIcon.innerText = 'send';
    }, 3000);
  }, 900);
}

// ==========================================
// 10. MOBILE DRAWER & INITIALIZATION
// ==========================================
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileMenuDrawer');
  if (!drawer) return;
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    drawer.classList.add('flex');
  } else {
    drawer.classList.add('hidden');
    drawer.classList.remove('flex');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Init 3D Canvas
  initThreeJsCanvas();

  // Init Skills Filter
  initSkillsFilter();

  // Init Timeline Filter
  initTimelineFilter();

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          const drawer = document.getElementById('mobileMenuDrawer');
          if (drawer && !drawer.classList.contains('hidden')) {
            drawer.classList.add('hidden');
          }
        }
      }
    });
  });

  // Keyboard escape for modal closing
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
      toggleResumeFullscreen(false);
      closeLightbox();
    }
  });
});
