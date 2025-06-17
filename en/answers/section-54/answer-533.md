## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: User Input and DOM Events
#### ✅ Answer 533: Handling user input and DOM events

A Leptos component that takes user input and displays it on button click:

```rust
use leptos::*;

#[component]
fn InputEcho(cx: Scope) -> impl IntoView {
    let (text, set_text) = create_signal(cx, String::new());
    let (output, set_output) = create_signal(cx, String::new());
    view! { cx,
        <input type="text" on:input=move |ev| set_text(event_target_value(&ev)) />
        <button on:click=move |_| set_output.set(text.get())>"Show"</button>
        <p>{move || output.get()}</p>
    }
}
```
