## 📘 Bölüm: Fullstack WASM UI Çerçeveleri  
### 🔹 Kategori: Reaktif Paradigmalarla Durum Yönetimi  
#### ✅ Cevap 1332: Reaktif paradigmalarla durum yönetimi

Rust ile WebAssembly'de reaktif paradigma kullanarak durum yönetimi için Leptos veya Yew gibi frameworkler tercih edilir. Bu frameworklerde, bileşenler kendi durumlarını sinyaller veya state hook'ları ile yönetir ve durum değiştiğinde arayüz otomatik olarak güncellenir.

Aşağıda, Leptos ile sinyal tabanlı bir sayaç örneği verilmiştir:

```rust
use leptos::*;

#[component]
fn Counter(cx: Scope) -> impl IntoView {
    let (count, set_count) = create_signal(cx, 0);
    view! { cx,
        <div>
            <p>{move || format!("Sayaç: {}", count.get())}</p>
            <button on:click=move |_| set_count.update(|n| *n += 1)>{"Artır"}</button>
        </div>
    }
}
```

Bu örnekte, `count` sinyali durum bilgisini tutar ve `set_count` ile güncellenir. Durum değiştiğinde arayüz otomatik olarak yeniden render edilir.
