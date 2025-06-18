## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Backend ve frontend arasında kod paylaşımı  
#### ✅ Cevap 691: Backend ve frontend arasında kod paylaşımı

Full-stack Rust'ta, ortak tip veya mantık paylaşılan bir crate'e konularak backend ve frontend (WASM) arasında kod paylaşılabilir. Bu, tekrarları azaltır ve tutarlılık sağlar.

Örnek:
```rust
// shared/src/lib.rs
#[derive(serde::Serialize, serde::Deserialize)]
pub struct User {
    pub id: u32,
    pub name: String,
}
```
Hem backend hem de frontend bu `shared` crate'ine bağımlı olabilir. Avantajları tip güvenliği ve az tekrar, zorlukları ise bağımlılık yönetimi ve WASM uyumluluğudur.
