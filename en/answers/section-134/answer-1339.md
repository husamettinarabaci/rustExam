## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Testing WASM UI Components  
#### ✅ Answer 1339: Testing WASM UI components

Testing ensures your application works correctly and prevents regressions. In frameworks like Yew and Leptos, you can write unit tests for components.

Below is a Yew example of a test function that renders a component and checks its output:

```rust
use yew::prelude::*;

#[function_component(Hello)]
fn hello() -> Html {
    html! { <p>{"Hello, test!"}</p> }
}

#[cfg(test)]
mod tests {
    use super::*;
    use yew::Renderer;

    #[test]
    fn test_hello_renders() {
        let rendered = Renderer::<Hello>::with_root("#output").render_to_string();
        assert!(rendered.contains("Hello, test!"));
    }
}
```

This test renders the `Hello` component and checks that the output contains the expected text.
