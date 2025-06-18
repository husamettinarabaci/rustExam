## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: Rust ile Bileşen Tabanlı UI Oluşturma  
#### ✅ Cevap 1331: Rust ile bileşen tabanlı UI oluşturma

Rust ve WASM tabanlı framework'lerde (ör. Yew) bileşenler struct ve trait implementasyonu ile tanımlanır. Aşağıda basit bir "Merhaba" bileşeni örneği verilmiştir.

```rust
use yew::prelude::*;

struct Hello;

impl Component for Hello {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Hello
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! { <h1>{ "Merhaba, Rust WASM!" }</h1> }
    }
}

fn main() {
    yew::start_app::<Hello>();
}
```
Bu örnekte, `Hello` bileşeni ekrana bir başlık render eder.
