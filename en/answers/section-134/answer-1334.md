## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: CSS and Style Management Integration  
#### ✅ Answer 1334: Integrating CSS and style management

In Rust WASM UI frameworks like Yew or Leptos, you can apply styles to components using CSS classes, inline styles, or external CSS files. Styles can also be updated dynamically based on component state.

Below is a Yew example where a button changes its color based on its active state:

```rust
use yew::prelude::*;

#[function_component(StyledButton)]
fn styled_button() -> Html {
    let active = use_state(|| false);
    let onclick = {
        let active = active.clone();
        Callback::from(move |_| active.set(!*active))
    };
    let style = if *active {
        "background: green; color: white;"
    } else {
        "background: gray; color: black;"
    };
    html! {
        <button {onclick} style={style}>{ if *active { "Active" } else { "Inactive" } }</button>
    }
}
```

Here, the button's background and text color change when clicked. Style management can be static or dynamic.
