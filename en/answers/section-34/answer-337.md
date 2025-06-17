## 📘 Section: Collections and Iterators  
### 🔹 Category: Custom iterator structs  
#### ✅ Answer 337: Creating a custom iterator struct with `impl Iterator`

This example defines a custom iterator struct that yields numbers from 1 to 5. The `Iterator` trait is implemented for the struct, and the `next` method returns the next value each time it is called. The custom iterator is then used to print all its values.

```rust
struct Counter {
    current: u32,
    max: u32,
}

impl Counter {
    fn new(max: u32) -> Self {
        Counter { current: 1, max }
    }
}

impl Iterator for Counter {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        if self.current <= self.max {
            let val = self.current;
            self.current += 1;
            Some(val)
        } else {
            None
        }
    }
}

fn main() {
    let counter = Counter::new(5);
    for number in counter {
        println!("{}", number);
    }
}
