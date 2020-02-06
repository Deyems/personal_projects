'use strict';

const form = document.forms[0];
//let form = document.querySelector(form);

class Item{
    constructor(name) {
        this.name = name;        
    }
}

const controller = {
    watch(form) {
    form.addEventListener('submit', (e)=> {
      e.preventDefault();
        this.add(form.name.value);
    },false);
    },
    
    add(name) {
        const item = new Item(name);
        view.render(item);
    }
}

const view = {
    render(item) {
        const list = document.querySelector('#list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        form.name.value = '';
    }
};

controller.watch(form);