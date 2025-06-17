## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Async API Çağrıları ve Veri Çekme
#### ✅ Cevap 535: Frontend'den async API çağrıları yapma

Leptos ile async API çağrısı yapan bir bileşen örneği:

```rust
use leptos::*;
use wasm_bindgen_futures::spawn_local;

#[component]
fn FetchData(cx: Scope) -> impl IntoView {
    let (data, set_data) = create_signal(cx, String::new());
    let fetch = move || {
        let set_data = set_data.clone();
        spawn_local(async move {
            let resp = reqwest::get("https://api.example.com/data").await.unwrap();
            let text = resp.text().await.unwrap();
            set_data.set(text);
        });
    };
    view! { cx,
        <button on:click=move |_| fetch()>"Fetch Data"</button>
        <p>{move || data.get()}</p>
    }
}
```
