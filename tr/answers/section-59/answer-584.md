## 📘 Bölüm: Frontend Framework Derinlemesine  
### 🔹 Kategori: Erişilebilirlik ve Klavye Navigasyonu  
#### ✅ Cevap 584: Erişilebilirlik ve klavye navigasyonu

Erişilebilirlik için semantik HTML, `aria-*` özellikleri ve klavye ile erişim önemlidir. Aşağıda, klavye ile odaklanabilen ve `Enter` tuşu ile etkinleşen bir buton örneği verilmiştir.

```rust
use yew::prelude::*;

#[function_component(AccessibleButton)]
fn accessible_button() -> Html {
    let onclick = Callback::from(|_| web_sys::console::log_1(&"Button activated!".into()));
    html! {
        <button tabindex="0" aria-label="Activate" {onclick}>{ "Activate" }</button>
    }
}
```
