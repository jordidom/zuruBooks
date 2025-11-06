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