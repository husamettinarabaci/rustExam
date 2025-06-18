## 📘 Section: Systems Programming Mastery  
### 🔹 Category: Custom Allocators and Memory Pools  
#### ✅ Answer 591: Writing custom allocators and memory pools

To write a custom allocator in Rust, you typically use a byte buffer and a pointer. Here is a simple bump allocator implementation:

```rust
struct BumpAllocator {
    memory: Vec<u8>,
    pos: usize,
}

impl BumpAllocator {
    fn new(size: usize) -> Self {
        Self { memory: vec![0; size], pos: 0 }
    }
    fn alloc(&mut self, size: usize) -> Option<&mut [u8]> {
        if self.pos + size > self.memory.len() {
            None
        } else {
            let start = self.pos;
            self.pos += size;
            Some(&mut self.memory[start..self.pos])
        }
    }
    fn reset(&mut self) {
        self.pos = 0;
    }
}

fn main() {
    let mut allocator = BumpAllocator::new(1024);
    let buf = allocator.alloc(128).unwrap();
    buf[0] = 42;
    println!("First byte: {}", buf[0]);
    allocator.reset();
}
```
