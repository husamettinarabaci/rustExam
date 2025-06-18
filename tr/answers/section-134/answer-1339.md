## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: WASM UI Bileşenlerini Test Etme  
#### ✅ Cevap 1339: WASM UI bileşenlerini test etme

Testler, uygulamanın doğru çalıştığını ve değişikliklerin hata üretmediğini garanti altına almak için gereklidir. Yew ve Leptos gibi frameworklerde bileşenler için birim testleri yazılabilir.

Aşağıda, Yew ile bir bileşenin render edilip çıktısının test edildiği örnek bir test fonksiyonu verilmiştir:

```rust
use yew::prelude::*;

#[function_component(Hello)]
fn hello() -> Html {
    html! { <p>{"Merhaba, test!"}</p> }
}

#[cfg(test)]
mod tests {
    use super::*;
    use yew::Renderer;

    #[test]
    fn test_hello_renders() {
        let rendered = Renderer::<Hello>::with_root("#output").render_to_string();
        assert!(rendered.contains("Merhaba, test!"));
    }
}
```

Bu testte, `Hello` bileşeni render edilir ve çıktının beklenen metni içerip içermediği kontrol edilir.
