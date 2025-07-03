# Reusable Mega Navbar Workshop — FreeCodeCamp

Энэхүү төсөл нь FreeCodeCamp-ийн **"Reusable Mega Navbar"** workshop-ийн алхмуудыг (Steps 1–11) бүрэн тайлбартай байдлаар багтаасан. Эцсийн байдлаар хийх алхам бүрийн кодыг энэ төслийн тус бүрийн ийн file аас хараад Freecodecamp дээр хэрэглээрэй. 

---

## 🧠 Алхам бүрийн тайлбар

### **Step 1**  
- `Navbar` гэж нэрлэсэн **React функционал компонент** үүсгэнэ.  
- Компонент **named export** хэлбэрээр экспортлогдсон байх ёстой (`export function Navbar() { ... }`).  
- `return` нь **хоосон хоосон эргэлдэх таслал (`()`)** байх шаардлагатай буюу `return ()` гэсэн форматаар.  
  *(Семиколон `/;` тавихгүй байх нь тестээр шалгалтад тэнцэнэ)* :contentReference[oaicite:1]{index=1}

---

### **Step 2**  
- `Navbar` компонентын `return` дотор `<nav className="navbar">` элементийг байрлуулна — navbar-г бүрдүүлэх эхлэл. :contentReference[oaicite:2]{index=2}

---

### **Step 3**  
- `nav` элементийн дотор `<ul>` (unordered list) нэмнэ. Дотор нь 3 ширхэг `<li>` элементийн skeleton бүтэцтэй байна. :contentReference[oaicite:3]{index=3}

---

### **Step 4**  
- Бүх `<li>` элементийг `className="nav-item"` attribute-тай болгож, CSS-д зориулсан стилийг холбож өгнө. :contentReference[oaicite:4]{index=4}

---

### **Step 5**  
- Эхний `<li>` дотор `Dashboard` нэртэй `<a href="#">Dashboard</a>` элементийг байршуулна.

---

### **Step 6**  
- Хоёр дахь `<li>` дотор `Widgets` нэртэй `<a href="#">Widgets</a>` элементийг байршуулна.

---

### **Step 7**  
- Гурав дахь `<li>` дотор `Apps` товч (`button`) нэмнэ:  
  `<button aria-expanded="false">Apps</button>` — accessibility (ARIA) нэмэлттэй. :contentReference[oaicite:5]{index=5}

---

### **Step 8**  
- Мөн гурав дахь `<li>` дотор дэд менюгийн `ul` компонентыг нэмж, `className="sub-menu"` ба `aria-label="Apps"` гэсэн атрибут өгнө. :contentReference[oaicite:6]{index=6}

---

### **Step 9**  
- `sub-menu` дотор **3 ширхэг `<li>` элементийг** үүсгэнэ.

---

### **Step 10**  
- Дэд менюгийн `<li>` бүрийн дотор `a href="#"` линк нэмнэ.

---

### **Step 11**  
- Дэд цэсний (`sub-menu`) гурван `a` линк дээр дараах текстүүд орно:  
  1. `Calendar`  
  2. `Chat`  
  3. `Email`  
  🎉 Ингээд таны mega navbar бүрэн ажиллах боломжтой болно! :contentReference[oaicite:7]{index=7}

---

