export default function Page404() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-24">
      <div className="glass-panel w-full max-w-2xl rounded-[2rem] p-8 text-center sm:p-10">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/48">
          404
        </div>
        <h1 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Страница пока не подключена
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-7 text-white/68 sm:text-base">
          Этот переход пока ведет на временную 404-страницу. Позже сюда можно
          будет подключить реальную форму обратной связи или страницу покупки
          токена.
        </p>
      </div>
    </main>
  );
}
