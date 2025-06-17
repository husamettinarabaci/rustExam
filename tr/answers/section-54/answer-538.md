## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Formlar ve Doğrulama
#### ✅ Cevap 538: Doğrulamalı form bileşenleri oluşturma

Leptos ile doğrulamalı bir form bileşeni örneği:

```rust
use leptos::*;

#[component]
fn ValidatedForm(cx: Scope) -> impl IntoView {
    let (input, set_input) = create_signal(cx, String::new());
    let (message, set_message) = create_signal(cx, String::new());
    let on_submit = move |_| {
        if input.get().trim().is_empty() {
            set_message.set("Hata: Metin boş olamaz.".to_string());
        } else {
            set_message.set("Başarıyla gönderildi!".to_string());
        }
    };
    view! { cx,
        <input type="text" on:input=move |ev| set_input(event_target_value(&ev)) />
        <button on:click=on_submit>"Gönder"</button>
        <p>{move || message.get()}</p>
    }
}
```
