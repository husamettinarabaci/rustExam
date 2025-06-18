## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: Durum Yönetimi
#### ✅ Cevap 1285: WASM ön yüzlerinde durum yönetimi

Bu soruda, Yew veya Leptos gibi bir framework ile birden fazla bileşen arasında paylaşılan bir state yönetimi örneği gösterilir. State değiştiğinde ilgili bileşenler otomatik olarak güncellenir.

```rust
// Yew ile paylaşılan state örneği
use yew::prelude::*;
use std::rc::Rc;

#[derive(Clone, PartialEq)]
struct AppState {
    value: i32,
}

#[function_component(Display)]
fn display(props: &UseStateHandle<Rc<AppState>>) -> Html {
    html! { <p>{ props.value.value }</p> }
}

#[function_component(App)]
fn app() -> Html {
    let state = use_state(|| Rc::new(AppState { value: 0 }));
    let inc = {
        let state = state.clone();
        Callback::from(move |_| state.set(Rc::new(AppState { value: state.value.value + 1 })))
    };
    html! {
        <div>
            <button onclick={inc}>{"Artır"}</button>
            <Display ..state.clone() />
        </div>
    }
}
```
