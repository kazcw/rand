initSidebarItems({"enum":[["ErrorKind","Error kind which can be matched over."]],"fn":[["random","Generates a random value using the thread-local random number generator."],["thread_rng","Retrieve the lazily-initialized thread-local random number generator, seeded by the system. Intended to be used in method chaining style, e.g. `thread_rng().gen::<i32>()`, or cached locally, e.g. `let mut rng = thread_rng();`.  Invoked by the `Default` trait, making `ThreadRng::default()` equivalent."]],"mod":[["distributions","Generating random samples from probability distributions"],["prelude","Convenience re-export of common members"],["rngs","Random number generators and adapters"],["seq","Functions for randomly accessing and sampling sequences."]],"struct":[["Error","Error type of random number generators"]],"trait":[["AsByteSliceMut","Trait for casting types to byte slices"],["CryptoRng","A marker trait used to indicate that an [`RngCore`] or [`BlockRngCore`] implementation is supposed to be cryptographically secure."],["FromEntropy","A convenience extension to [`SeedableRng`] allowing construction from fresh entropy. This trait is automatically implemented for any PRNG implementing [`SeedableRng`] and is not intended to be implemented by users."],["Rng","An automatically-implemented extension trait on [`RngCore`] providing high-level generic methods for sampling values and other convenience methods."],["RngCore","The core of a random number generator."],["SeedableRng","A random number generator that can be explicitly seeded."]]});