## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Server-Side Rendering Considerations  
#### ✅ Answer 1336: Server-side rendering considerations

Server-side rendering (SSR) means generating the HTML output of your UI on the server and sending it to the client. SSR improves SEO, initial load performance, and accessibility. In the Rust ecosystem, frameworks like Leptos provide SSR support.

A basic SSR setup with Leptos might look like this:

```rust
// main.rs (server)
use leptos::*;

#[component]
fn App(cx: Scope) -> impl IntoView {
    view! { cx, <h1>{"Hello, SSR!"}</h1> }
}

fn main() {
    leptos::ssr::render_to_string(|cx| view! { cx, <App /> });
    // This HTML can be returned as an HTTP response
}
```

Here, `render_to_string` generates HTML on the server. For full SSR integration, refer to the framework documentation.
