## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: WASM Uygulamalarında Yönlendirme ve Gezinme  
#### ✅ Cevap 1335: WASM uygulamalarında yönlendirme ve gezinme

Rust ile WebAssembly'de sayfalar veya bileşenler arasında yönlendirme için Yew veya Leptos frameworklerinde router paketleri kullanılır. Bu sayede farklı rotalara karşılık gelen bileşenler tanımlanır ve kullanıcı arayüzü güncellenir.

Aşağıda, Yew ve yew-router ile iki sayfa arasında gezinme örneği verilmiştir:

```rust
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Routable, PartialEq, Clone, Debug)]
enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
}

#[function_component(Home)]
fn home() -> Html {
    html! { <h1>{"Ana Sayfa"}</h1> }
}

#[function_component(About)]
fn about() -> Html {
    html! { <h1>{"Hakkında"}</h1> }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <nav>
                <Link<Route> to={Route::Home}>{"Ana Sayfa"}</Link<Route>>
                <Link<Route> to={Route::About}>{"Hakkında"}</Link<Route>>
            </nav>
            <Switch<Route> render={Switch::render(switch)} />
        </BrowserRouter>
    }
}

fn switch(routes: &Route) -> Html {
    match routes {
        Route::Home => html! { <Home /> },
        Route::About => html! { <About /> },
    }
}
```

Bu örnekte, iki rota ve aralarında gezinme bağlantıları tanımlanmıştır. Geçerli rotaya göre ilgili bileşen gösterilir.
