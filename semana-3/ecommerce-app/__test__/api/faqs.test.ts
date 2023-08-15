import faqs from '@/data/faqs';
import handler from '@/pages/api/faqs';
import { NextApiRequest, NextApiResponse } from 'next';
import httpMocks from 'node-mocks-http';


describe('Api Faqs', () => {
  test('Debe retornar datos de FAQS con una solicitud Get exitosa', async () => {
  
    // Creamos el objeto simulado de la solicitud
    const req = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
    })

    // Creamos el objeto simulado de la respuesta
    const res = httpMocks.createResponse<NextApiResponse>()

    // llamamos a la funcion handler con los objetos simulados
    await handler(req, res)

    // Obtenemos el resultado de la respuesta
    const data = res._getJSONData()

    // Realizamos las aserciones
    expect(res.statusCode).toBe(200)
    expect(data).toEqual(faqs)

  })

  test('Debe devolver un mensaje de error en caso de una solicitud no permitida', async() => {
    
    // Creamos el objeto simulado de la solicitud
    const req = httpMocks.createRequest<NextApiRequest>({
      method: 'POST',
    })

    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res)

    const data = res._getJSONData()

    // Realizamos las aserciones
    expect(res.statusCode).toBe(400)
    expect(data).toEqual({ message: 'Método no permitido' })
  })
})