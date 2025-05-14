export default function ContactForm() {
    return (
      <form className="space-y-4">
        <input type="text" placeholder="Ваше имя" className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Ваш Email" className="w-full border p-2 rounded" required />
        <textarea placeholder="Ваше сообщение" className="w-full border p-2 rounded" required></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Отправить</button>
      </form>
    );
  }
  