import React, { useState } from "react";

const PAGES = {
  HOME: "HOME",
  BUY: "BUY",
  SELL: "SELL",
  LOGIN: "LOGIN"
};

export default function JewelryShop() {
  const [page, setPage] = useState(PAGES.HOME);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ email: "", password: "" });
  const [products] = useState([
    { id: 1, title: "خاتم الألماس", price: 1200, img: "https://images.unsplash.com/photo-1612205488334-76bbd92e2b4b?q=80&w=1200" },
    { id: 2, title: "قلادة اللؤلؤ", price: 900, img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200" },
    { id: 3, title: "سوار ذهبي", price: 700, img: "https://images.unsplash.com/photo-1600185365932-0a27093f63a6?q=80&w=1200" }
  ]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-all duration-500">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-lg border-b border-yellow-500 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">💎 متجر المجوهرات</h1>
          <nav className="flex gap-3">
            <button onClick={() => setPage(PAGES.HOME)} className="hover:text-yellow-400">الرئيسية</button>
            <button onClick={() => setPage(PAGES.BUY)} className="hover:text-yellow-400">الشراء</button>
            <button onClick={() => setPage(PAGES.SELL)} className="hover:text-yellow-400">البيع</button>
            <button onClick={() => setPage(PAGES.LOGIN)} className="hover:text-yellow-400">تسجيل الدخول</button>
            <button onClick={() => alert(`عدد العناصر: ${cart.length}`)} className="bg-yellow-500 text-black px-3 py-1 rounded">🛒 السلة ({cart.length})</button>
          </nav>
        </div>
      </header>

      {/* Pages */}
      <main className="container mx-auto px-6 py-10">
        {page === PAGES.HOME && (
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">مرحبا بك في بيت المجوهرات</h2>
            <p className="text-gray-300 mb-8">أفضل مكان لاقتناء وبيع الحلي والمجوهرات الفاخرة</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setPage(PAGES.BUY)} className="bg-yellow-500 text-black px-5 py-3 rounded">تسوّق الآن</button>
              <button onClick={() => setPage(PAGES.SELL)} className="border border-yellow-500 px-5 py-3 rounded hover:bg-yellow-500 hover:text-black">اعرض مجوهراتك للبيع</button>
            </div>
          </section>
        )}

        {page === PAGES.BUY && (
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">منتجات متاحة للشراء</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-black/60 rounded shadow p-4 text-center border border-yellow-700 hover:scale-105 transition">
                  <img src={p.img} alt={p.title} className="w-full h-56 object-cover rounded" />
                  <h4 className="font-semibold mt-2 text-yellow-400">{p.title}</h4>
                  <p className="text-gray-300 font-bold">{p.price} د.ت</p>
                  <button onClick={() => addToCart(p)} className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded">أضف إلى السلة</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === PAGES.SELL && (
          <section className="max-w-lg mx-auto bg-black/60 p-6 rounded shadow border border-yellow-700">
            <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-400">اعرض مجوهراتك للبيع</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("تم إرسال طلب البيع بنجاح!"); }} className="space-y-3">
              <input required placeholder="اسم المنتج" className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <input required placeholder="السعر بالدينار" type="number" className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <input required placeholder="رابط الصورة" className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <textarea required placeholder="الوصف" className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded">إرسال الطلب</button>
            </form>
          </section>
        )}

        {page === PAGES.LOGIN && (
          <section className="max-w-md mx-auto bg-black/60 p-6 rounded shadow border border-yellow-700">
            <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-400">تسجيل الدخول</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert(`مرحباً ${user.email}`); }} className="space-y-3">
              <input type="email" required placeholder="البريد الإلكتروني" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <input type="password" required placeholder="كلمة المرور" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full border border-yellow-700 bg-black p-2 rounded text-yellow-400" />
              <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded">تسجيل الدخول</button>
            </form>
          </section>
        )}
      </main>

      <footer className="bg-black border-t border-yellow-700 mt-12 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} متجر المجوهرات · جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
