import Shuffle from 'shufflejs';
import VanillaTilt from 'vanilla-tilt';
import { onDomLoad } from './helpers';

class Gallery {
  constructor(el) {
    this.el = el;
    this.shuffle = new Shuffle(el, {
      itemSelector: '.gallery__item',
    })

    this.addShuffleEventListeners();
    this._activeFilters = [];
    this.addFilterButtons();
  }

  addShuffleEventListeners() {
    this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
      // console.log('layout. data:', data);
    });
    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
      // console.log('removed. data:', data);
    });
  }
  addFilterButtons() {
    const options = document.querySelector('.gallery__filters');
    if (!options) {
      return;
    }

    const filterButtons = Array.from(options.children);
    const onClick = this._handleFilterClick.bind(this);
    filterButtons.forEach((button) => {
      button.addEventListener('click', onClick, false);
    });
  }

  _handleFilterClick(e) {
    const btn = e.currentTarget;
    const isActive = btn.classList.contains('active');
    const btnGroup = btn.dataset.group;

    this._removeActiveClassFromChildren(btn.parentNode);

    let filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = [btnGroup];
    }
    this.shuffle.filter(filterGroup);
  }
  _removeActiveClassFromChildren(parent) {
    const { children } = parent;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }
}

onDomLoad(() => {
  const el = document.querySelector('.gallery');
  window.gallery = new Gallery(el);
  VanillaTilt.init(el.querySelectorAll('.gallery__item .img'), {
    max: 15,
    perspective: 2000,
    glare: true,
  })
})
