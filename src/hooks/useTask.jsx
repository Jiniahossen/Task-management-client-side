import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserCart = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    const { refetch, data: task = [] } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user.email}`);
            return res.data;
        }
    })

    return [task, refetch];
};

export default useUserCart;