import Input from '../Input';

export default {
  title: 'Reactsearch',
  component: Input,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {
    threshold: {
      description: 'At what point does the match algorithm give up. 0.0 requires a perfect match (of both letters and location), 1.0 would match anything',
      table: {
        defaultValue: {summary: 0.2}
      }
    },
    placeholder: {
      description: 'Placeholder of the searchbar.',
      table: {
        defaultValue: {summary: 'search ...'}
      }
    },
    maximum: {
      description: 'Maximum number of suggestions.',
      table: {
        defaultValue: {summary: 5}
      }
    },
    select: {
      description: 'Callback when list item is clicked.',
    },
    data: {
      description: 'Array on which the search is perform.',
    }
  }
};


export const Search = {
  args: {
    data: ['play', 'playground', 'playhouse', 'plague', 'plet', 'platu']
  }
};

