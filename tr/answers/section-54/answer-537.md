## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Koşullu Render ve Görünürlük
#### ✅ Cevap 537: `view!` makroları ile koşullu render

Leptos'ta koşullu render için bir boolean sinyal kullanılabilir:

```rust
use leptos::*;

#[component]
fn ToggleText(cx: Scope) -> impl IntoView {
    let (show, set_show) = create_signal(cx, true);
    view! { cx,
        <button on:click=move |_| set_show.update(|b| *b = !*b)>
            {move || if show.get() { "Hide" } else { "Show" }}
        </button>
        {move || if show.get() {
            view! { cx, <p>"Visible text!"</p> }
        } else {
            view! { cx, <></> }
        }}
    }
}
```
