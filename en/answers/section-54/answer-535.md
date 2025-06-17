## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Async API Calls and Data Fetching
#### ✅ Answer 535: Making async API calls from the frontend

A Leptos component that makes an async API call and displays the result:

```rust
use leptos::*;
use wasm_bindgen_futures::spawn_local;

#[component]
fn FetchData(cx: Scope) -> impl IntoView {
    let (data, set_data) = create_signal(cx, String::new());
    let fetch = move || {
        let set_data = set_data.clone();
        spawn_local(async move {
            let resp = reqwest::get("https://api.example.com/data").await.unwrap();
            let text = resp.text().await.unwrap();
            set_data.set(text);
        });
    };
    view! { cx,
        <button on:click=move |_| fetch()>"Fetch Data"</button>
        <p>{move || data.get()}</p>
    }
}
```
