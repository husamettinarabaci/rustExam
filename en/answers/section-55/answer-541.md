## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Memory Management and Allocators  
#### ✅ Answer 541: Writing a basic memory allocator (bump allocator)

A bump allocator is a simple allocator that hands out memory sequentially and never frees. It keeps a pointer to the current position in a static array and allocates new blocks by moving the pointer. It returns an error if out of memory.

```rust
struct BumpAllocator {
    memory: [u8; 1024],
    pos: usize,
}

impl BumpAllocator {
    fn new() -> Self {
        Self { memory: [0; 1024], pos: 0 }
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
}

fn main() {
    let mut allocator = BumpAllocator::new();
    let block = allocator.alloc(128);
    println!("Allocated: {:?}", block.is_some());
}
```
