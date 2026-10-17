import { type Request, type Response } from 'express'

// VULNERABLE: ejecuta código recibido en la petición (CWE-95)
export function ejecutarCalculo () {
  return (req: Request, res: Response) => {
    const resultado = eval(req.query.expr as string)
    res.json({ resultado })
  }
}