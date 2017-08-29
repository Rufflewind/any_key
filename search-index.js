var searchIndex = {};
searchIndex["any_key"] = {"doc":"Dynamically typed keys for associative arrays.","items":[[3,"HasherMut","any_key","Work around the inability of `Hash` to accept unsized `Hasher`s.",null,null],[8,"AnyHash","","Object-safe trait for dynamically typed hashable keys.",null,null],[10,"debug","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[10,"eq","","",0,{"inputs":[{"name":"self"},{"name":"anyhash"}],"output":{"name":"bool"}}],[10,"hash","","",0,{"inputs":[{"name":"self"},{"name":"hasher"}],"output":null}],[8,"AnyOrd","","Object-safe trait for dynamically typed totally ordered keys.",null,null],[10,"debug","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[10,"eq","","",1,{"inputs":[{"name":"self"},{"name":"anyord"}],"output":{"name":"bool"}}],[10,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"anyord"}],"output":{"name":"ordering"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"finish","","",2,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"write","","",2,null],[11,"is","","Returns true if the boxed type is the same as `T`",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"downcast_ref","","Returns some reference to the boxed value if it is of type `T`, or `None` if it isn't.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"downcast_ref_unchecked","","Returns a reference to the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"downcast_mut","","Returns some mutable reference to the boxed value if it is of type `T`, or `None` if it isn't.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"downcast_mut_unchecked","","Returns a mutable reference to the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"downcast","","Returns the boxed value if it is of type `T`, or `Err(Self)` if it isn't.",0,{"inputs":[{"name":"box"}],"output":{"name":"result"}}],[11,"downcast_unchecked","","Returns the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",0,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"anyhash"}],"output":{"name":"bool"}}],[11,"hash","","",0,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"is","","Returns true if the boxed type is the same as `T`",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"downcast_ref","","Returns some reference to the boxed value if it is of type `T`, or `None` if it isn't.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"downcast_ref_unchecked","","Returns a reference to the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"downcast_mut","","Returns some mutable reference to the boxed value if it is of type `T`, or `None` if it isn't.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"downcast_mut_unchecked","","Returns a mutable reference to the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"downcast","","Returns the boxed value if it is of type `T`, or `Err(Self)` if it isn't.",1,{"inputs":[{"name":"box"}],"output":{"name":"result"}}],[11,"downcast_unchecked","","Returns the boxed value, blindly assuming it to be of type `T`. If you are not absolutely certain of `T`, you must not call this.",1,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"anyord"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"anyord"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"anyord"}],"output":{"name":"ordering"}}]],"paths":[[8,"AnyHash"],[8,"AnyOrd"],[3,"HasherMut"]]};
searchIndex["debugit"] = {"doc":"Use debug printlns, without the trait bounds (using specialization to find the right impl anyway).","items":[[3,"DebugIt","debugit","This type always implements `Debug`. Uses specialization to use the inner value's Debug (which it should basically always have).",null,null],[12,"0","","",0,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"debugit"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"debugit","","Print a message, and then each value's debug representation (if it has one)",null,null]],"paths":[[3,"DebugIt"]]};
searchIndex["mopa"] = {"doc":"MOPA: My Own Personal Any. A macro to implement all the `Any` methods on your own trait.","items":[[8,"Any","mopa","A type to emulate dynamic typing.",null,null],[14,"mopafy","","The macro for implementing all the `Any` methods on your own trait.",null,null]],"paths":[]};
initSearch(searchIndex);