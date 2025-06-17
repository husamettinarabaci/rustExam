## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Planning for Extension with Clean Architecture Principles  
#### ✅ Answer 500: Planning for extension with clean architecture principles

Clean architecture increases extensibility by using layered structure and abstractions. Dependencies are managed via interfaces, and new features can be added easily.

```rust
trait Storage {
    fn save(&self, data: &str);
}

struct FileStorage;

impl Storage for FileStorage {
    fn save(&self, data: &str) {
        println!("Saving to file: {}", data);
    }
}

struct App<T: Storage> {
    storage: T,
}

impl<T: Storage> App<T> {
    fn run(&self) {
        self.storage.save("Hello, world!");
    }
}

fn main() {
    let app = App { storage: FileStorage };
    app.run();
}
```
