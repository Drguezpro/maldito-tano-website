import React, { useState } from 'react';

export default function ReservationModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(2);
  const phone = '543541516069';

  function formatRelativeDate(dateStr) {
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const [y, m, d] = dateStr.split('-');
    const selected = new Date(y, Number(m) - 1, Number(d));
    const todayDate = new Date();

    const dayOfWeek = todayDate.getDay();
    const mondayOffset = (dayOfWeek + 6) % 7;
    const currentMonday = new Date(todayDate);
    currentMonday.setDate(todayDate.getDate() - mondayOffset);
    const currentSunday = new Date(currentMonday);
    currentSunday.setDate(currentMonday.getDate() + 6);

    const nextMonday = new Date(currentMonday);
    nextMonday.setDate(currentMonday.getDate() + 7);
    const nextSunday = new Date(currentSunday);
    nextSunday.setDate(currentSunday.getDate() + 7);

    const dayName = days[selected.getDay()];
    const day = selected.getDate();
    const monthName = months[selected.getMonth()];

    if (selected >= currentMonday && selected <= currentSunday) {
      return `este ${dayName}`;
    } else if (selected >= nextMonday && selected <= nextSunday) {
      return `el próximo ${dayName}`;
    } else {
      return `el ${dayName} ${day} de ${monthName}`;
    }
  }

  const resetForm = () => {
    setName('');
    setDate('');
    setTime('');
    setPeople(2); // restaurás a su valor inicial, no vacío
    };

  const handleSubmit = () => {
    const relative = formatRelativeDate(date);
    const text = `Hola Carlo, soy ${name}. Quisiera reservar para ${people} persona(s) ${relative} a las ${time}. ¡Gracias!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    // Cerramos el modal un pequeño instante después
    setTimeout(() => {
      onClose();
    }, 300);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">Reservar mesa</h3>

        <label className="block mb-2">
          Nombre
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border rounded px-2 py-1"
          />
        </label>

        <label className="block mb-2">
          Fecha
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full border rounded px-2 py-1"
          />
        </label>

        <label className="block mb-2">
          Hora
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 w-full border rounded px-2 py-1"
          />
        </label>

        <label className="block mb-4">
          Personas
          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="mt-1 w-full border rounded px-2 py-1"
          />
        </label>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
