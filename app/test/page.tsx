import { ClientComponent } from './ClientComponent'

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return (
    <div style={{ position: 'relative' }}>
      <ClientComponent>
        <nav className={`nav`}>
          {Array.from({ length: 3000 }).map((_, index) => (
            <div key={index}>
              Label
            </div>
          ))}
        </nav>
      </ClientComponent>
    </div>
  )
}

export default Page
