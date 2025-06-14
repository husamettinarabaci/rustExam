## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: Vektörler  
#### ✅ Cevap 122: Vektör elemanlarına erişim

**Açıklama:**
İndeksleme (`v[0]`) ile veya `.get()` ile erişebilirsiniz. Sınır dışı erişimde indeksleme panic, `.get()` ise `None` döner.

```rust
let v = vec![1, 2, 3];
let ilk = v[0];
let belki = v.get(10); // None
```
