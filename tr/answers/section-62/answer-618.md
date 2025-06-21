## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Makro Türlerini Birleştirme  
#### ✅ Cevap 618: Prosedürel ve deklaratif makroları birleştirme

Rust'ta prosedürel ve deklaratif makrolar birlikte kullanılabilir. Deklaratif makrolar (`macro_rules!`) kodunuzu tekrar eden kalıplar için kullanılırken, prosedürel makrolar daha karmaşık kod üretimi için uygundur. Aşağıda, bir deklaratif makrodan prosedürel makro çağrısı yapılan ve her iki türün birlikte kullanıldığı bir örnek gösterilmiştir.

Öncelikle, bir prosedürel makro crate'i oluşturmanız gerekir. Ana crate'inizde ise hem prosedürel hem de deklaratif makroyu kullanabilirsiniz.

```rust
// proc_macros/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro]
pub fn make_hello(_item: TokenStream) -> TokenStream {
    "println!(\"Hello from procedural macro!\");".parse().unwrap()
}
```

```rust
// main.rs veya ana crate
use proc_macros::make_hello;

macro_rules! call_proc_macro {
    () => {
        make_hello!();
    };
}

fn main() {
    call_proc_macro!();
}
```

Bu örnekte, `call_proc_macro!` deklaratif makrosu, prosedürel makro olan `make_hello!`'yu çağırır. Böylece iki makro türü birlikte kullanılabilir.
