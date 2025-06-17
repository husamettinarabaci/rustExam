## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Kullanıcı Girişi ve DOM Olayları
#### ✅ Cevap 533: Kullanıcı girişi ve DOM olaylarını yönetme

Leptos ile kullanıcıdan metin alıp butonla ekrana yazdıran bir bileşen örneği:

```rust
use leptos::*;

#[component]
fn InputEcho(cx: Scope) -> impl IntoView {
    let (text, set_text) = create_signal(cx, String::new());
    let (output, set_output) = create_signal(cx, String::new());
    view! { cx,
        <input type="text" on:input=move |ev| set_text(event_target_value(&ev)) />
        <button on:click=move |_| set_output.set(text.get())>"Show"</button>
        <p>{move || output.get()}</p>
    }
}
```
