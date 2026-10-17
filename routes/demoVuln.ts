import { type Request, type Response } from 'express'

// CORREGIDO: se aceptan solo números y no se usa eval
export function ejecutarCalculo () {
  return (req: Request, res: Response) => {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    if (Number.isNaN(a) || Number.isNaN(b)) {
      return res.status(400).json({ error: 'Parámetros inválidos' })
    }
    res.json({ resultado: a + b })
  }
}