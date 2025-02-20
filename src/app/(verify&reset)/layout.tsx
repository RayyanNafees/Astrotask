const Layout = ({children}:{children:React.ReactNode}):JSX.Element => {
  return (
    <main className={`bg-[#212832] flex justify-center items-center`}>
      <section className="min-h-[100vh] px-16 flex flex-col items-center justify-center bg-[#2B3441] lg:w-[60%] w-full">
        {children}
      </section>
    </main>
  )
}

export default Layout;
