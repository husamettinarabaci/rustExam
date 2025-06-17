## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Proje Kurulumu ve Temeller
#### ✅ Cevap 531: `trunk` ve `Leptos` ile frontend projesi oluşturma

Leptos ile frontend geliştirmek için önce yeni bir Rust projesi başlatılır, `trunk` ve `leptos` bağımlılıkları eklenir. Ardından basit bir "Hello, Leptos!" uygulaması yazılır.

```rust
use leptos::*;

#[component]
fn App(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>"Hello, Leptos!"</h1>
    }
}

fn main() {
    leptos::mount_to_body(App);
}
```
