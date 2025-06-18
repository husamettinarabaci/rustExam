## 📘 Bölüm: Crate Dışı API Tasarımı ve Sürümleme  
### 🔹 Kategori: Görünürlük Yönetimi  
#### ✅ Cevap 832: `pub`, `pub(crate)`, `pub(super)` ile görünürlük yönetimi

Rust'ta modül ve API görünürlüğü şu anahtar kelimelerle yönetilir:

- `pub`: Herkese açık, crate dışından erişilebilir.
- `pub(crate)`: Sadece aynı crate içinde erişilebilir.
- `pub(super)`: Sadece üst modül tarafından erişilebilir.

Görünürlüğü kısıtlamak, API yüzeyini daraltır ve istikrarı artırır. Gereksiz yere `pub` kullanmaktan kaçının, sadece dışa açılması gerekenleri herkese açık yapın.
