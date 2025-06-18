## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Understanding CPU cache and memory alignment
#### ✅ Answer 904: Understanding CPU cache and memory alignment

Memory alignment ensures that data is stored at addresses that are multiples of their size, which allows the CPU to access them efficiently. Poor alignment can lead to extra memory accesses and slowdowns. CPU cache stores recently accessed data for fast retrieval; accessing data in a cache-friendly way (e.g., sequentially) improves performance.

Field order in structs can affect memory layout and cache usage. Placing larger fields first can reduce padding and improve cache efficiency.

```rust
struct BadOrder {
    a: u8,
    b: u64,
    c: u8,
}

struct GoodOrder {
    b: u64,
    a: u8,
    c: u8,
}

fn main() {
    println!("BadOrder size: {}", std::mem::size_of::<BadOrder>());
    println!("GoodOrder size: {}", std::mem::size_of::<GoodOrder>());
}
```
