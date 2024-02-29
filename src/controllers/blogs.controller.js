import { getConnection } from "../database/connection.js";
import sql from "mssql";
import {
  getBlogsQuery,
  getBlogByIdQuery,
  saveBlogQuery,
} from "../database/querys.js";
export default {
  getBlogs: async (req, res, next) => {
    try {
      // Obtiene una conexión al pool de la base de datos
      const pool = await getConnection();
      const { filtro, pagina = 1 } = req.query;
      const paginaSize = 5;
      const query = getBlogsQuery;

      // Calcular el offset para la paginación
      const offset = (pagina - 1) * paginaSize;
      const reg = await pool
        .request()
        .input("filtro", sql.NVarChar, filtro)
        .input("offset", sql.Int, offset)
        .input("pageSize", sql.Int, paginaSize)
        .query(query);

      // Obtener el total de registros en la tabla de blogs
      const total_registros = await pool
        .request()
        .query("SELECT COUNT(*) AS total FROM blogs");

      // Calcular el total de páginas
      const total_paginas = Math.ceil(
        total_registros.recordset[0].total / paginaSize
      );

      const result = {
        data: reg.recordset,
        total_registros: total_registros.recordset[0].total,
        total_paginas: total_paginas,
      };
      res.status(200).json(result);
    } catch (error) {
      // Si hay un error, responde con un código de estado 500 y un mensaje de error
      res.status(500).send({
        message: "Ocurrió un error: " + error,
      });

      next(error);
    }
  },

  // Obtiene un blog específico por su ID
  getBlog: async (req, res, next) => {
    try {
      const pool = await getConnection();

      // Obtiene el parámetro de ID de la solicitud
      const { id } = req.params;

      // Ejecuta una consulta SQL para obtener el blog con el ID proporcionado
      const reg = await pool
        .request()
        .input("id", sql.Int, id)
        .query(getBlogByIdQuery);

      // Si no se encuentra ningún resultado, responde con un código de estado 404
      if (reg.recordset.length === 0)
        return res.status(404).json({
          message: "Blog no encontrado",
        });

      // Responde con los resultados en formato JSON
      res.status(200).json(reg.recordset);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error: " + error,
      });

      next(error);
    }
  },

  // Guarda un nuevo blog en la base de datos
  saveBlog: async (req, res, next) => {
    try {
      const pool = await getConnection();

      // Obtiene datos del cuerpo de la solicitud
      const { titulo, autor, contenido } = req.body;

      // Define la consulta SQL para insertar un nuevo blog
      const query = saveBlogQuery;
      // Ejecuta la consulta con parámetros proporcionados en el cuerpo de la solicitud
      const result = await pool
        .request()
        .input("titulo", sql.NVarChar, titulo)
        .input("autor", sql.NVarChar, autor)
        .input("contenido", sql.NVarChar, contenido)
        .query(query);

      // Responde con los resultados en formato JSON
      res.status(200).json(result);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error: " + error,
      });

      next(error);
    }
  },
};
