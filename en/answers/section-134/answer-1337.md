## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Accessibility and Internationalization  
#### ✅ Answer 1337: Accessibility and keyboard navigation

Accessibility (a11y) ensures that users with disabilities can use your application, which is important for inclusivity and legal compliance. Keyboard navigation is essential for users who cannot use a mouse. In Rust WASM UI frameworks, accessibility can be improved with semantic HTML and ARIA labels.

Below is a Yew example of a button that can be focused and activated with the Enter key:

```rust
use yew::prelude::*;

#[function_component(AccessibleButton)]
fn accessible_button() -> Html {
    let onclick = Callback::from(|_| web_sys::console::log_1(&"Clicked!".into()));
    let onkeydown = Callback::from(|e: KeyboardEvent| {
        if e.key() == "Enter" {
            web_sys::console::log_1(&"Activated with Enter!".into());
        }
    });
    html! {
        <button aria-label="Accessible Button" tabindex="0" {onclick} {onkeydown}>
            {"Accessible Button"}
        </button>
    }
}
```

This button can be activated by mouse or keyboard, and the ARIA label improves accessibility.
