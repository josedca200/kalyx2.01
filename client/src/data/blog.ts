import { BlogPost } from '@shared/schema';

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-estimar-mvp-sin-mentirle-cfo',
    title: 'Cómo estimar un MVP sin mentirle a tu CFO',
    titleEn: 'How to Estimate an MVP Without Lying to Your CFO',
    description: 'Una guía práctica para estimar el tiempo y costo de un MVP basándose en datos reales y no en wishful thinking.',
    descriptionEn: 'A practical guide to estimating MVP time and cost based on real data, not wishful thinking.',
    content: `# Cómo estimar un MVP sin mentirle a tu CFO

La estimación de proyectos de software es notoriamente difícil. En Kalyx, hemos refinado nuestro proceso a través de decenas de MVPs y aprendido estas lecciones clave:

## 1. Define el alcance con user stories

Antes de estimar nada, necesitas user stories concretas. No features vagas como "login de usuario" sino:

- Como usuario nuevo, quiero registrarme con email y contraseña para acceder a la plataforma
- Como usuario registrado, quiero recuperar mi contraseña si la olvido

## 2. Usa puntos de historia, no horas

Las horas mienten. Los puntos de historia (story points) te permiten comparar complejidad relativa:

- 1 punto: Cambio trivial (menos de 2 horas)
- 2 puntos: Cambio simple (2-4 horas)
- 3 puntos: Cambio moderado (4-8 horas)
- 5 puntos: Feature completa (1-2 días)
- 8 puntos: Feature compleja (2-3 días)
- 13+ puntos: Necesitas descomponer la historia

## 3. Mide tu velocidad

Después de 2-3 sprints, tendrás un velocity promedio. Por ejemplo, si tu equipo completa 40 puntos cada 2 semanas, sabes exactamente cuánto tardarás.

## 4. Agrega buffers realistas

- 20% para bugs y refinamiento
- 15% para comunicación y reuniones
- 10% para imprevistos técnicos

## 5. Presenta rangos, no números absolutos

En lugar de "el MVP costará $50,000", di:

- Optimista: $40,000 (si todo sale perfecto)
- Realista: $55,000 (escenario más probable)
- Pesimista: $75,000 (si hay complicaciones)

Tu CFO apreciará la honestidad.

## Conclusión

La clave no es estimar con precisión absoluta (imposible), sino ser consistentemente predecible y transparente sobre las suposiciones.`,
    contentEn: `# How to Estimate an MVP Without Lying to Your CFO

Software project estimation is notoriously difficult. At Kalyx, we've refined our process through dozens of MVPs and learned these key lessons:

## 1. Define scope with user stories

Before estimating anything, you need concrete user stories. Not vague features like "user login" but:

- As a new user, I want to register with email and password to access the platform
- As a registered user, I want to recover my password if I forget it

## 2. Use story points, not hours

Hours lie. Story points allow you to compare relative complexity:

- 1 point: Trivial change (less than 2 hours)
- 2 points: Simple change (2-4 hours)
- 3 points: Moderate change (4-8 hours)
- 5 points: Complete feature (1-2 days)
- 8 points: Complex feature (2-3 days)
- 13+ points: You need to break down the story

## 3. Measure your velocity

After 2-3 sprints, you'll have an average velocity. For example, if your team completes 40 points every 2 weeks, you know exactly how long it will take.

## 4. Add realistic buffers

- 20% for bugs and refinement
- 15% for communication and meetings
- 10% for technical unknowns

## 5. Present ranges, not absolute numbers

Instead of "the MVP will cost $50,000," say:

- Optimistic: $40,000 (if everything goes perfectly)
- Realistic: $55,000 (most likely scenario)
- Pessimistic: $75,000 (if there are complications)

Your CFO will appreciate the honesty.

## Conclusion

The key is not to estimate with absolute precision (impossible), but to be consistently predictable and transparent about assumptions.`,
    author: 'María González',
    date: '2024-02-15',
    readTime: '8 min',
    category: 'Estrategia',
    tags: ['MVP', 'Estimación', 'Gestión de Proyectos'],
  },
  {
    slug: 'de-cero-a-95-lighthouse-guia-practica',
    title: 'De cero a 95 en Lighthouse: guía práctica',
    titleEn: 'From Zero to 95 in Lighthouse: Practical Guide',
    description: 'Optimizaciones concretas que mejoraron nuestro Lighthouse score de 62 a 95 en un proyecto real.',
    descriptionEn: 'Concrete optimizations that improved our Lighthouse score from 62 to 95 in a real project.',
    content: `# De cero a 95 en Lighthouse: guía práctica

Recientemente optimizamos una aplicación SaaS que tenía un Lighthouse score de 62. Aquí están las optimizaciones exactas que nos llevaron a 95.

## Performance: 62 → 95

### 1. Largest Contentful Paint (LCP): 4.2s → 1.1s

**Problema**: Imagen hero de 2.5MB sin optimizar.

**Solución**:
- Convertir a WebP (2.5MB → 180KB)
- Agregar \`<link rel="preload">\` para la imagen
- Usar responsive images con \`srcset\`

\`\`\`html
<link rel="preload" as="image" href="/hero.webp" />
<img 
  srcset="/hero-mobile.webp 480w, /hero-tablet.webp 768w, /hero.webp 1200w"
  sizes="(max-width: 768px) 100vw, 1200px"
  src="/hero.webp"
  alt="Hero"
/>
\`\`\`

### 2. First Input Delay (FID): 180ms → 45ms

**Problema**: Bundle de JavaScript de 800KB bloqueando el thread principal.

**Solución**:
- Code splitting por ruta
- Lazy loading de componentes pesados
- Mover analytics a un web worker

\`\`\`typescript
const HeavyChart = lazy(() => import('./HeavyChart'));
\`\`\`

### 3. Cumulative Layout Shift (CLS): 0.25 → 0.05

**Problema**: Anuncios y imágenes sin dimensiones causaban shifts.

**Solución**:
- Reservar espacio con \`aspect-ratio\`
- Agregar \`width\` y \`height\` a todas las imágenes
- Usar \`font-display: swap\` para fuentes

## Accessibility: 78 → 98

- Agregar labels a todos los inputs
- Aumentar contraste de textos secundarios (3.1 → 4.8)
- Implementar skip links
- Agregar aria-labels a iconos

## Best Practices: 83 → 100

- Actualizar a HTTPS
- Agregar CSP headers
- Eliminar console.log en producción
- Usar HTTP/2

## SEO: 91 → 100

- Meta descriptions en todas las páginas
- Implementar Open Graph tags
- Generar sitemap.xml
- Agregar structured data (JSON-LD)

## Herramientas que usamos

1. **Lighthouse CI**: Automatiza auditorías en cada PR
2. **Bundle Analyzer**: Visualiza el tamaño del bundle
3. **Chrome DevTools**: Performance profiling
4. **WebPageTest**: Testing desde diferentes ubicaciones

## Conclusión

95+ en Lighthouse no es magia, es una checklist. Prioriza LCP, optimiza assets, y mide constantemente.`,
    contentEn: `# From Zero to 95 in Lighthouse: Practical Guide

We recently optimized a SaaS application that had a Lighthouse score of 62. Here are the exact optimizations that got us to 95.

## Performance: 62 → 95

### 1. Largest Contentful Paint (LCP): 4.2s → 1.1s

**Problem**: Unoptimized 2.5MB hero image.

**Solution**:
- Convert to WebP (2.5MB → 180KB)
- Add \`<link rel="preload">\` for the image
- Use responsive images with \`srcset\`

\`\`\`html
<link rel="preload" as="image" href="/hero.webp" />
<img 
  srcset="/hero-mobile.webp 480w, /hero-tablet.webp 768w, /hero.webp 1200w"
  sizes="(max-width: 768px) 100vw, 1200px"
  src="/hero.webp"
  alt="Hero"
/>
\`\`\`

### 2. First Input Delay (FID): 180ms → 45ms

**Problem**: 800KB JavaScript bundle blocking main thread.

**Solution**:
- Code splitting by route
- Lazy loading heavy components
- Move analytics to web worker

\`\`\`typescript
const HeavyChart = lazy(() => import('./HeavyChart'));
\`\`\`

### 3. Cumulative Layout Shift (CLS): 0.25 → 0.05

**Problem**: Ads and images without dimensions causing shifts.

**Solution**:
- Reserve space with \`aspect-ratio\`
- Add \`width\` and \`height\` to all images
- Use \`font-display: swap\` for fonts

## Accessibility: 78 → 98

- Add labels to all inputs
- Increase contrast of secondary text (3.1 → 4.8)
- Implement skip links
- Add aria-labels to icons

## Best Practices: 83 → 100

- Upgrade to HTTPS
- Add CSP headers
- Remove console.log in production
- Use HTTP/2

## SEO: 91 → 100

- Meta descriptions on all pages
- Implement Open Graph tags
- Generate sitemap.xml
- Add structured data (JSON-LD)

## Tools we used

1. **Lighthouse CI**: Automates audits on every PR
2. **Bundle Analyzer**: Visualizes bundle size
3. **Chrome DevTools**: Performance profiling
4. **WebPageTest**: Testing from different locations

## Conclusion

95+ in Lighthouse isn't magic, it's a checklist. Prioritize LCP, optimize assets, and measure constantly.`,
    author: 'Carlos Ruiz',
    date: '2024-02-10',
    readTime: '12 min',
    category: 'Performance',
    tags: ['Lighthouse', 'Optimización', 'Web Vitals'],
  },
  {
    slug: 'rag-produccion-lecciones-aprendidas',
    title: 'RAG en producción: lecciones que aprendimos a la mala',
    titleEn: 'RAG in Production: Lessons We Learned the Hard Way',
    description: 'Problemas reales y soluciones prácticas al implementar Retrieval-Augmented Generation en producción.',
    descriptionEn: 'Real problems and practical solutions when implementing Retrieval-Augmented Generation in production.',
    content: `# RAG en producción: lecciones que aprendimos a la mala

Implementar RAG (Retrieval-Augmented Generation) en producción es muy diferente a un Jupyter notebook. Aquí nuestras lecciones más dolorosas.

## Lección 1: El chunking importa MÁS de lo que crees

**Error**: Dividir documentos cada 500 tokens sin considerar estructura semántica.

**Consecuencia**: Respuestas fragmentadas donde la primera mitad de una idea estaba en un chunk y la segunda en otro.

**Solución**:
- Respetar límites semánticos (párrafos, secciones)
- Usar overlap del 10-20% entre chunks
- Metadata de contexto en cada chunk

\`\`\`python
def smart_chunk(document, max_tokens=500, overlap=50):
    paragraphs = document.split('\\n\\n')
    chunks = []
    current_chunk = []
    
    for para in paragraphs:
        tokens = count_tokens(para)
        if sum([count_tokens(c) for c in current_chunk]) + tokens > max_tokens:
            chunks.append('\\n\\n'.join(current_chunk))
            current_chunk = [current_chunk[-1]]  # overlap
        current_chunk.append(para)
    
    return chunks
\`\`\`

## Lección 2: La retrieval quality > model quality

**Error**: Usar GPT-4 con retrieval mediocre.

**Consecuencia**: $$$$ en API calls para respuestas incorrectas.

**Solución**:
- Invertir en embeddings quality (fine-tuning si es necesario)
- Hybrid search (dense + sparse)
- Reranking con un modelo cross-encoder

**Métricas clave**:
- Recall@5: ¿El chunk correcto está en los top 5?
- MRR (Mean Reciprocal Rank): ¿Qué tan alto está?

## Lección 3: Caching agresivo es obligatorio

**Error**: Hacer embedding de la misma query una y otra vez.

**Solución**:
\`\`\`typescript
const embeddingCache = new Map<string, number[]>();

async function getEmbedding(text: string) {
  const cacheKey = text.toLowerCase().trim();
  if (embeddingCache.has(cacheKey)) {
    return embeddingCache.get(cacheKey);
  }
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  embeddingCache.set(cacheKey, embedding.data[0].embedding);
  return embedding.data[0].embedding;
}
\`\`\`

## Lección 4: Monitoreá EVERYTHING

Métricas que trackeamos:
- Latencia P50, P95, P99
- Cache hit rate
- Tokens consumidos por request
- User feedback (👍/👎)

## Lección 5: La UX importa más que la tech

**Insight**: Los usuarios prefieren respuestas rápidas con fuentes que respuestas perfectas lentas.

**Implementación**:
- Streaming de respuestas
- Mostrar fuentes mientras genera
- Permitir "retry with more context"

## Conclusión

RAG en producción requiere:
1. Chunking inteligente
2. Retrieval de calidad
3. Caching agresivo
4. Monitoreo constante
5. UX que tolere imperfección

¿Preguntas? Escríbenos.`,
    contentEn: `# RAG in Production: Lessons We Learned the Hard Way

Implementing RAG (Retrieval-Augmented Generation) in production is very different from a Jupyter notebook. Here are our most painful lessons.

## Lesson 1: Chunking matters MORE than you think

**Mistake**: Splitting documents every 500 tokens without considering semantic structure.

**Consequence**: Fragmented responses where the first half of an idea was in one chunk and the second in another.

**Solution**:
- Respect semantic boundaries (paragraphs, sections)
- Use 10-20% overlap between chunks
- Context metadata in each chunk

\`\`\`python
def smart_chunk(document, max_tokens=500, overlap=50):
    paragraphs = document.split('\\n\\n')
    chunks = []
    current_chunk = []
    
    for para in paragraphs:
        tokens = count_tokens(para)
        if sum([count_tokens(c) for c in current_chunk]) + tokens > max_tokens:
            chunks.append('\\n\\n'.join(current_chunk))
            current_chunk = [current_chunk[-1]]  # overlap
        current_chunk.append(para)
    
    return chunks
\`\`\`

## Lesson 2: Retrieval quality > model quality

**Mistake**: Using GPT-4 with mediocre retrieval.

**Consequence**: $$$$ in API calls for incorrect answers.

**Solution**:
- Invest in embeddings quality (fine-tuning if needed)
- Hybrid search (dense + sparse)
- Reranking with cross-encoder model

**Key metrics**:
- Recall@5: Is the correct chunk in top 5?
- MRR (Mean Reciprocal Rank): How high is it?

## Lesson 3: Aggressive caching is mandatory

**Mistake**: Embedding the same query over and over.

**Solution**:
\`\`\`typescript
const embeddingCache = new Map<string, number[]>();

async function getEmbedding(text: string) {
  const cacheKey = text.toLowerCase().trim();
  if (embeddingCache.has(cacheKey)) {
    return embeddingCache.get(cacheKey);
  }
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  embeddingCache.set(cacheKey, embedding.data[0].embedding);
  return embedding.data[0].embedding;
}
\`\`\`

## Lesson 4: Monitor EVERYTHING

Metrics we track:
- Latency P50, P95, P99
- Cache hit rate
- Tokens consumed per request
- User feedback (👍/👎)

## Lesson 5: UX matters more than tech

**Insight**: Users prefer fast responses with sources over perfect slow responses.

**Implementation**:
- Streaming responses
- Show sources while generating
- Allow "retry with more context"

## Conclusion

RAG in production requires:
1. Smart chunking
2. Quality retrieval
3. Aggressive caching
4. Constant monitoring
5. UX that tolerates imperfection

Questions? Write to us.`,
    author: 'Ana Torres',
    date: '2024-02-05',
    readTime: '10 min',
    category: 'AI',
    tags: ['RAG', 'LLMs', 'Production'],
  },
];
