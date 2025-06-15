## 📘 Section: Enums II  
### 🔹 Category: Matching Multiple Patterns  
#### ✅ Answer 112: Matching multiple patterns

**Explanation:**
You can use the `|` operator in match arms to match multiple patterns. Here, both `Up` and `Down` are matched together, as are `Left` and `Right`.

```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

fn main() {
    let dir = Direction::Left;
    match dir {
        Direction::Up | Direction::Down => println!("Vertical"),
        Direction::Left | Direction::Right => println!("Horizontal"),
    }
}
```
