import pastas from '../data/menupastas';

export default function MenuPastas() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pastas.map((item, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="italic text-gray-500 mb-1">{item.descriptionIt}</p>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div className="text-lg font-bold">$ {item.price}</div>
        </div>
      ))}
    </div>
  );
}
