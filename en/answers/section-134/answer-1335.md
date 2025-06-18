## 📘 Section: Fullstack WASM UI Frameworks  
### 🔹 Category: Routing and Navigation in WASM Apps  
#### ✅ Answer 1335: Routing and navigation in WASM apps

In Rust WASM UI frameworks like Yew or Leptos, routing between pages or components is handled using router packages. You define routes and render different components based on the current route.

Below is a Yew example using yew-router to navigate between two pages:

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
    html! { <h1>{"Home"}</h1> }
}

#[function_component(About)]
fn about() -> Html {
    html! { <h1>{"About"}</h1> }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <nav>
                <Link<Route> to={Route::Home}>{"Home"}</Link<Route>>
                <Link<Route> to={Route::About}>{"About"}</Link<Route>>
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

This example defines two routes and navigation links. The UI updates to show the relevant component based on the current route.
