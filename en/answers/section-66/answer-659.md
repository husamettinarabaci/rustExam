## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Auditing Unsafe Code for Soundness
#### ✅ Answer 659: Auditing unsafe code for soundness

Auditing unsafe code means reviewing it to ensure it cannot cause undefined behavior if used as intended. Steps include: checking pointer validity, aliasing, initialization, and documenting invariants.

```rust
fn get_unchecked(slice: &[i32], idx: usize) -> &i32 {
    // SAFETY: Caller must ensure idx < slice.len()
    unsafe { slice.get_unchecked(idx) }
}
```

Always document what the caller must guarantee, and review for all possible safety violations.
