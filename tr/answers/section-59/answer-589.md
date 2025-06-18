## 📘 Bölüm: Frontend Framework Derinlemesine  
### 🔹 Kategori: Uluslararasılaştırma ve Yerelleştirme  
#### ✅ Cevap 589: Uluslararasılaştırma ve yerelleştirme

Uluslararasılaştırma (i18n), uygulamanın çoklu dilleri destekleyecek şekilde tasarlanmasıdır. Yerelleştirme (l10n) ise belirli bir dil/kültüre uygun içerik sunmaktır. Yew/Leptos'ta dil seçimini state ile yönetebilirsiniz.

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
