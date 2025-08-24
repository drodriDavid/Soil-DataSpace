/* Soil DataSpace — app.js */
(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // --- Datos de socios ---
        const partnersData = [
            // Núcleo inicial
            { abbr: 'UJA', name: 'Universidad de Jaén', desc: 'Promotora y coordinación técnica; investigación, análisis y usuario', grad: 'from-blue-600 to-blue-800', bcol: 'bg-blue-100 text-blue-800' },
            { abbr: 'IFAPA', name: 'IFAPA (Junta de Andalucía)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-green-600 to-green-800', bcol: 'bg-green-100 text-green-800' },
            { abbr: 'ITACyL', name: 'ITACyL (Junta de Castilla y León)', desc: 'Productor/consumidor de datos; coordinación de políticas y usuario', grad: 'from-red-500 to-red-700', bcol: 'bg-red-100 text-red-800' },
            { abbr: 'Esri', name: 'Esri España', desc: 'Proveedor tecnológico y facilitador (tecnología geoespacial)', grad: 'from-orange-500 to-orange-700', bcol: 'bg-orange-100 text-orange-800' },
            { abbr: 'Aire', name: 'Aire Networks', desc: 'Clearing House y credenciales verificables (Gaia-X)', grad: 'from-purple-500 to-purple-700', bcol: 'bg-purple-100 text-purple-800' },
            { abbr: 'Coop', name: 'Cooperativas Agroalimentarias de España', desc: 'Consumidor y usuario; agente tractor del sector agrícola', grad: 'from-yellow-500 to-yellow-700', bcol: 'bg-yellow-100 text-yellow-800' },

            // Administración General del Estado y organismos relacionados
            { abbr: 'MAPA', name: 'Ministerio de Agricultura, Pesca y Alimentación (MAPA)', desc: 'Productor de datos y coordinador de políticas', grad: 'from-teal-600 to-teal-800', bcol: 'bg-teal-100 text-teal-800' },
            { abbr: 'MITECO', name: 'Ministerio para la Transición Ecológica y Reto Demográfico (MITECO)', desc: 'Productor de datos y coordinador de políticas', grad: 'from-emerald-600 to-emerald-800', bcol: 'bg-emerald-100 text-emerald-800' },
            { abbr: 'IGN', name: 'Instituto Geográfico Nacional (IGN)', desc: 'Cartografía y referencia geoespacial nacional', grad: 'from-sky-600 to-sky-800', bcol: 'bg-sky-100 text-sky-800' },

            // Junta de Andalucía – organismos adicionales citados
            { abbr: 'ADA', name: 'Agencia Digital de Andalucía (ADA)', desc: 'Ecosistema digital y datos públicos en Andalucía', grad: 'from-cyan-600 to-cyan-800', bcol: 'bg-cyan-100 text-cyan-800' },
            { abbr: 'REDIAM', name: 'REDIAM', desc: 'Repositorio y servicios de información ambiental de Andalucía', grad: 'from-lime-600 to-lime-800', bcol: 'bg-lime-100 text-lime-800' },

            // Centros, clústeres y fundaciones señalados
            { abbr: 'Andaltec', name: 'Andaltec', desc: 'Centro tecnológico (plástico, materiales y transferencia)', grad: 'from-fuchsia-600 to-fuchsia-800', bcol: 'bg-fuchsia-100 text-fuchsia-800' },
            { abbr: 'CITOLIVA', name: 'CITOLIVA', desc: 'Centro tecnológico del olivar y el aceite', grad: 'from-rose-500 to-rose-700', bcol: 'bg-rose-100 text-rose-800' },
            { abbr: 'Ágora', name: 'Ágora DataLab', desc: 'Analítica avanzada y datos para agro/medio ambiente', grad: 'from-indigo-500 to-indigo-700', bcol: 'bg-indigo-100 text-indigo-800' },
            { abbr: 'ceiA3', name: 'ceiA3', desc: 'Campus de Excelencia Internacional Agroalimentario', grad: 'from-violet-500 to-violet-700', bcol: 'bg-violet-100 text-violet-800' },
            { abbr: 'FCRJ', name: 'Fundación Caja Rural de Jaén', desc: 'Apoyo institucional y ecosistema territorial', grad: 'from-amber-600 to-amber-800', bcol: 'bg-amber-100 text-amber-800' },
            { abbr: 'CES', name: 'CES', desc: 'Entidad mencionada en el ecosistema de apoyo', grad: 'from-stone-500 to-stone-700', bcol: 'bg-stone-100 text-stone-800' },
            { abbr: 'D.O. SM', name: 'D.O. Sierra Mágina', desc: 'Denominación de Origen (sector oleícola)', grad: 'from-green-700 to-green-900', bcol: 'bg-green-100 text-green-800' },
            { abbr: 'COI', name: 'Consejo Oleícola Internacional', desc: 'Organismo internacional del sector oleícola', grad: 'from-slate-600 to-slate-800', bcol: 'bg-slate-100 text-slate-800' },
            { abbr: 'IGP', name: 'IGP (indicaciones protegidas)', desc: 'Figuras de calidad diferenciada', grad: 'from-zinc-500 to-zinc-700', bcol: 'bg-zinc-100 text-zinc-800' },

            // Asociaciones sectoriales
            { abbr: 'ASAJA', name: 'ASAJA', desc: 'Asociación agraria; representación de agricultores', grad: 'from-emerald-700 to-emerald-900', bcol: 'bg-emerald-100 text-emerald-800' },
            { abbr: 'COAG', name: 'COAG', desc: 'Coordinadora de organizaciones de agricultores y ganaderos', grad: 'from-lime-700 to-lime-900', bcol: 'bg-lime-100 text-lime-800' },
            { abbr: 'UPA', name: 'UPA', desc: 'Unión de Pequeños Agricultores y Ganaderos', grad: 'from-teal-700 to-teal-900', bcol: 'bg-teal-100 text-teal-800' },
            { abbr: 'INFAOLIVA', name: 'INFAOLIVA', desc: 'Federación del sector oleícola', grad: 'from-yellow-600 to-yellow-800', bcol: 'bg-yellow-100 text-yellow-800' },

            // Empresas privadas citadas (muestras representativas)
            { abbr: 'SIE', name: 'Sistemas Informáticos Europeos', desc: 'Tecnología y servicios TIC', grad: 'from-blue-500 to-blue-700', bcol: 'bg-blue-100 text-blue-800' },
            { abbr: 'JAV', name: 'JAV', desc: 'Empresa interesada en datos/servicios del espacio', grad: 'from-rose-600 to-rose-800', bcol: 'bg-rose-100 text-rose-800' },
            { abbr: 'CONSULE', name: 'CONSULE', desc: 'Consultoría/servicios vinculados al ecosistema', grad: 'from-indigo-600 to-indigo-800', bcol: 'bg-indigo-100 text-indigo-800' },
            { abbr: 'Clúster', name: 'Clúster del Plástico', desc: 'Asociación empresarial del sector del plástico', grad: 'from-cyan-500 to-cyan-700', bcol: 'bg-cyan-100 text-cyan-800' },
            { abbr: 'Deere', name: 'John Deere', desc: 'Fabricante; agricultura de precisión y maquinaria', grad: 'from-green-500 to-green-700', bcol: 'bg-green-100 text-green-800' },
            { abbr: 'Fertina', name: 'Fertinagro Biotech', desc: 'Bio/Agrotech; fertilización y suelos', grad: 'from-amber-500 to-amber-700', bcol: 'bg-amber-100 text-amber-800' },
            { abbr: 'Cajamar', name: 'Cajamar', desc: 'Finanzas/cooperativismo agro; innovación sectorial', grad: 'from-sky-500 to-sky-700', bcol: 'bg-sky-100 text-sky-800' },
            { abbr: 'NUTESCA', name: 'NUTESCA', desc: 'Empresa interesada en datos y analítica', grad: 'from-fuchsia-500 to-fuchsia-700', bcol: 'bg-fuchsia-100 text-fuchsia-800' },

            // Grupos genéricos tal y como aparecen en la memoria
            { abbr: 'AgroSrv', name: 'Empresas de servicios del sector agroalimentario', desc: 'Productores, consumidores y analistas de datos', grad: 'from-orange-600 to-orange-800', bcol: 'bg-orange-100 text-orange-800' },
            { abbr: 'AmbSrv', name: 'Empresas de servicios del sector ambiental', desc: 'Productores, consumidores y analistas de datos', grad: 'from-emerald-600 to-emerald-800', bcol: 'bg-emerald-100 text-emerald-800' },
            { abbr: 'EnergInf', name: 'Empresas de infraestructuras y energía', desc: 'Productores, consumidores y analistas de datos', grad: 'from-slate-600 to-slate-800', bcol: 'bg-slate-100 text-slate-800' },

            // Centro demostrador vinculado
            { abbr: 'CD-EADAA', name: 'Centro Demostrador EDA Agroalimentario de Andalucía (CD-EADAA)', desc: 'Proyecto vinculado; apoyo e interoperabilidad', grad: 'from-neutral-500 to-neutral-700', bcol: 'bg-neutral-100 text-neutral-800' },

            // Apoyos/ámbito europeo citados
            { abbr: 'DG AGRI', name: 'DG Agricultura y Desarrollo Rural (Comisión Europea)', desc: 'Apoyo en el marco de la Misión del Suelo y red de Living Labs', grad: 'from-indigo-500 to-indigo-700', bcol: 'bg-indigo-100 text-indigo-800' },
            { abbr: 'JRC', name: 'Joint Research Centre (JRC) – EU', desc: 'Conexión con SoilWise y EU Soil Observatory/ESDAC', grad: 'from-violet-600 to-violet-800', bcol: 'bg-violet-100 text-violet-800' },
        ];


        // --- Render compacto del carrusel de socios ---
        const track = document.getElementById('partners-track');
        if (track) {
            track.innerHTML = partnersData.map(d => `
        <article class="snap-start shrink-0 w-[170px] sm:w-[190px] bg-white rounded-xl p-4 shadow-sm text-center transition hover:shadow-md"
                 title="${d.name}: ${d.desc}">
          <div class="w-12 h-12 bg-gradient-to-br ${d.grad} rounded-xl mx-auto mb-3 grid place-items-center">
            <span class="text-base font-bold text-white">${d.abbr}</span>
          </div>
          <h3 class="text-sm font-semibold text-gray-900 leading-tight">${d.name}</h3>
          <p class="text-[12px] text-gray-600 mt-1 line-clamp-2 leading-snug">${d.desc}</p>
        </article>
      `).join('');
        }

        // --- Navegación del carrusel ---
        // --- Navegación del carrusel + fades ---
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
