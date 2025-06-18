## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: CSS ve Stil Yönetimi Entegrasyonu  
#### ✅ Cevap 1334: CSS ve stil yönetimi entegrasyonu

Rust ile WebAssembly'de Yew veya Leptos gibi frameworklerde bileşenlere stil uygulamak için CSS sınıfları, satır içi stiller veya harici CSS dosyaları kullanılabilir. Ayrıca, durum değişimine göre dinamik olarak stil güncellenebilir.

Aşağıda, Yew ile bir butonun tıklanma durumuna göre rengini değiştiren bir örnek verilmiştir:

```rust
use yew::prelude::*;

#[function_component(StyledButton)]
fn styled_button() -> Html {
    let active = use_state(|| false);
    let onclick = {
        let active = active.clone();
        Callback::from(move |_| active.set(!*active))
    };
    let style = if *active {
        "background: green; color: white;"
    } else {
        "background: gray; color: black;"
    };
    html! {
        <button {onclick} style={style}>{ if *active { "Aktif" } else { "Pasif" } }</button>
    }
}
```

Bu örnekte, butona tıklandıkça arka plan ve yazı rengi değişir. Stil yönetimi hem statik hem de dinamik olarak yapılabilir.
