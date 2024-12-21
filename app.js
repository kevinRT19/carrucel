let imagenes = 
    [
        {
            "url": "./image/167773-manhart_mh8_800-bmw-bayerische_motoren_werke_ag-coche-deportivo-3840x2160.jpg",
            "nombre": "Proyecto 01",
            "descripcion": "Este es el proyecto 01 "
    
        },
        {
            "url": "./image/167947-coche-deportivo-delorean-dmc_delorean-coche_pequeno-3840x2160.jpg",
            "nombre": "Proyecto 02",
            "descripcion": "Hola a todos este es el proyecto02 "
    
        },
        {
            "url": "./image/169234-ferrari-deportivo-coche-carro_de_lujo-mercedes_benz-3840x2160.jpg",
            "nombre": "Proyecto 03",
            "descripcion": "Este proyecto, es el 03 "
    
        },
    ]

    const atras = document.getElementById('atras');
    const adelante = document.getElementById('adelante');
    const imagen = document.getElementById('img');
    const puntos = document.getElementById('puntos');
    const texto = document.getElementById('texto');
    let actual = 0;
    
    function posicionCarrusel() {
        puntos.innerHTML = "";
        for (let i = 0; i < imagenes.length; i++) {
            if (i === actual) {
                puntos.innerHTML += '<p class="bold">.</p>';
            } else {
                puntos.innerHTML += '<p>.</p>';
            }
        }
    }
    
    posicionCarrusel();
    
    atras.addEventListener('click', function() {
        actual -= 1;
        if (actual === -1) {
            actual = imagenes.length - 1;
        }
        imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
        texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
        `;
        posicionCarrusel();
    });
    
    adelante.addEventListener('click', function() {
        actual += 1;
        if (actual === imagenes.length) {
            actual = 0;
        }
        imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
        texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
        `;
        posicionCarrusel();
    });