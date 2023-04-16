import { products } from '/data/products'

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(products)
    }else if(req.method === 'POST') {
        const newProduct = {
            id: req.body.id,
            name: req.body.name,
            price:req.body.price,
            description: req.body.description,
            uom: req.body.uom,
        }
        products.push(newProduct)
        res.status(201).json(newProduct)
    }

}