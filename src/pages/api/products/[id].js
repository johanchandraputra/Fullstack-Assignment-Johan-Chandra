import {products} from '/data/products'

export default async function handler(req, res) {
    const {id} = req.query
    if (req.method === 'GET') {
        const product = products.find(
            (product) => product.id === parseInt(id)
        )
        res.status(200).json(product)
    } else if (req.method === 'DELETE') {
        const deleteProduct = products.find(
            (product) => product.id === parseInt(id)
        )
        const index = products.findIndex(
            (product) => product.id === parseInt(id)
        )
        products.splice(index, 1)
        res.status(200).json("delete success")
    } else if (req.method === 'PUT') {
        let updatedProduct = {}
        products.map(
            product => {
                if (product.id === parseInt(id)) {
                        product.name = req.body.name,
                        product.description = req.body.description,
                        product.price = req.body.price,
                        product.uom = req.body.uom
                    updatedProduct = product
                }
            }
        )
        res.status(200).json(updatedProduct);
    }

}
