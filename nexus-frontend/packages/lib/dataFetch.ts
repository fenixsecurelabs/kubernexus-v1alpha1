import fetch from 'cross-fetch'

const dataFetch = (url: string, options: Object, successFn: ((value: any) => any) | null | undefined, errorFn: (arg0: any) => void) => {
    fetch(url, options)
        .then((res) => {
            if (res.status === 401 || res.redirected) {
                if (window.location.host.endsWith("3000")) {
                    window.location.href = "/user/login"
                } else {
                    window.location.reload()
                }
            }
            let result
            if (res.ok) {
                result = res.text()
                    .then(text => {
                        try {
                            return JSON.parse(text)
                        } catch (e) {
                            return text
                        }
                    })
                return result
            } else {
                throw res.text()
            }
        }).then(successFn)
        .catch((e) => {
            if (e.then) {
                e.then((text: any) => errorFn(text))
                return
            }
            errorFn(e)
        })
}

/**
 * promisifiedDataFetch adds a promise wrapper to the dataFetch function
 * and ideal use for inside async functions - which is most of the funcitons
 * @param {string} url URL is the endpoint 
 * @param {Record<string, any>} options HTTP request options 
 * @returns 
 */
export function promisifiedDataFetch(url: string, options: {Record: any}): Promise<unknown> {
    return new Promise((resolve, reject) => {
        dataFetch(url, options, result => resolve(result), err => reject(err))
    }) 
}

export { dataFetch };