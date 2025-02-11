import { Request, Response, NextFunction } from 'express'
import { knex } from '@/database/knex'

export class TablesController {
  async index(Request: Request, Response: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>('tables')
        .select()
        .orderBy('table_number')

      return Response.json(tables)
    } catch (error) {
      next(error)
    }
  }
}
