## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Measuring and Comparing Dynamic Dispatch Overhead
#### ✅ Answer 736: Measuring and comparing dynamic dispatch overhead

Dynamic dispatch via trait objects (`dyn Trait`) introduces a small runtime cost compared to static dispatch. You can measure this by timing method calls in a loop.

```rust
use std::time::Instant;

trait Worker {
    fn work(&self) -> u64;
}

struct Concrete;
impl Worker for Concrete {
    fn work(&self) -> u64 { 42 }
}

fn main() {
    let c = Concrete;
    let obj: &dyn Worker = &c;
    let n = 10_000_000;

    let start = Instant::now();
    let mut sum = 0;
    for _ in 0..n {
        sum += c.work(); // static dispatch
    }
    println!("Static dispatch: {:?}", start.elapsed());

    let start = Instant::now();
    let mut sum2 = 0;
    for _ in 0..n {
        sum2 += obj.work(); // dynamic dispatch
    }
    println!("Dynamic dispatch: {:?}", start.elapsed());
}
```

The dynamic dispatch version is usually slightly slower due to the vtable lookup.
