/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-imports */
import { Carousel } from '@mantine/carousel';
import { MdOutlineLocationOn } from 'react-icons/md';
import { TbCalendarTime } from 'react-icons/tb';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

import bg from '../../assets/images/bg.png';
import Logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <div className="relative min-h-[760px] pt-10">
      <div className="absolute left-0 top-0  h-full w-full">
        <Carousel withIndicators height={760}>
          <Carousel.Slide>
            <div
              style={{
                backgroundImage: `url(${bg})`,
                height: 760,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
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
                    className="flex items-center gap-4 text-white"
                  >
                    <div className="flex items-center gap-2">
                      <TbCalendarTime /> <span>1 октября</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineLocationOn /> <span>Грозный</span>
                    </div>
                  </div>
                  <div
                    className="text-white"
                    style={{ fontSize: 56, lineHeight: 1 }}
                  >
                    Акселератор ГГНТУ.
                    <br /> Индивидуальные консультации с наставниками и
                    трекерами
                  </div>
                  <div
                    style={{ fontSize: 16 }}
                    className="flex flex-wrap gap-2"
                  >
                    <div
                      className="whitespace-nowrap text-nowrap rounded-md bg-slate-700 px-2 pb-1 pt-0.5"
                      style={{ color: '#78C9FF' }}
                    >
                      #большие данные
                    </div>
                    <div
                      className="whitespace-nowrap text-nowrap rounded-md bg-slate-700 px-2 pb-1 pt-0.5"
                      style={{ color: '#78C9FF' }}
                    >
                      #беспроводная связь и интернет вещей
                    </div>
                    <div
                      className="whitespace-nowrap text-nowrap rounded-md bg-slate-700 px-2 pb-1 pt-0.5"
                      style={{ color: '#78C9FF' }}
                    >
                      #AR/VR
                    </div>
                    <div
                      className="whitespace-nowrap text-nowrap rounded-md bg-slate-700 px-2 pb-1 pt-0.5"
                      style={{ color: '#78C9FF' }}
                    >
                      #искусственный интеллект и машинное обучение
                    </div>
                  </div>
                  <div style={{ fontSize: 20 }}>
                    <button className="rounded-md bg-white px-2 pb-1 pt-0.5">
                      Узнать подробнее
                    </button>
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
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: 'auto',
                        maxWidth: '100%',
                        width: '100%',
                      }}
                      value="https://gstou.ru/"
                      viewBox="0 0 256 256"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="z-40 m-auto max-w-container">
        <div
          className="flex items-center gap-16 text-white"
          style={{ backdropFilter: 'blur(25px)' }}
        >
          <div className="">
            <Link to="/">
              <img style={{ height: 71 }} src={Logo} alt="Gstou logo" />
            </Link>
          </div>
          <h1 className="text-5xl font-semibold">Календарь мероприятий</h1>
        </div>
      </div>
    </div>
  );
}
