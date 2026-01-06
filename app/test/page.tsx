import { ClientComponent } from './ClientComponent'

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return (
    <div>
      <ClientComponent>
        <div className="wrapper">
          {Array.from({ length: 3000 }).map((_, index) => (
            <div key={index}>
              Label
            </div>
          ))}
        </div>
      </ClientComponent>
    </div>
  )
}

export default Page
