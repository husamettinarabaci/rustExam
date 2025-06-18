## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: State Management with Reactive Paradigms  
#### ✅ Answer 1332: State management with reactive paradigms

In Rust WASM UI development, frameworks like Leptos and Yew enable reactive state management using signals or state hooks. Components manage their own state, and the UI updates automatically when the state changes.

Below is a Leptos example of a signal-based counter component:

```rust
use leptos::*;

#[component]
fn Counter(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);
    view! { cx,
        <div>
            <p>{move || format!("Counter: {}", count.get())}</p>
            <button on:click=move |_| set_count.update(|n| *n += 1)>{"Increment"}</button>
        </div>
    }
}
```

Here, the `count` signal holds the state, and `set_count` updates it. The UI automatically re-renders when the state changes.
