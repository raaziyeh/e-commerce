import { useState, useCallback } from "react"

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const sendRequest = useCallback(async (requestConfing, applyData) => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(requestConfing.url, {
				method: requestConfing.method ? requestConfing.method : "GET",
				headers: requestConfing.headers ? requestConfing.headers : {},
				body: requestConfing.body ? JSON.stringify(requestConfing.body) : null,
			})

			if (!response.ok) {
				throw new Error({ message: "Request failed" })
			}

			const data = await response.json()
			applyData(data)
		} catch (error) {
			setError(error)
		}
		setIsLoading(false)
	}, [])

	return { isLoading, error, sendRequest }
}

export default useHttp
