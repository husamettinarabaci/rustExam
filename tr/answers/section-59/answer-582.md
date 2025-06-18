## 📘 Bölüm: Frontend Framework Derinlemesine  
### 🔹 Kategori: Durum Yönetimi  
#### ✅ Cevap 582: Rust frontend'de durum yönetimi desenleri

Yew veya Leptos'ta durum yönetimi için genellikle bir state hook'u (`use_state` gibi) kullanılır. Durum değiştiğinde, bileşen otomatik olarak yeniden render edilir.

```rust
use yew::prelude::*;

#[function_component(Counter)]
fn counter() -> Html {
    let count = use_state(|| 0);
    let onclick = {
        let count = count.clone();
        Callback::from(move |_| count.set(*count + 1))
    };
    html! {
        <div>
            <button {onclick}>{ "+1" }</button>
            <p>{ *count }</p>
        </div>
    }
}
```
