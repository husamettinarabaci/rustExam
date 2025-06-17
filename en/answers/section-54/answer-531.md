## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Project Setup and Basics
#### ✅ Answer 531: Creating a frontend project with `trunk` and `Leptos`

To develop a frontend with Leptos, first create a new Rust project, add `trunk` and `leptos` as dependencies, and write a simple "Hello, Leptos!" app.

```rust
use leptos::*;

#[component]
fn App(cx: Scope) -> impl IntoView {
    view! { cx,
        <h1>"Hello, Leptos!"</h1>
    }
}

fn main() {
    leptos::mount_to_body(App);
}
```
