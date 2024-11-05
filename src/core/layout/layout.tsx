import { Header } from '../header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
      <div
        style={{ boxShadow: '0px 2px 15.8px 0px #00000040' }}
        className="mt-20 py-6 text-center text-lg text-my-red"
      >
        © 2024 ГРОЗНЕНСКИЙ ГОСУДАРСТВЕННЫЙ НЕФТЯНОЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ
      </div>
    </div>
  );
}
