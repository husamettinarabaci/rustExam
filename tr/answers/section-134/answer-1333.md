## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: Olay İşleme ve DOM ile Etkileşim  
#### ✅ Cevap 1333: Olay işleme ve DOM ile etkileşim

Rust ile WebAssembly'de kullanıcı olaylarını işlemek ve DOM ile etkileşime girmek için Yew veya Leptos gibi frameworkler kullanılır. Bu frameworklerde, olay dinleyicileri ile kullanıcı etkileşimlerine tepki verilir ve durum veya arayüz güncellenir.

Aşağıda, Yew ile bir metin kutusuna girilen değeri anında ekrana yazan bir örnek verilmiştir:

```rust
use yew::prelude::*;

#[function_component(InputEcho)]
fn input_echo() -> Html {
    let value = use_state(|| String::new());
    let oninput = {
        let value = value.clone();
        Callback::from(move |e: InputEvent| {
            let input: web_sys::HtmlInputElement = e.target_unchecked_into();
            value.set(input.value());
        })
    };
    html! {
        <div>
            <input type="text" {oninput} />
            <p>{ format!("Girdi: {}", *value) }</p>
        </div>
    }
}
```

Bu örnekte, kullanıcı metin kutusuna yazdıkça `value` durumu güncellenir ve arayüz otomatik olarak değişir.
