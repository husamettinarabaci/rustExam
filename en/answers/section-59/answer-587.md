## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Pagination and Virtualization with Large Data Sets  
#### ✅ Answer 587: Pagination and virtualization with large data sets

Rendering all items in a large data set at once is slow. Pagination or virtualization renders only the visible portion, improving performance.

```rust
use yew::prelude::*;

#[function_component(PaginatedList)]
fn paginated_list() -> Html {
    let items: Vec<_> = (1..=1000).collect();
    let page = use_state(|| 0);
    let per_page = 20;
    let start = *page * per_page;
    let end = start + per_page;
    let page_items = &items[start..end.min(items.len())];
    let next = {
        let page = page.clone();
        Callback::from(move |_| page.set(*page + 1))
    };
    html! {
        <>
            <ul>{ for page_items.iter().map(|i| html!{ <li>{ i }</li> }) }</ul>
            <button onclick={next}>{ "Next" }</button>
        </>
    }
}
```
