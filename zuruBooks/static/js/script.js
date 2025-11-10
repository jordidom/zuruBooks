document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // Lista de libros con géneros
    const books = [
        { 
            title: "A través de mi ventana - Ariana Godoy", 
            img: "https://www.mejoreslibros.top/wp-content/uploads/2021/06/A-traves-de-mi-ventana-1429x2048.jpg", 
            page: "libro1.html",
            genre: "romance"
        },
        { 
            title: "Drácula - Bram Stoker", 
            img: "https://imagessl2.casadellibro.com/a/l/s7/02/9788445019702.webp", 
            page: "libro2.html", 
            genre: "fantasia-gotica"
        },
        { 
            title: "El tejido de los días - Carlos Aurensanz", 
            img: "https://imagessl8.casadellibro.com/a/l/s7/58/9788466668958.webp", 
            page: "libro3.html", 
            genre: "misterio"
        },
        { 
            title: "Toda la verdad de mis mentiras - Elisabeth Benavent", 
            img: "https://imagessl2.casadellibro.com/a/l/adic/mc/s7/58/9791387512958-2.webp", 
            page: "libro4.html", 
            genre: "romance"
        },
        { 
            title: "Boulevard - Flor M. Salvador", 
            img: "https://th.bing.com/th/id/OIP.MIS4fKem_a3bJ2AoW8a_BgHaLx?w=198&h=315&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", 
            page: "libro5.html", 
            genre: "romance"
        },
        { 
            title: "El día que se perdió la cordura - Javier Castillo (2014)", 
            img: "https://th.bing.com/th/id/OIP._gAsgRG8QRMm5BSANdF-9wHaLW?w=201&h=309&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", 
            page: "libro6.html", 
            genre: "novelas-negras"
        },
        { 
            title: "El día que se perdió el amor - Javier Castillo (2018)", 
            img: "https://th.bing.com/th/id/OIP.LXznCdB3nXIN_dqx8rIj8AHaLV?w=202&h=309&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", 
            page: "libro7.html", 
            genre: "novelas-negras"
        },
        { 
            title: "Todo lo que sucedió con Miranda Huff - Javier Castillo (2019)", 
            img: "https://www.agapea.com/DEBOLSILLO/Todo-lo-que-sucedio-con-Miranda-Huff-i6n19858723.jpg", 
            page: "libro8.html", 
            genre: "novelas-negras"
        },
        { 
            title: "La chica de nieve - Javier Castillo (2020)", 
            img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576340263l/49235949.jpg", 
            page: "libro9.html", 
            genre: "novelas-negras"
        },
        { 
            title: "El juego del alma - Javier Castillo (2021)", 
            img: "https://tse2.mm.bing.net/th/id/OIP.C5-REbn_aD8RRUanrIZScAHaLX?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3", 
            page: "libro10.html", 
            genre: "novelas-negras"
        },
        { 
            title: "El cuco de cristal - Javier Castillo (2023)", 
            img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664302643l/59813453.jpg", 
            page: "libro11.html", 
            genre: "novelas-negras"
        },
        { 
            title: "La armadura de la luz - Ken Follett", 
            img: "https://m.media-amazon.com/images/I/91UW8ps9opL.jpg", 
            page: "libro12.html", 
            genre: "fantasia"
        }
    ];

    // Renderizar todos los libros
    books.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("item", book.genre);
        div.innerHTML = `
            <a href="${book.page}">
                <img src="${book.img}" alt="${book.title}">
                <p>${book.title}</p>
            </a>`;
        gallery.appendChild(div);
    });
});

// Mostrar todos los libros
function mostrarTodo() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = 'block';
    });
    document.getElementById("filtroGenero").value = "todos";
}

// Filtrar por género
function filtrarPorGenero(genero) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (genero === "todos" || item.classList.contains(genero)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}