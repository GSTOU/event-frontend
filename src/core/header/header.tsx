/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-imports */
import { Carousel } from '@mantine/carousel';
import dayjs from 'dayjs';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { MdOutlineLocationOn } from 'react-icons/md';
import { TbCalendarTime } from 'react-icons/tb';
import QRCode from 'react-qr-code';

import Logo from '../../assets/images/logo.svg';
import { useGetEventsList } from '../../service/get-events-list';

export function Header() {
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  const { data } = useGetEventsList({
    page: 1,
    size: 10,
  });

  return (
    <div className="relative min-h-[820px] pt-10">
      <div className="absolute left-0 top-0  h-full w-full">
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withIndicators={false}
          height={820}
          nextControlIcon={<FaAngleRight size={22} className="text-white" />}
          previousControlIcon={<FaAngleLeft size={22} className="text-white" />}
          classNames={{
            control: '!bg-gray-800 !p-3',
            controls:
              '!right-[15%] !w-40 !inline-block !absolute !-bottom-40 !flex !gap-6',
          }}
          className=""
          styles={{
            controls: {
              insetInlineStart: 'auto',
            },
          }}
        >
          {data?.items?.map((item) => (
            <Carousel.Slide key={item?.id}>
              <div
                style={{
                  backgroundImage: `url(${
                    item?.photo
                      ? String(item?.photo)
                      : 'https://gstou.ru/university/profiles/profile.jpg'
                  })`,
                  height: 820,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="flex items-center"
              >
                <div
                  className="z-10"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#000',
                    opacity: '0.6',
                  }}
                ></div>
                <div className="z-20 mx-auto flex w-full max-w-container items-center justify-between">
                  <div className="flex max-w-[800px] flex-col gap-6">
                    <div
                      style={{ fontSize: 15 }}
                      className="flex items-center gap-6 text-white"
                    >
                      <div className="flex items-center gap-1">
                        <TbCalendarTime />
                        <div className="pb-1">
                          {dayjs(item?.date_start)?.format(
                            'DD MMMM YYYY, HH:mm',
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineLocationOn />
                        <div className="pb-1">
                          {item?.space?.address?.title}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-white"
                      style={{ fontSize: 56, lineHeight: 1 }}
                    >
                      {item?.full_name}
                    </div>
                    <div
                      style={{ fontSize: 16 }}
                      className="flex flex-wrap gap-2"
                    >
                      {item?.themes?.map((tag) => (
                        <div
                          key={tag?.id}
                          className="whitespace-nowrap text-nowrap rounded-md bg-slate-700 px-2 pb-1 pt-0.5"
                          style={{ color: '#78C9FF' }}
                        >
                          #{tag?.name}
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 20 }}>
                      <a
                        href={`https://leader-id.ru/events/${item?.id}`}
                        target="_blank"
                        className="mt-4 inline-block rounded-lg bg-white px-3 pb-2 pt-1 font-semibold"
                        rel="noreferrer"
                      >
                        Узнать подробнее
                      </a>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        height: 'auto',
                        margin: '0 auto',
                        width: '100%',
                        maxWidth: 340,
                      }}
                      className="rounded-md bg-white p-4 pr-8"
                    >
                      <QRCode
                        size={256}
                        style={{
                          height: 'auto',
                          maxWidth: '100%',
                          width: '100%',
                        }}
                        value={`https://leader-id.ru/events/${item?.id}`}
                        viewBox="0 0 256 256"
                      />
                      <div>Подробнее о мероприятии</div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div className="z-40 m-auto max-w-container">
        <div
          className="flex items-center gap-10 text-white"
          style={{ backdropFilter: 'blur(25px)' }}
        >
          <div className="">
            <img style={{ height: 71 }} src={Logo} alt="Gstou logo" />
          </div>
          <h1 className="text-5xl font-semibold">Календарь мероприятий</h1>
        </div>
      </div>
    </div>
  );
}
