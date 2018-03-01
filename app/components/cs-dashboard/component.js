import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  gridItems: computed(function() {
    // example array from http://gridstackjs.com/demo/serialization.html
    return [{
        "x": 2,
        "y": 1,
        "width": 2,
        "height": 2
      },
      {
        "x": 4,
        "y": 0,
        "width": 1,
        "height": 1
      },
      {
        "x": 0,
        "y": 0,
        "width": 2,
        "height": 2
      },
      {
        "x": 5,
        "y": 3,
        "width": 4,
        "height": 2
      },
      {
        "x": 3,
        "y": 0,
        "width": 1,
        "height": 1
      },
      {
        "x": 7,
        "y": 0,
        "width": 5,
        "height": 3
      },
      {
        "x": 1,
        "y": 2,
        "width": 1,
        "height": 1
      },
      {
        "x": 2,
        "y": 0,
        "width": 1,
        "height": 1
      }
    ]
  }),

  panels: computed(function() {
    return this.get('gridItems').map((item, index) => {
      return Object.assign(item, {
        "description": `Item ${index}`
      }, {
        "x": item.x + 1,
        "y": item.y + 1,
      });
    });
  }),
});
