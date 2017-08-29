//! Dynamically typed keys for associative arrays.
//!
//! ## Example
//!
//! ```
//! use std::collections::{BTreeMap, HashMap};
//! use any_key::{AnyHash, AnyOrd};
//!
//! #[derive(PartialEq, Eq, Hash, PartialOrd, Ord)]
//! struct Foo;
//!
//! // AnyHash can be used as a key for HashMap-like types
//! let mut map = HashMap::new();
//! map.insert(Box::new("hello") as Box<AnyHash>, 1);
//! map.insert(Box::new(42) as Box<AnyHash>, 2);
//! map.insert(Box::new(Foo) as Box<AnyHash>, 3);
//! assert_eq!(map.get(&(Box::new("hello") as Box<AnyHash>)), Some(&1));
//! assert_eq!(map.get(&(Box::new(42) as Box<AnyHash>)), Some(&2));
//! assert_eq!(map.get(&(Box::new(Foo) as Box<AnyHash>)), Some(&3));
//!
//! // AnyOrd can be used as a key for HashMap-like types
//! let mut map = BTreeMap::new();
//! map.insert(Box::new("hello") as Box<AnyOrd>, 1);
//! map.insert(Box::new(42) as Box<AnyOrd>, 2);
//! map.insert(Box::new(Foo) as Box<AnyOrd>, 3);
//! assert_eq!(map.get(&(Box::new("hello") as Box<AnyOrd>)), Some(&1));
//! assert_eq!(map.get(&(Box::new(42) as Box<AnyOrd>)), Some(&2));
//! assert_eq!(map.get(&(Box::new(Foo) as Box<AnyOrd>)), Some(&3));
//! ```

extern crate debugit;
#[macro_use]
extern crate mopa;

use std::{cmp, fmt, hash, ops};
use std::any::TypeId;

/// Work around the inability of `Hash` to accept unsized `Hasher`s.
#[derive(Debug)]
pub struct HasherMut<H: ?Sized>(H);

impl<H: ops::DerefMut + ?Sized> hash::Hasher for HasherMut<H>
    where H::Target: hash::Hasher
{
    fn finish(&self) -> u64 {
        self.0.finish()
    }

    fn write(&mut self, bytes: &[u8]) {
        self.0.write(bytes)
    }
}

/// Object-safe trait for dynamically typed hashable keys.
///
/// All `Eq + Hash + 'static` types automatically implement this trait.
///
/// On nightly, if the inner value implements `Debug`, then `Debug` for
/// `AnyHash` will use that implementation.  Otherwise, it will only show a
/// generic message.
pub trait AnyHash: mopa::Any {
    fn debug(&self, f: &mut fmt::Formatter) -> fmt::Result;

    fn eq(&self, other: &AnyHash) -> bool;

    fn hash(&self, hasher: &mut hash::Hasher);
}

mopafy!(AnyHash);

impl<T: Eq + hash::Hash + 'static> AnyHash for T {
    fn debug(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_tuple("AnyHash")
            .field(&TypeId::of::<Self>())
            .field(&debugit::DebugIt(self))
            .finish()
    }

    fn eq(&self, other: &AnyHash) -> bool {
        match other.downcast_ref::<Self>() {
            None => false,
            Some(other) => self == other,
        }
    }

    fn hash(&self, hasher: &mut hash::Hasher) {
        hash::Hash::hash(&(TypeId::of::<Self>(), self), &mut HasherMut(hasher))
    }
}

impl fmt::Debug for AnyHash {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        self.debug(f)
    }
}

impl PartialEq for AnyHash {
    fn eq(&self, other: &AnyHash) -> bool {
        AnyHash::eq(self, other)
    }
}

impl Eq for AnyHash {}

impl hash::Hash for AnyHash {
    fn hash<H: hash::Hasher>(&self, hasher: &mut H) {
        AnyHash::hash(self, hasher)
    }
}

/// Object-safe trait for dynamically typed totally ordered keys.
///
/// All `Ord + 'static` types automatically implement this trait.
///
/// On nightly, if the inner value implements `Debug`, then `Debug` for
/// `AnyOrd` will use that implementation.  Otherwise, it will only show a
/// generic message.
pub trait AnyOrd: mopa::Any {
    fn debug(&self, f: &mut fmt::Formatter) -> fmt::Result;

    fn eq(&self, other: &AnyOrd) -> bool;

    fn cmp(&self, other: &AnyOrd) -> cmp::Ordering;
}

mopafy!(AnyOrd);

impl<T: Ord + 'static> AnyOrd for T {
    fn debug(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_tuple("AnyOrd")
            .field(&TypeId::of::<Self>())
            .field(&debugit::DebugIt(self))
            .finish()
    }

    fn eq(&self, other: &AnyOrd) -> bool {
        match other.downcast_ref::<Self>() {
            None => false,
            Some(other) => self == other,
        }
    }

    fn cmp(&self, other: &AnyOrd) -> cmp::Ordering {
        match other.downcast_ref::<Self>() {
            None => Ord::cmp(&TypeId::of::<Self>(), &mopa::Any::get_type_id(other)),
            Some(other) => self.cmp(other),
        }
    }
}

impl fmt::Debug for AnyOrd {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        self.debug(f)
    }
}

impl PartialEq for AnyOrd {
    fn eq(&self, other: &AnyOrd) -> bool {
        AnyOrd::eq(self, other)
    }
}

impl Eq for AnyOrd {}

impl PartialOrd for AnyOrd {
    fn partial_cmp(&self, other: &AnyOrd) -> Option<cmp::Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for AnyOrd {
    fn cmp(&self, other: &AnyOrd) -> cmp::Ordering {
        AnyOrd::cmp(self, other)
    }
}
