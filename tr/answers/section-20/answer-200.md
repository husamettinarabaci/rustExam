## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Özel Allocator'lar  
#### ✅ Cevap 200: Rust'ta özel bir allocator implementasyonu

Özel allocator'lar, belleğin nasıl tahsis ve serbest bırakılacağını kontrol etmenizi sağlar. `GlobalAlloc` trait'i implement edilir ve `#[global_allocator]` ile kullanılır.

```rust
use std::alloc::{GlobalAlloc, Layout, System};

struct BenimAllocatorum;

unsafe impl GlobalAlloc for BenimAllocatorum {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        System.alloc(layout)
    }
    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        System.dealloc(ptr, layout)
    }
}

#[global_allocator]
static GLOBAL: BenimAllocatorum = BenimAllocatorum;
```
