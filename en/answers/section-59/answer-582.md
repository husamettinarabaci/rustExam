## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: State Management Patterns in Rust Frontend  
#### ✅ Answer 582: State management patterns in Rust frontend

In Yew, you can manage state using hooks like `use_state`. When the state changes, the component rerenders automatically.

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
