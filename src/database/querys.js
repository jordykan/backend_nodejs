export const getBlogsQuery = `
  SELECT id,autor, titulo, LEFT(contenido, 4) as contenido_corto 
  FROM blogs 
  WHERE titulo LIKE '%' + @filtro + '%' OR autor LIKE '%'+ @filtro+ '%' OR contenido LIKE '%'+ @filtro+ '%' 
  ORDER BY id
  OFFSET @offset ROWS
  FETCH NEXT @pageSize ROWS ONLY
  `;

export const getBlogByIdQuery =
  "SELECT id, contenido FROM blogs where id = @id";
export const saveBlogQuery =
  "INSERT INTO blogs (titulo, autor, contenido) values (@titulo, @autor, @contenido)";
