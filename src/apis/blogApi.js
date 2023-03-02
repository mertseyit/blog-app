// fetch api url

const blogApi = async (url, obj) => {
    try {
        const response = await fetch(url,obj)
        if(!response.ok) return 'Please reload App...'
        const data = await response.json()
        if(data) return data
    } catch (error) {
        return error.message
    }
}
export default blogApi