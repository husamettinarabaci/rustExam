## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Forms and Validation
#### ✅ Answer 538: Building form components with validation

A Leptos form component with basic validation:

```rust
use leptos::*;

#[component]
fn ValidatedForm(cx: Scope) -> impl IntoView {
    let (input, set_input) = create_signal(cx, String::new());
    let (message, set_message) = create_signal(cx, String::new());
    let on_submit = move |_| {
        if input.get().trim().is_empty() {
            set_message.set("Error: Input cannot be empty.".to_string());
        } else {
            set_message.set("Submitted successfully!".to_string());
        }
    };
    view! { cx,
        <input type="text" on:input=move |ev| set_input(event_target_value(&ev)) />
        <button on:click=on_submit>"Submit"</button>
        <p>{move || message.get()}</p>
    }
}
```
