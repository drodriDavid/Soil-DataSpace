/* Soil DataSpace — app.js */
(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // --- Datos de socios ---
        const partnersData = [
            // Núcleo inicial
            {
                abbr: 'UJA', name: 'Universidad de Jaén', desc: 'Promotora y coordinación técnica; investigación, análisis y usuario',
                grad: 'from-blue-600 to-blue-800', bcol: 'bg-blue-100 text-blue-800',
                logo: 'assets/images/logos/uja.jpg'
            },

            { abbr: 'IFAPA', name: 'IFAPA (Junta de Andalucía)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-green-600 to-green-800', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/ifapa.jpg' },
            { abbr: 'ITACyL', name: 'ITACyL (Junta de Castilla y León)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-red-500 to-red-700', bcol: 'bg-red-100 text-red-800', logo: 'assets/images/logos/itacyl.jpg' },
            { abbr: 'Esri', name: 'Esri España', desc: 'Proveedor tecnológico y facilitador (tecnología geoespacial)', grad: 'from-orange-500 to-orange-700', bcol: 'bg-orange-100 text-orange-800', logo: 'assets/images/logos/esri.jpg' },
            { abbr: 'Coop', name: 'Cooperativas Agroalimentarias de España', desc: 'Consumidor y usuario; agente tractor del sector agrícola', grad: 'from-yellow-500 to-yellow-700', bcol: 'bg-yellow-100 text-yellow-800', logo: 'assets/images/logos/coop.jpg' },


            // Centros, clústeres y fundaciones señalados
            { abbr: 'Andaltec', name: 'Andaltec', desc: 'Centro tecnológico (plástico, materiales y transferencia)', grad: 'from-fuchsia-600 to-fuchsia-800', bcol: 'bg-fuchsia-100 text-fuchsia-800', logo: 'assets/images/logos/andaltec.png' },
            { abbr: 'CITOLIVA', name: 'CITOLIVA', desc: 'Centro tecnológico del olivar y el aceite', grad: 'from-rose-500 to-rose-700', bcol: 'bg-rose-100 text-rose-800', logo: 'assets/images/logos/citoliva.png' },
            { abbr: 'ceiA3', name: 'ceiA3', desc: 'Campus de Excelencia Internacional Agroalimentario', grad: 'from-violet-500 to-violet-700', bcol: 'bg-violet-100 text-violet-800', logo: 'assets/images/logos/CEIA3.png' },
            { abbr: 'FCRJ', name: 'Fundación Caja Rural de Jaén', desc: 'Apoyo institucional y ecosistema territorial', grad: 'from-amber-600 to-amber-800', bcol: 'bg-amber-100 text-amber-800', logo: 'assets/images/logos/CAJARURAL.jpg' },
            { abbr: 'D.O. SM', name: 'D.O. Sierra Mágina', desc: 'Denominación de Origen (sector oleícola)', grad: 'from-green-700 to-green-900', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/sierraMagina.png' },
            { abbr: 'COI', name: 'Consejo Oleícola Internacional', desc: 'Organismo internacional del sector oleícola', grad: 'from-slate-600 to-slate-800', bcol: 'bg-slate-100 text-slate-800', logo: 'assets/images/logos/COI.png' },

            // Asociaciones sectoriales
            { abbr: 'ASAJA', name: 'ASAJA', desc: 'Asociación agraria; representación de agricultores', grad: 'from-emerald-700 to-emerald-900', bcol: 'bg-emerald-100 text-emerald-800', logo: 'assets/images/logos/asaja.jpg' },
            { abbr: 'COAG', name: 'COAG', desc: 'Coordinadora de organizaciones de agricultores y ganaderos', grad: 'from-lime-700 to-lime-900', bcol: 'bg-lime-100 text-lime-800', logo: 'assets/images/logos/coag.jpg' },
            { abbr: 'UPA', name: 'UPA', desc: 'Unión de Pequeños Agricultores y Ganaderos', grad: 'from-teal-700 to-teal-900', bcol: 'bg-teal-100 text-teal-800', logo: 'assets/images/logos/upa.png' },
            { abbr: 'INFAOLIVA', name: 'INFAOLIVA', desc: 'Federación del sector oleícola', grad: 'from-yellow-600 to-yellow-800', bcol: 'bg-yellow-100 text-yellow-800', logo: 'assets/images/logos/infaoliva.png' },

            // Empresas privadas citadas (muestras representativas)
            { abbr: 'SIE', name: 'Sistemas Informáticos Europeos', desc: 'Tecnología y servicios TIC', grad: 'from-blue-500 to-blue-700', bcol: 'bg-blue-100 text-blue-800', logo: 'assets/images/logos/sie.jpg' },
            { abbr: 'JAV', name: 'JAV', desc: 'Empresa interesada en datos/servicios del espacio', grad: 'from-rose-600 to-rose-800', bcol: 'bg-rose-100 text-rose-800', logo: 'assets/images/logos/jav.jpg' },
            { abbr: 'CONSULE', name: 'CONSULE', desc: 'Consultoría/servicios vinculados al ecosistema', grad: 'from-indigo-600 to-indigo-800', bcol: 'bg-indigo-100 text-indigo-800', logo: 'assets/images/logos/consule.png' },
            { abbr: 'Deere', name: 'John Deere', desc: 'Fabricante; agricultura de precisión y maquinaria', grad: 'from-green-500 to-green-700', bcol: 'bg-green-100 text-green-800', logo: 'assets/images/logos/deere.png' },
            { abbr: 'Fertina', name: 'Fertinagro Biotech', desc: 'Bio/Agrotech; fertilización y suelos', grad: 'from-amber-500 to-amber-700', bcol: 'bg-amber-100 text-amber-800', logo: 'assets/images/logos/ferti.jpg' },
            { abbr: 'Cajamar', name: 'Cajamar', desc: 'Finanzas/cooperativismo agro; innovación sectorial', grad: 'from-sky-500 to-sky-700', bcol: 'bg-sky-100 text-sky-800', logo: 'assets/images/logos/cajamar.jpg' },
            { abbr: 'NUTESCA', name: 'NUTESCA', desc: 'Empresa interesada en datos y analítica', grad: 'from-fuchsia-500 to-fuchsia-700', bcol: 'bg-fuchsia-100 text-fuchsia-800', logo: 'assets/images/logos/nutesca.png' },


        ];


        // --- Render socios (logos sin brillo) ---
        const track = document.getElementById('partners-track');
        if (track) {
            track.innerHTML = partnersData.map(d => `
    <article class="group snap-start shrink-0 w-[200px] sm:w-[220px] bg-white rounded-xl p-4 shadow-sm text-center transition hover:shadow-md"
             title="${d.name}: ${d.desc}">
      <!-- Caja de logo: fondo suave y sin filtros -->
       <div class="mx-auto mb-3 flex items-center justify-center w-32 h-16 rounded-xl bg-transparent p-0">
        ${d.logo
                    ? `
            <img src="${d.logo}" alt="Logo ${d.name}"
                 class="max-h-12 w-auto object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]"
                 loading="lazy" decoding="async"
                 onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
            <span class="hidden px-2 py-1 rounded ${d.bcol} font-bold">${d.abbr}</span>
          `
                    : `
            <span class="px-2 py-1 rounded ${d.bcol} font-bold">${d.abbr}</span>
          `
                }
      </div>

      <h3 class="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">${d.name}</h3>
      <p class="text-[12px] text-gray-600 mt-1 line-clamp-2 leading-snug">${d.desc}</p>
    </article>
  `).join('');
        }


        // --- Navegación del carrusel ---
        const scroller = document.getElementById('partners-scroller');
        if (scroller) {
            const step = () => Math.max(200, scroller.clientWidth * 0.75);

            // Botones izquierda/derecha
            document.querySelectorAll('#partners [data-dir]').forEach(btn => {
                btn.addEventListener('click', () =>
                    scroller.scrollBy({ left: (+btn.dataset.dir) * step(), behavior: 'smooth' })
                );
            });

            // Rueda → scroll horizontal
            scroller.addEventListener('wheel', e => {
                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { scroller.scrollLeft += e.deltaY; e.preventDefault(); }
            }, { passive: false });

            // Actualiza difuminados según posición
            const updateFades = () => {
                const hasOverflow = scroller.scrollWidth > scroller.clientWidth + 1;
                if (!hasOverflow) {
                    scroller.style.setProperty('--fade-l', '0px');
                    scroller.style.setProperty('--fade-r', '0px');
                    return;
                }
                const atStart = scroller.scrollLeft <= 1;
                const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1;
                scroller.style.setProperty('--fade-l', atStart ? '0px' : '28px');
                scroller.style.setProperty('--fade-r', atEnd ? '0px' : '28px');
            };

            scroller.addEventListener('scroll', updateFades, { passive: true });
            window.addEventListener('resize', updateFades);
            // Estado inicial
            updateFades();
        }

        // --- Menú móvil accesible ---
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                const isOpen = !mobileMenu.classList.contains('hidden');
                mobileMenu.classList.toggle('hidden');
                mobileBtn.setAttribute('aria-expanded', String(!isOpen));
                if (!isOpen) {
                    const firstLink = mobileMenu.querySelector('a');
                    if (firstLink) firstLink.focus();
                }
            });
        }

        // --- Resaltado de sección activa ---
        const links = Array.from(document.querySelectorAll('.nav-link'));
        if (links.length) {
            const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
            if (secs.length) {
                const io = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            links.forEach(l => l.classList.remove('text-blue-600'));
                            const id = '#' + entry.target.id;
                            const active = links.find(l => l.getAttribute('href') === id);
                            if (active) active.classList.add('text-blue-600');
                        }
                    });
                }, { threshold: window.matchMedia('(max-width: 640px)').matches ? 0.35 : 0.5 });
                secs.forEach(sec => io.observe(sec));
            }
        }

        // --- Fallback de imágenes ---
        document.querySelectorAll('img[data-fallback]').forEach(img => {
            img.addEventListener('error', () => {
                const fallback = img.getAttribute('data-fallback');
                if (fallback && img.src !== fallback) img.src = fallback;
            }, { once: true });
        });

        // --- Botón "Arriba" ---
        const toTop = document.getElementById('toTop');
        if (toTop) {
            const showTop = () => { window.scrollY > 600 ? toTop.classList.remove('hidden') : toTop.classList.add('hidden'); };
            window.addEventListener('scroll', showTop, { passive: true });
            toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            showTop(); // estado inicial
        }
    });
})();
