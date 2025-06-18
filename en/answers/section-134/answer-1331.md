## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Component-Based UI  
#### ✅ Answer 1331: Building component-based UI in Rust

To build component-based user interfaces in Rust for WebAssembly, frameworks like Yew and Leptos are commonly used. These frameworks allow you to define each UI part as an independent component and compose them into larger applications.

Below is a simple "Counter" component example using the Yew framework. This component manages its own state and increments the counter when a button is clicked:

```rust
yew::function_component(Counter)
fn counter() -> Html {
    let count = use_state(|| 0);
    let onclick = {
        let count = count.clone();
        Callback::from(move |_| count.set(*count + 1))
    };
    html! {
        <div>
            <p>{ format!("Counter: {}", *count) }</p>
            <button {onclick}>{ "Increment" }</button>
        </div>
    }
}
```

This example shows how the `Counter` component manages its own state and responds to user interaction. Component-based architecture makes your code more modular and reusable.
