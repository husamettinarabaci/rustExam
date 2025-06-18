## 📘 Section: Fullstack WASM Applications
### 🔹 Category: Reactive UI Components
#### ✅ Answer 1284: Building reactive UI components in Rust

This task uses a framework like Yew or Leptos to build a reactive counter component. The state variable is updated and the UI automatically re-renders.

```rust
// Example counter component with Yew
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
