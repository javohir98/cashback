import axios from "axios";

class ProductServiceApi {
    static async getAllProducts(limit = 10, page = 1, id) {
        const response = await axios.get(`https://api.uracashback.uz/companies/${id}/products`, {
            params: {
                _limit: limit,
                page: page
            }
        })
        return response
    }

}  

export default ProductServiceApi