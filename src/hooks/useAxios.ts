import { useEffect, useState } from 'react'
import axios, { type AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
})

export const usePost = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<number | null>(null)

  const postData = async (postData: P, config?: AxiosRequestConfig) => {
    setData(null)
    setLoading(true)
    setError(null)
    try {
      const response = await axiosInstance({
        url: endpoint,
        method: 'post',
        data: postData,
        headers: {
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        ...config,
      })
      setData(response.data)
    } catch (error: any) {
      setError(error.response?.status || 500)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, postData }
}

export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<number | null>(null)

  const getData = async () => {
    setData(null)
    setLoading(true)
    setError(null)
    try {
      const response = await axiosInstance({
        url: endpoint,
        method: 'get',
        headers: {
          Authorization: `Bearer ${Cookies.get('Authorization')}`,
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        ...config,
      })
      setData(response.data)
    } catch (error: any) {
      setError(error.response.status || 500)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading, error, getData }
}
