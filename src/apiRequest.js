const apiRequest = async (url = '', optionsObj = null, errMssg = null) => {

    try {
        const response = await fetch(url, optionsObj)
        if(!response.ok) throw new Error('Please reload the app')
    } catch(err) {
        errMssg = err.message
    } finally {
        return errMssg
    }
}

export default apiRequest


