## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Reaktif Bileşenler ve Durum Yönetimi
#### ✅ Cevap 532: Sinyaller ve durum ile reaktif bileşenler yazma

Leptos'ta sinyallerle reaktif bir sayaç bileşeni şöyle yazılır:

```rust
use leptos::*;

#[component]
fn Counter(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);
    view! { cx,
        <button on:click=move |_| set_count.update(|n| *n += 1)>
            {move || count.get()}
        </button>
    }
}
```
