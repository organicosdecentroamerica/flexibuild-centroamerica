# FlexiBuild Centroamérica — sitio web estático

Sitio HTML/CSS/JavaScript sin framework ni dependencias de compilación.

## Páginas
- `index.html`: inicio y soluciones.
- `icf.html`: Better Block ICF®.
- `steel-framing.html`: Sistema Constructivo Modular Steel Framing (perfiles tubulares de acero; uniones abulonadas, soldadas o híbridas).
- `galerias.html`: galería y 14 videos originales.
- `nosotros.html`: información institucional.
- `contacto.html`: contacto y formulario que prepara un mensaje de WhatsApp.
- `assets/styles.css`, `assets/site.js`: diseño adaptable, menú y formulario.
- `robots.txt`, `sitemap.xml`: indexación prevista para el dominio final.

## Vista previa gratuita en Cloudflare Pages
Crear un proyecto nuevo en Cloudflare Pages conectado a este repositorio. **No conectar ningún dominio personalizado durante la revisión.**
- Repositorio: `organicosdecentroamerica/flexibuild-centroamerica`
- Rama: `main`
- Framework preset: `None`
- Build command: vacío (sitio estático)
- Build output directory: `/` (si el panel rechaza la raíz, probar `.`)
- Variables de entorno: ninguna necesaria
- Revisar mediante el subdominio `*.pages.dev` que genere Cloudflare Pages. La URL `*.workers.dev` corresponde al despliegue actual de Workers y no sustituye esta revisión.
- Dominio principal previsto: `www.flexibuild.site`. No modificar GoDaddy, `flexibuild.site` ni los DNS sin aprobación final.

## Lista de revisión previa al lanzamiento
1. Probar navegación y enlaces en escritorio y móvil.
2. Verificar carga de las imágenes del CDN original y reproducción de los 14 videos.
3. Probar que el formulario abra WhatsApp con datos prellenados; el usuario debe enviar el mensaje manualmente.
4. Revisar metadatos, canonical, sitemap y datos estructurados.
5. Confirmar con el propietario textos, identidad visual y selección de imágenes.
6. Conectar el dominio solo después de aprobación expresa.

## Limitaciones conocidas
Las imágenes siguen enlazadas al CDN público de GoDaddy para conservar los recursos originales durante la vista previa; por ello la vista previa depende de que esos recursos continúen disponibles. No se ha modificado el sitio de GoDaddy. El formulario no envía correo; abre WhatsApp. SEO técnico no garantiza posiciones específicas en buscadores.

## Publicación
El workflow `.github/workflows/deploy-pages.yml` se ejecuta al actualizar `main` y publica el sitio en GitHub Pages cuando Pages está habilitado en la configuración del repositorio.
