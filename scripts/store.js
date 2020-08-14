import item from './item.js';

let items = [];
let hideCheckedItems = false;


const findById = function(id){
  return items.find(item => item.id === id);
};

const addItem = function(name){
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error) {
    throw `Cannot add item: ${error.message}`;
  }
};

const findAndToggleChecked = function(id){
  const thisItem = function(id){
  this.hideCheckedItems = !this.hideCheckedItems;
  }
};

const findAndUpdateName = function(id, newName){
  try {
  item.validateName(name);
  this.items.push(item.create(name));
  item.validateName(name);
  // create a new item if name is valid
  store.items.push(item.create(name));
} catch(error) {
  console.log(`Cannot add item: ${error.message}`);
}
}; 

const findAndDelete = function(id){
const index = this.items.findIndex(item => item.id === id);
this.items.splice(index, 1);
};

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !hideCheckedItems
};



export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    toggleCheckedFilter,
    findAndUpdateName,
    findAndDelete
  };


