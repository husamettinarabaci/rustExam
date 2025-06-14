## 📘 Section: Generics II  
### 🔹 Category: Generic Trait Objects  
#### ✅ Answer 228: Generic trait objects

Trait objects allow for dynamic dispatch, but cannot be used with traits that have generic methods.

```rust
trait Draw {
    fn draw(&self);
}

fn draw_object(obj: Box<dyn Draw>) {
    obj.draw();
}
```

Traits with generic methods cannot be made into trait objects.
