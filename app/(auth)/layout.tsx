export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-600 bg-dotted-pattern'>{children}</div>
  )
}
