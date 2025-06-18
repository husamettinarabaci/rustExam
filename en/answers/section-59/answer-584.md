## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Accessibility and Keyboard Navigation  
#### ✅ Answer 584: Accessibility and keyboard navigation

Accessibility involves using semantic HTML, ARIA attributes, and supporting keyboard navigation. Below is a button that can be focused and activated with the keyboard.

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
