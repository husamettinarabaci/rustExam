## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Ortak Tip Paylaşımı
#### ✅ Cevap 536: `wasm-shared` crate ile frontend ve backend arasında tip paylaşımı

Hem frontend hem de backend tarafından kullanılan ortak bir struct şöyle tanımlanabilir:

```rust
// shared/src/lib.rs
d#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct User {
    pub id: u32,
    pub name: String,
}
```

Bu struct, hem backend hem de frontend projelerinde `shared` crate olarak eklenir ve kullanılır.
