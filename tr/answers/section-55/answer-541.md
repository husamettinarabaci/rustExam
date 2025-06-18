## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Bellek Yönetimi ve Ayırıcılar  
#### ✅ Cevap 541: Temel bir bellek ayırıcı (bump allocator) yazma

Bump allocator, belleği sırayla ayıran ve serbest bırakmayan basit bir ayırıcıdır. Statik bir dizi üzerinde bir işaretçi tutarak yeni bloklar ayırır. Sınır aşımlarında hata döndürülür.

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
