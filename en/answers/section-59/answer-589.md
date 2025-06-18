## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Internationalization and Localization  
#### ✅ Answer 589: Internationalization and localization

Internationalization (i18n) is designing your app to support multiple languages. Localization (l10n) is providing content for a specific language/culture. In Yew/Leptos, you can manage language selection with state.

```rust
use yew::prelude::*;

#[function_component(Multilang)]
fn multilang() -> Html {
    let lang = use_state(|| "en");
    let text = match &**lang {
        "en" => "Hello!",
        "tr" => "Merhaba!",
        _ => "Hello!",
    };
    let set_en = {
        let lang = lang.clone();
        Callback::from(move |_| lang.set("en"))
    };
    let set_tr = {
        let lang = lang.clone();
        Callback::from(move |_| lang.set("tr"))
    };
    html! {
        <>
            <button onclick={set_en}>{ "EN" }</button>
            <button onclick={set_tr}>{ "TR" }</button>
            <p>{ text }</p>
        </>
    }
}
```
