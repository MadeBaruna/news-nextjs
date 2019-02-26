import { shallow } from 'enzyme';
import React from 'react';
import ArticleItem from '../ArticleItem';

describe('Article Item', () => {
  it('Render Article Item', () => {
    const article = {
      source: {
        id: null,
        name: 'Thetimes.co.uk',
      },
      author: null,
      title:
        'Growing up near green spaces is linked to better mental health - The Times',
      description:
        'Children who grow up in greener surroundings have a greatly reduced risk of developing mental illnesses later in life, research suggests. A study that tracked almost a million people found that...',
      url:
        'https://www.thetimes.co.uk/article/growing-up-near-green-spaces-is-linked-to-better-mental-health-hgrrhlgxv',
      urlToImage:
        'http://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F2144c664-3946-11e9-a664-d81d3e2c8975.jpg?crop=2222%2C1250%2C0%2C116',
      publishedAt: '2019-02-26T00:01:00Z',
      content:
        'Children who grow up in greener surroundings have a greatly reduced risk of developing mental illnesses later in life, research suggests. A study that tracked almost a million people found that those who were raised among the lowest levels of green space were… [+480 chars]',
    };

    const wrapper = shallow(<ArticleItem article={article} />);
    expect(wrapper).toMatchSnapshot();
  });
});
