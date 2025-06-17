## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Reactive Components and State Management
#### ✅ Answer 532: Writing reactive components with signals and state

A reactive counter component in Leptos using signals looks like this:

```rust
use leptos::*;

#[component]
fn Counter(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);
    view! { cx,
        <button on:click=move |_| set_count.update(|n| *n += 1)>
            {move || count.get()}
        </button>
    }
}
```
