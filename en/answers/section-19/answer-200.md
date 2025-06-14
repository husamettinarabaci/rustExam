## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Custom Allocators  
#### ✅ Answer 200: Implementing a custom allocator in Rust

Custom allocators allow you to control how memory is allocated and deallocated. Implement the `GlobalAlloc` trait and use the `#[global_allocator]` attribute.

```rust
use std::alloc::{GlobalAlloc, Layout, System};

struct MyAllocator;

unsafe impl GlobalAlloc for MyAllocator {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        System.alloc(layout)
    }
    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        System.dealloc(ptr, layout)
    }
}

#[global_allocator]
static GLOBAL: MyAllocator = MyAllocator;
```
