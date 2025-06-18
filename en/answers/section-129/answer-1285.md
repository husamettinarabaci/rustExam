## 📘 Section: Fullstack WASM Applications
### 🔹 Category: State Management
#### ✅ Answer 1285: State management in WASM frontends

This task demonstrates shared state management across multiple components using a framework like Yew or Leptos. When the state changes, all relevant components update automatically.

```rust
// Shared state example with Yew
use yew::prelude::*;
use std::rc::Rc;

#[derive(Clone, PartialEq)]
struct AppState {
    value: i32,
}

#[function_component(Display)]
fn display(props: &UseStateHandle<Rc<AppState>>) -> Html {
    html! { <p>{ props.value.value }</p> }
}

#[function_component(App)]
fn app() -> Html {
    let state = use_state(|| Rc::new(AppState { value: 0 }));
    let inc = {
        let state = state.clone();
        Callback::from(move |_| state.set(Rc::new(AppState { value: state.value.value + 1 })))
    };
    html! {
        <div>
            <button onclick={inc}>{"Increase"}</button>
            <Display ..state.clone() />
        </div>
    }
}
```
