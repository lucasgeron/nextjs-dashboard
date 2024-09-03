import Breadcrumbs from "../ui/app/breadcrumbs"

export default function Page() {

  return (
    <>
      <main className="w-full">

        <Breadcrumbs
          breadcrumbs={[
            { label: 'About', href: '/about', active: true },
          ]}
        />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((card) => {
            return (
              <div key={card} className="border rounded-lg">
                <div className="p-4">
                  <p className="mt-4 ">
                    This is a simple Next.js app that demonstrates how to use Tailwind CSS.
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
