## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Seviye düzenleme ve betik araçları  
#### ✅ Cevap 778: Seviye düzenleme ve betik araçları

Bu örnekte, Rust ile bir 5x5 harita düzenleyici ve nesne ekleme/çıkarma işlemleri gösterilir.

```rust
struct Map {
    grid: Vec<Vec<char>>,
}

impl Map {
    fn new(size: usize) -> Self {
        Self { grid: vec![vec!['.'; size]; size] }
    }
    fn add_object(&mut self, x: usize, y: usize, obj: char) {
        self.grid[y][x] = obj;
    }
    fn remove_object(&mut self, x: usize, y: usize) {
        self.grid[y][x] = '.';
    }
    fn print(&self) {
        for row in &self.grid {
            for cell in row {
                print!("{}", cell);
            }
            println!();
        }
    }
}

fn main() {
    let mut map = Map::new(5);
    map.add_object(2, 2, 'X');
    map.print();
    map.remove_object(2, 2);
    map.print();
}
```
