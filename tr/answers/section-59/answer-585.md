## 📘 Bölüm: Frontend Framework Derinlemesine  
### 🔹 Kategori: WASM UI'da Animasyon ve Geçişler  
#### ✅ Cevap 585: WASM UI'da animasyon ve geçişler

Yew veya Leptos ile animasyon için genellikle CSS kullanılır. Aşağıda, bir butona tıklandığında bir kutunun görünürlüğünü ve geçiş efektini değiştiren örnek verilmiştir.

```rust
use yew::prelude::*;

#[function_component(AnimatedBox)]
fn animated_box() -> Html {
    let visible = use_state(|| false);
    let onclick = {
        let visible = visible.clone();
        Callback::from(move |_| visible.set(!*visible))
    };
    let class = if *visible { "box show" } else { "box" };
    html! {
        <>
            <button {onclick}>{ "Toggle" }</button>
            <div class={class}></div>
        </>
    }
}
/* CSS:
.box {
  opacity: 0;
  transition: opacity 0.5s;
}
.box.show {
  opacity: 1;
}
*/
```
