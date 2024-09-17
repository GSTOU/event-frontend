/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { apiClient } from "../libs/axios";
import { getCookie } from './utils';


export const editUser = async ({formData,id}:{formData: any,  id: string}) => {
    if(getCookie('token')){
        await apiClient.put(`/api/v1/student-resume/${id}`,formData);
    }else{
        notifications.show({ message: 'Требуется авторизация на портале isu.gstou.ru' })
        throw 'Требуется авторизация на портале isu.gstou.ru'
    }
    
   
  };
  
export const useEditUser = () => {
    const queryClient = useQueryClient()
    const query = useMutation({
        mutationFn: editUser,
        onSuccess: () => {
            notifications.show({ message: 'Изменения сохранены' })
            queryClient.invalidateQueries({ queryKey: ['getUsersList'] })
    }})

const mutate = query.mutate;
const isLoading = query.isPending;

return {
    mutate,
    isLoading,
} as const;
};