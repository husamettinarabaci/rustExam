## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Isolating Plugin State for Safety  
#### ✅ Answer 1303: Isolating plugin state for safety

State isolation in plugin systems prevents one plugin from affecting others or the host. In Rust, you can give each plugin its own struct and data fields to ensure isolation.

```rust
trait Plugin {
    fn run(&mut self);
}

struct CounterPlugin {
    count: u32,
}

impl Plugin for CounterPlugin {
    fn run(&mut self) {
        self.count += 1;
        println!("Counter: {}", self.count);
    }
}

fn main() {
    let mut plugin1 = CounterPlugin { count: 0 };
    let mut plugin2 = CounterPlugin { count: 100 };
    plugin1.run();
    plugin2.run();
}
```
