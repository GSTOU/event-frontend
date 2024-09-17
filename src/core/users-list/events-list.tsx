/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-imports */
import {  Badge, Image, Pagination} from "@mantine/core";
import { useForm } from '@mantine/form';
import { useEffect, useState } from "react";

import {  useGetEventsList } from "../../service/get-events-list";

export  const  EventsList = ()=> {

  const pageSize = 20
  const [page, onChange] = useState(1);

  const form = useForm({
    initialValues: {
    "full_name": undefined,
    "citizenship": undefined,
    "relationship": undefined,
    "education": undefined,
  }})

  const {data,count} = useGetEventsList({page: page,size: pageSize, ...form.values})

  useEffect(()=>{
    setTimeout(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },500)
  },[page])
  
  return (
    <div className="grid md:flex-row gap-2  items-center md:items-stretch">
        <div className="grid xl:grid-cols-4 gap-6 mt-4 lg:grid-cols-3 sm:grid-cols-1 px-4 ">
          {data?.map((item: any)=>{
          return <div key={item?._id} className="shadow-card">
                    <div  className="flex flex-col gap-2 p-2">
                        <div className="text-center pl-2 pt-2 rounded-md">
                          <Image
                            radius="lg"
                            w="100%"
                            h="220px"
                            src={item?.image ? String(item?.image) : 'https://gstou.ru/university/profiles/profile.jpg'}
                            alt={item?.full_name}
                          />
                        </div>
                        <div className="p-2 pt-0">
                          <div className="flex justify-between font-bold border-b-2  text-my-red">
                            <div>{item?.location?.name}</div>
                            <div>{item?.date}, {item?.time?.[0][0]}:{item?.time?.[0][1]}-{item?.time?.[1][0]}:{item?.time?.[1][1]}</div>
                          </div>
                          <div className="font-bold text-xl mt-2">{item?.title}</div>
                          <div className="text-gray-400">Описание:</div>
                          <div>{item?.description}</div>
                          <div className="text-gray-400">Руководитель мероприятия:</div>
                          <div className="font-bold">{item?.head?.name}</div>
                          <div className="text-gray-400">Ответственный мероприятия:</div>
                          <div className="font-bold">{item?.responsible?.name}</div>
                          <div className="text-gray-400">Тип мероприятия:</div>
                          <div className="font-bold">{item?.categories?.name}</div>
                        </div>
                        <div className="flex flex-wrap gap-2 p-2 pt-0">
                          {item?.tags?.map((i:string)=> <Badge key={i} color="gray" >{i}</Badge>)}
                        </div>
                    </div>
                  </div>
        })}
        </div>
        <div className="flex justify-end mt-4 pr-8">
          <Pagination 
           classNames={{control: "!bg-my-blue !text-white data-[active=true]:!bg-my-red data-[active=true]:!border-my-blue data-[disabled=true]:!opacity-40"}}
           total={Math.ceil(count / pageSize) || 0}  
           value={page} 
           onChange={onChange} />
        </div>
    </div>
  )
}
