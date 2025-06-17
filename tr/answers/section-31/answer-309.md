## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Enum Gösterimi ve FFI  
#### ✅ Cevap 309: `#[repr]` ile enum gösterimi ve FFI

Rust'ta enumların bellek düzeni derleyiciye bağlıdır. FFI (Foreign Function Interface) ile C gibi dillerle uyumlu çalışmak için enumlara `#[repr(u8)]`, `#[repr(i32)]` veya `#[repr(C)]` özniteliği eklenir. Bu, enumun C tarafında beklenen şekilde temsil edilmesini sağlar. Aşağıda, bir enumun FFI ile C fonksiyonuna nasıl parametre olarak aktarılabileceği gösterilmiştir.

```rust
#[repr(u8)]
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}

extern "C" {
    fn print_color(color: Color);
}

fn main() {
    unsafe {
        print_color(Color::Green);
    }
}
```

Bu örnekte, `Color` enumu `u8` olarak temsil edilir ve C tarafında da aynı şekilde tanımlanmalıdır. `extern "C"` bloğu ile C fonksiyonu Rust'a bildirilir ve `unsafe` blokta çağrılır.
