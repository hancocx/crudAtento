USE [tu_base_de_datos];
GO

CREATE TABLE dbo.Libros (
    ID INT PRIMARY KEY IDENTITY,
    Titulo NVARCHAR(100),
    Autor NVARCHAR(100),
    AnoPublicacion INT,
    Genero NVARCHAR(50),
    Precio DECIMAL(10, 2)
);
GO

-- Insertando 5 registros de ejemplo
INSERT INTO Libros (Titulo, Autor, AnoPublicacion, Genero, Precio) VALUES
('El Alquimista', 'Paulo Coelho', 1988, 'Novela', 9.99),
('Cien Años de Soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico', 12.99),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Novela', 15.50),
('1984', 'George Orwell', 1949, 'Ciencia ficción', 8.99),
('To Kill a Mockingbird', 'Harper Lee', 1960, 'Novela', 7.99),
('El Nombre del Viento', 'Patrick Rothfuss', 2007, 'Fantasía', 19.95),
('El Código Da Vinci', 'Dan Brown', 2003, 'Misterio', 15.00),
('Los Juegos del Hambre', 'Suzanne Collins', 2008, 'Ciencia ficción', 12.50),
('La Chica del Tren', 'Paula Hawkins', 2015, 'Thriller', 10.00),
('Los Pilares de la Tierra', 'Ken Follett', 1989, 'Histórica', 23.90),
('Sapiens: De animales a dioses', 'Yuval Noah Harari', 2011, 'No ficción', 18.00),
('La Sombra del Viento', 'Carlos Ruiz Zafón', 2001, 'Misterio', 13.95),
('El Alquimista', 'Paulo Coelho', 1988, 'Aventura', 9.99),
('Yo, Robot', 'Isaac Asimov', 1950, 'Ciencia ficción', 11.00),
('El Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasía', 14.95);
GO

-- Select
CREATE PROCEDURE sp_SelectBook
AS
BEGIN
    SELECT * FROM Libros;
END
GO

-- Insert and Update
CREATE PROCEDURE sp_InsertUpdateBook
(
    @Id INTEGER,
    @Titulo NVARCHAR(100),
	@Autor NVARCHAR(100),
    @AnoPublicacion INTEGER,
    @Genero NVARCHAR(50),
    @Precio DECIMAL(10, 2),
	@Action VARCHAR(10)
)
AS
BEGIN
    IF @Action = 'Insert'
    BEGIN
        INSERT INTO Libros (Titulo, Autor, AnoPublicacion, Genero, Precio) VALUES (@Titulo, @Autor, @AnoPublicacion, @Genero, @Precio);
    END

    IF @Action = 'Update'
    BEGIN
        UPDATE Libros
        SET Titulo = @Titulo, Autor = @Autor, AnoPublicacion = @AnoPublicacion, Genero = @Genero, Precio = @Precio
        WHERE ID = @Id;
    END
END
GO

-- Delete
CREATE PROCEDURE sp_DeleteBook
(
    @Id INTEGER
)
AS
BEGIN
    DELETE FROM Libros WHERE ID = @Id;
END
GO