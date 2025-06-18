## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Building Custom Components with Leptos/Yew  
#### ✅ Answer 581: Building custom components with Leptos/Yew

To build a custom component in Yew, define a function or struct with the `#[function_component]` attribute, accept props, and return HTML using the `html!` macro. This enables reusable UI elements with type safety.

```rust
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct HelloProps {
    pub name: String,
}

#[function_component(Hello)]
fn hello(props: &HelloProps) -> Html {
    html! {
        <div>{ format!("Hello, {}!", props.name) }</div>
    }
}
```
