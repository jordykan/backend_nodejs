CREATE  DATABASE blog
USE blog;
CREATE TABLE blogs
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    fecha_publicacion DATETIME DEFAULT GETDATE() NOT NULL,
    contenido VARCHAR(200) NOT NULL
)


INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Viaje a las Montañas', 'Elena Pérez', 'Explorando las majestuosas montañas y disfrutando de la naturaleza.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Recetas de Cocina Italiana', 'Marco Rossi', 'Descubre auténticas recetas italianas que deleitarán tu paladar.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Desarrollo Sostenible', 'Luisa García', 'Exploramos prácticas de desarrollo sostenible y su impacto en el mundo.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Guía de Fotografía Urbana', 'Ana Martínez', 'Consejos y trucos para capturar la esencia de la vida urbana a través de la fotografía.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Historia del Jazz', 'Carlos Rodríguez', 'Un viaje a través de la rica historia del jazz y sus influyentes músicos.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Consejos de Viaje en Solitario', 'Isabel López', 'Descubre la libertad y la aventura de viajar en solitario con estos útiles consejos.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Explorando la Ciencia Espacial', 'Javier Torres', 'Noticias y descubrimientos emocionantes en el campo de la ciencia espacial.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Arte Abstracto Contemporáneo', 'Sofía Díaz', 'Sumérgete en el mundo del arte abstracto contemporáneo y sus diversos estilos.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Consejos para Jardinería Orgánica', 'Martina Gómez', 'Cómo cultivar un jardín saludable y sostenible utilizando métodos orgánicos.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Aprendiendo un Nuevo Idioma', 'Diego Fernández', 'Experiencias y consejos prácticos para aprender un nuevo idioma de manera efectiva.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Tecnologías Emergentes en el Desarrollo Web', 'Laura Torres', 'Exploramos las últimas tecnologías que están dando forma al desarrollo web moderno.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Descubriendo la Literatura Clásica', 'Mariana López', 'Exploración de obras literarias clásicas y su relevancia en la actualidad.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Consejos de Productividad para Freelancers', 'Pablo Gutiérrez', 'Cómo mantenerse productivo y organizado como freelancer en el mundo laboral actual.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Maravillas Arquitectónicas del Mundo', 'Carolina Martínez', 'Una mirada fascinante a algunas de las maravillas arquitectónicas más impresionantes del planeta.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Rutas de Senderismo Escénicas', 'Adrián Ramírez', 'Descubre rutas de senderismo que ofrecen vistas espectaculares y conexión con la naturaleza.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Cocina Saludable para Niños', 'Valeria Díaz', 'Recetas creativas y saludables para hacer que la comida sea divertida para los más pequeños.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Astronomía para Aficionados', 'Santiago Gómez', 'Introducción a la astronomía amateur y cómo observar el cielo nocturno.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Consejos de Estudio Efectivos', 'Camila Fernández', 'Métodos y estrategias para mejorar la eficacia del estudio y el rendimiento académico.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Explorando la Cultura Asiática', 'Ricardo Soto', 'Sumérgete en la rica diversidad de la cultura asiática, desde la historia hasta la gastronomía.');
INSERT INTO blogs
    (titulo, autor, contenido)
VALUES
    ('Desarrollo de Aplicaciones con Flutter', 'Fernanda Martínez', 'Cómo crear aplicaciones móviles atractivas utilizando el framework Flutter.');


SELECT titulo, autor, contenido
from blogs
WHERE titulo LIKE '%%' OR autor LIKE '%%'

SELECT COUNT(*) as TOTAL
FROM blogs