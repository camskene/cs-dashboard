import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  panels: computed(function() {
    return [{
      description: 'Item one',
      x1: 13,
      x2: 1,
      y1: 1,
      y2: 3,
    },{
      description: 'Item two',
      x1: 3,
      x2: 1,
      y1: 3,
      y2: 5,
    },{
      description: 'Item three',
      x1: 3,
      x2: 1,
      y1: 5,
      y2: 13,
    },{
      description: 'Item four',
      x1: 12,
      x2: 13,
      y1: 12,
      y2: 13,
    },{
      description: 'Item five',
    },{
      description: 'Item six',
    },{
      description: 'Item seven',
    },{
      description: 'Item eight',
    },{
      description: 'Item nine',
    },{
      description: 'Item ten',
    },{
      description: 'Item eleven',
    },{
      description: 'Item twelve',
    },];
  }),
});
