## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Conditional Rendering and Visibility
#### ✅ Answer 537: Rendering conditionally with `view!` macros

In Leptos, you can use a boolean signal for conditional rendering:

```rust
use leptos::*;

#[component]
fn ToggleText(cx: Scope) -> impl IntoView {
    let (show, set_show) = create_signal(cx, true);
    view! { cx,
        <button on:click=move |_| set_show.update(|b| *b = !*b)>
            {move || if show.get() { "Hide" } else { "Show" }}
        </button>
        {move || if show.get() {
            view! { cx, <p>"Visible text!"</p> }
        } else {
            view! { cx, <></> }
        }}
    }
}
```
