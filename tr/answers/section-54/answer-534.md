## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Sayfa Yönlendirme ve Navigasyon
#### ✅ Cevap 534: Sayfalar/arasında gezinme

Leptos ile iki sayfa arasında geçiş için basit bir yönlendirme örneği:

```rust
use leptos::*;

#[component]
fn Home(cx: Scope) -> impl IntoView {
    view! { cx, <h2>"Home Page"</h2> }
}

#[component]
fn About(cx: Scope) -> impl IntoView {
    view! { cx, <h2>"About Page"</h2> }
}

#[component]
fn App(cx: Scope) -> impl IntoView {
    let (page, set_page) = create_signal(cx, "home");
    view! { cx,
        <nav>
            <button on:click=move |_| set_page.set("home")>"Home"</button>
            <button on:click=move |_| set_page.set("about")>"About"</button>
        </nav>
        {move || match page.get() {
            "home" => view! { cx, <Home /> },
            "about" => view! { cx, <About /> },
            _ => view! { cx, <Home /> },
        }}
    }
}
```
