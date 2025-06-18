## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: Proje Kurulumu ve Temeller
#### ✅ Cevap 1281: Fullstack Rust+WASM projesi kurma

Bu soruda, hem backend'i hem de frontend'i Rust ile yazılmış ve frontend'i WASM olarak derlenen bir proje iskeleti oluşturuluyor. Backend için Axum veya Actix-Web, frontend için ise Yew veya Leptos gibi bir framework seçilebilir. Proje iki ayrı crate olarak yapılandırılır ve frontend WASM olarak derlenir.

```rust
// Proje yapısı örneği:
// backend/  --> Axum veya Actix-Web sunucusu
// frontend/ --> Yew veya Leptos ile WASM uygulaması

// Frontend ana dosyası (src/main.rs):
fn main() {
    web_sys::console::log_1(&"Hello, WASM!".into());
}
```
