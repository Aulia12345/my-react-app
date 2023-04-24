import { useCallback } from "react"
import { useState } from "react"
import { API } from "../../../api/index"
import { message } from "antd"

// Get Products
export const useGetProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState()

    const getProducts = useCallback(async () => {
        try {
            const res = await API.getProducts()
            setProducts(res?.data)
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, products, getProducts]

}

// Create Products
export const usePostProducts = () => {
    const [isLoading, setIsLoading] = useState(false)

    const createProducts = useCallback(async (body, onSuccess) => {
        try {
            setIsLoading(true);
            await API.createProducts(body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success add a new product`,
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

    return [isLoading, createProducts]
}


// Update Biodata
export const useUpdateProducts = () => {
    const [isLoading, setIsLoading] = useState(false)

    const updateProducts = useCallback(async (id, body, onSuccess) => {
        try {
            setIsLoading(true);
            await API.updateProducts(id, body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success update product`,
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

    return [isLoading, updateProducts]
}

// Delete Products
export const useDeleteProducts = () => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteProducts = useCallback(async (id, onSuccess) => {
        try {
            setIsLoading(true);
            await API.deleteProducts(id)
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

    return [isLoading, deleteProducts]
}
