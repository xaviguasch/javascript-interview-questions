// What will be logged here?

// Task 1
// function getItem() {
//   console.log(this);
// }

// getItem();

// We will see the global object (in this case, the window)

// Task 2
// const item = {
//   title: 'Ball',
//   getItem() {
//     console.log('this', this)
//   },
// }

// item.getItem()

// We will see the object item

// Task 3
class Item {
  title = 'Ball'
  getItem() {
    console.log('this', this)
    function someFn() {
      console.log('this', this)
    }
    someFn()
  }
}

const item = new Item()
item.getItem()

// the first "this" will give us the instance of Item. The second "this" will print 'undefined' because inside a function we're referencing the global object. We should use an arrow function instead so the "this" would get the context of the parent.
