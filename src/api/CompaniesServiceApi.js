import axios from "axios";

class CompaniesServiceApi {
    static async getAllProducts() {
        const response = await axios.get(`https://api.uracashback.uz/companies/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('User Token')}`
            }
        })
        return response
    }

}  

export default CompaniesServiceApi