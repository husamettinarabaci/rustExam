## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Animations and Transitions in WASM UI  
#### ✅ Answer 585: Animations and transitions in WASM UI

Animations in Yew or Leptos are typically handled with CSS. Below is an example where clicking a button toggles a box's visibility with a transition effect.

```rust
use yew::prelude::*;

#[function_component(AnimatedBox)]
fn animated_box() -> Html {
    let visible = use_state(|| false);
    let onclick = {
        let visible = visible.clone();
        Callback::from(move |_| visible.set(!*visible))
    };
    let class = if *visible { "box show" } else { "box" };
    html! {
        <>
            <button {onclick}>{ "Toggle" }</button>
            <div class={class}></div>
        </>
    }
}
/* CSS:
.box {
  opacity: 0;
  transition: opacity 0.5s;
}
.box.show {
  opacity: 1;
}
*/
```
