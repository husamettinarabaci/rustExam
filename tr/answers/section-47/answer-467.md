## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: `pub use` ile tipleri yeniden dışa aktarma
#### ✅ Cevap 467: `pub use` ile tipleri yeniden dışa aktarma

Bir modülde tanımlanan bir tipi başka bir modülde `pub use` ile yeniden dışa aktarabilirsiniz. Böylece ana modülden bu tipe doğrudan erişebilirsiniz.

```rust
mod inner {
    pub struct MyType;
}
pub use inner::MyType;

fn main() {
    let _ = MyType;
}
```

Bu yöntem, modül yapısını sadeleştirir ve dışa açık API'yi kolayca yönetmenizi sağlar.
