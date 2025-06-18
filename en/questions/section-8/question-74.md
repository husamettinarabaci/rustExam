## 📘 Section: Lifetimes I  
### 🔹 Category: Structs and Lifetimes  
#### ❓ Question 74: Structs with lifetime parameters

Write a Rust struct that includes a reference as a field and uses a lifetime parameter:

- Define a struct that holds a string slice reference (`&str`).
- Annotate the struct with the appropriate lifetime parameter.
- Create an instance of the struct in `main` and print the referenced string.

🔧 **Task:** Demonstrate how to define and use a struct with a lifetime parameter for a reference field.

```rust
// Define the struct with a lifetime parameter `'a`
struct MyStruct<'a> {
    // The struct contains a field `s` which is a reference to a string slice
    s: &'a str,
}

// Implementing a method for `MyStruct`
impl<'a> MyStruct<'a> {
    // Define a method `print` that prints the referenced string
    fn print(&self) {
        println!("{}", self.s);
    }
}

fn main() {
    // Create a string literal (which has a `'static` lifetime)
    let my_string: &str = "Hello, Rust!";
    
    // Create an instance of `MyStruct`, annotating the lifetime explicitly
    let my_struct: MyStruct = MyStruct { s: my_string };
    
    // Call the `print` method to print the referenced string
    my_struct.print();
}
```
