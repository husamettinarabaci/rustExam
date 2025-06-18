## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: CI/CD Integration  
#### ✅ Answer 825: Integrating linting in CI pipelines

To integrate lint and code style checks into CI pipelines:

- Add `cargo clippy -- -D warnings` and `cargo fmt -- --check` to CI scripts.
- If these commands fail, CI should stop the build and report errors.
- Use systems like GitHub Actions or GitLab CI to automate these steps.
- Code style and lint errors should be fixed before merging to the main branch.
