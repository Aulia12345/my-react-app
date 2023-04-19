import { useCallback } from "react"
import { useState } from "react"
import { api } from "../../../api"
import { message } from "antd"


export const useGetUsers = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    const getData = useCallback(async () => {
        try {
            const res = await api.getUsers()
            setData(res?.data)
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: `This is a success message`,
            });
        }
    }, []);

    return [isLoading, data, getData];
}