## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: C Uyumlu Veri Yapıları  
#### ✅ Cevap 606: `#[repr(C)]` ile C uyumlu veri yapıları oluşturma

`#[repr(C)]` özniteliği, Rust struct'larının C ile aynı bellek düzenine sahip olmasını sağlar. Bu sayede Rust ve C arasında veri paylaşımı güvenli olur.

```rust
#[repr(C)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

extern "C" {
    fn print_point(p: *const Point);
}

fn main() {
    let pt = Point { x: 1, y: 2 };
    unsafe { print_point(&pt); }
}
```
