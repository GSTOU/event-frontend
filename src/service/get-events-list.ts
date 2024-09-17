/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from '@tanstack/react-query';

import { apiClient } from "../libs/axios";


export const getEventsList = async ({
    page,size,
}:{
    page: number;
    size: number;
}) => {
    // const { data } = await apiClient.get(
    //   `/api/v1/public/events`,
    //   {
    //     params: {
    //         page,
    //         size,
    //     }
    //   }
    // );

    return {
        "count": 0,
        "page": 1,
        "pages": 1,
        "data": [
          {
            "_id": "1",
            "title": "Цифровые экосистемы и сервисы: эффективные стратегии развития российских платформ",
            "description": "В глобальных условиях необходимости активной работы над импортозамещением и технологическим суверенитетом одним из ключевых направлений работы экосистем стали отечественные разработки и ИТ, включающие в себя решения, связанные с ИИ, нейросетями, городскими и частными «умными» технологиями, кибербезопасностью, облачными сервисами и др.",
            "image": "https://ai.gov.ru/upload/resize_cache/iblock/7fa/485_328_2/m2lygs3bwhwqwhuq0rf2cahl2pxufhio.png",
            "date": "2024-09-16",
            "time": [
              [10,30],
              [11,'00']
            ],
            "head": {
              "id": "string",
              "name": "Ислам Бериев"
            },
            "responsible": {
              "id": "string",
              "name": "Али Сулейманов"
            },
            "categories": {
              "id": "string",
              "name": "Лекция"
            },
            "location": {
              "id": "string",
              "name": "Главный корпус"
            },
            "tags": ['Фонд «Росконгресс»','Безопасность'],
            "created_at": "2024-09-16T10:44:11.952Z"
          },
          {
            "_id": "2",
            "title": "СахалинТех Security 2024",
            "description": "Аудитория Конференции – госрегуляторы в сфере информационной безопасности, главы и заместители глав регионов Российской Федерации, руководители и заместители руководителей органов исполнительной власти",
            "image": "https://ai.gov.ru/upload/iblock/d39/723i4fqpkx9nz4hb05f0xrb876dihcky.png",
            "date": "2024-09-19",
            "time": [
              [12,30],
              [13,'00']
            ],
            "head": {
              "id": "string",
              "name": "Иван Иванов"
            },
            "responsible": {
              "id": "string",
              "name": "Маша Самоходова"
            },
            "categories": {
              "id": "string",
              "name": "Лекция"
            },
            "location": {
              "id": "string",
              "name": "Главный корпус"
            },
            "tags": ['DataScience'],
            "created_at": "2024-09-16T10:44:11.952Z"
          },
          {
            "_id": "3",
            "title": "8-я встреча рабочей группы БРИКС по ИКТ и высокопроизводительным вычислительным системам",
            "description": " Искусственный интеллект Российской Федерации Национальный центр развития искусственного интеллекта при Правительстве Российской Федерации",
            "image": "https://ai.gov.ru/upload/iblock/049/37xrayyotscfw8qgk17wf011apse2bb5.png",
            "date": "2024-09-26",
            "time": [
              [15,30],
              [16,'00']
            ],
            "head": {
              "id": "string",
              "name": "Стар Скороходов"
            },
            "responsible": {
              "id": "string",
              "name": "Василий Громов"
            },
            "categories": {
              "id": "string",
              "name": "Мастер-класс"
            },
            "location": {
              "id": "string",
              "name": "Главный корпус"
            },
            "tags": ['ОЭЗ «Иннополис»','Бизнес'],
            "created_at": "2024-09-16T10:44:11.952Z"
          },
          {
            "_id": "4",
            "title": "ICOMP 2024",
            "description": "Первая международная конференция по вычислительной оптимизации ICOMP 2024 пройдет 10—12 октября в Иннополисе.",
            "image": "https://ai.gov.ru/upload/iblock/392/52pgues7mewyqgjd2typv6153ot3hqho.png",
            "date": "2024-09-22",
            "time": [
              [13,30],
              [14,'00']
            ],
            "head": {
              "id": "string",
              "name": "Мария Иванова"
            },
            "responsible": {
              "id": "string",
              "name": "Олег Старченко"
            },
            "categories": {
              "id": "string",
              "name": "Дискуссия"
            },
            "location": {
              "id": "string",
              "name": "Главный корпус"
            },
            "tags": ['Университет Иннополис','Вычисления'],
            "created_at": "2024-09-16T10:44:11.952Z"
          },
        ]
      }
    return data;

    
  };
  
export const useGetEventsList = ({
    page = 1,size = 10,
}:{
    page: number;
    size: number;
}) => {
const query = useQuery({ queryKey: ['getEventsList',page], queryFn: ()=> getEventsList({page,size}) })

const data = query.data?.data;
const count = query.data?.count;
const isFetching = query.isFetching ;
const refetch = query.refetch;

return {
    data,
    isFetching,
    refetch,
    count
} as const;
};