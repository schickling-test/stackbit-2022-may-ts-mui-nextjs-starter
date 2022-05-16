/* --- Field Groups --- */

export const fieldGroups = {
  styles: { name: 'styles', label: 'Styles' },
} as const

/* --- Initial Values --- */

const Link = { type: 'Link', label: 'Learn More', url: '/' }

const Image = {
  type: 'Image',
  url: 'https://assets.stackbit.com/components/images/default/default-image.png',
  altText: 'Item image',
}

const Button = { type: 'Button', label: 'Learn More', url: '/' }

const Card = {
  type: 'Card',
  title: 'Item Title',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.\n',
  image: Image,
  actions: [Link],
}

export const initialValue = {
  Button,
  Card,
  Image,
  Link,
}
