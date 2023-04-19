import { useCallback } from "react"
import { useState } from "react"
import { api } from "../../../api"
import { message } from "antd"

// Get Biodata
export const useGetBiodata = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [Biodata, setBiodata] = useState()

    const getBiodata = useCallback(async () => {
        try {
            const res = await api.getBiodata()
            setBiodata(res?.data)
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, Biodata, getBiodata]

}

// Create Biodata
export const usePostBiodata = () => {
    const [isLoading, setIsLoading] = useState(false)

    const createBiodata = useCallback(async (body, onSuccess) => {
        try {
            setIsLoading(true);
            await api.createBiodata(body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success add a new data`,
            });
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, createBiodata]
}

// Delete Biodata
export const useDeleteBiodata = () => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteBiodata = useCallback(async (id, onSuccess) => {
        try {
            setIsLoading(true);
            await api.deleteBiodata(id)
            onSuccess && onSuccess();
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: `success delete a data`,
            });
        }
    }, []);

    return [isLoading, deleteBiodata]
}

// Update Biodata
export const useUpdateBiodata = () => {
    const [isLoading, setIsLoading] = useState(false)

    const updateBiodata = useCallback(async (id, body, onSuccess) => {
        try {
            setIsLoading(true);
            await api.updateBiodata(id, body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success update data`,
            });
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, updateBiodata]
}