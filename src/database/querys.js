export const getBlogsQuery = `
  SELECT id,autor, titulo, LEFT(contenido, 70) as contenido,  fecha_publicacion
  FROM blogs 
  WHERE titulo LIKE '%' + @filtro + '%' OR autor LIKE '%'+ @filtro+ '%' OR contenido LIKE '%'+ @filtro+ '%' 
  ORDER BY id
  OFFSET @offset ROWS
  FETCH NEXT @pageSize ROWS ONLY
  `;

export const getBlogByIdQuery =
  "SELECT id, titulo, contenido FROM blogs where id = @id";
export const saveBlogQuery =
  "INSERT INTO blogs (titulo, autor, contenido) values (@titulo, @autor, @contenido)";

export const getTotalBlogQuery = `
  SELECT COUNT(*) as total
  FROM blogs 
  WHERE titulo LIKE '%' + @filtro + '%' OR autor LIKE '%'+ @filtro+ '%' OR contenido LIKE '%'+ @filtro+ '%' 
  `;
