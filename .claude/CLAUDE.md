# Biome Code Standards

This project uses **Biome**, a high-performance toolchain that enforces strict code quality through unified lightning-fast linting and formatting.

## Quick Reference

- **Format & Fix**: `bun biome check --write .`
- **Check for issues**: `bun biome check .`
- **CI / Strict Check**: `bun biome ci .`

The Biome engine provides a robust "single source of truth." Most issues, from indentation to complex logic "smells," are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values to improve IDE "hover" documentation.
- Prefer `unknown` over `any` when the type is genuinely unknown. Use type guards or Zod for validation when data enters the system.
- Use const assertions (`as const`) for immutable values and literal types.
- Leverage TypeScript's type narrowing instead of manual type assertions.
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names (e.g., `const ANIMATION_DURATION_MS = 300`).

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and component-level helper functions.
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops for better readability and break/continue support.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access; avoid `||` for default values if `0` or `""` are valid.
- Prefer template literals over string concatenation for all string interpolations.
- Use destructuring for object and array assignments to keep function signatures clean and readable.
- Use `const` by default, `let` only for counters or reassignments in specific logic blocks, never `var`.

### Async & Promises

- Always `await` promises in async functions - do not leave floating promises unless explicitly intended (and use `void` to mark them).
- Use `async/await` syntax instead of promise chains for better readability. Avoid `.then()` and `.catch()` chains.
- Handle errors appropriately in async code with `try-catch` blocks to handle network failures or API errors gracefully.
- Don't use async functions as Promise executors.

### React & JSX

- Use function components over class components.
- Call hooks at the top level only, never conditionally.
- Specify all dependencies in hook dependency arrays correctly (enforced by Biome).
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices).
- Nest children between opening and closing tags instead of passing as props.
- Don't define components inside other components.
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful `alt` text for images.
  - Use proper heading hierarchy.
  - Add labels for form inputs.
  - Include keyboard event handlers alongside mouse events.
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles.

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code (Biome will flag these).
- Throw `Error` objects with descriptive messages, not strings or other values.
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them.
- Prefer early returns over nested conditionals for error cases.

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits.
- Extract complex conditions into well-named boolean variables.
- Use early returns to reduce nesting (The Bouncer Pattern).
- Prefer simple conditionals over nested ternary operators.
- Group related code together and separate concerns.

### Security

- Add `rel="noopener"` when using `target="_blank"` on links.
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary.
- Don't use `eval()` or assign directly to `document.cookie`.
- Validate and sanitize user input.

### Performance

- Avoid spread syntax in accumulators within loops (prevents O(n^2) complexity).
- Use top-level regex literals instead of creating them in loops.
- Prefer specific imports over namespace imports.
- Avoid barrel files (index files that re-export everything) to keep Fast Refresh fast.
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags.

### Framework-Specific Guidance

**Next.js:**

- Use Next.js `<Image>` component for images.
- Use App Router metadata API for head elements.
- Use Server Components for async data fetching instead of async Client Components.

**React 19+:**

- Use `ref` as a prop instead of `React.forwardRef`.

---

## Testing (Vitest/Jest)

- Write assertions inside `it()` or `test()` blocks using the **AAA (Arrange-Act-Assert)** pattern.
- Avoid `done` callbacks in async tests - use `async/await` instead.
- Don't use `.only` or `.skip` in committed code.
- Keep test suites reasonably flat - avoid excessive `describe` nesting.

## When Biome Can't Help

Biome's linter will catch most syntax and safety issues. Focus your attention on:

1. **Business logic correctness** - Biome can't validate your math or algorithms.
2. **Meaningful naming** - Use descriptive names for functions, variables, and types.
3. **Architecture decisions** - Component structure, data flow, and API design.
4. **Edge cases** - Handle boundary conditions and error states manually.
5. **User experience** - Accessibility, performance, and usability considerations.
6. **Documentation** - Add TSDoc comments for complex logic, but prefer self-documenting code.

---

Most formatting and common issues are automatically fixed by Biome. Run `bun biome check --write .` before committing to ensure compliance.
