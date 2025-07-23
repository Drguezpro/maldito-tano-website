// src/components/MenuSection.jsx
/**
 * MenuSection
 * Props:
 *  - id: string, used for section id and anchor
 *  - title: string, display title
 *  - items: array of objects { name, description, price }
 */
export default function MenuSection({ id, title, items }) {
  return (
    <section id={id.toLowerCase()} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
            <span className="mt-2 md:mt-0 font-bold text-lg">${item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
