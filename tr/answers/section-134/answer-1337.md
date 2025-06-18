## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: Erişilebilirlik ve Uluslararasılaştırma  
#### ✅ Cevap 1337: Erişilebilirlik ve klavye navigasyonu

Erişilebilirlik (a11y), engelli kullanıcıların uygulamayı rahatça kullanabilmesini sağlar ve yasal gereklilikler ile kapsayıcılık açısından önemlidir. Klavye navigasyonu, fare kullanamayanlar için temel bir gereksinimdir. Rust WASM UI frameworklerinde semantik HTML ve ARIA etiketleriyle erişilebilirlik artırılabilir.

Aşağıda, Yew ile klavye ile odaklanabilen ve Enter tuşu ile etkinleşen bir buton örneği verilmiştir:

```rust
use yew::prelude::*;

#[function_component(AccessibleButton)]
fn accessible_button() -> Html {
    let onclick = Callback::from(|_| web_sys::console::log_1(&"Tıklandı!".into()));
    let onkeydown = Callback::from(|e: KeyboardEvent| {
        if e.key() == "Enter" {
            web_sys::console::log_1(&"Enter ile etkinleştirildi!".into());
        }
    });
    html! {
        <button aria-label="Erişilebilir Buton" tabindex="0" {onclick} {onkeydown}>
            {"Erişilebilir Buton"}
        </button>
    }
}
```

Bu örnekte, buton hem fareyle hem de klavye ile etkinleştirilebilir ve ARIA etiketi ile erişilebilirlik sağlanır.
