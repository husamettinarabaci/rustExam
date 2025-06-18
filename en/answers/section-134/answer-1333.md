## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Event Handling and DOM Interaction  
#### ✅ Answer 1333: Event handling and DOM interaction

In Rust WASM UI frameworks like Yew or Leptos, you handle user events and interact with the DOM using event listeners and state updates.

Below is a Yew example that echoes the value entered in a text box in real time:

```rust
use yew::prelude::*;

#[function_component(InputEcho)]
fn input_echo() -> Html {
    let value = use_state(|| String::new());
    let oninput = {
        let value = value.clone();
        Callback::from(move |e: InputEvent| {
            let input: web_sys::HtmlInputElement = e.target_unchecked_into();
            value.set(input.value());
        })
    };
    html! {
        <div>
            <input type="text" {oninput} />
            <p>{ format!("Input: {}", *value) }</p>
        </div>
    }
}
```

Here, the `value` state is updated as the user types, and the UI reflects the change immediately.
