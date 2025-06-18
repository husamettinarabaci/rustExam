## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: Reaktif UI Bileşenleri
#### ✅ Cevap 1284: Rust ile reaktif UI bileşenleri oluşturma

Bu soruda, Yew veya Leptos gibi bir framework ile reaktif bir sayaç bileşeni oluşturulur. State değişkeni güncellenir ve arayüz otomatik olarak yeniden render edilir.

```rust
// Yew ile örnek sayaç bileşeni
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
            <button {onclick}>{ "Increase" }</button>
            <p>{ *count }</p>
        </div>
    }
}
```
