## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 646: Memory layout optimization with `#[repr]`

Attributes like `#[repr(C)]` and `#[repr(packed)]` control the memory layout of structs. `#[repr(C)]` makes the layout compatible with C, while `#[repr(packed)]` removes padding between fields.

```rust
#[repr(C)]
struct CStruct {
    a: u8,
    b: u32,
}

#[repr(packed)]
struct PackedStruct {
    a: u8,
    b: u32,
}

fn main() {
    println!("CStruct size: {}", std::mem::size_of::<CStruct>());
    println!("PackedStruct size: {}", std::mem::size_of::<PackedStruct>());
}
```

Different `repr` attributes directly affect memory alignment and performance.
