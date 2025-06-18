## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Performance Tuning in WASM Frontends  
#### ✅ Answer 1338: Performance tuning in WASM frontends

Performance is critical for user experience and scalability. To avoid issues like slow rendering or unnecessary re-renders, you can split components, use memoization, and prevent unnecessary state updates.

Below is a Yew example using memoization (`use_memo`) to ensure an expensive calculation only runs when needed:

```rust
use yew::prelude::*;

#[function_component(ExpensiveComponent)]
fn expensive_component() -> Html {
    let input = use_state(|| 0);
    let expensive_result = use_memo(|input| {
        // Expensive calculation here
        input * 2
    }, *input);
    html! {
        <div>
            <input type="number" value={input.to_string()} oninput={
                let input = input.clone();
                Callback::from(move |e: InputEvent| {
                    let value = e.target_unchecked_into::<web_sys::HtmlInputElement>().value();
                    if let Ok(num) = value.parse() {
                        input.set(num);
                    }
                })
            } />
            <p>{ format!("Result: {}", *expensive_result) }</p>
        </div>
    }
}
```

Here, the expensive calculation only re-runs when `input` changes, preventing unnecessary renders.
